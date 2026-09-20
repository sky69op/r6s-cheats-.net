/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/cheats', '/cheats/'],
  ['/about', '/about/'],
  ['/contact', '/contact/'],
  ['/privacy', '/privacy/'],
  ['/faq', '/faq/'],
  // Product path migration
  ['/products/dota-2-cheats', '/products/r6s-cheats/'],
  ['/products/dota-2-cheats/', '/products/r6s-cheats/'],
  ['/products/dota-2-cheats/account-recovery', '/products/r6s-cheats/ugc/'],
  ['/products/dota-2-cheats/account-recovery/', '/products/r6s-cheats/ugc/'],
  ['/products/dota-2-cheats/lite', '/products/r6s-cheats/lite/'],
  ['/products/dota-2-cheats/lite/', '/products/r6s-cheats/lite/'],
  ['/products/dota-2-cheats/pro', '/products/r6s-cheats/pro/'],
  ['/products/dota-2-cheats/pro/', '/products/r6s-cheats/pro/'],
  ['/products/dota-2-cheats/elite', '/products/r6s-cheats/elite/'],
  ['/products/dota-2-cheats/elite/', '/products/r6s-cheats/elite/'],
  ['/products/dota-2-cheats/hwid-spoofer', '/products/r6s-cheats/hwid-spoofer/'],
  ['/products/dota-2-cheats/hwid-spoofer/', '/products/r6s-cheats/hwid-spoofer/'],
  ['/products/dota-2-cheats/unlock-all', '/products/r6s-cheats/unlock-all/'],
  ['/products/dota-2-cheats/unlock-all/', '/products/r6s-cheats/unlock-all/'],
  ['/products/dota-2-cheats/ugc', '/products/r6s-cheats/ugc/'],
  ['/products/dota-2-cheats/ugc/', '/products/r6s-cheats/ugc/'],
  // Blog slug migration
  ['/blog/dota-2-cheat-codes-guide', '/blog/r6s-cheat-codes-guide/'],
  ['/blog/dota-2-cheat-codes-guide/', '/blog/r6s-cheat-codes-guide/'],
  ['/blog/dota-2-console-cheats-tips', '/blog/r6s-console-cheats-tips/'],
  ['/blog/dota-2-console-cheats-tips/', '/blog/r6s-console-cheats-tips/'],
  ['/blog/how-to-use-dota-2-cheat-codes', '/blog/how-to-use-r6s-cheat-codes/'],
  ['/blog/how-to-use-dota-2-cheat-codes/', '/blog/how-to-use-r6s-cheat-codes/'],
  ['/blog/dota-2-cheats-features-guide', '/blog/r6s-cheats-features-guide/'],
  ['/blog/dota-2-cheats-features-guide/', '/blog/r6s-cheats-features-guide/'],
  ['/blog/dota-2-console-commands-cheats', '/blog/r6s-console-commands-cheats/'],
  ['/blog/dota-2-console-commands-cheats/', '/blog/r6s-console-commands-cheats/'],
  ['/blog/dota-2-lite-vs-pro', '/blog/r6s-lite-vs-pro/'],
  ['/blog/dota-2-lite-vs-pro/', '/blog/r6s-lite-vs-pro/'],
  ['/blog/dota-2-elite-tier-guide', '/blog/r6s-elite-tier-guide/'],
  ['/blog/dota-2-elite-tier-guide/', '/blog/r6s-elite-tier-guide/'],
  ['/blog/dota-2-scripts-ranked-mmr', '/blog/r6s-aimbot-ranked-setup/'],
  ['/blog/dota-2-scripts-ranked-mmr/', '/blog/r6s-aimbot-ranked-setup/'],
  ['/blog/dota-2-map-hack-setup', '/blog/r6s-esp-setup/'],
  ['/blog/dota-2-map-hack-setup/', '/blog/r6s-esp-setup/'],
  ['/blog/dota-2-zoom-hack-guide', '/blog/r6s-no-recoil-guide/'],
  ['/blog/dota-2-zoom-hack-guide/', '/blog/r6s-no-recoil-guide/'],
  ['/blog/dota-2-skin-changer-guide', '/blog/r6s-unlock-all-operators/'],
  ['/blog/dota-2-skin-changer-guide/', '/blog/r6s-unlock-all-operators/'],
  ['/blog/vac-patch-day-checklist', '/blog/battleye-patch-day-checklist/'],
  ['/blog/vac-patch-day-checklist/', '/blog/battleye-patch-day-checklist/'],
  ['/blog/dota-2-hwid-spoofer-after-ban', '/blog/r6s-hwid-spoofer-after-ban/'],
  ['/blog/dota-2-hwid-spoofer-after-ban/', '/blog/r6s-hwid-spoofer-after-ban/'],
  ['/blog/how-to-buy-dota-2-cheats-2026', '/blog/how-to-buy-r6s-cheats-2026/'],
  ['/blog/how-to-buy-dota-2-cheats-2026/', '/blog/how-to-buy-r6s-cheats-2026/'],
  ['/blog/dota-2-auto-combo-hero-scripts', '/blog/r6s-aimbot-operator-configs/'],
  ['/blog/dota-2-auto-combo-hero-scripts/', '/blog/r6s-aimbot-operator-configs/'],
  ['/blog/valve-anti-cheat-unable-to-verify', '/blog/battleye-unable-to-verify/'],
  ['/blog/valve-anti-cheat-unable-to-verify/', '/blog/battleye-unable-to-verify/'],
  ['/blog/dota-2-external-cheat-guide', '/blog/r6s-external-cheat-guide/'],
  ['/blog/dota-2-external-cheat-guide/', '/blog/r6s-external-cheat-guide/'],
  ['/blog/dota-2-stream-proof-setup', '/blog/r6s-stream-proof-setup/'],
  ['/blog/dota-2-stream-proof-setup/', '/blog/r6s-stream-proof-setup/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
