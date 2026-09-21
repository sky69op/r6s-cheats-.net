import type { SitemapItem } from '@astrojs/sitemap';
import { forumPosts } from '../data/forums';
import { parseForumDate } from '../utils/schema';

const buildDate = new Date().toISOString();

const forumLastmod = new Map(
  forumPosts.map((post) => [`/forums/${post.slug}/`, parseForumDate(post.date)] as const),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.startsWith('/go/')) {
    return undefined;
  }

  item.lastmod = buildDate;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forums/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path.startsWith('/forums/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    item.lastmod = forumLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/tools/') || path.startsWith('/cheats/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/about/' || path === '/contact/' || path === '/privacy/' || path === '/faq/') {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
