// Picks the copy for a language. `pending` and `facts` are shared by every language and always
// come from site.ts, so a link or a number is still changed in one place.
import * as en from './site';
import * as es from './site.es';

export { pending, facts } from './site';
export type Locale = 'en' | 'es';
export const locales: Locale[] = ['en', 'es'];

export function copy(locale: string | undefined) {
  return locale === 'es' ? es : en;
}
