/** Prefixes an internal path with the configured base path (see astro.config.mjs). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path.startsWith('#')) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Replaces {key} placeholders in a content string. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key: string) => {
    const v = values[key];
    return v === undefined ? `{${key}}` : typeof v === 'number' ? v.toLocaleString('en-US') : v;
  });
}

/** Internal site paths get the base prefix; external URLs pass through. */
export function href(link: string): string {
  return /^(https?:|mailto:)/.test(link) ? link : url(link);
}
