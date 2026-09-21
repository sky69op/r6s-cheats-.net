export type { ForumBlock, ForumPostFull } from './forums/types';
export { getForumPosts } from './forums/posts';

import type { MaybeLocale } from '../i18n/config';
import { defaultLocale } from '../i18n/config';
import { getForumPosts } from './forums/posts';

const FORUM_TITLE_SUFFIX = /\s*\|\s*r6scheats\.net\s*$/i;

/** Strip legacy SEO suffix from forum titles for on-page display. */
export function displayForumTitle(title: string): string {
  return title.replace(FORUM_TITLE_SUFFIX, '').trim();
}

export function getForumPost(slug: string, locale: MaybeLocale = defaultLocale) {
  return getForumPosts(locale).find((p) => p.slug === slug);
}

export function getAllForumSlugs(locale: MaybeLocale = defaultLocale) {
  return getForumPosts(locale).map((p) => p.slug);
}

export function getFeaturedForumPost(locale: MaybeLocale = defaultLocale) {
  const posts = getForumPosts(locale);
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getNonFeaturedForumPosts(locale: MaybeLocale = defaultLocale) {
  const featured = getFeaturedForumPost(locale);
  return getForumPosts(locale).filter((p) => p.slug !== featured?.slug);
}

export function getFeaturedForumPosts(limit = 3, locale: MaybeLocale = defaultLocale) {
  const posts = getForumPosts(locale);
  const featured = getFeaturedForumPost(locale);
  const rest = posts.filter((p) => p.slug !== featured?.slug);
  return featured ? [featured, ...rest].slice(0, limit) : posts.slice(0, limit);
}

export function getRelatedForumPosts(slug: string, limit = 3, locale: MaybeLocale = defaultLocale) {
  const posts = getForumPosts(locale);
  const current = getForumPost(slug, locale);
  if (!current) return [];

  const sameTag = posts.filter((p) => p.slug !== slug && p.tag === current.tag);
  const others = posts.filter((p) => p.slug !== slug && p.tag !== current.tag);
  return [...sameTag, ...others].slice(0, limit);
}

/** @deprecated Use getForumPosts(locale) */
export const forumPosts = getForumPosts(defaultLocale);
