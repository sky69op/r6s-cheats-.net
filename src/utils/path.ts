import { defaultLocale, locales, resolveLocale, type Locale, type MaybeLocale } from '../i18n/config';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

export function localizedPath(locale: MaybeLocale, path: string): string {
  const resolved = resolveLocale(locale);
  const normalized = withTrailingSlash(path);
  if (resolved === defaultLocale) return normalized;
  if (normalized === '/') return `/${resolved}/`;
  return withTrailingSlash(`/${resolved}${normalized}`);
}

/** Detect locale from a URL pathname (works with copied locale page routes). */
export function localeFromPathname(pathname: string): Locale {
  const normalized = withTrailingSlash(pathname);
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    const prefix = `/${locale}`;
    if (normalized === `${prefix}/` || normalized.startsWith(`${prefix}/`)) {
      return locale;
    }
  }
  return defaultLocale;
}

/** Strip any locale prefix and return the shared base path (e.g. `/de/cheats/` → `/cheats/`). */
export function basePathFromUrl(pathname: string): string {
  return stripLocalePrefix(pathname, localeFromPathname(pathname));
}

/** Strip locale prefix from pathname to get base path for sitemap/hreflang. */
export function stripLocalePrefix(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) return withTrailingSlash(pathname);
  const prefix = `/${locale}`;
  if (pathname === prefix || pathname === `${prefix}/`) return '/';
  if (pathname.startsWith(`${prefix}/`)) {
    return withTrailingSlash(pathname.slice(prefix.length));
  }
  return withTrailingSlash(pathname);
}

export const ROUTES = {
  home: '/',
  features: '/features/',
  forums: '/forums/',
  cheats: '/cheats/',
  tools: '/tools/r6s-cheats/',
  about: '/about/',
  contact: '/contact/',
  privacy: '/privacy/',
} as const;

export function forumPostPath(slug: string, locale: MaybeLocale = defaultLocale): string {
  return localizedPath(locale, `/forums/${slug}/`);
}

export function cheatPath(slug: string, locale: MaybeLocale = defaultLocale): string {
  return localizedPath(locale, `/cheats/${slug}/`);
}

export function toolPath(slug: string, locale: MaybeLocale = defaultLocale): string {
  return localizedPath(locale, `/tools/r6s-cheats/${slug}/`);
}
