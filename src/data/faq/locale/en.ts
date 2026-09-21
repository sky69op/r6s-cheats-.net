import type { IconName } from '../../../components/icons/types';
import type { Locale } from '../../../i18n/config';
import { cheatPath, toolPath, ROUTES, localizedPath } from '../../../utils/path';

const faqLocale: Locale = 'en';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'tools'
  | 'forums'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${href}">${text}</a>`;
}

const lite = link('R6S Lite', cheatPath('lite', faqLocale));
const pro = link('R6S Pro', cheatPath('pro', faqLocale));
const elite = link('R6S Elite', cheatPath('elite', faqLocale));
const toolsHub = link('R6S tools', localizedPath(faqLocale, ROUTES.tools));
const hwid = link('HWID Spoofer', toolPath('hwid-spoofer', faqLocale));
const ugc = link('UGC', toolPath('ugc', faqLocale));
const unlockAll = link('Unlock All', toolPath('unlock-all', faqLocale));
const faqPage = link('full FAQ', localizedPath(faqLocale, '/faq/'));
const forums = link('forum threads', localizedPath(faqLocale, ROUTES.forums));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'alert',
    q: 'Where do I check if R6S cheats are online?',
    a: a('The live status banner is on r6scheats.net. Always check after a Rainbow Six Siege or BattlEye update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'package',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Rainbow Six Siege.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'shield',
    q: 'Can I get banned using third-party R6S cheats?',
    a: a('Yes—any modification carries risk. BattlEye and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'windows',
    q: 'Which platforms are supported?',
    a: a('Rainbow Six Siege via Ubisoft Connect on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'refresh',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal. Limits depend on your tier.'),
  },
  {
    id: 'tools-page',
    topic: 'tools',
    icon: 'package',
    q: 'Where are tools and utilities listed?',
    a: `${toolsHub} lists cheat tiers, ${hwid}, ${ugc}, and ${unlockAll} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'eye',
    q: 'What is R6S ESP / wallhack?',
    a: `ESP and wallhack show enemy operator positions, gadgets, drones and traps through walls. ${lite} covers awareness overlays. ${pro} and ${elite} add aimbot modules on top.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-aimbot',
    topic: 'esp',
    icon: 'eye',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP and wallhack are information overlays—they do not move your crosshair. Aimbot, no recoil and triggerbot are combat modules on ${pro} and ${elite}. You can run awareness-only on ${lite}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'eye',
    q: 'Which tier do I need for ESP only?',
    a: `${lite} is awareness only: player ESP, gadget locator, drone alerts and minimap overlay. ${pro} adds aimbot. ${elite} adds full wallhack, drone hack and Unlock All.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-aimbot',
    topic: 'scripts',
    icon: 'crosshair',
    q: 'Which tier includes aimbot?',
    a: `${pro} ships smooth aimbot, no recoil and triggerbot. ${elite} includes everything in Pro plus full wallhack and drone hack. ${lite} has no aim automation.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'package',
    q: 'How do you rank Lite vs Pro vs Elite?',
    a: `Intel only → ${lite}. Ranked gunfights with aimbot → ${pro}. Full wallhack suite and priority patches → ${elite}. Compare on each cheat page or the ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'zap',
    q: 'Why is Elite limited slots?',
    a: `Elite is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast. Check the status banner before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'stream',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${lite}, ${pro} and ${elite} hides overlays from OBS and Discord share. Test a local recording before going live.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'shield',
    q: 'Are undetected R6S cheats guaranteed?',
    a: a('No. Undetected is current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing, or detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'shield',
    q: 'Is ESP safer than aimbot?',
    a: a('ESP is quieter in replay than obvious aimbot patterns, but it is still a cheat. BattlEye does not ignore overlays because you left aimbot off.'),
  },
  {
    id: 'hwid-when',
    topic: 'tools',
    icon: 'cpu',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when fresh Ubisoft accounts fail instantly on one PC but work elsewhere—hardware enforcement. Not for account-only BattlEye cases; see ${ugc} instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'tools',
    icon: 'mail',
    q: 'What is UGC?',
    a: `${ugc} (Unban & Governance Control) is an appeal workspace for Ubisoft restrictions and BattlEye bans—custom workflows and case tracking, not a guaranteed unban service.`,
    scopes: ['ugc'],
  },
  {
    id: 'unlock-all',
    topic: 'tools',
    icon: 'tag',
    q: 'Does Unlock All modify my Ubisoft inventory?',
    a: `${unlockAll} previews operators and skins locally on your client. Other players see your real inventory. Included with ${elite}; available standalone for cosmetic preview only.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'tools',
    icon: 'cpu',
    q: 'Is the loader injected into the Ubisoft folder?',
    a: `R6s Cheats runs external with cloud config sync—no files injected into the game install directory. BattlEye risk still applies. See ${toolsHub}.`,
  },
  {
    id: 'forums-vs-cheats',
    topic: 'forums',
    icon: 'alert',
    q: 'Are forum cheat codes the same as ranked cheats?',
    a: `No. Forum threads about custom game settings apply only in offline or custom games. Ranked R6S cheats are separate products—see ${lite}, ${pro} and ${elite}.`,
  },
  {
    id: 'forums-setup',
    topic: 'forums',
    icon: 'settings',
    q: 'Where do forum setup threads point for purchase?',
    a: `Threads link to tier pages and ${toolsHub}. Checkout runs through our secure partner—never paste loader files from random Discord DMs.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'package',
    q: 'Where do I compare plans side by side?',
    a: `Each cheat tier page includes a compare table. The ${faqPage} collects product, cheat and forum answers in one place.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'users',
    q: 'Who should stay on Lite?',
    a: `Players who only want intel—ESP, gadgets, drones—and will not touch aimbot. If you keep enabling aim modules, buy ${pro} instead.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'crosshair',
    q: 'Who should buy Pro?',
    a: `Ranked players who want aimbot, no recoil and triggerbot with ESP included. Pro is the most popular tier at r6scheats.net.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'zap',
    q: 'Who should buy Elite?',
    a: `Operators who want full wallhack, drone hack, Unlock All and priority patch delivery when slots are open.`,
    scopes: ['elite'],
  },
  {
    id: 'battleye-update',
    topic: 'safety',
    icon: 'refresh',
    q: 'What should I do after a BattlEye update?',
    a: a('Check r6scheats.net status. Do not launch until the banner shows online. Load conservative presets after any patch.'),
  },
  {
    id: 'install-help',
    topic: 'setup',
    icon: 'headphones',
    q: 'How do I get install help?',
    a: a('Follow the portal setup guide after purchase with your order email, Windows version and Rainbow Six Siege client build ready.'),
  },
  {
    id: 'unranked-ranked',
    topic: 'plans',
    icon: 'target',
    q: 'Do tiers work in unranked and ranked?',
    a: `Yes—${lite}, ${pro} and ${elite} include unranked and ranked presets in the portal. Tune distance caps and aim smoothing before your first queue.`,
  },
  {
    id: 'no-recoil',
    topic: 'esp',
    icon: 'eye',
    q: 'Which tier includes no recoil?',
    a: `No recoil control ships on ${pro} and carries through ${elite}. Weapon-specific profiles help entry fraggers and anchors control spray.`,
    scopes: ['pro'],
  },
  {
    id: 'drone-hack',
    topic: 'scripts',
    icon: 'zap',
    q: 'Which tier includes drone hack?',
    a: `Drone hack and full wallhack are ${elite} only. ${pro} covers combat aim modules without Elite intel suite.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'shield',
    q: 'What are private R6S cheats?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. Rainbow Six Siege Cheats ships portal delivery for ESP, aimbot and wallhack tiers.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'alert',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat and forum answers—or read ${forums} for deep threads.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'tools-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'battleye-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const forumTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'forums-guide-start',
      topic: 'forums',
      icon: 'alert',
      q: 'Should I use custom game settings in ranked?',
      a: a('No. Custom game settings only work in offline or custom games. Ranked requires separate R6S cheats from r6scheats.net tiers.'),
    },
    {
      id: 'forums-guide-tier',
      topic: 'forums',
      icon: 'package',
      q: 'Which tier matches this guide?',
      a: `Awareness guides → ${lite}. Aimbot and recoil guides → ${pro}. Wallhack and drone topics → ${elite}.`,
    },
    {
      id: 'forums-guide-status',
      topic: 'forums',
      icon: 'refresh',
      q: 'Is this thread still valid after a patch?',
      a: a('Check the thread date and the live status banner. Patch-day threads note when modules change—Discord #status has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'forums-setup-loader',
      topic: 'forums',
      icon: 'settings',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'forums-setup-lobby',
      topic: 'forums',
      icon: 'target',
      q: 'Should I test in a custom game first?',
      a: a('Yes. Load conservative presets in a custom game before ranked. Tune aim smoothing and ESP distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'forums-sec-battleye',
      topic: 'forums',
      icon: 'shield',
      q: 'Does this thread guarantee undetected status?',
      a: a('No thread replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.'),
    },
  ],
};

const defaultForumFaqs: SiteFaqItem[] = [
  {
    id: 'forums-default-1',
    topic: 'forums',
    icon: 'alert',
    q: 'Are forum threads official product documentation?',
    a: `Threads explain workflows and link to ${lite}, ${pro}, ${elite} and ${toolsHub}. Feature lists on tool pages are authoritative for checkout.`,
  },
  {
    id: 'forums-default-2',
    topic: 'forums',
    icon: 'headphones',
    q: 'Need help applying this thread?',
    a: a('Use your order email and the thread slug when reviewing the portal presets mentioned in forum posts.'),
  },
  {
    id: 'forums-default-3',
    topic: 'forums',
    icon: 'refresh',
    q: 'Will settings in this thread work next patch?',
    a: a('Re-check status after every Rainbow Six Siege update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getForumFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = forumTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('wallhack')) {
    slugHints.push({
      id: 'forums-slug-esp',
      topic: 'esp',
      icon: 'eye',
      q: 'Which tier covers ESP from this thread?',
      a: `${lite} includes player ESP, gadget locator and drone alerts. ${pro} adds aimbot on the same overlay stack.`,
    });
  }
  if (slug.includes('aimbot') || slug.includes('recoil')) {
    slugHints.push({
      id: 'forums-slug-aimbot',
      topic: 'scripts',
      icon: 'crosshair',
      q: 'Which tier includes the aim modules in this thread?',
      a: `${pro} and ${elite} ship aimbot and no recoil. ${lite} is ESP only.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('battleye')) {
    slugHints.push({
      id: 'forums-slug-hwid',
      topic: 'tools',
      icon: 'cpu',
      q: 'Does this thread replace HWID or UGC tools?',
      a: `Recovery threads complement ${hwid} and ${ugc}—read tool pages for workflow scope and realistic outcomes.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultForumFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP & operator boxes', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Gadget & trap locator', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Drone position alerts', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Minimap overlay', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Streamproof overlay', icon: 'stream' as const, lite: true, pro: true, elite: true },
  { feature: 'Operator name tags', icon: 'eye' as const, lite: true, pro: true, elite: true },
  { feature: 'Smooth aimbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'No recoil control', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Triggerbot', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'FOV & bone selector', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Weapon-specific profiles', icon: 'crosshair' as const, lite: false, pro: true, elite: true },
  { feature: 'Spread reduction', icon: 'eye' as const, lite: false, pro: true, elite: true },
  { feature: 'Full wallhack suite', icon: 'eye' as const, lite: false, pro: false, elite: true },
  { feature: 'Drone hack', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Speed hack module', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Unlock All operators', icon: 'tag' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'zap' as const, lite: false, pro: false, elite: true },
  { feature: 'Direct dev Discord support', icon: 'headphones' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup', icon: 'package' as const, lite: true, pro: true, elite: true },
];
