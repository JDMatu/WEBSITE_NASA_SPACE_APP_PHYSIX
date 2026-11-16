// One entry point for content: `copy(locale)` returns the words in the page language,
// `pending` and `facts` are the same for every language.
import * as en from './site';
import * as es from './site.es';

export { pending, facts } from './site';

export type Locale = 'en' | 'es';
export const locales: Locale[] = ['en', 'es'];

/** The pages of the site. `home` is the root; every other id is also its URL: /science/, /about/, ... */
export type PageId = keyof typeof en.pages;
/** The menu, in order. Credits, sources and AI use are linked from the footer. */
export const menu: PageId[] = ['home', 'science', 'about'];
/** Pages built by src/pages/[page].astro (everything except the home page). */
export const innerPages = (Object.keys(en.pages) as PageId[]).filter((id) => id !== 'home');
/** The path of a page, before the language and base prefixes. */
export const pagePath = (id: PageId) => (id === 'home' ? '/' : `/${id}/`);

export function copy(locale: string | undefined) {
  return locale === 'es' ? es : en;
}
