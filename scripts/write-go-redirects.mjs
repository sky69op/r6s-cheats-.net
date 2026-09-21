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

for (const slug of Object.keys(GO_PATH_REDIRECTS)) {
  staticLines.push(`/go/${slug}  /go/${slug}/  301`);
}

/**
 * Cloudflare Workers static assets: _redirects destinations must be relative URLs.
 * External checkout targets live in public/go/<slug>/index.html (generated below).
 * www/http → apex is handled in Cloudflare custom-domain settings (not _redirects).
 */
const dynamicLines = ['/blog/*  /forums/:splat/  301'];

const lines = [...staticLines, ...dynamicLines];

const outPath = path.resolve('public/_redirects');
fs.writeFileSync(outPath, `${lines.join('\n')}\n`, 'utf8');

function escapeHtmlAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function writeGoRedirectPages() {
  for (const [slug, destination] of Object.entries(GO_PATH_REDIRECTS)) {
    const dir = path.resolve('public/go', slug);
    fs.mkdirSync(dir, { recursive: true });
    const safeHref = escapeHtmlAttr(destination);
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex,nofollow">
  <meta http-equiv="refresh" content="0;url=${safeHref}">
  <title>Redirecting…</title>
  <script>location.replace(${JSON.stringify(destination)})</script>
</head>
<body>
  <p><a href="${safeHref}">Continue to checkout</a></p>
</body>
</html>
`;
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  }
}

writeGoRedirectPages();

console.log(
  `Wrote ${outPath} (${lines.length} rules: ${PATH_REDIRECTS.size} path + ${trailingSlashRules.size} trailing-slash + ${dynamicLines.length} dynamic + ${Object.keys(GO_PATH_REDIRECTS).length} checkout)`,
);
console.log(`Wrote ${Object.keys(GO_PATH_REDIRECTS).length} checkout redirect pages under public/go/`);
