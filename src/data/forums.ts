export type { ForumBlock, ForumPostFull } from './forums/types';
export { forumPosts } from './forums/posts';

import { forumPosts } from './forums/posts';

const FORUM_TITLE_SUFFIX = /\s*\|\s*r6scheats\.net\s*$/i;

/** Strip legacy SEO suffix from forum titles for on-page display. */
export function displayForumTitle(title: string): string {
  return title.replace(FORUM_TITLE_SUFFIX, '').trim();
}

export function getForumPost(slug: string) {
  return forumPosts.find((p) => p.slug === slug);
}

export function getAllForumSlugs() {
  return forumPosts.map((p) => p.slug);
}

export function getFeaturedForumPost() {
  return forumPosts.find((p) => p.featured) ?? forumPosts[0];
}

export function getNonFeaturedForumPosts() {
  const featured = getFeaturedForumPost();
  return forumPosts.filter((p) => p.slug !== featured?.slug);
}

export function getFeaturedForumPosts(limit = 3) {
  const featured = getFeaturedForumPost();
  const rest = forumPosts.filter((p) => p.slug !== featured?.slug);
  return featured ? [featured, ...rest].slice(0, limit) : forumPosts.slice(0, limit);
}

export function getRelatedForumPosts(slug: string, limit = 3) {
  const current = getForumPost(slug);
  if (!current) return [];

  const sameTag = forumPosts.filter((p) => p.slug !== slug && p.tag === current.tag);
  const others = forumPosts.filter((p) => p.slug !== slug && p.tag !== current.tag);
  return [...sameTag, ...others].slice(0, limit);
}

