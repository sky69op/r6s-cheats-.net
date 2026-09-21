import fs from 'node:fs';
import path from 'node:path';
import { GO_PATH_REDIRECTS } from '../src/config/affiliate-data.mjs';
import { PATH_REDIRECTS, TRAILING_SLASH_SKIP } from './redirects.mjs';
import { buildExpectedPaths } from './sitemap-config.mjs';

const staticLines = [];

for (const [from, to] of PATH_REDIRECTS) {
  staticLines.push(`${from}  ${to}  301`);
}

/** Enforce trailing slashes on indexable paths (matches scripts/serve.mjs). */
const trailingSlashRules = new Set();
for (const pathname of buildExpectedPaths().keys()) {
  if (!pathname.endsWith('/') || pathname.length <= 1) continue;
  const withoutSlash = pathname.slice(0, -1);
  if (TRAILING_SLASH_SKIP.test(withoutSlash) || PATH_REDIRECTS.has(withoutSlash)) continue;
  trailingSlashRules.add(`${withoutSlash}  ${pathname}  301`);
}
staticLines.push(...[...trailingSlashRules].sort());

for (const [slug, destination] of Object.entries(GO_PATH_REDIRECTS)) {
  staticLines.push(`/go/${slug}  ${destination}  302`);
  staticLines.push(`/go/${slug}/  ${destination}  302`);
}

/**
 * Cloudflare Pages: static rules must come before any wildcard/placeholder rule.
 * After the first `*` or `:name`, remaining rules count toward the 100 dynamic-rule cap.
 */
const dynamicLines = [
  '/blog/*  /forums/:splat/  301',
  'https://www.r6scheats.net/*  https://r6scheats.net/:splat  301',
  'http://r6scheats.net/*  https://r6scheats.net/:splat  301',
  'http://www.r6scheats.net/*  https://r6scheats.net/:splat  301',
];

const lines = [...staticLines, ...dynamicLines];

const outPath = path.resolve('public/_redirects');
fs.writeFileSync(outPath, `${lines.join('\n')}\n`, 'utf8');
console.log(
  `Wrote ${outPath} (${lines.length} rules: ${PATH_REDIRECTS.size} path + ${trailingSlashRules.size} trailing-slash + ${dynamicLines.length} dynamic + ${Object.keys(GO_PATH_REDIRECTS).length * 2} checkout)`,
);
