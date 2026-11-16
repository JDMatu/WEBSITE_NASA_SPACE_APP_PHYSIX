/** Prefixes an internal path with the configured base path and the language (Spanish lives under /es/). */
export function url(path: string, locale: string | undefined = 'en'): string {
  if (path.startsWith('#')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const lang = locale === 'es' ? '/es' : '';
  return `${base}${lang}/${path.replace(/^\//, '')}`;
}

/** The same page in another language: strips the base path and any /es prefix, then rebuilds. */
export function inLocale(pathname: string, locale: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const rel = pathname.slice(base.length).replace(/^\/es(?=\/|$)/, '') || '/';
  // The not-found page exists once; its language switch leads to the home page.
  return url(/^\/404/.test(rel) ? '/' : rel, locale);
}

/** A file in /public: base path only, never a language prefix. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

const numberLocale = (locale: string | undefined) => (locale === 'es' ? 'es' : 'en-US');

/** Formats a number for the page language (decimal comma in Spanish). */
export function num(value: number, locale: string | undefined = 'en', digits?: number): string {
  return value.toLocaleString(numberLocale(locale), digits === undefined ? {} : { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

/** Replaces {key} placeholders in a content string. Numbers are formatted for the page language. */
export function fill(text: string, values: Record<string, unknown>, locale: string | undefined = 'en'): string {
  return text.replace(/\{(\w+)\}/g, (_, key: string) => {
    const v = values[key];
    return typeof v === 'number' ? num(v, locale) : typeof v === 'string' ? v : `{${key}}`;
  });
}

/** An ISO date (2026-11-14) written out in the page language. */
export function longDate(iso: string, locale: string | undefined = 'en'): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(numberLocale(locale), { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

/** Internal site paths get the base prefix; external URLs pass through. */
export function href(link: string): string {
  return /^(https?:|mailto:)/.test(link) ? link : asset(link);
}
