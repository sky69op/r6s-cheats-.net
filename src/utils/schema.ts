import type { FaqItem } from '../i18n/types';
import { getTranslations } from '../i18n';
import { hrefLang, resolveLocale, type MaybeLocale, defaultLocale } from '../i18n/config';
import { organizationSameAs } from '../config/social';
import { SITE_ORIGIN, absoluteAssetUrl, canonicalUrl } from '../config/seo';

function schemaLanguage(locale: MaybeLocale = defaultLocale) {
  return hrefLang[resolveLocale(locale)];
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function websiteSchema(locale: MaybeLocale = defaultLocale) {
  const t = getTranslations(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: t.site.name,
    url: `${SITE_ORIGIN}/`,
    inLanguage: schemaLanguage(locale),
    description: t.site.description,
  };
}

export function organizationSchema(locale: MaybeLocale = defaultLocale) {
  const t = getTranslations(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: t.site.name,
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/logo.png`,
    sameAs: organizationSameAs(),
  };
}

export function collectionPageSchema(input: {
  name: string;
  description: string;
  url: string;
  locale?: MaybeLocale;
}) {
  const locale = input.locale ?? defaultLocale;
  const t = getTranslations(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    inLanguage: schemaLanguage(locale),
    isPartOf: {
      '@type': 'WebSite',
      name: t.site.name,
      url: `${SITE_ORIGIN}/`,
    },
  };
}

export function webPageSchema(input: {
  name: string;
  description: string;
  url: string;
  locale?: MaybeLocale;
}) {
  const locale = input.locale ?? defaultLocale;
  const t = getTranslations(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    inLanguage: schemaLanguage(locale),
    isPartOf: {
      '@type': 'WebSite',
      name: t.site.name,
      url: `${SITE_ORIGIN}/`,
    },
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function softwareApplicationSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  locale?: MaybeLocale;
}) {
  const locale = input.locale ?? defaultLocale;
  const t = getTranslations(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    applicationCategory: 'GameApplication',
    operatingSystem: 'Windows 10, Windows 11',
    inLanguage: schemaLanguage(locale),
    provider: {
      '@type': 'Organization',
      name: t.site.name,
      url: `${SITE_ORIGIN}/`,
    },
    ...(input.image
      ? {
          image: absoluteAssetUrl(input.image),
        }
      : {}),
  };
}

export function articleSchema(input: {
  name: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  locale?: MaybeLocale;
}) {
  const locale = input.locale ?? defaultLocale;
  const t = getTranslations(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'DiscussionForumPosting',
    headline: input.name,
    description: input.description,
    url: canonicalUrl(input.url),
    ...(input.image ? { image: absoluteAssetUrl(input.image) } : {}),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: schemaLanguage(locale),
    author: {
      '@type': 'Organization',
      name: t.site.name,
    },
    publisher: {
      '@type': 'Organization',
      name: t.site.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl(input.url),
    },
  };
}

export function parseForumDate(date: string): string {
  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return new Date().toISOString().slice(0, 10);
  return new Date(parsed).toISOString().slice(0, 10);
}
