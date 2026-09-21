/**
 * Cloudflare Builds deploy command — use instead of `npx wrangler deploy`.
 * Dashboard (Workers Builds only): Deploy command = node scripts/cf-deploy-step.mjs
 *
 * For Cloudflare Pages Git integration, leave Deploy command empty — Pages
 * publishes dist/ automatically after npm run build.
 */
import { spawnSync } from 'node:child_process';

if (process.env.CF_PAGES === '1') {
  console.log('cf-deploy-step: skip (Cloudflare Pages Git CI publishes dist/ automatically)');
  process.exit(0);
}

console.log('cf-deploy-step: publishing to Cloudflare Pages…');

const result = spawnSync('node', ['scripts/pages-deploy.mjs'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);
