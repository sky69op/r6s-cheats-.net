/**
 * Affiliate checkout URLs — server-side redirect targets only (never use as visible href).
 */
export const AFFILIATE = {
  dota2: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fdota-2',
  skinChanger: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fskin-changer',
  hwidSpoofer: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/PRO?to=%2Fproducts%2Fugc',
} as const;

export type AffiliateProduct = keyof typeof AFFILIATE;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<AffiliateProduct, string> = {
  dota2: 'dota-2',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as AffiliateProduct]),
) as Record<string, AffiliateProduct>;

/** Internal checkout path shown to users (hides affiliate URL on hover). */
export function checkoutPath(product: AffiliateProduct = 'dota2'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** @deprecated Use checkoutPath('dota2') */
export const AFFILIATE_URL = '/go/dota-2/';

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
      return checkoutPath('ugc');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('dota2');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(AFFILIATE) as [AffiliateProduct, string][]) {
    if (href === url || href.startsWith(url.split('?')[0]!)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fproducts%2Fcloud-dma')) return checkoutPath('dota2');
  if (href.includes('%2Fproducts%2Fskin-changer')) return checkoutPath('skinChanger');
  if (href.includes('%2Fproducts%2Fhwid-spoofer')) return checkoutPath('hwidSpoofer');
  if (href.includes('%2Fproducts%2Fugc')) return checkoutPath('ugc');
  if (href.includes('%2Fproducts%2Fdota-2')) return checkoutPath('dota2');

  return href;
}
