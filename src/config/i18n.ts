export const defaultLocale = 'en' as const;

// Future locales, added one at a time when translations exist:
// 'zh-hans', 'ja', 'ko', 'pt-br', 'de', 'ru'
export const locales = ['en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  en: { short: 'EN', name: 'English' },
  es: { short: 'ES', name: 'Español' },
};

// ---------------------------------------------------------------------------
// Path helpers. All of them accept REAL URLs (with or without a locale
// prefix, with or without a trailing slash) and are safe to call repeatedly
// on their own output.
// ---------------------------------------------------------------------------

// '/es/media/' → '/es/media'   '/es' → '/es'   '/' → '/'   '//' → '/'
export function normalizePath(path: string): string {
  if (path === '/') return '/';
  const trimmed = path.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

// Remove a locale prefix if present:
// '/es' → '/'   '/es/media' → '/media'   '/media' → '/media'
// Precise matching: '/esports' is NOT treated as a locale prefix.
export function stripLocale(path: string): string {
  const p = normalizePath(path);
  for (const loc of locales) {
    if (loc === defaultLocale) continue;
    if (p === `/${loc}`) return '/';
    if (p.startsWith(`/${loc}/`)) return p.slice(`/${loc}`.length);
  }
  return p;
}

// Logical path → localized URL. Idempotent — feeding it an already-localized
// path returns that same path, never '/es/es/...':
// ('es', '/media') → '/es/media'    ('en', '/media') → '/media'
// ('es', '/')      → '/es'          ('en', '/es/media') → '/media'
export function localizedPath(locale: Locale, path: string): string {
  const base = stripLocale(path);
  if (locale === defaultLocale) return base;
  return base === '/' ? `/${locale}` : `/${locale}${base}`;
}

// The same page in the other language (two-locale era — becomes a list of
// links per locale when a third language arrives):
// ('es', '/es')       → '/'         ('en', '/')      → '/es'
// ('es', '/es/media') → '/media'    ('en', '/media') → '/es/media'
export function alternatePath(from: Locale, path: string): string {
  const to: Locale = from === 'en' ? 'es' : 'en';
  return localizedPath(to, path);
}