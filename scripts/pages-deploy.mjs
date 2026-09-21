import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('pages-deploy: dist/ missing — run npm run build first.');
  process.exit(1);
}

console.log('pages-deploy: deploying dist/ via wrangler deploy…');

const result = spawnSync('npx', ['wrangler', 'deploy'], {
  cwd: root,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);
