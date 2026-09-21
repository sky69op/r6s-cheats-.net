import { DEFAULT_OG_IMAGE } from '../../config/seo';

/** Per-thread Open Graph images (meta only — no UI changes). */
const FORUM_OG_IMAGES: Record<string, string> = {
  'best-r6-cheats-2026': '/images/gameplay/r6s-win-round.png',
  'r6s-antivirus-setup': '/images/gameplay/r6s-esp.png',
  'r6s-cheat-setup': '/images/gameplay/r6s-gameplay-courtyard.png',
  'how-to-use-r6s-cheats': '/images/gameplay/r6s-player-esp.png',
  'r6s-patch-rebuild-guide': '/images/gameplay/r6s-win-round.png',
  'r6s-cheat-menu-guide': '/images/gameplay/r6s-esp-reception.png',
  'r6s-loader-errors': '/images/gameplay/r6s-supply-corridor.png',
  'r6s-radar-settings': '/images/gameplay/r6s-esp-scope.png',
  'r6s-soft-aim-settings': '/images/gameplay/r6s-aimbot.png',
  'r6s-esp-settings': '/images/gameplay/r6s-esp-showers.png',
  'r6s-cheat-hotkeys': '/images/gameplay/r6s-wallhack-garage.png',
  'r6s-aimbot-setup': '/images/gameplay/r6s-aimbot-vault.png',
  'r6s-hwid-spoofer-guide': '/images/gameplay/r6s-rappel.png',
  'r6s-unlock-all-guide': '/images/gameplay/r6s-unlock-all.png',
};

export function getForumOgImage(slug: string): string {
  return FORUM_OG_IMAGES[slug] ?? DEFAULT_OG_IMAGE;
}
