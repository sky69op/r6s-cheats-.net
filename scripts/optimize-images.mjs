import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const widths = [512, 640, 960];
const activeWidthSet = new Set(widths.map(String));
const dirs = ['public/images/gameplay'];

function pruneStaleWebps(dir) {
  let removed = 0;
  for (const file of fs.readdirSync(dir)) {
    const match = file.match(/^(.+)-(\d+)\.webp$/);
    if (!match || activeWidthSet.has(match[2])) continue;
    fs.unlinkSync(path.join(dir, file));
    removed += 1;
  }
  if (removed) console.log(`Removed ${removed} stale webp variant(s) from ${path.relative(root, dir)}`);
}

async function optimizeDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  pruneStaleWebps(dir);

  const files = fs.readdirSync(dir).filter((file) => /\.png$/i.test(file) && !/-\d+\.webp$/i.test(file));

  for (const file of files) {
    const input = path.join(dir, file);
    const base = file.replace(/\.png$/i, '');

    for (const width of widths) {
      const output = path.join(dir, `${base}-${width}.webp`);
      await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toFile(output);
      console.log(`Wrote ${path.relative(root, output)}`);
    }
  }
}

for (const dir of dirs) {
  await optimizeDir(dir);
}

console.log('Image optimization complete.');
