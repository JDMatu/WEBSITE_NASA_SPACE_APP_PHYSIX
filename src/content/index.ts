// One entry point for content: `copy(locale)` returns the words in the page language,
// `pending` and `facts` are the same for every language.
import * as en from './site';
import * as es from './site.es';

export { pending, facts } from './site';

export type Locale = 'en' | 'es';
export const locales: Locale[] = ['en', 'es'];

/** The pages of the site. The id is also the URL: /game/, /ai/, ... (and /es/game/, ...). */
export type PageId = keyof typeof en.pages;
/** The menu, in order. Other pages (credits, sources, AI use) are linked from the footer. */
export const menu: PageId[] = ['game', 'ai', 'science', 'evidence', 'classroom', 'team'];
export const pageIds = Object.keys(en.pages) as PageId[];

export function copy(locale: string | undefined) {
  return locale === 'es' ? es : en;
}
