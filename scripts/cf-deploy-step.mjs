/**
 * Optional explicit deploy command for Workers Builds.
 * Default dashboard setting (npx wrangler deploy) is preferred — leave deploy command empty
 * to use the default, or set: npx wrangler deploy
 *
 * For Cloudflare Pages Git (not Workers Builds), leave deploy command empty entirely.
 */
import { spawnSync } from 'node:child_process';

if (process.env.WORKERS_CI === '1' || process.env.CF_PAGES === '1') {
  console.log('cf-deploy-step: skip (Cloudflare CI handles deploy separately)');
  process.exit(0);
}

console.log('cf-deploy-step: publishing to Cloudflare…');

const result = spawnSync('npx', ['wrangler', 'deploy'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);
