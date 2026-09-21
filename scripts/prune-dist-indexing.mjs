import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const notFound = path.join(dist, '404.html');
if (fs.existsSync(notFound)) {
  const html = fs.readFileSync(notFound, 'utf8');
  const issues = [];
  if (html.includes('rel="canonical"')) issues.push('canonical tag');
  if (html.includes('hreflang=')) issues.push('hreflang alternates');
  if (html.includes('index, follow')) issues.push('indexable robots directive');
  if (issues.length) {
    console.error(`404.html indexing issues: ${issues.join(', ')}`);
    process.exit(1);
  }
  console.log('404.html indexing check passed (noindex, no canonical).');
}
