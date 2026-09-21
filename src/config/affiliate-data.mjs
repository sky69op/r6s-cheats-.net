/** Shared affiliate URLs and /go/ slugs — imported by affiliate.ts and serve.mjs */
export const AFFILIATE_REFLINKS = {
  r6s: 'https://zadeyo.com/go/SKY?to=%2Fproducts%2Frainbow-six-siege',
  ugc: 'https://zadeyo.com/go/SKY?to=%2Fproducts%2Fugc',
  hwidSpoofer: 'https://zadeyo.com/go/SKY?to=%2Fproducts%2Fhwid-spoofer',
  skinChanger: 'https://zadeyo.com/go/SKY?to=%2Fproducts%2Fskin-changer',
};

export const CHECKOUT_SLUGS = {
  r6s: 'rainbow-six-siege',
  ugc: 'ugc',
  hwidSpoofer: 'hwid-spoofer',
  skinChanger: 'skin-changer',
};

/** slug → Zadeyo URL (for server redirects and click handler) */
export const GO_PATH_REDIRECTS = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, AFFILIATE_REFLINKS[product]]),
);
