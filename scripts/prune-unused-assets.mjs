import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const ACTIVE_WEBP_WIDTHS = new Set(['512', '640', '960']);

const staleWebps = [];
const gameplayDir = path.join(root, 'public', 'images', 'gameplay');
if (fs.existsSync(gameplayDir)) {
  for (const file of fs.readdirSync(gameplayDir)) {
    const match = file.match(/^(.+)-(\d+)\.webp$/);
    if (!match) continue;
    if (!ACTIVE_WEBP_WIDTHS.has(match[2])) staleWebps.push(path.join(gameplayDir, file));
  }
}

for (const file of staleWebps) {
  fs.unlinkSync(file);
}

const rootOrphans = ['Card.png', 'Favicon.png', 'Hover Image.png'];
let removedRoot = 0;
for (const name of rootOrphans) {
  const file = path.join(root, name);
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    removedRoot += 1;
  }
}

const emptyLegacyDirs = [
  path.join(root, 'src', 'pages', 'go'),
  path.join(root, 'src', 'pages', 'products'),
  path.join(root, 'src', 'data', 'blog'),
];

for (const locale of ['ru', 'de', 'es', 'fr', 'pt']) {
  emptyLegacyDirs.push(path.join(root, 'src', 'pages', locale, 'products'));
  emptyLegacyDirs.push(path.join(root, 'src', 'pages', locale, 'go'));
}

let removedDirs = 0;
for (const dir of emptyLegacyDirs) {
  if (!fs.existsSync(dir)) continue;
  const entries = fs.readdirSync(dir);
  if (entries.length === 0) {
    fs.rmdirSync(dir);
    removedDirs += 1;
  }
}

console.log(
  `Pruned unused assets: ${staleWebps.length} stale webp, ${removedRoot} root png, ${removedDirs} empty dirs.`,
);
