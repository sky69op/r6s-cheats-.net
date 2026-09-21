import type { ForumPostFull } from '../types';
import type { Locale, MaybeLocale } from '../../../i18n/config';
import { defaultLocale, resolveLocale } from '../../../i18n/config';
import { forumPosts as enPosts } from './en';
import { forumPosts as ruPosts } from './ru';
import { forumPosts as dePosts } from './de';
import { forumPosts as esPosts } from './es';
import { forumPosts as frPosts } from './fr';
import { forumPosts as ptPosts } from './pt';

const postsByLocale: Record<Locale, ForumPostFull[]> = {
  en: enPosts,
  ru: ruPosts,
  de: dePosts,
  es: esPosts,
  fr: frPosts,
  pt: ptPosts,
};

export function getForumPosts(locale: MaybeLocale = defaultLocale): ForumPostFull[] {
  const resolved = resolveLocale(locale);
  return postsByLocale[resolved] ?? postsByLocale[defaultLocale];
}
