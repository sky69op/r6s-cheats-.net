import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const gameplayWidths = [512, 640, 960];
const heroWidths = [480, 640, 960];
const dirs = [
  { path: 'public/images/gameplay', widths: gameplayWidths, quality: 82 },
  { path: 'public/images/hero', widths: heroWidths, quality: 72 },
];

function pruneStaleWebps(dir, allowedWidths) {
  const allowed = new Set(allowedWidths.map(String));
  let removed = 0;
  for (const file of fs.readdirSync(dir)) {
    const match = file.match(/^(.+)-(\d+)\.webp$/);
    if (!match || allowed.has(match[2])) continue;
    fs.unlinkSync(path.join(dir, file));
    removed += 1;
  }
  if (removed) console.log(`Removed ${removed} stale webp variant(s) from ${path.relative(root, dir)}`);
}

async function optimizeDir({ path: relativeDir, widths, quality }) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  pruneStaleWebps(dir, widths);

  const files = fs.readdirSync(dir).filter((file) => /\.png$/i.test(file) && !/-\d+\.webp$/i.test(file));

  for (const file of files) {
    const input = path.join(dir, file);
    const base = file.replace(/\.png$/i, '');

    for (const width of widths) {
      const output = path.join(dir, `${base}-${width}.webp`);
      await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 4 })
        .toFile(output);
      console.log(`Wrote ${path.relative(root, output)}`);
    }
  }
}

for (const dir of dirs) {
  await optimizeDir(dir);
}

console.log('Image optimization complete.');
