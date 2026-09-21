import type { Translations } from './types';

const toolsBase = '/tools/r6s-cheats/';

export const en: Translations = {
  site: {
    name: 'R6s Cheats',
    domain: 'r6scheats.net',
    title: 'R6s Cheats | Rainbow Six Siege Hacks, ESP & Aimbot',
    description:
      'Rainbow Six Siege cheats with ESP, aimbot, no recoil and wallhack for PC ranked on Ubisoft Connect—patch-ready builds at r6scheats.net.',
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: '/features/', label: 'Features' },
    { href: '/cheats/', label: 'Cheats' },
    { href: '/tools/r6s-cheats/', label: 'Tools' },
    { href: '/forums/', label: 'Forums' },
  ],
  hero: {
    status: 'Rainbow Six Siege — patch build online',
    eyebrow: 'Rainbow Six Siege',
    titleLine1: 'R6s',
    titleLine2: 'Cheats',
    subtitle:
      'Rainbow Six Siege cheats with ESP, aimbot, no recoil and wallhack for PC ranked on Ubisoft Connect—updated every patch with preset configs and instant loader access.',
    ctaPrimary: 'View cheat tiers',
    modesLabel: 'Rainbow Six Siege modes',
    modes: ['Ranked', 'Unranked', 'Quick Match', 'Custom Games'],
  },
  features: {
    pageTitle: 'Rainbow Six Siege Cheat Features',
    pageDescription:
      'ESP, aimbot, no recoil, drone hack and software modules for Rainbow Six Siege on PC—full feature overview at r6scheats.net.',
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'ESP, aim control and utility tools for Rainbow Six Siege, maintained every patch.',
    seeAll: 'See all features',
    seeAllHref: '/features/',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Track. Lock. Win.',
        desc: 'Smooth aimbot with FOV limits, bone selection and humanized smoothing for operators like Ash, Jäger and Vigil. Delay tuning keeps flicks natural in ranked.',
        tags: ['r6s aimbot', 'r6s cheats', 'rainbow six siege hacks', 'r6 aimbot'],
        points: ['Rainbow Six Siege AimBot', 'FOV Limits', 'Bone Selection', 'Humanized Smoothing'],
      },
      {
        title: 'ESP / Wallhack',
        subtitle: 'See Roamers Before They Flank.',
        desc: 'Player ESP, gadget locator, drone alerts and enemy position tracking through walls—even outside standard line of sight.',
        tags: ['r6s esp', 'r6s wallhack', 'r6s cheats', 'gadget esp'],
        points: ['Rainbow Six Siege ESP', 'Player Wallhack', 'Gadget Locator', 'Drone Alerts'],
      },
      {
        title: 'Drone & Gadget ESP',
        subtitle: 'Intel Without Wasting Drones.',
        desc: 'Drone position markers, trap alerts and gadget hints. Never miss a Claymore, Kapkan trap or roaming defender again.',
        tags: ['r6s drone hack', 'gadget esp', 'r6s hacks', 'map awareness'],
        points: ['Gadget ESP', 'Drone Markers', 'Trap Alerts', 'Map Awareness'],
      },
      {
        title: 'No Recoil',
        subtitle: 'Beam Like a Pro.',
        desc: 'Weapon-specific recoil control with per-gun profiles, spread reduction and Delay Setting. Perfect for entry fraggers and anchors with tight spray patterns.',
        tags: ['r6s no recoil', 'r6s cheat', 'recoil control r6', 'spray control'],
        points: ['Recoil Control', 'Weapon Profiles', 'Spread Reduction', 'Spray Control'],
      },
      {
        title: 'Utility Suite',
        subtitle: 'Extra Tools for Clutch Moments.',
        desc: 'Unlock All, triggerbot, speed hack and stream-proof overlays—everything beyond raw ESP and aimbot.',
        points: [
          'Unlock All Operators',
          'Triggerbot',
          'No Spread',
          'Speed Hack',
          'Stream Proof',
        ],
        tags: ['r6s unlock all', 'r6s triggerbot', 'r6s external cheat', 'stream proof'],
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Built for Rainbow Six Siege',
    items: [
      {
        title: 'BattlEye-Aware Updates',
        desc: 'Our team tracks BattlEye and game patches, pushing builds fast so you are not left offline after a Rainbow Six Siege update.',
      },
      {
        title: 'Humanized Aim',
        desc: 'Smoothing, natural flick timing and conservative defaults mimic high-rank players—not obvious bot patterns that draw reports.',
      },
      {
        title: 'Zero FPS Tax',
        desc: 'Optimized overlay rendering keeps your framerate stable in dense firefights and late-round 1v1s.',
      },
      {
        title: 'Operator Support',
        desc: 'Portal guides help with loader setup, operator configs and HWID resets—step-by-step walkthroughs in your dashboard.',
      },
    ],
  },
  setup: {
    eyebrow: 'Deployment',
    title: 'Five minutes from download to queue.',
    subtitle: 'Follow the guided loader flow for Rainbow Six Siege on Ubisoft Connect PC.',
    steps: [
      { step: '01', title: 'Verify', desc: 'Complete checkout via our partner and unlock your operator portal.' },
      { step: '02', title: 'Download', desc: 'Grab the latest patch loader from your dashboard.' },
      { step: '03', title: 'Launch', desc: 'Run the external loader—no BIOS changes required.' },
      { step: '04', title: 'Configure', desc: 'Load ranked or unranked presets, tune ESP and aimbot modules.' },
      { step: '05', title: 'Queue', desc: 'Launch Rainbow Six Siege and climb rank with confidence.' },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Rainbow Six Siege after updates.',
    items: ['Windows 10 & 11', 'Ubisoft Connect', 'R6 Siege client', 'Auto updater', 'Config cloud sync', 'Portal guides', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Pricing',
    title: 'R6S cheat tiers',
    subtitle: 'Three tiers for Rainbow Six Siege cheats—from ESP awareness to full aimbot and wallhack suites.',
    viewAll: 'View all cheats',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Essential',
        name: 'Lite',
        title: 'R6S Lite',
        desc: 'Entry tier for R6S cheats with player ESP, gadget locator, drone awareness and minimap overlay.',
        features: ['Player ESP & boxes', 'Gadget & trap locator', 'Drone position alerts', 'Operator name tags', 'Minimap overlay', 'Streamproof mode'],
        more: 8,
        href: `${toolsBase}lite/`,
        variant: 'essential',
      },
      {
        badge: 'Available',
        tier: 'Popular',
        name: 'Pro',
        title: 'R6S Pro',
        desc: 'Aimbot, no recoil, triggerbot and recoil control scripts for ranked Rainbow Six Siege and unranked.',
        features: ['Smooth aimbot', 'No recoil control', 'Triggerbot', 'FOV & bone selector', 'Weapon profiles', 'Spread reduction'],
        more: 18,
        href: `${toolsBase}pro/`,
        variant: 'popular',
      },
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'R6S Elite',
        desc: 'Private R6S cheats build with full wallhack, drone hack, Unlock All and direct dev support.',
        features: ['Full wallhack suite', 'Drone hack', 'Unlock All operators', 'Speed hack module', 'Priority patch queue', 'Direct dev support'],
        more: 42,
        href: `${toolsBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  tools: {
    eyebrow: 'Tools',
    title: 'R6S tools',
    subtitle: 'HWID spoofer, account recovery, and Unlock All for Rainbow Six Siege on PC.',
    viewAll: 'View all tools',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID spoofing for disk serials, MAC addresses and GPU IDs—follow the portal setup guide before launching Rainbow Six Siege.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${toolsBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC',
        subtitle: 'Unban & governance control',
        desc: 'All-in-one appeal workspace for Ubisoft restrictions, BattlEye bans and security holds—custom workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${toolsBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Unlock All',
        subtitle: 'Unlock every operator locally',
        desc: 'Lightweight Unlock All for operator outfits, weapon skins and rare variants—local preview without Ubisoft store purchases.',
        features: ['Operator unlock', 'Weapon & charm customizer', 'Elite skin preview', 'Loadout favorites export'],
        more: 7,
        href: `${toolsBase}unlock-all/`,
      },
    ],
  },
  forums: {
    eyebrow: 'Cheat Forum',
    title: 'Cheat Instructions Forum',
    subtitle:
      'Step-by-step threads on Rainbow Six Siege cheats — install, hotkeys, ESP, aimbot, radar, and fixes. Cheat-related instructions only.',
    viewAll: 'Browse all topics',
    read: 'View thread',
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-round without tabbing through chaos.',
    items: [
      { num: '01', label: 'Aimbot', title: 'Aim that adapts to your operator', desc: 'Smooth aimbot, triggerbot, FOV limits and Delay Setting in one aim tab.' },
      { num: '02', label: 'Vision', title: 'ESP that stays readable', desc: 'Filter by distance, team color, gadget type and drone alert sensitivity.' },
      { num: '03', label: 'Intel', title: 'Drones and gadgets on lock', desc: 'Drone markers, trap alerts and wallhack on a compact overlay.' },
      { num: '04', label: 'Operators', title: 'Per-operator weapon profiles', desc: 'Save Ash, Jäger, Vigil and anchor recoil scripts and swap with hotkeys.' },
      { num: '05', label: 'Recoil', title: 'Spray control automation', desc: 'No recoil, spread reduction and weapon-specific profiles for efficient fragging.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Separate ranked, unranked and custom game presets with cloud backup.' },
    ],
  },
  contact: {
    eyebrow: 'Support',
    title: 'Questions before you deploy?',
    subtitle: 'Check the FAQ first. For account, HWID or loader issues, review the guides with your order email ready.',
    asideTitle: 'Include when troubleshooting',
    asideItems: [
      { num: '01', title: 'Order email', desc: 'The address used at checkout on r6scheats.net or via our secure checkout.' },
      { num: '02', title: 'Platform', desc: 'Ubisoft Connect on Windows 10 or 11—and your Rainbow Six Siege client version.' },
      { num: '03', title: 'Error detail', desc: 'Screenshot or exact message from the loader or Ubisoft Connect.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if R6S cheats are online?',
        a: 'The live status banner is on r6scheats.net. Always check after a Rainbow Six Siege or BattlEye update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Rainbow Six Siege.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party R6S cheats?',
        a: 'Yes—any modification carries risk. BattlEye and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Rainbow Six Siege via Ubisoft Connect on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are tools and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, UGC and Unlock All live at r6scheats.net/tools/r6s-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'R6s Cheats for PC. ESP, aimbot, and radar for Rainbow Six Siege.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/cheats/', label: 'Cheat overview', ariaLabel: 'Cheats' },
      { href: '/features/', label: 'Feature list', ariaLabel: 'Features' },
      { href: '/cheats/pro/', label: 'Aimbot page', ariaLabel: 'Aimbot' },
      { href: '/cheats/lite/', label: 'ESP page', ariaLabel: 'ESP' },
      { href: '/forums/r6s-radar-settings/', label: 'Radar page', ariaLabel: 'Radar' },
      { href: '/forums/', label: 'Community forum', ariaLabel: 'Forums' },
    ],
    helpLegal: 'Help & legal',
    helpLegalLinks: [
      { href: '/contact/', label: 'Help center', ariaLabel: 'Help center' },
      { href: '/faq/', label: 'FAQ answers', ariaLabel: 'FAQ' },
      { href: '/forums/r6s-patch-rebuild-guide/', label: 'Patch updates', ariaLabel: 'Patch updates' },
      { href: '/forums/r6s-cheat-setup/', label: 'Setup guides', ariaLabel: 'Setup guides' },
      { href: '/forums/r6s-loader-errors/', label: 'Loader errors', ariaLabel: 'Loader errors' },
    ],
    bottomLinks: [
      { href: '/about/', label: 'About us', ariaLabel: 'About us' },
      { href: '/privacy/', label: 'Privacy policy', ariaLabel: 'Privacy policy' },
      { href: '/contact/', label: 'Contact', ariaLabel: 'Contact' },
      { href: '/sitemap.xml', label: 'XML sitemap', ariaLabel: 'XML sitemap' },
    ],
    rightsReserved: 'All rights reserved.',
    privacy: 'Privacy Policy',
    about: 'About',
    contact: 'Contact',
  },
  legalPages: {
    about: {
      title: 'About Rainbow Six Siege Cheats',
      description:
        'Rainbow Six Siege Cheats provides R6S cheat tiers, utility tools and PC support resources at r6scheats.net.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Rainbow Six Siege Cheats is a PC-focused resource for R6S players exploring ESP, aimbot, no recoil and Unlock All workflows. We publish tier comparisons, setup guides, and live status notes so you can evaluate R6S cheats before checkout.',
            'We are not affiliated with Ubisoft Entertainment or Rainbow Six Siege. All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Lite, Pro, and Elite cheat tiers, HWID utilities, Unlock All and account recovery workflows. Forum threads explain ranked-safe configs, patch-day checks, and BattlEye update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are covered in our FAQ and setup guides. Include your order email, Ubisoft account, and Windows version when reviewing troubleshooting steps.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Rainbow Six Siege Cheats handles analytics, cookies, and contact data when you use r6scheats.net.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on r6scheats.net.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics and affiliate attribution. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'For privacy questions, review this policy and use the contact page for general site inquiries.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact Rainbow Six Siege Cheats',
      description:
        'Find answers about loader, HWID, and checkout questions in our FAQ and setup guides.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'R6s Cheats home',
    checkoutAria: 'Start checkout',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
