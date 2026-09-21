import type { SitemapItem } from '@astrojs/sitemap';
import { locales } from '../i18n/config';
import { getForumPosts } from '../data/forums';
import { localizedPath } from '../utils/path';
import { parseForumDate } from '../utils/schema';
import pagePriorities from './sitemap-priorities.json';

type ChangeFreq = SitemapItem['changefreq'];

interface PageMeta {
  priority: number;
  changefreq: ChangeFreq;
}

const localeWeights =
  (pagePriorities as Record<string, unknown>)._localeWeights as Record<string, number> | undefined;

function buildPriorityMap(): Map<string, PageMeta> {
  const map = new Map<string, PageMeta>();
  const basePages = Object.fromEntries(
    Object.entries(pagePriorities as Record<string, PageMeta | Record<string, number>>).filter(
      ([key]) => !key.startsWith('_'),
    ),
  ) as Record<string, PageMeta>;

  for (const [path, meta] of Object.entries(basePages)) {
    for (const locale of locales) {
      const weight = localeWeights?.[locale] ?? 1;
      map.set(localizedPath(locale, path), {
        priority: Math.min(1, Number((meta.priority * weight).toFixed(1))),
        changefreq: meta.changefreq,
      });
    }
  }

  return map;
}

const PAGE_META = buildPriorityMap();
const buildDate = new Date().toISOString();

const forumLastmod = new Map(
  getForumPosts('en').flatMap((post) =>
    locales.map(
      (locale) =>
        [localizedPath(locale, `/forums/${post.slug}/`), parseForumDate(post.date)] as const,
    ),
  ),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function getIndexablePaths(): string[] {
  return [...PAGE_META.keys()].sort();
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.startsWith('/go/')) {
    return undefined;
  }

  const meta = PAGE_META.get(path);
  if (!meta) {
    return undefined;
  }

  item.priority = meta.priority;
  item.changefreq = meta.changefreq;
  item.lastmod = forumLastmod.get(path) ?? buildDate;

  return item;
}
