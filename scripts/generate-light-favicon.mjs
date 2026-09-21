import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { generateHeaderLogoVariants, removeBackground } from './process-brand-images.mjs';

export async function generateLightFavicon() {
  const root = process.cwd();
  const publicDir = path.join(root, 'public');
  const lightSource = path.join(root, 'scripts', 'brand-sources', 'favicon-light.jpg');
  const processedPath = path.join(publicDir, 'favicon-light-source.png');
  const logoLight = path.join(publicDir, 'logo-light.png');
  const transparentFit = { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } };

  if (!fs.existsSync(lightSource)) return;

  await removeBackground(lightSource, processedPath, {
    bgMode: 'light',
    threshold: 24,
    feather: 8,
  });

  await sharp(processedPath)
    .resize(512, 512, transparentFit)
    .png({ compressionLevel: 9, palette: true })
    .toFile(logoLight);

  await generateHeaderLogoVariants(logoLight, 'logo-light');

  await sharp(logoLight).resize(32, 32, transparentFit).png().toFile(path.join(publicDir, 'favicon-32-light.png'));
  await sharp(logoLight).resize(16, 16, transparentFit).png().toFile(path.join(publicDir, 'favicon-16-light.png'));
  await sharp(logoLight).resize(48, 48, transparentFit).png().toFile(path.join(publicDir, 'favicon-light.ico'));

  if (fs.existsSync(processedPath)) fs.unlinkSync(processedPath);

  console.log('Wrote logo-light.png, favicon-32-light.png, favicon-16-light.png, favicon-light.ico');
}

const isDirectRun =
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isDirectRun) {
  await generateLightFavicon();
}
