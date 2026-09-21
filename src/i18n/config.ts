export const locales = ['en', 'ru', 'de', 'es', 'fr', 'pt'] as const;

export type Locale = (typeof locales)[number];

/** Locale from Astro routing or an unknown string — resolved via {@link resolveLocale}. */
export type MaybeLocale = Locale | string | undefined;

export const defaultLocale: Locale = 'en';

export function resolveLocale(locale: MaybeLocale): Locale {
  return isLocale(locale) ? locale : defaultLocale;
}

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  de: 'DE',
  es: 'ES',
  fr: 'FR',
  pt: 'PT',
};

export const htmlLang: Record<Locale, string> = {
  en: 'en',
  ru: 'ru',
  de: 'de',
  es: 'es',
  fr: 'fr',
  pt: 'pt',
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  pt: 'pt_PT',
};

export const hrefLang: Record<Locale, string> = {
  en: 'en-US',
  ru: 'ru-RU',
  de: 'de-DE',
  es: 'es-ES',
  fr: 'fr-FR',
  pt: 'pt-PT',
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
