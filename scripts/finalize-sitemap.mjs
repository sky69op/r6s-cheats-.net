import fs from 'node:fs';
import path from 'node:path';
import {
  SITE_URL,
  LOCALES,
  DEFAULT_LOCALE,
  HREFLANG,
  buildExpectedPaths,
  stripLocalePrefix,
  localizedPath,
  absoluteUrl,
  escapeXml,
} from './sitemap-config.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const astroSource = path.join(dist, 'sitemap-0.xml');
const output = path.join(dist, 'sitemap.xml');
const buildDate = new Date().toISOString().slice(0, 10);

function parseForumDates() {
  /** @type {Map<string, string>} */
  const dates = new Map();
  const enPosts = fs.readFileSync(path.join(root, 'src/data/forums/posts/en.ts'), 'utf8');
  const blocks = enPosts.split(/\n  \},\n/);

  for (const block of blocks) {
    const slug = block.match(/slug:\s*'([^']+)'/)?.[1];
    const date = block.match(/date:\s*'([^']+)'/)?.[1];
    if (!slug || !date) continue;

    const parsed = Date.parse(date);
    const lastmod = Number.isNaN(parsed) ? buildDate : new Date(parsed).toISOString().slice(0, 10);

    for (const locale of LOCALES) {
      dates.set(localizedPath(locale, `/forums/${slug}/`), lastmod);
    }
  }

  return dates;
}

function parseAstroLastmod() {
  /** @type {Map<string, string>} */
  const lastmod = new Map();

  if (!fs.existsSync(astroSource)) {
    return lastmod;
  }

  const raw = fs.readFileSync(astroSource, 'utf8');
  const urlBlocks = raw.match(/<url>[\s\S]*?<\/url>/g) ?? [];

  for (const block of urlBlocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    const value = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    if (!loc || !value) continue;

    const pathname = new URL(loc).pathname.endsWith('/')
      ? new URL(loc).pathname
      : `${new URL(loc).pathname}/`;

    lastmod.set(pathname, value.slice(0, 10));
  }

  return lastmod;
}

function hreflangLinks(basePath) {
  const links = LOCALES.map((locale) => {
    const href = absoluteUrl(localizedPath(locale, basePath));
    return `<xhtml:link rel="alternate" hreflang="${HREFLANG[locale]}" href="${escapeXml(href)}" />`;
  });

  links.push(
    `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(absoluteUrl(localizedPath(DEFAULT_LOCALE, basePath)))}" />`,
  );

  return links.join('\n    ');
}

function localeFromPath(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    const prefix = `/${locale}`;
    if (normalized === `${prefix}/` || normalized.startsWith(`${prefix}/`)) {
      return locale;
    }
  }
  return DEFAULT_LOCALE;
}

function sortPaths(paths) {
  const localeOrder = Object.fromEntries(LOCALES.map((locale, index) => [locale, index]));

  return [...paths].sort((a, b) => {
    const baseA = stripLocalePrefix(a);
    const baseB = stripLocalePrefix(b);
    if (baseA !== baseB) return baseA.localeCompare(baseB);
    return (localeOrder[localeFromPath(a)] ?? 0) - (localeOrder[localeFromPath(b)] ?? 0);
  });
}

function buildUrlEntry(pathname, meta, lastmod) {
  const basePath = stripLocalePrefix(pathname);
  const priority = meta.priority.toFixed(1);

  return `  <url>
    <loc>${escapeXml(absoluteUrl(pathname))}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${escapeXml(meta.changefreq)}</changefreq>
    <priority>${priority}</priority>
    ${hreflangLinks(basePath)}
  </url>`;
}

function validateAgainstAstro(expectedPaths) {
  if (!fs.existsSync(astroSource)) {
    console.warn('finalize-sitemap: dist/sitemap-0.xml not found — generated sitemap from config only.');
    return;
  }

  const raw = fs.readFileSync(astroSource, 'utf8');
  const astroPaths = new Set();

  for (const block of raw.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    if (!loc) continue;
    const pathname = new URL(loc).pathname.endsWith('/')
      ? new URL(loc).pathname
      : `${new URL(loc).pathname}/`;
    astroPaths.add(pathname);
  }

  const expected = [...expectedPaths.keys()].sort();
  const astro = [...astroPaths].sort();
  const missing = expected.filter((entry) => !astroPaths.has(entry));
  const unexpected = astro.filter((entry) => !expectedPaths.has(entry));

  if (missing.length > 0 || unexpected.length > 0) {
    console.error('finalize-sitemap: Astro sitemap mismatch with configured indexable paths.');
    if (missing.length > 0) {
      console.error(`  Missing from Astro build (${missing.length}):\n    ${missing.slice(0, 8).join('\n    ')}`);
    }
    if (unexpected.length > 0) {
      console.error(`  Unexpected in Astro build (${unexpected.length}):\n    ${unexpected.slice(0, 8).join('\n    ')}`);
    }
    process.exit(1);
  }
}

const expectedPaths = buildExpectedPaths();
const forumLastmod = parseForumDates();
const astroLastmod = parseAstroLastmod();
validateAgainstAstro(expectedPaths);

const sortedPaths = sortPaths([...expectedPaths.keys()]);
const urlEntries = sortedPaths.map((pathname) => {
  const meta = expectedPaths.get(pathname);
  const lastmod = forumLastmod.get(pathname) ?? astroLastmod.get(pathname) ?? buildDate;
  return buildUrlEntry(pathname, meta, lastmod);
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>
`;

fs.writeFileSync(output, `${xml}\n`, 'utf8');

for (const extra of ['sitemap-0.xml', 'sitemap-index.xml']) {
  const file = path.join(dist, extra);
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }
}

const localeCounts = Object.fromEntries(
  LOCALES.map((locale) => [
    locale,
    sortedPaths.filter((entry) =>
      locale === DEFAULT_LOCALE
        ? !LOCALES.slice(1).some((code) => entry === `/${code}/` || entry.startsWith(`/${code}/`))
        : entry === `/${locale}/` || entry.startsWith(`/${locale}/`),
    ).length,
  ]),
);

console.log(`Sitemap finalized: ${sortedPaths.length} URLs → ${SITE_URL}/sitemap.xml`);
console.log(`  Locales: ${LOCALES.map((locale) => `${locale}=${localeCounts[locale]}`).join(', ')}`);
console.log('  Format: single urlset with hreflang alternates + x-default on every URL');
