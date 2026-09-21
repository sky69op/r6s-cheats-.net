import type { MaybeLocale } from '../../../i18n/config';
import { defaultLocale, resolveLocale } from '../../../i18n/config';
import type { ProductLocaleContent } from './types';
import { enProductContent } from './en';
import { ruProductContent } from './ru';
import { deProductContent } from './de';
import { esProductContent } from './es';
import { frProductContent } from './fr';
import { ptProductContent } from './pt';

const bundles = {
  en: enProductContent,
  ru: ruProductContent,
  de: deProductContent,
  es: esProductContent,
  fr: frProductContent,
  pt: ptProductContent,
} as const;

export function getProductLocaleContent(locale: MaybeLocale, slug: string): ProductLocaleContent {
  const resolved = resolveLocale(locale);
  const bundle = bundles[resolved] ?? bundles[defaultLocale];
  return bundle[slug] ?? bundles[defaultLocale][slug];
}
