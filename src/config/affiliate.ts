import {
  AFFILIATE_REFLINKS as REFLINKS,
  CHECKOUT_SLUGS as SLUGS,
  GO_PATH_REDIRECTS,
} from './affiliate-data.mjs';

/**
 * Zadeyo SKY affiliate reflinks — redirect targets only.
 * Never use these URLs as visible `href` on buttons or links.
 * Use `checkoutPath()` so hover shows `/go/.../` on r6scheats.net.
 * Clicks are handled in-page (same tab) before the /go/ HTML loads.
 */
export const AFFILIATE_REFLINKS = REFLINKS;

export type AffiliateProduct = keyof typeof AFFILIATE_REFLINKS;

/** @deprecated Use AFFILIATE_REFLINKS */
export const AFFILIATE = AFFILIATE_REFLINKS;

/** Public slug for `/go/[slug]/` — shown on link hover, not the Zadeyo URL. */
export const CHECKOUT_SLUGS: Record<AffiliateProduct, string> = SLUGS;

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as AffiliateProduct]),
) as Record<string, AffiliateProduct>;

/** Map used by the sitewide checkout click handler (`/go/slug/` → Zadeyo URL). */
export const CHECKOUT_REDIRECT_MAP: Record<string, string> = GO_PATH_REDIRECTS;

export function getAffiliateReflink(product: AffiliateProduct): string {
  return AFFILIATE_REFLINKS[product];
}

export function getAffiliateForGoPath(pathname: string): string | null {
  const match = pathname.match(/^\/go\/([^/]+)\/?$/);
  if (!match) return null;
  return GO_PATH_REDIRECTS[match[1]!] ?? null;
}

/** Internal checkout path shown to users (hides affiliate URL on hover). */
export function checkoutPath(product: AffiliateProduct = 'r6s'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** @deprecated Use checkoutPath('r6s') */
export const AFFILIATE_URL = checkoutPath('r6s');

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
      return checkoutPath('r6s');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    if (href.startsWith('/tools/r6s-cheats/unlock-all') || href.startsWith('/products/r6s-cheats/unlock-all')) return checkoutPath('skinChanger');
    if (href.startsWith('/tools/r6s-cheats/hwid-spoofer') || href.startsWith('/products/r6s-cheats/hwid-spoofer')) return checkoutPath('hwidSpoofer');
    if (href.startsWith('/tools/r6s-cheats/ugc') || href.startsWith('/products/r6s-cheats/ugc')) return checkoutPath('ugc');
    if (href.startsWith('/tools/r6s-cheats') || href.startsWith('/products/r6s-cheats')) return checkoutPath('r6s');
    return href.startsWith('/') ? href : `/${href}`;
  }

  for (const [product, url] of Object.entries(AFFILIATE_REFLINKS) as [AffiliateProduct, string][]) {
    if (href === url || href.startsWith(url.split('?')[0]!)) {
      return checkoutPath(product);
    }
  }

  if (href.includes('%2Fproducts%2Frainbow-six-siege')) return checkoutPath('r6s');
  if (href.includes('%2Fproducts%2Fskin-changer')) return checkoutPath('skinChanger');
  if (href.includes('%2Fproducts%2Fhwid-spoofer')) return checkoutPath('hwidSpoofer');
  if (href.includes('%2Fproducts%2Fugc')) return checkoutPath('ugc');
  if (href.includes('%2Fproducts%2Fdota-2')) return checkoutPath('r6s');

  return href;
}
