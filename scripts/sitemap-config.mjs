import fs from 'node:fs';
import path from 'node:path';

export const SITE_URL = 'https://r6scheats.net';
export const LOCALES = ['en', 'ru', 'de', 'es', 'fr', 'pt'];
export const DEFAULT_LOCALE = 'en';

export const HREFLANG = {
  en: 'en-US',
  ru: 'ru-RU',
  de: 'de-DE',
  es: 'es-ES',
  fr: 'fr-FR',
  pt: 'pt-PT',
};

const root = process.cwd();
const prioritiesPath = path.join(root, 'src/config/sitemap-priorities.json');
const rawPriorities = JSON.parse(fs.readFileSync(prioritiesPath, 'utf8'));

export const LOCALE_WEIGHTS = rawPriorities._localeWeights ?? {
  en: 1.0,
  ru: 0.95,
  de: 0.95,
  es: 0.95,
  fr: 0.95,
  pt: 0.95,
};

/** @type {Record<string, { priority: number; changefreq: string }>} */
export const BASE_PAGES = Object.fromEntries(
  Object.entries(rawPriorities).filter(([key]) => !key.startsWith('_')),
);

export function localizedPath(locale, pagePath) {
  const normalized = pagePath === '/' || pagePath.endsWith('/') ? pagePath : `${pagePath}/`;
  if (locale === DEFAULT_LOCALE) return normalized;
  if (normalized === '/') return `/${locale}/`;
  return `/${locale}${normalized}`;
}

export function stripLocalePrefix(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (normalized === '/') return '/';

  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    const prefix = `/${locale}`;
    if (normalized === `${prefix}/`) return '/';
    if (normalized.startsWith(`${prefix}/`)) {
      return normalized.slice(prefix.length);
    }
  }

  return normalized;
}

export function detectLocale(pathname) {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) {
      if (!LOCALES.slice(1).some((code) => normalized === `/${code}/` || normalized.startsWith(`/${code}/`))) {
        return DEFAULT_LOCALE;
      }
      continue;
    }
    const prefix = `/${locale}`;
    if (normalized === `${prefix}/` || normalized.startsWith(`${prefix}/`)) {
      return locale;
    }
  }
  return DEFAULT_LOCALE;
}

export function pagePriority(pathname) {
  const basePath = stripLocalePrefix(pathname);
  const locale = detectLocale(pathname);
  const meta = BASE_PAGES[basePath];
  if (!meta) return null;

  const weight = LOCALE_WEIGHTS[locale] ?? 1;
  const priority = Math.min(1, Number((meta.priority * weight).toFixed(1)));

  return {
    priority,
    changefreq: meta.changefreq,
  };
}

export function buildExpectedPaths() {
  /** @type {Map<string, { priority: number; changefreq: string }>} */
  const map = new Map();

  for (const [pagePath, meta] of Object.entries(BASE_PAGES)) {
    for (const locale of LOCALES) {
      const localized = localizedPath(locale, pagePath);
      const weight = LOCALE_WEIGHTS[locale] ?? 1;
      map.set(localized, {
        priority: Math.min(1, Number((meta.priority * weight).toFixed(1))),
        changefreq: meta.changefreq,
      });
    }
  }

  return map;
}

export function absoluteUrl(pathname) {
  return `${SITE_URL}${pathname}`;
}

export function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
