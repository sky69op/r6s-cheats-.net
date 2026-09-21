import type { MaybeLocale } from '../../i18n/config';
import { defaultLocale, resolveLocale } from '../../i18n/config';
import * as en from './locale/en';
import * as ru from './locale/ru';
import * as de from './locale/de';
import * as es from './locale/es';
import * as fr from './locale/fr';
import * as pt from './locale/pt';

export type { FaqTopic, SiteFaqItem } from './locale/en';

const modules = { en, ru, de, es, fr, pt } as const;

function moduleFor(locale: MaybeLocale) {
  return modules[resolveLocale(locale)];
}

export function getLandingFaqs(locale: MaybeLocale = defaultLocale) {
  return moduleFor(locale).getLandingFaqs();
}

export function getAllFaqs(locale: MaybeLocale = defaultLocale) {
  return moduleFor(locale).getAllFaqs();
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility', locale: MaybeLocale = defaultLocale) {
  return moduleFor(locale).getProductFaqs(slug, kind);
}

export function getForumFaqs(tag: string, slug: string, locale: MaybeLocale = defaultLocale) {
  return moduleFor(locale).getForumFaqs(tag, slug);
}

export function getCompareRows(locale: MaybeLocale = defaultLocale) {
  return moduleFor(locale).compareRows;
}
