import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'public', '_redirects');
const lines = fs.readFileSync(file, 'utf8').split('\n').filter((line) => line.trim() && !line.startsWith('#'));

const isDynamic = (source) => source.includes('*') || /:[A-Za-z]\w*/.test(source);

let seenDynamic = false;
const errors = [];

for (const line of lines) {
  const source = line.trim().split(/\s+/)[0];
  const dynamic = isDynamic(source);
  if (dynamic) seenDynamic = true;
  else if (seenDynamic) {
    errors.push(`Static rule after dynamic rule (Cloudflare Pages limit): ${line}`);
  }
}

if (errors.length) {
  console.error('Redirect validation failed:');
  for (const error of errors) console.error(`  ✗ ${error}`);
  process.exit(1);
}

const dynamicCount = lines.filter((line) => isDynamic(line.trim().split(/\s+/)[0])).length;
console.log(`Redirect validation passed (${lines.length} rules, ${dynamicCount} dynamic).`);
