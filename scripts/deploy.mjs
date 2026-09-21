import { spawnSync } from 'node:child_process';

const result = spawnSync('node', ['scripts/pages-deploy.mjs'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);
