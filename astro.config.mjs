import { defineConfig } from 'astro/config';

// Static output. Two optional environment variables make the build portable between hosts:
//   SITE_URL   the public origin, e.g. https://physix.example.org (used for canonical and share tags)
//   BASE_PATH  the sub-path when the site is not at the root, e.g. /physix-site (GitHub Pages project sites)
export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
});
