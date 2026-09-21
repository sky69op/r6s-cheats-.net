import { SITE_ORIGIN } from './seo';

/** Official support and community URLs for Organization schema sameAs. */
export const ORGANIZATION_SAME_AS: readonly string[] = [
  `${SITE_ORIGIN}/contact/`,
  `${SITE_ORIGIN}/faq/`,
];

const optionalEnvUrls = [
  import.meta.env.PUBLIC_DISCORD_URL,
  import.meta.env.PUBLIC_FACEBOOK_URL,
  import.meta.env.PUBLIC_TWITTER_URL,
  import.meta.env.PUBLIC_REDDIT_URL,
  import.meta.env.PUBLIC_TELEGRAM_URL,
] as const;

function validHttpUrl(value: string | undefined): value is string {
  return typeof value === 'string' && value.startsWith('http');
}

/** Configured social profile URLs (optional build env). */
export function socialProfileUrls(): string[] {
  return optionalEnvUrls.filter(validHttpUrl);
}

/** sameAs list with optional social profiles from build env. */
export function organizationSameAs(): string[] {
  const profiles = socialProfileUrls();
  return [...new Set([...profiles, ...ORGANIZATION_SAME_AS])];
}
