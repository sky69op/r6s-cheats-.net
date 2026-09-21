import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');

const SKIP_PREFIXES = ['/go/'];
const MAX_TITLE = 60;
const MAX_DESC = 160;

const htmlLangByLocale = {
  en: 'en',
  ru: 'ru',
  de: 'de',
  es: 'es',
  fr: 'fr',
  pt: 'pt',
};

const schemaLangByLocale = {
  en: 'en-US',
  ru: 'ru-RU',
  de: 'de-DE',
  es: 'es-ES',
  fr: 'fr-FR',
  pt: 'pt-PT',
};

function walkHtml(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, files);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function pagePathFromFile(file) {
  const rel = path.relative(distDir, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return `/${rel.replace(/index\.html$/, '')}`;
}

function pageLocale(pagePath) {
  const seg = pagePath.split('/').filter(Boolean)[0];
  return htmlLangByLocale[seg] ? seg : 'en';
}

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function extract(html, pattern) {
  const match = html.match(pattern);
  return decodeEntities(match?.[1]?.trim() ?? '');
}

function extractJsonLdLanguages(html) {
  const langs = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    try {
      const data = JSON.parse(m[1]);
      const nodes = data['@graph'] ?? [data];
      for (const node of nodes) {
        if (node.inLanguage) langs.push(node.inLanguage);
      }
    } catch {
      // ignore malformed blocks
    }
  }
  return langs;
}

const errors = [];
const warnings = [];
const titleByLocale = new Map();

const files = walkHtml(distDir);
for (const file of files) {
  const pagePath = pagePathFromFile(file);
  if (SKIP_PREFIXES.some((p) => pagePath.startsWith(p))) continue;
  if (pagePath === '/404.html' || pagePath.endsWith('/404.html')) continue;

  const html = fs.readFileSync(file, 'utf8');
  const title = extract(html, /<title>([^<]*)<\/title>/);
  const description = extract(html, /<meta name="description" content="([^"]*)"/);
  const htmlLang = extract(html, /<html lang="([^"]+)"/);
  const canonical = extract(html, /<link rel="canonical" href="([^"]+)"/);
  const locale = pageLocale(pagePath);
  const expectedHtmlLang = htmlLangByLocale[locale];
  const expectedSchemaLang = schemaLangByLocale[locale];

  if (!title) errors.push(`${pagePath}: missing <title>`);
  if (!description) errors.push(`${pagePath}: missing meta description`);
  if (!canonical) errors.push(`${pagePath}: missing canonical link`);
  if (htmlLang !== expectedHtmlLang) {
    errors.push(`${pagePath}: html lang "${htmlLang}" expected "${expectedHtmlLang}"`);
  }

  if (title.length > MAX_TITLE) {
    warnings.push(`${pagePath}: title length ${title.length} > ${MAX_TITLE}`);
  }
  if (description.length > MAX_DESC) {
    errors.push(`${pagePath}: description length ${description.length} > ${MAX_DESC}`);
  }

  const jsonLdLangs = extractJsonLdLanguages(html);
  for (const lang of jsonLdLangs) {
    if (lang !== expectedSchemaLang) {
      errors.push(`${pagePath}: JSON-LD inLanguage "${lang}" expected "${expectedSchemaLang}"`);
    }
  }
  const titleKey = `${locale}::${title}`;
  titleByLocale.set(titleKey, (titleByLocale.get(titleKey) ?? 0) + 1);
}

for (const [key, count] of titleByLocale) {
  if (count > 1) {
    const [, title] = key.split('::');
    warnings.push(`duplicate title in locale (${count}x): ${title}`);
  }
}

const goDir = path.join(distDir, 'go');
if (fs.existsSync(goDir)) {
  for (const file of fs.readdirSync(goDir, { recursive: true })) {
    if (typeof file !== 'string' || !file.endsWith('index.html')) continue;
    const html = fs.readFileSync(path.join(goDir, file), 'utf8');
    if (!html.includes('noindex')) {
      errors.push(`dist/go/${file} must include noindex (checkout redirect only)`);
    }
    if (html.includes('rel="canonical"')) {
      errors.push(`dist/go/${file} must not include a canonical tag`);
    }
  }
}

const notFound = path.join(distDir, '404.html');
if (fs.existsSync(notFound)) {
  const html = fs.readFileSync(notFound, 'utf8');
  if (html.includes('rel="canonical"')) errors.push('404.html must not include a canonical tag');
  if (html.includes('hreflang=')) errors.push('404.html must not include hreflang alternates');
}

const indexHtml = fs.existsSync(path.join(distDir, 'index.html'))
  ? fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
  : '';
if (indexHtml && !indexHtml.includes('google-site-verification')) {
  warnings.push(
    'Missing google-site-verification meta — set PUBLIC_GSC_VERIFICATION in Cloudflare build env and rebuild.',
  );
}

console.log(`SEO validation: ${files.length} HTML files scanned`);

if (warnings.length) {
  console.warn(`\n${warnings.length} warning(s):`);
  for (const w of warnings.slice(0, 20)) console.warn(`  ⚠ ${w}`);
  if (warnings.length > 20) console.warn(`  … and ${warnings.length - 20} more`);
}

if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

console.log('SEO validation passed.');
