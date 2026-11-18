import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Static output. Two optional environment variables make the build portable between hosts:
//   SITE_URL   the public origin, e.g. https://physix.example.org (used for canonical and share tags)
//   BASE_PATH  the sub-path when the site is not at the root, e.g. /physix-site (GitHub Pages project sites)
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  // English at the root, Spanish under /es/. Components read the language from the URL.
  i18n: { locales: ['en', 'es'], defaultLocale: 'en' },
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
