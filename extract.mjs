import fs from 'fs';

const html = fs.readFileSync('../Cloner.html', 'utf8');

// Extract hero slides
const slideRegex = /<article class="hero-slide[^"]*"[^>]*data-slide="(\d+)"[^>]*>[\s\S]*?<img src="\.\/Cloner_files\/([^"]+)"[^>]*alt="([^"]*)"[\s\S]*?<h3[^>]*>([^<]+)<[\s\S]*?<p[^>]*>([^<]+)</g;
const slides = [];
let m;
while ((m = slideRegex.exec(html)) !== null) {
  slides.push({ index: +m[1], image: m[2], alt: m[3], title: m[4].trim(), desc: m[5].trim() });
}
console.log('Slides found:', slides.length);
fs.writeFileSync('./extracted-slides.json', JSON.stringify(slides, null, 2));

// FAQ - details blocks
const faqRegex = /<details[^>]*>[\s\S]*?<summary[^>]*>[\s\S]*?<span[^>]*>(\d+)<[\s\S]*?<span[^>]*>([^<]+)<[\s\S]*?<div[^>]*class="[^"]*faq-answer[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
const faqs = [];
while ((m = faqRegex.exec(html)) !== null) {
  const answer = m[3].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  faqs.push({ num: m[1], question: m[2].trim(), answer });
}
console.log('FAQs found:', faqs.length);
fs.writeFileSync('./extracted-faqs.json', JSON.stringify(faqs, null, 2));

// Nav links from header
const navRegex = /<a href="([^"]+)" class="nav-link[^"]*"[^>]*>([^<]+)</g;
const navLinks = [];
while ((m = navRegex.exec(html)) !== null) {
  navLinks.push({ href: m[1], label: m[2].trim() });
}
console.log('Nav links:', navLinks.length);
fs.writeFileSync('./extracted-nav.json', JSON.stringify(navLinks.slice(0, 12), null, 2));
