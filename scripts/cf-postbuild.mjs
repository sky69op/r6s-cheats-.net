import { spawnSync } from 'node:child_process';

// Cloudflare Pages Git CI publishes dist/ automatically after the build step.
// Manual wrangler pages deploy here fails with API auth errors and is unnecessary.
if (process.env.CF_PAGES === '1') {
  console.log('cf-postbuild: skip Pages deploy (Cloudflare Pages Git CI publishes dist/ automatically)');
  process.exit(0);
}

// Cloudflare Workers Builds runs under /opt/buildhome with CI=true.
const onCloudflare =
  process.env.CI === 'true' ||
  process.env.CLOUDFLARE === '1' ||
  process.cwd().startsWith('/opt/buildhome');

if (!onCloudflare) {
  console.log('cf-postbuild: skip Pages deploy (local build)');
  process.exit(0);
}

console.log('cf-postbuild: deploying to Cloudflare Pages after build…');

const result = spawnSync('node', ['scripts/pages-deploy.mjs'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);
