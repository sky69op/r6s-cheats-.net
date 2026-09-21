import type { ProductLocaleBundle } from './types';

const sharedGoodToKnow =
  'Rainbow Six Siege and BattlEye receive frequent updates. Confirm module availability on the live status panel at r6scheats.net before you purchase or launch. Overlay behavior may differ in custom games, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Rainbow Six Siege can violate Ubisoft Terms of Use and lead to BattlEye bans or account action. You use this software at your own risk. Compatibility and availability can change after game, BattlEye, or Windows updates without notice.';

const r6sSystemRequirements = [
  { icon: 'windows' as const, text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'settings' as const, text: 'Current Rainbow Six Siege client via Ubisoft Connect with latest patches applied.' },
  { icon: 'settings' as const, text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'wifi' as const, text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'cpu' as const, text: 'A system that meets Rainbow Six Siege published hardware requirements.' },
];

const defaultAcquisitionSteps = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on r6scheats.net before purchase—especially after a Rainbow Six Siege or BattlEye update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Lite, Pro, Elite, or the utility that matches your goal. Module access differs by tier—compare the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Confirm availability, Ubisoft Connect platform, and payment details with your order email ready before checkout.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a custom game, load presets, then queue ranked or unranked.',
  },
];

const hwidSpooferAcquisitionSteps = [
  {
    num: '01',
    title: 'Confirm it is a hardware flag',
    desc: 'If a brand-new Ubisoft account fails instantly on this PC but works on another machine, BattlEye likely flagged your hardware ID—not just one account. Account-only bans belong to the UGC appeal path instead.',
  },
  {
    num: '02',
    title: 'Purchase and open the portal',
    desc: 'Checkout HWID Spoofer on r6scheats.net and use your delivery email to access the operator portal. Download only from that portal—never from random Discord links.',
  },
  {
    num: '03',
    title: 'Run the pre-spoof checklist',
    desc: 'Create a Windows restore point, close Rainbow Six Siege and Ubisoft Connect, remove leftover spoof tools, add portal folder AV exclusions, and run the built-in compatibility scan before changing disk serials or MAC addresses.',
  },
  {
    num: '04',
    title: 'Apply, verify, and cold reboot',
    desc: 'Follow the portal spoof workflow, cold reboot when prompted, and check the identifier diff report. Only after verification completes, launch Siege in a custom game with a fresh account before ranked.',
  },
];

const ugcAcquisitionSteps = [
  {
    num: '01',
    title: 'Identify who issued the ban',
    desc: 'Read the notice carefully: a BattlEye “Global Ban #ID” goes to BattlEye Support; Ubisoft sanctions, security holds, or chat penalties go through Ubisoft Help. UGC routes each case type differently.',
  },
  {
    num: '02',
    title: 'Collect your case evidence',
    desc: 'Gather the ban screen or email, Global Ban ID if shown, Ubisoft Connect username, timeline of events, installed software list, and any login or compromise proof before checkout.',
  },
  {
    num: '03',
    title: 'Purchase and build your workflow',
    desc: 'Checkout UGC Unban Tool on r6scheats.net, open the case dashboard, and assemble your appeal with the right templates—false positive, account compromise, or restriction dispute.',
  },
  {
    num: '04',
    title: 'Submit once and track follow-ups',
    desc: 'Send one appeal through the correct official channel only (BattlEye Contact or Ubisoft Help ticket—not live chat). Log the submission in UGC and monitor email, including spam, for reviewer replies.',
  },
];

const unlockAllAcquisitionSteps = [
  {
    num: '01',
    title: 'Pick standalone or Elite bundle',
    desc: 'Unlock All is included with Elite tier cheats. Buy standalone here if you only want local cosmetic preview—operators, elite skins, charms, and attachments—without combat modules.',
  },
  {
    num: '02',
    title: 'Checkout and portal delivery',
    desc: 'Complete checkout on r6scheats.net, confirm your order email, and download the Unlock All build from the operator portal once delivery clears.',
  },
  {
    num: '03',
    title: 'Prepare Siege for local preview',
    desc: 'Update Rainbow Six Siege through Ubisoft Connect, launch the Unlock All loader before the main menu, and use a custom game or training situation so cloud save prompts do not overwrite your preview session.',
  },
  {
    num: '04',
    title: 'Browse, favorite, and export',
    desc: 'Search the cosmetic catalog, preview operators and elite skins on your client only, save favorites, and export loadout presets from the portal. Other players in your lobby still see your real Ubisoft inventory.',
  },
];

export const enProductContent: ProductLocaleBundle = {
  lite: {
    overview: {
      title: 'Built around a clear R6S awareness workflow',
      paragraphs: [
        'R6S Lite focuses on player ESP, gadget locator, drone alerts and minimap overlay—everything you need to track roamers and round control without aimbot automation. Modules are grouped in the portal so you can tune distance, colors, and stream-proof mode before your first queue.',
        'Lite is the entry path for ranked and unranked players who want intel with minimal report risk. No aimbot, no triggerbot—just readable overlays maintained every patch at r6scheats.net.',
      ],
    },
    about: [
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
    body: [
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
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
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
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps: defaultAcquisitionSteps,
    acquisitionTitle: 'How to get {name}',
  },
  pro: {
    overview: {
      title: 'Built around a clear R6S aimbot workflow',
      paragraphs: [
        'R6S Pro adds smooth aimbot, no recoil and triggerbot on top of every Lite module. Weapon profiles, smoothing tuning and activation keys live in one aim tab—tuned for ranked lobbies when you start with portal presets, not max sliders.',
        'Pro is the most popular tier: enough firepower for ranked and unranked without Elite slot limits. FOV limits and smoothing keep you efficient mid-fight while aim settings stay human at default values.',
      ],
    },
    about: [
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
    body: [
      { type: 'h2', text: 'Aim and automation' },
      {
        type: 'p',
        text: 'Smooth aimbot, no recoil control, triggerbot with FOV limits and bone selection. Smoothing tunes aim timing so settings stay natural in ranked. Start with portal presets, not max sliders.',
      },
      { type: 'h2', text: 'Recommended pairing' },
      {
        type: 'p',
        text: 'Pro is the most popular tier at r6scheats.net—enough firepower for high-rank lobbies without Elite slot limits. Pair with our aimbot thread in the forums before your first ranked session.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
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
      'Portal setup guides',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps: defaultAcquisitionSteps,
    acquisitionTitle: 'How to get {name}',
  },
  elite: {
    overview: {
      title: 'Built around a full R6S operator workflow',
      paragraphs: [
        'R6S Elite is the private build with full wallhack, drone hack, Unlock All and priority patch delivery. Every Lite and Pro module is included—no caps, no upsells inside the loader.',
        'Elite slots are limited so patch cycles stay fast and builds stay maintainable. Direct dev support helps you tune conservative profiles before ranked. Check the status banner on r6scheats.net before purchase.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'R6S Elite is the private build for players who want everything—full wallhack, drone hack, Unlock All and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
      },
      { type: 'h2', text: 'Use Elite responsibly' },
      {
        type: 'p',
        text: 'Elite power demands disciplined profiles. Test in custom games, start with portal conservative presets, and scale up over days—not minutes. Elite setup guides help you tune before your first ranked queue.',
      },
    ],
    body: [
      { type: 'h2', text: 'Full wallhack and intel suite' },
      {
        type: 'p',
        text: 'Full wallhack, drone hack, Unlock All and speed hack module. Use custom game testing before ranked—Elite power requires disciplined profiles, not rage settings.',
      },
      { type: 'h2', text: 'Availability' },
      {
        type: 'p',
        text: 'Elite shows as limited slots on the status banner. Check the status page if checkout is gated—confirm slot availability before purchase.',
      },
    ],
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    fullFeatures: [
      'All Lite + Pro modules',
      'Full wallhack suite',
      'Drone hack',
      'Speed hack module',
      'Unlock All operators',
      'Priority patch queue',
      'Direct dev support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps: defaultAcquisitionSteps,
    acquisitionTitle: 'How to get {name}',
  },
  'hwid-spoofer': {
    overview: {
      title: 'Built around a clear hardware recovery workflow',
      paragraphs: [
        'The HWID Spoofer helps Rainbow Six Siege players recover when BattlEye flags PC hardware but the Ubisoft account is still clean. Disk and MAC profile tools ship with a restore-point checklist, compatibility scan, and post-spoof verification steps.',
        'Use this path when fresh accounts fail instantly on one machine but work elsewhere—not for account-only BattlEye cases. After verification, launch Rainbow Six Siege in a custom game with a fresh Ubisoft account before any ranked queue.',
      ],
    },
    body: [
      { type: 'h2', text: 'When you need it' },
      {
        type: 'p',
        text: 'Use when fresh Ubisoft accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only BattlEye cases; see [UGC](/tools/r6s-cheats/ugc/) instead.',
      },
      { type: 'h2', text: 'Full workflow' },
      {
        type: 'p',
        text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then a custom-game login test with a fresh Ubisoft account. Full checklist ships in the portal and in our HWID forum thread.',
      },
    ],
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Rainbow Six Siege.',
    limitations:
      'Spoofing does not help account-only BattlEye cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
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
      'Portal recovery support',
    ],
    systemRequirements: [
      { icon: 'windows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'refresh', text: 'Ability to create a system restore point before running.' },
      { icon: 'shield', text: 'Follow the portal setup guide before launching Rainbow Six Siege after spoofing.' },
      { icon: 'wifi', text: 'Stable connection for portal verification tools.' },
    ],
    acquisitionSteps: hwidSpooferAcquisitionSteps,
    acquisitionTitle: 'How to get {name}',
  },
  ugc: {
    overview: {
      title: 'Built around account recovery and appeal workflows',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you recover restricted gaming, social and marketplace accounts with structured appeal workflows and automation—not instant unban guarantees.',
        'Build custom dispute paths, track case status and rebuild your presence with smart restriction-management tools. Portal guides walk you through each step when you need hands-on help.',
      ],
    },
    body: [
      { type: 'h2', text: 'What UGC covers' },
      {
        type: 'p',
        text: 'UGC (Unban & Governance Control) is an appeal workspace for Ubisoft restrictions, BattlEye bans and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
      },
      { type: 'h2', text: 'Realistic expectations' },
      {
        type: 'p',
        text: 'Some BattlEye bans cannot be reversed. UGC organizes evidence and follow-ups for Ubisoft review. Pair with [HWID Spoofer](/tools/r6s-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
      },
    ],
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent BattlEye bans may require a new account path instead of appeal.',
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
    systemRequirements: [
      { icon: 'mail', text: 'Order email used at checkout on r6scheats.net.' },
      { icon: 'shield', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'wifi', text: 'Internet access for portal support and case dashboard.' },
    ],
    acquisitionSteps: ugcAcquisitionSteps,
    acquisitionTitle: 'How to get {name}',
  },
  'unlock-all': {
    overview: {
      title: 'Built around a local cosmetic preview workflow',
      paragraphs: [
        'Unlock All lets you browse operators, elite skins and exclusive weapon charms locally in Rainbow Six Siege—searchable catalog, favorites, and loadout export without modifying live Ubisoft purchases.',
        'Cosmetics display on your client for testing and content creation. Other players see your actual inventory, not preview skins. Included free with Elite; available standalone for cosmetic preview without combat modules.',
      ],
    },
    body: [
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
    goodToKnow:
      'Unlock All previews operators and skins locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Ubisoft inventory or store state. Other players cannot see previewed elite skins or operators.',
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
    systemRequirements: r6sSystemRequirements,
    acquisitionSteps: unlockAllAcquisitionSteps,
    acquisitionTitle: 'How to get {name}',
  },
};
