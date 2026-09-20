import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const sourceDir = path.join(root, 'public', 'imagess');

/** Each blog slug gets a unique source frame (match by unique timestamp token). */
const blogMappings = [
  { slug: 'r6s-cheat-codes-guide', match: 'jNu6K0vg8bM - 1337x752 - 0m02s' },
  { slug: 'r6s-console-cheats-tips', match: 'jNu6K0vg8bM - 1337x752 - 0m58s' },
  { slug: 'how-to-use-r6s-cheat-codes', match: 'jNu6K0vg8bM - 1337x752 - 1m03s' },
  { slug: 'r6s-cheats-features-guide', match: 'jNu6K0vg8bM - 1337x752 - 1m13s' },
  { slug: 'r6s-console-commands-cheats', match: 'jNu6K0vg8bM - 1337x752 - 1m26s' },
  { slug: 'r6s-lite-vs-pro', match: 'ks7PbRSmsSk - 1337x752 - 0m05s' },
  { slug: 'r6s-elite-tier-guide', match: 'ks7PbRSmsSk - 1337x752 - 0m25s' },
  { slug: 'r6s-stream-proof-setup', match: 'ks7PbRSmsSk - 1337x752 - 0m44s' },
  { slug: 'r6s-aimbot-ranked-setup', match: 'EtVa5EWLizw - 1337x752 - 0m04s' },
  { slug: 'r6s-aimbot-operator-configs', match: 'EtVa5EWLizw - 1337x752 - 1m43s' },
  { slug: 'r6s-esp-setup', match: 'BGl5NDp0Kx8 - 1337x752 - 1m18s' },
  { slug: 'r6s-no-recoil-guide', match: 'BGl5NDp0Kx8 - 1337x752 - 1m35s' },
  { slug: 'r6s-external-cheat-guide', match: 'BGl5NDp0Kx8 - 1337x752 - 1m36s' },
  { slug: 'battleye-unable-to-verify', match: 'BGl5NDp0Kx8 - 1337x752 - 1m49s' },
  { slug: 'battleye-patch-day-checklist', match: 'BGl5NDp0Kx8 - 1337x752 - 2m15s' },
  { slug: 'r6s-unlock-all-operators', match: 'qS7y-sEcMmM - 1337x752 - 0m55s' },
  { slug: 'how-to-buy-r6s-cheats-2026', match: 'qS7y-sEcMmM - 1337x752 - 1m01s' },
  { slug: 'r6s-hwid-spoofer-after-ban', match: 'qS7y-sEcMmM - 1337x752 - 1m28s' },
];

/** Hero slider — unique frames not used by blog thumbnails. */
const gameplayMappings = [
  { slug: 'r6s-esp', match: 'f7TBSCU4VCQ - 1337x752 - 0m42s' },
  { slug: 'r6s-aimbot', match: 'f7TBSCU4VCQ - 1337x752 - 1m57s' },
  { slug: 'r6s-wallhack', match: 'f7TBSCU4VCQ - 1337x752 - 2m06s' },
  { slug: 'r6s-unlock-all', match: 'f7TBSCU4VCQ - 1337x752 - 2m42s' },
  { slug: 'r6s-no-recoil', match: '3sTZNg27KYo - 1337x752 - 0m07s' },
  { slug: 'r6s-drone-hack', match: '3sTZNg27KYo - 1337x752 - 0m36s' },
  { slug: 'r6s-player-esp', match: '3sTZNg27KYo - 1337x752 - 3m44s' },
];

function resolveSource(token) {
  const files = fs.readdirSync(sourceDir);
  const found = files.find((f) => f.includes(token));
  if (!found) {
    throw new Error(`Source image not found for token: ${token}`);
  }
  return path.join(sourceDir, found);
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return;
  }
  for (const entry of fs.readdirSync(dir)) {
    fs.unlinkSync(path.join(dir, entry));
  }
}

async function copyImage(srcPath, destPath) {
  await sharp(srcPath)
    .resize({ width: 1337, height: 752, fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 8 })
    .toFile(destPath);
  console.log(`Copied → ${path.relative(root, destPath)}`);
}

const blogDir = path.join(root, 'public', 'images', 'blog');
const gameplayDir = path.join(root, 'public', 'images', 'gameplay');

emptyDir(blogDir);
emptyDir(gameplayDir);

for (const { slug, match } of blogMappings) {
  await copyImage(resolveSource(match), path.join(blogDir, `${slug}.png`));
}

for (const { slug, match } of gameplayMappings) {
  await copyImage(resolveSource(match), path.join(gameplayDir, `${slug}.png`));
}

console.log('Site images setup complete.');
