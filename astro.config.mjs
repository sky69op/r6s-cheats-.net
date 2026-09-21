import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://r6scheats.net',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de', 'es', 'fr', 'pt'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          ru: 'ru-RU',
          de: 'de-DE',
          es: 'es-ES',
          fr: 'fr-FR',
          pt: 'pt-PT',
        },
      },
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
      entryLimit: 50_000,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
