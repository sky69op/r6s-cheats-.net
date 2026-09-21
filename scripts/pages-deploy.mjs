import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('pages-deploy: dist/ missing — run npm run build first.');
  process.exit(1);
}

const args = ['wrangler', 'pages', 'deploy', 'dist', '--project-name=r6s-cheats--net', '--commit-dirty=true'];

console.log('pages-deploy: publishing dist/ to Cloudflare Pages…');

const result = spawnSync('npx', args, {
  cwd: root,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});

process.exit(result.status ?? 1);
