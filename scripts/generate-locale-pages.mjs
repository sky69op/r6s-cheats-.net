import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'src', 'pages');
const locales = ['ru', 'de', 'es', 'fr', 'pt'];

const skipNames = new Set(['go', 'products', ...locales]);

function adjustImports(content) {
  return content.replace(/from '(\.\.\/[^']+)'/g, (_match, importPath) => {
    return `from '../${importPath}'`;
  });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (skipNames.has(entry.name)) continue;
    if (entry.name === '404.astro') continue;

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.name.endsWith('.astro')) {
      const content = fs.readFileSync(srcPath, 'utf8');
      fs.writeFileSync(destPath, adjustImports(content), 'utf8');
    }
  }
}

for (const locale of locales) {
  const target = path.join(pagesDir, locale);
  fs.rmSync(target, { recursive: true, force: true });
  copyDir(pagesDir, target);
  console.log(`Generated locale pages → src/pages/${locale}/`);
}
