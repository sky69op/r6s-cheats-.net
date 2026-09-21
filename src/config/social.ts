import { SITE_ORIGIN } from './seo';

/** Official support and community URLs for Organization schema sameAs. */
export const ORGANIZATION_SAME_AS: readonly string[] = [
  `${SITE_ORIGIN}/contact/`,
  `${SITE_ORIGIN}/faq/`,
];

const discordUrl = import.meta.env.PUBLIC_DISCORD_URL as string | undefined;

/** sameAs list with optional Discord invite from build env. */
export function organizationSameAs(): string[] {
  const urls = [...ORGANIZATION_SAME_AS];
  if (discordUrl?.startsWith('http')) urls.unshift(discordUrl);
  return urls;
}
