import fs from 'node:fs';
import path from 'node:path';
import { GO_PATH_REDIRECTS } from '../src/config/affiliate-data.mjs';

const lines = Object.entries(GO_PATH_REDIRECTS).flatMap(([slug, destination]) => [
  `/go/${slug}  ${destination}  302`,
  `/go/${slug}/  ${destination}  302`,
]);

const outPath = path.resolve('public/_redirects');
fs.writeFileSync(outPath, `${lines.join('\n')}\n`, 'utf8');
console.log(`Wrote ${outPath} (${lines.length} rules)`);
