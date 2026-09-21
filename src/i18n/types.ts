export interface SiteConfig {
  name: string;
  domain: string;
  title: string;
  description: string;
}

export type NavLinkId = 'home' | 'features' | 'cheats' | 'tools' | 'forums';

export interface NavLink {
  id?: NavLinkId;
  href: string;
  label: string;
  ariaLabel?: string;
}

export interface ExternalLink {
  href: string;
  label: string;
  ariaLabel: string;
}

export type FeatureId = 'aimbot' | 'esp' | 'drone_esp' | 'no_recoil' | 'utility_suite';
export type ToolkitId = 'aimbot' | 'vision' | 'intel' | 'operators' | 'recoil' | 'profiles';
export type ProductCategoryKey = 'system_utility' | 'account_recovery' | 'cosmetic';

export interface FeatureItem {
  id: FeatureId;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  points?: string[];
  bullets?: string[];
}

export interface TierCard {
  badge: string;
  tier: string;
  name: string;
  title: string;
  desc: string;
  features: string[];
  more: number;
  href: string;
  variant: 'essential' | 'popular' | 'limited';
}

export interface ProductCard {
  badge: string;
  category: string;
  categoryKey: ProductCategoryKey;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  href: string;
}

export interface ForumPost {
  tag: string;
  title: string;
  slug: string;
  desc: string;
  date: string;
  readTime: string;
}

export interface FaqItem {
  num: string;
  q: string;
  a: string;
}

export interface StepItem {
  step: string;
  title: string;
  desc: string;
}

export interface ToolkitItem {
  num: string;
  id: ToolkitId;
  label: string;
  title: string;
  desc: string;
}

export interface HeroStatusPill {
  icon: import('../components/icons/types').IconName;
  label: string;
}

export type FaqTopicKey =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'tools'
  | 'forums'
  | 'setup';

export interface WhyItem {
  title: string;
  desc: string;
}

export interface Translations {
  site: SiteConfig;
  nav: NavLink[];
  hero: {
    status: string;
    eyebrow: string;
    eyebrowHref: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    operatorAlt: string;
    ctaPrimary: string;
    modesLabel: string;
    modes: string[];
    statusPills: HeroStatusPill[];
  };
  features: {
    pageTitle: string;
    pageDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    seeAll: string;
    seeAllHref: string;
    items: FeatureItem[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    items: WhyItem[];
  };
  setup: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  compatibility: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  cheats: {
    pageTitle: string;
    pageDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    explore: string;
    items: TierCard[];
  };
  tools: {
    pageTitle: string;
    pageDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    get: string;
    explore: string;
    items: ProductCard[];
  };
  forums: {
    pageTitle: string;
    pageDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    read: string;
    posted: string;
    relatedThreads: string;
    backToForum: string;
  };
  toolkit: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ToolkitItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    asideTitle: string;
    asideItems: { num: string; title: string; desc: string }[];
  };
  faq: {
    pageTitle: string;
    pageDescription: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    topics: Record<FaqTopicKey, string>;
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    explore: string;
    exploreLinks: NavLink[];
    helpLegal: string;
    helpLegalLinks: NavLink[];
    bottomLinks: NavLink[];
    externalLinks: ExternalLink[];
    share: {
      heading: string;
      facebook: string;
      x: string;
      linkedin: string;
      reddit: string;
      whatsapp: string;
      telegram: string;
      email: string;
    };
    rightsReserved: string;
    privacy: string;
    about: string;
    contact: string;
  };
  legalPages: {
    about: {
      title: string;
      description: string;
      sections: { heading: string; paragraphs: string[] }[];
    };
    privacy: {
      title: string;
      description: string;
      sections: { heading: string; paragraphs: string[] }[];
    };
    contact: {
      title: string;
      description: string;
    };
  };
  ui: {
    skipLink: string;
    browseCheats: string;
    browseCheatsMobile: string;
    homeAria: string;
    logoAlt: string;
    checkoutAria: string;
    menuOpen: string;
    menuClose: string;
    mobileMenuPrefix: string;
    footerHomeAria: string;
    footerLanguagePrefix: string;
    footerBrandPrefix: string;
    themeLight: string;
    themeDark: string;
    get: string;
    view: string;
    breadcrumbs: {
      home: string;
      features: string;
      cheats: string;
      tools: string;
      forums: string;
      faq: string;
    };
    language: string;
    backToTop: string;
    backToHome: string;
    popular: string;
    moreFeatures: string;
    productDetail: {
      overview: string;
      acquisition: string;
      keyCapabilities: string;
      keyCapabilitiesLede: string;
      bestFit: string;
      step: string;
      getProduct: string;
      faqEyebrow: string;
      faqTitle: string;
      faqSubtitle: string;
    };
  };
}
