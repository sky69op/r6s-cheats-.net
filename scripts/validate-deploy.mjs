import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');

const required = [
  'index.html',
  '404.html',
  'sitemap.xml',
  '_redirects',
  '_headers',
  'robots.txt',
  'cheats/lite/index.html',
  'cheats/pro/index.html',
  'cheats/elite/index.html',
  'tools/r6s-cheats/hwid-spoofer/index.html',
  'forums/index.html',
  'go/rainbow-six-siege/index.html',
  'go/ugc/index.html',
  'go/hwid-spoofer/index.html',
  'go/skin-changer/index.html',
];

const errors = [];
const warnings = [];

if (!fs.existsSync(distDir)) {
  console.error('validate-deploy: dist/ folder missing — run npm run build first.');
  process.exit(1);
}

if (!fs.existsSync(path.join(root, 'functions', '_middleware.js'))) {
  errors.push('missing functions/_middleware.js — required for Pages redirects and charset headers');
}

for (const rel of required) {
  const full = path.join(distDir, rel);
  if (!fs.existsSync(full)) {
    errors.push(`missing required output: dist/${rel}`);
  }
}

const indexHtml = fs.existsSync(path.join(distDir, 'index.html'))
  ? fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
  : '';

if (indexHtml && !indexHtml.includes('google-site-verification')) {
  warnings.push(
    'Missing google-site-verification meta in dist/index.html — set PUBLIC_GSC_VERIFICATION in Cloudflare Pages build env and rebuild.',
  );
}

const htmlCount = (() => {
  let count = 0;
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.html')) count += 1;
    }
  }
  walk(distDir);
  return count;
})();

if (htmlCount < 100) {
  warnings.push(`Only ${htmlCount} HTML files in dist/ — expected ~150+ for full locale build.`);
}

console.log(`Deploy validation: ${htmlCount} HTML files in dist/`);

if (warnings.length) {
  console.warn(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.warn(`  ⚠ ${w}`);
}

if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error('\nCloudflare Pages: Build command = npm run build, Output directory = dist');
  console.error('Do not set a start command — this is a static site.');
  process.exit(1);
}

console.log('Deploy validation passed.');
