export interface SiteConfig {
  name: string;
  domain: string;
  title: string;
  description: string;
  discord: string;
}

export interface NavLink {
  href: string;
  label: string;
  ariaLabel?: string;
}

export interface FeatureItem {
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
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
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  href: string;
}

export interface BlogPost {
  tag: string;
  title: string;
  slug: string;
  image: string;
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
  label: string;
  title: string;
  desc: string;
}

export interface WorkflowItem {
  num: string;
  phase: string;
  title: string;
  desc: string;
}

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
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaDiscord: string;
    modesLabel: string;
    modes: string[];
    metrics: { label: string; strong: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
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
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    explore: string;
    items: TierCard[];
  };
  products: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    get: string;
    explore: string;
    items: ProductCard[];
  };
  blog: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    read: string;
    items: BlogPost[];
  };
  toolkit: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ToolkitItem[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: WorkflowItem[];
  };
  fieldNotes: {
    eyebrow: string;
    title: string;
    items: { num: string; title: string; desc: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    discord: string;
    websiteSupport: string;
    email: string;
    asideTitle: string;
    asideItems: { num: string; title: string; desc: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    explore: string;
    exploreLinks: NavLink[];
    support: string;
    legal: string;
    socialTitle: string;
    socialLinks: NavLink[];
    externalTitle: string;
    externalLinks: NavLink[];
    privacy: string;
    about: string;
    contact: string;
    disclaimer: string;
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
    checkoutAria: string;
    discordAria: string;
    menuOpen: string;
    menuClose: string;
    themeLight: string;
    themeDark: string;
  };
}
