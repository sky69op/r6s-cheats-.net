/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
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

export function forumPostPath(slug: string): string {
  return `/forums/${slug}/`;
}

export function cheatPath(slug: string): string {
  return `/cheats/${slug}/`;
}

export function toolPath(slug: string): string {
  return `/tools/r6s-cheats/${slug}/`;
}
