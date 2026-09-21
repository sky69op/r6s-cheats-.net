export type { Translations } from './types';
export {
  locales,
  defaultLocale,
  localeLabels,
  htmlLang,
  ogLocales,
  hrefLang,
  resolveLocale,
  isLocale,
} from './config';
export type { Locale, MaybeLocale } from './config';

import type { Translations } from './types';
import type { Locale, MaybeLocale } from './config';
import { defaultLocale, resolveLocale } from './config';
import { en } from './en';
import { ru } from './ru';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { pt } from './pt';

const dictionaries: Record<Locale, Translations> = { en, ru, de, es, fr, pt };

export function getTranslations(locale: MaybeLocale): Translations {
  return dictionaries[resolveLocale(locale)];
}

/** @deprecated Use getTranslations(Astro.currentLocale) in pages/components. */
export const t = en;

export function avatarSrc(style: string, seed: string) {
  return `https://api.dicebear.com/9.x/${style}/png?seed=${seed}&size=28&backgroundColor=0a0d10,7f3dee,181f26,e9a82f,11161b`;
}
