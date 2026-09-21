/**
 * Cloudflare Builds deploy command — use instead of `npx wrangler deploy`.
 * Dashboard: Deploy command = node scripts/cf-deploy-step.mjs
 * (or npm run deploy)
 */
import { spawnSync } from 'node:child_process';

console.log('cf-deploy-step: publishing to Cloudflare Pages…');

const result = spawnSync('node', ['scripts/pages-deploy.mjs'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);
