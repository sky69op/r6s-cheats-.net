/**
 * Import user-provided R6S assets into public/images and scripts/brand-sources.
 *
 * One-time / refresh workflow:
 * 1. Drop exported PNG/JPG files into repo-root assets/ (create the folder if needed).
 * 2. Run: node scripts/sync-site-images.mjs
 * 3. Run: npm run build (processes brand heroes, generates WebP variants, builds site)
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assetsDir = path.join(root, 'assets');

function resolveAssetsDir() {
  if (fs.existsSync(assetsDir) && fs.readdirSync(assetsDir).length > 0) {
    return assetsDir;
  }

  throw new Error(
    `No assets found. Create ${path.relative(root, assetsDir)}/ and add exported R6S images, then re-run.`,
  );
}

function findAsset(dir, needle) {
  const match = fs.readdirSync(dir).find((name) => name.includes(needle));
  if (!match) throw new Error(`Missing asset matching "${needle}" in ${dir}`);
  return path.join(dir, match);
}

function toLongPath(filePath) {
  const resolved = path.resolve(filePath);
  return resolved.startsWith('\\\\?\\') ? resolved : `\\\\?\\${resolved}`;
}

function hashFile(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(toLongPath(filePath))).digest('hex');
}

async function copyAsPng(source, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(toLongPath(source)).png({ compressionLevel: 9 }).toFile(toLongPath(dest));
  console.log(`Wrote ${path.relative(root, dest)}`);
}

async function copyAsJpg(source, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(toLongPath(source)).jpeg({ quality: 92 }).toFile(toLongPath(dest));
  console.log(`Wrote ${path.relative(root, dest)}`);
}

function removeDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;
  fs.rmSync(dir, { recursive: true, force: true });
  console.log(`Removed ${relativeDir}`);
}

async function main() {
  const sourceDir = resolveAssetsDir();
  const brandDir = path.join(root, 'scripts', 'brand-sources');
  const gameplayDir = path.join(root, 'public', 'images', 'gameplay');

  fs.mkdirSync(brandDir, { recursive: true });
  fs.mkdirSync(gameplayDir, { recursive: true });

  removeDir('public/images/blog');
  removeDir('public/images/forums');
  removeDir('public/images/gameplay');

  fs.mkdirSync(gameplayDir, { recursive: true });

  await copyAsJpg(findAsset(sourceDir, 'image-866c0f42'), path.join(brandDir, 'hero-operator-dark.jpg'));
  await copyAsJpg(findAsset(sourceDir, 'image-371a1fbb'), path.join(brandDir, 'hero-operator-light.jpg'));
  await copyAsJpg(findAsset(sourceDir, 'Favicon-c8cc9bec'), path.join(brandDir, 'favicon.jpg'));
  await copyAsJpg(findAsset(sourceDir, 'image-d692551e'), path.join(brandDir, 'favicon-light.jpg'));

  const gameplayMap = [
    ['edd8363f-40be-4c64-9efe-32e172a148f2', 'r6s-player-esp.png'],
    ['aa798482-c191-40f9-89c1-05ea5974aefa', 'r6s-wallhack.png'],
    ['17b7de70-8908-4c19-b13d-6cddc471fccc', 'r6s-esp.png'],
    ['d6a3bbe0-a19a-4aea-b477-140a6c07323f', 'r6s-win-round.png'],
    ['3eaef218-a91f-4a1c-a649-17ed7c3b6316', 'r6s-esp-replay.png'],
    ['8adfd2a6-3441-4e5a-96ac-0ba9eda13dc1', 'r6s-gameplay-courtyard.png'],
    ['9797eccc-5fde-4b70-b091-a15a7aaa3b50', 'r6s-aimbot.png'],
    ['f12ed56a-6653-4e73-a354-73905550a6d3', 'r6s-no-recoil.png'],
    ['64e5cc89-8a8f-4aff-bf1c-35679fceafa2', 'r6s-supply-corridor.png'],
    ['6cdf411e-64da-4a3c-bbdf-06dc8f88df35', 'r6s-esp-showers.png'],
    ['c5007bcf-1f6e-43cc-92bc-4331a061ee0a', 'r6s-player-esp-tags.png'],
    ['9c92b10b-87ba-4876-85bc-687dc27784c3', 'r6s-wallhack-garage.png'],
    ['90bb6e17-0401-4b17-bf79-aeac5b6a4cfd', 'r6s-aimbot-vault.png'],
    ['5d4bd92e-ebf5-49b1-9fcf-9ee4c41e8baf', 'r6s-rappel.png'],
    ['01f7821a-4956-4f68-b575-a387eca2a48b', 'r6s-esp-scope.png'],
    ['564a485b-6f17-4626-9a8d-ba09471c92a6', 'r6s-esp-reception.png'],
    ['1e9d3c83-d87f-4924-88b7-5865357fef65', 'r6s-unlock-all.png'],
  ];

  const seen = new Set();

  for (const [needle, filename] of gameplayMap) {
    const source = findAsset(sourceDir, needle);
    const digest = hashFile(source);
    if (seen.has(digest)) {
      console.log(`Skipped duplicate ${filename}`);
      continue;
    }
    seen.add(digest);
    await copyAsPng(source, path.join(gameplayDir, filename));
  }

  console.log('Site image sync complete.');
}

await main();
