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
  en: 'en',
  ru: 'ru',
  de: 'de',
  es: 'es',
  fr: 'fr',
  pt: 'pt',
};

const SITE_ORIGIN = 'https://r6scheats.net';

function expectedCanonical(pagePath) {
  let normalized = pagePath || '/';
  if (normalized !== '/' && !normalized.endsWith('/')) normalized = `${normalized}/`;
  return `${SITE_ORIGIN}${normalized}`;
}

function extractHreflangAlternates(html) {
  const alternates = new Map();
  const re = /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g;
  let match;
  while ((match = re.exec(html))) {
    alternates.set(match[1], decodeEntities(match[2]));
  }
  return alternates;
}

function validateImages(html, pagePath) {
  const imgRe = /<img\b[^>]*>/gi;
  let match;
  while ((match = imgRe.exec(html))) {
    const tag = match[0];
    if (!/\balt\b/i.test(tag)) {
      errors.push(`${pagePath}: img missing alt attribute`);
      continue;
    }
    const altValue = tag.match(/\balt\s*=\s*"([^"]*)"/i)?.[1];
    const hasEmptyAlt = altValue === '' || (/\balt(?!=)/.test(tag) && altValue === undefined);
    if (hasEmptyAlt) {
      errors.push(`${pagePath}: img with empty alt attribute`);
    }
  }
}

function anchorHasText(content) {
  const text = content.replace(/<[^>]+>/g, '').replace(/\s+/g, '').trim();
  return text.length > 0;
}

function validateAnchors(html, pagePath) {
  const anchorRe = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = anchorRe.exec(html))) {
    const attrs = match[1];
    const content = match[2];
    const hasAriaLabel = /\baria-label\s*=\s*"[^"]+"/.test(attrs);
    const hasImgAlt = /<img\b[^>]*\balt\s*=\s*"[^"]+"/i.test(content);
    if (!hasAriaLabel && !hasImgAlt && !anchorHasText(content)) {
      errors.push(`${pagePath}: link without anchor text`);
    }
  }
}

function validateDuplicateAnchors(html, pagePath) {
  if (pagePath !== '/') return;

  const anchorRe = /<a\b[^>]*>([\s\S]*?)<\/a>/gi;
  const counts = new Map();
  let match;
  while ((match = anchorRe.exec(html))) {
    const text = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!text) continue;
    counts.set(text, (counts.get(text) ?? 0) + 1);
  }

  for (const [text, count] of counts) {
    if (count > 1) {
      warnings.push(`${pagePath}: duplicate anchor text (${count}x): "${text}"`);
    }
  }
}

function validateExternalLinks(html, pagePath) {
  if (pagePath !== '/') return;
  const hasExternal = /<a\b[^>]*href="https?:\/\/(?!r6scheats\.net)/i.test(html);
  if (!hasExternal) {
    errors.push(`${pagePath}: homepage missing external links`);
  }
}

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

  const expectedCanonicalUrl = expectedCanonical(pagePath);
  if (canonical && canonical !== expectedCanonicalUrl) {
    errors.push(`${pagePath}: canonical "${canonical}" expected "${expectedCanonicalUrl}"`);
  }

  const alternates = extractHreflangAlternates(html);
  const selfHreflang = alternates.get(schemaLangByLocale[locale]);
  if (!selfHreflang) {
    errors.push(`${pagePath}: missing self-referential hreflang (${schemaLangByLocale[locale]})`);
  } else if (canonical && selfHreflang !== canonical) {
    errors.push(
      `${pagePath}: hreflang self-ref "${selfHreflang}" does not match canonical "${canonical}"`,
    );
  }

  validateImages(html, pagePath);
  validateAnchors(html, pagePath);
  validateDuplicateAnchors(html, pagePath);
  validateExternalLinks(html, pagePath);

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
