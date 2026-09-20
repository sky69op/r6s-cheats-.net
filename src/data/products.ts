import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/affiliate';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
}

const productBase = '/products/r6s-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on r6scheats.net and Discord #status before purchase—especially after a Rainbow Six Siege or BattlEye update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Lite, Pro, Elite, or the utility that matches your goal. Module access differs by tier—compare the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Ubisoft Connect platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a custom game, load presets, then queue ranked or unranked.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Rainbow Six Siege and BattlEye receive frequent updates. Confirm module availability on the live status panel at r6scheats.net before you purchase or launch. Overlay behavior may differ in custom games, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Rainbow Six Siege can violate Ubisoft Terms of Use and lead to BattlEye bans or account action. You use this software at your own risk. Compatibility and availability can change after game, BattlEye, or Windows updates without notice.';

const r6sSystemRequirements: SystemRequirement[] = [
  { icon: 'windows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'steam', text: 'Current Rainbow Six Siege client via Ubisoft Connect with latest patches applied.' },
  { icon: 'settings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'wifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'cpu', text: 'A system that meets Rainbow Six Siege published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpEsp: {
    src: `${gameplay}/r6s-esp.png`,
    alt: 'Rainbow Six Siege ESP showing enemy operator positions through walls',
    caption: 'ESP awareness',
    captionDesc: 'Player ESP, gadget tracking and drone alerts during a ranked push.',
  },
  gpAimbot: {
    src: `${gameplay}/r6s-aimbot.png`,
    alt: 'Rainbow Six Siege aimbot with smooth tracking on enemy operator',
    caption: 'Aimbot module',
    captionDesc: 'Smooth aimbot with FOV limits and bone selection active.',
  },
  gpWallhack: {
    src: `${gameplay}/r6s-wallhack.png`,
    alt: 'Rainbow Six Siege wallhack showing operators through destructible walls',
    caption: 'Wallhack overlay',
    captionDesc: 'Full wallhack showing enemy positions through map geometry.',
  },
  gpUnlockAll: {
    src: `${gameplay}/r6s-unlock-all.png`,
    alt: 'Rainbow Six Siege Unlock All previewing elite operator skin',
    caption: 'Unlock All preview',
    captionDesc: 'Local operator and weapon skin preview via Unlock All—client-side only.',
  },
  gpRecoil: {
    src: `${gameplay}/r6s-no-recoil.png`,
    alt: 'Rainbow Six Siege no recoil control on assault rifle',
    caption: 'No recoil control',
    captionDesc: 'Weapon-specific recoil compensation for tight spray patterns.',
  },
  gpDrone: {
    src: `${gameplay}/r6s-drone-hack.png`,
    alt: 'Rainbow Six Siege drone hack revealing enemy positions',
    caption: 'Drone hack',
    captionDesc: 'Drone position markers and gadget intel for round control.',
  },
  gpPlayerEsp: {
    src: `${gameplay}/r6s-player-esp.png`,
    alt: 'Rainbow Six Siege player ESP with name tags and distance readouts',
    caption: 'Player ESP overlay',
    captionDesc: 'Operator name tags, team colors and distance markers through walls.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'r6s-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'R6S Lite is built for players who want intel first. In ranked, knowing enemy positions, gadget placements and drone locations wins more rounds than raw aim—Lite gives you that edge without aimbot automation.',
    },
    { type: 'h2', text: 'Ranked-safe by design' },
    {
      type: 'p',
      text: 'Lite skips aimbot and triggerbot modules entirely. Your gameplay looks natural while ESP, gadget tracking and drone alerts keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'R6S Pro is the sweet spot for ranked grinders. Aimbot, no recoil and triggerbot help you win gunfights without obvious bot patterns—when you tune smoothing using our portal presets.',
    },
    { type: 'h2', text: 'Aim + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds smooth aimbot, recoil control, triggerbot and FOV limits. You see the fight before it starts and win it with aim settings that stay human at default values.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'R6S Elite is the private build for players who want everything—full wallhack, drone hack, Unlock All and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in custom games, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first ranked queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, gadget and trap locator, drone position alerts, and stream-safe overlay hiding. Config presets for ranked and unranked ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aim and automation' },
    {
      type: 'p',
      text: 'Smooth aimbot, no recoil control, triggerbot with FOV limits and bone selection. Smoothing tunes aim timing so settings stay natural in ranked. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at r6scheats.net—enough firepower for high-rank lobbies without Elite slot limits. Pair with our aimbot guide in the blog before your first ranked session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full wallhack and intel suite' },
    {
      type: 'p',
      text: 'Full wallhack, drone hack, Unlock All and speed hack module. Use custom game testing before ranked—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Ubisoft accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only BattlEye cases; see [UGC](/products/r6s-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before ranked. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Ubisoft restrictions, BattlEye bans and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some BattlEye bans cannot be reversed. UGC organizes evidence and follow-ups for Ubisoft review. Pair with [HWID Spoofer](/products/r6s-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Operators and skins display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Unlock All ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpPlayerEsp', 'gpEsp', 'gpDrone'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: r6sSystemRequirements,
    fullFeatures: [
      'Player ESP & operator boxes',
      'Gadget & trap locator',
      'Drone position alerts',
      'Operator name tags',
      'Minimap overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Defender/attacker filter',
      'Gadget cooldown tracking',
      'Unranked preset config',
      'Ranked preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Built around a clear R6S awareness workflow',
      paragraphs: [
        'R6S Lite focuses on player ESP, gadget locator, drone alerts and minimap overlay—everything you need to track roamers and round control without aimbot automation. Modules are grouped in the portal so you can tune distance, colors, and stream-proof mode before your first queue.',
        'Lite is the entry path for ranked and unranked players who want intel with minimal report risk. No aimbot, no triggerbot—just readable overlays maintained every patch at r6scheats.net.',
      ],
    },
  },
  pro: {
    images: slide('gpAimbot', 'gpEsp', 'gpPlayerEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: r6sSystemRequirements,
    fullFeatures: [
      'All Lite ESP modules',
      'Smooth aimbot',
      'No recoil control',
      'Triggerbot',
      'FOV & bone selector',
      'Weapon-specific profiles',
      'Spread reduction',
      'Smoothing tuning',
      'Per-operator aim profiles',
      'Drone alert integration',
      'Ranked-safe default presets',
      'Custom game test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Built around a clear R6S aimbot workflow',
      paragraphs: [
        'R6S Pro adds smooth aimbot, no recoil and triggerbot on top of every Lite module. Weapon profiles, smoothing tuning and activation keys live in one aim tab—tuned for ranked lobbies when you start with portal presets, not max sliders.',
        'Pro is the most popular tier: enough firepower for ranked and unranked without Elite slot limits. FOV limits and smoothing keep you efficient mid-fight while aim settings stay human at default values.',
      ],
    },
  },
  elite: {
    images: slide('gpRecoil', 'gpWallhack', 'gpUnlockAll'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: r6sSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Full wallhack suite',
      'Drone hack',
      'Speed hack module',
      'Unlock All operators',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Built around a full R6S operator workflow',
      paragraphs: [
        'R6S Elite is the private build with full wallhack, drone hack, Unlock All and priority patch delivery. Every Lite and Pro module is included—no caps, no upsells inside the loader.',
        'Elite slots are limited so patch cycles stay fast and builds stay maintainable. Direct dev support in Discord helps you tune conservative profiles before ranked. Check the status banner on r6scheats.net before purchase.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpEsp', 'gpPlayerEsp', 'gpWallhack'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Rainbow Six Siege.',
    limitations:
      'Spoofing does not help account-only BattlEye cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'windows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'refresh', text: 'Ability to create a system restore point before running.' },
      { icon: 'shield', text: 'Follow the portal setup guide before launching Rainbow Six Siege after spoofing.' },
      { icon: 'wifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'The HWID Spoofer helps Rainbow Six Siege players recover when BattlEye flags PC hardware but the Ubisoft account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only BattlEye cases. After spoof, load a conservative cheat profile from r6scheats.net before queuing ranked.',
      ],
    },
  },
  ugc: {
    images: slide('gpEsp', 'gpPlayerEsp', 'gpWallhack'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent BattlEye bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'mail', text: 'Order email used at checkout on r6scheats.net.' },
      { icon: 'shield', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'wifi', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you recover restricted gaming, social and marketplace accounts with structured appeal workflows and automation—not instant unban guarantees.',
        'Build custom dispute paths, track case status and rebuild your presence with smart restriction-management tools. Support walks you through each step via Discord when you need hands-on help.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpUnlockAll', 'gpPlayerEsp', 'gpEsp'),
    goodToKnow:
      'Unlock All previews operators and skins locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Ubisoft inventory or store state. Other players cannot see previewed elite skins or operators.',
    systemRequirements: r6sSystemRequirements,
    fullFeatures: [
      'Operator unlock preview',
      'Elite skin preview',
      'Weapon & charm customizer',
      'Charm & attachment editor',
      'HUD theme swap',
      'Operator card replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'Unlock All lets you browse operators, elite skins and exclusive weapon charms locally in Rainbow Six Siege—searchable catalog, favorites, and loadout export without modifying live Ubisoft purchases.',
        'Cosmetics display on your client for testing and content creation. Other players see your actual inventory, not preview skins. Included free with Elite; available standalone for cosmetic preview without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'R6S Lite' : cheat.name === 'Pro' ? 'R6S Pro' : 'R6S Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpAimbot', 'gpRecoil', 'gpWallhack');

export const heroSlides = slide(
  'gpEsp',
  'gpAimbot',
  'gpWallhack',
  'gpUnlockAll',
  'gpRecoil',
  'gpDrone',
  'gpPlayerEsp',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'HWID, recovery and cosmetic utilities for Rainbow Six Siege on PC.',
  buyUrl: checkoutPath('dota2'),
};

export const cheatsHub = {
  path: '/cheats/',
  title: 'R6S Cheats',
  subtitle: 'Lite, Pro and Elite tiers for ranked, unranked and quick match on PC.',
  buyUrl: checkoutPath('dota2'),
};
