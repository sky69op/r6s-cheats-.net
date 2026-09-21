import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const imagesDir = path.join(publicDir, 'images');
const heroDir = path.join(imagesDir, 'hero');

const brandSources = path.join(root, 'scripts', 'brand-sources');
const heroDarkSource = path.join(brandSources, 'hero-operator-dark.jpg');
const heroLightSource = path.join(brandSources, 'hero-operator-light.jpg');
const faviconSource = path.join(brandSources, 'favicon.jpg');

async function writeTrimmedHero(inputPath, outputPath, options) {
  const trimmedPath = `${outputPath}.trim.png`;
  await removeBackground(inputPath, outputPath, options);
  await sharp(outputPath).trim({ threshold: 8 }).png().toFile(trimmedPath);
  fs.renameSync(trimmedPath, outputPath);
}

function isDarkBackgroundPixel(r, g, b, threshold) {
  return Math.max(r, g, b) <= threshold;
}

function isLightBackgroundPixel(r, g, b, threshold) {
  return Math.min(r, g, b) >= 255 - threshold;
}

function detectBackgroundMode(data, width, height) {
  const samples = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
    [Math.floor(width / 2), 0],
    [Math.floor(width / 2), height - 1],
  ];

  let lightScore = 0;
  let darkScore = 0;

  for (const [x, y] of samples) {
    const offset = (y * width + x) * 4;
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    const avg = (r + g + b) / 3;
    if (avg >= 210) lightScore += 1;
    if (avg <= 45) darkScore += 1;
  }

  return lightScore >= darkScore ? 'light' : 'dark';
}

function fillInternalHoles(data, width, height) {
  const total = width * height;
  const exterior = new Uint8Array(total);
  const queue = [];

  const pushIfExterior = (x, y) => {
    const idx = y * width + x;
    if (exterior[idx]) return;
    if (data[idx * 4 + 3] > 8) return;
    exterior[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < width; x += 1) {
    pushIfExterior(x, 0);
    pushIfExterior(x, height - 1);
  }
  for (let y = 0; y < height; y += 1) {
    pushIfExterior(0, y);
    pushIfExterior(width - 1, y);
  }

  while (queue.length) {
    const idx = queue.pop();
    const x = idx % width;
    const y = (idx - x) / width;

    if (x > 0) pushIfExterior(x - 1, y);
    if (x < width - 1) pushIfExterior(x + 1, y);
    if (y > 0) pushIfExterior(x, y - 1);
    if (y < height - 1) pushIfExterior(x, y + 1);
  }

  for (let idx = 0; idx < total; idx += 1) {
    if (exterior[idx] || data[idx * 4 + 3] > 8) continue;

    let opaqueNeighbors = 0;
    const x = idx % width;
    const y = (idx - x) / width;

    for (let ny = Math.max(0, y - 1); ny <= Math.min(height - 1, y + 1); ny += 1) {
      for (let nx = Math.max(0, x - 1); nx <= Math.min(width - 1, x + 1); nx += 1) {
        if (data[(ny * width + nx) * 4 + 3] > 180) opaqueNeighbors += 1;
      }
    }

    if (opaqueNeighbors >= 5) {
      const offset = idx * 4;
      data[offset + 3] = 255;
    }
  }
}

function removeBackgroundFromEdges(data, width, height, threshold, feather, mode = 'dark') {
  const total = width * height;
  const visited = new Uint8Array(total);
  const queue = [];
  const isBackground =
    mode === 'light'
      ? (r, g, b) => isLightBackgroundPixel(r, g, b, threshold)
      : (r, g, b) => isDarkBackgroundPixel(r, g, b, threshold);

  const pushIfBackground = (x, y) => {
    const idx = y * width + x;
    if (visited[idx]) return;
    const offset = idx * 4;
    if (!isBackground(data[offset], data[offset + 1], data[offset + 2])) return;
    visited[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < width; x += 1) {
    pushIfBackground(x, 0);
    pushIfBackground(x, height - 1);
  }
  for (let y = 0; y < height; y += 1) {
    pushIfBackground(0, y);
    pushIfBackground(width - 1, y);
  }

  while (queue.length) {
    const idx = queue.pop();
    const x = idx % width;
    const y = (idx - x) / width;

    if (x > 0) pushIfBackground(x - 1, y);
    if (x < width - 1) pushIfBackground(x + 1, y);
    if (y > 0) pushIfBackground(x, y - 1);
    if (y < height - 1) pushIfBackground(x, y + 1);
  }

  for (let idx = 0; idx < total; idx += 1) {
    if (!visited[idx]) continue;
    const offset = idx * 4;
    data[offset + 3] = 0;
  }

  if (feather <= 0) return;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = y * width + x;
      if (visited[idx]) continue;

      const offset = idx * 4;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      const edgeMetric = mode === 'light' ? Math.min(r, g, b) : Math.max(r, g, b);
      const edgeLimit = mode === 'light' ? 255 - threshold - feather : threshold + feather;
      const edgeStart = mode === 'light' ? 255 - threshold : threshold;
      if (mode === 'light' ? edgeMetric < edgeLimit : edgeMetric > edgeLimit) continue;

      let touchesBackground = false;
      for (let ny = Math.max(0, y - 1); ny <= Math.min(height - 1, y + 1) && !touchesBackground; ny += 1) {
        for (let nx = Math.max(0, x - 1); nx <= Math.min(width - 1, x + 1); nx += 1) {
          if (visited[ny * width + nx]) {
            touchesBackground = true;
            break;
          }
        }
      }

      if (!touchesBackground) continue;

      const t = mode === 'light' ? (edgeStart - edgeMetric) / feather : (edgeMetric - edgeStart) / feather;
      data[offset + 3] = Math.round(Math.min(255, data[offset + 3] * Math.max(0, Math.min(1, t))));
    }
  }
}

function removeInternalLightIslands(data, width, height, threshold) {
  const total = width * height;
  const exterior = new Uint8Array(total);
  const queue = [];

  const pushIfLight = (x, y) => {
    const idx = y * width + x;
    if (exterior[idx]) return;
    const offset = idx * 4;
    if (!isLightBackgroundPixel(data[offset], data[offset + 1], data[offset + 2], threshold)) return;
    exterior[idx] = 1;
    queue.push(idx);
  };

  for (let x = 0; x < width; x += 1) {
    pushIfLight(x, 0);
    pushIfLight(x, height - 1);
  }
  for (let y = 0; y < height; y += 1) {
    pushIfLight(0, y);
    pushIfLight(width - 1, y);
  }

  while (queue.length) {
    const idx = queue.pop();
    const x = idx % width;
    const y = (idx - x) / width;

    if (x > 0) pushIfLight(x - 1, y);
    if (x < width - 1) pushIfLight(x + 1, y);
    if (y > 0) pushIfLight(x, y - 1);
    if (y < height - 1) pushIfLight(x, y + 1);
  }

  for (let idx = 0; idx < total; idx += 1) {
    if (exterior[idx]) continue;
    const offset = idx * 4;
    if (!isLightBackgroundPixel(data[offset], data[offset + 1], data[offset + 2], threshold)) continue;
    data[offset + 3] = 0;
  }
}

function defringeBackground(data, width, height, bgMode, threshold) {
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const isBg =
      bgMode === 'light'
        ? isLightBackgroundPixel(r, g, b, threshold)
        : isDarkBackgroundPixel(r, g, b, threshold);
    if (isBg) data[i + 3] = 0;
  }
}

function removeEnclosedPureBlack(data, width, height, threshold = 10) {
  const total = width * height;
  const exterior = new Uint8Array(total);
  const queue = [];

  const pushIfExterior = (x, y) => {
    const idx = y * width + x;
    if (exterior[idx]) return;
    const offset = idx * 4;
    if (data[offset + 3] === 0) {
      exterior[idx] = 1;
      queue.push(idx);
      return;
    }
    if (Math.max(data[offset], data[offset + 1], data[offset + 2]) <= threshold) {
      exterior[idx] = 1;
      queue.push(idx);
    }
  };

  for (let idx = 0; idx < total; idx += 1) {
    if (data[idx * 4 + 3] !== 0) continue;
    pushIfExterior(idx % width, Math.floor(idx / width));
  }

  for (let x = 0; x < width; x += 1) {
    pushIfExterior(x, 0);
    pushIfExterior(x, height - 1);
  }
  for (let y = 0; y < height; y += 1) {
    pushIfExterior(0, y);
    pushIfExterior(width - 1, y);
  }

  while (queue.length) {
    const idx = queue.pop();
    const x = idx % width;
    const y = (idx - x) / width;

    if (x > 0) pushIfExterior(x - 1, y);
    if (x < width - 1) pushIfExterior(x + 1, y);
    if (y > 0) pushIfExterior(x, y - 1);
    if (y < height - 1) pushIfExterior(x, y + 1);
  }

  for (let idx = 0; idx < total; idx += 1) {
    if (data[idx * 4 + 3] === 0) continue;
    const offset = idx * 4;
    if (exterior[idx]) continue;
    if (Math.max(data[offset], data[offset + 1], data[offset + 2]) <= threshold) {
      data[offset + 3] = 0;
    }
  }
}

function removeLightSpeckles(data) {
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 20) continue;

    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max - min;

    if (min >= 188 && saturation <= 42) {
      data[i + 3] = 0;
    }
  }
}

async function removeBackground(
  inputPath,
  outputPath,
  { threshold = 28, feather = 18, bgMode = 'auto', removeEnclosedBlack = false } = {},
) {
  const img = sharp(inputPath);
  const { width, height } = await img.metadata();
  const { data } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const resolvedMode = bgMode === 'auto' ? detectBackgroundMode(data, width, height) : bgMode;

  removeBackgroundFromEdges(data, width, height, threshold, feather, resolvedMode);
  if (resolvedMode === 'light') {
    removeInternalLightIslands(data, width, height, threshold + 6);
  }
  if (removeEnclosedBlack) {
    removeEnclosedPureBlack(data, width, height, 12);
  }
  fillInternalHoles(data, width, height);
  defringeBackground(data, width, height, resolvedMode, threshold + 4);
  if (resolvedMode === 'light') {
    removeLightSpeckles(data);
    fillInternalHoles(data, width, height);
  }

  await sharp(data, { raw: { width, height, channels: 4 } }).png().toFile(outputPath);
  console.log(`Wrote ${path.relative(root, outputPath)} (${resolvedMode} background)`);
}

async function generateFavicons(sourcePath) {
  const logoPng = path.join(publicDir, 'logo.png');

  await sharp(sourcePath)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(logoPng);
  console.log(`Wrote ${path.relative(root, logoPng)}`);

  const transparentFit = { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } };

  await sharp(logoPng).resize(180, 180, transparentFit).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(logoPng).resize(32, 32, transparentFit).png().toFile(path.join(publicDir, 'favicon-32.png'));
  await sharp(logoPng).resize(16, 16, transparentFit).png().toFile(path.join(publicDir, 'favicon-16.png'));
  await sharp(logoPng).resize(48, 48, transparentFit).png().toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Wrote apple-touch-icon.png, favicon-16.png, favicon-32.png, favicon.ico');
}

export { removeBackground };

async function main() {
  fs.mkdirSync(heroDir, { recursive: true });

  await removeBackground(heroDarkSource, path.join(heroDir, 'hero-operator-dark.png'), {
    bgMode: 'dark',
    threshold: 20,
    feather: 6,
  });
  await removeBackground(heroLightSource, path.join(heroDir, 'hero-operator-light.png'), {
    bgMode: 'light',
    threshold: 24,
    feather: 8,
  });

  const faviconProcessed = path.join(publicDir, 'favicon-source.png');
  await removeBackground(faviconSource, faviconProcessed, {
    bgMode: 'dark',
    threshold: 34,
    feather: 18,
    removeEnclosedBlack: true,
  });
  await generateFavicons(faviconProcessed);
  fs.unlinkSync(faviconProcessed);

  console.log('Brand image processing complete.');
}

const isDirectRun =
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));

if (isDirectRun) {
  await main();
}
