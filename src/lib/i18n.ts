/**
 * PayslipIQ i18n primitives.
 *
 * Phase 1 scope: English (default) + Spanish (beta).
 * Routing: each locale has its own URL prefix (/us/ for English, /es/ for Spanish).
 * No client-side machine translation. Every Spanish page is hand-curated.
 *
 * SEO posture: each locale URL is a separately indexable page. hreflang tells
 * Google these are translations of the same content. x-default points to English.
 */

export type Locale = 'en' | 'es';

export interface LocaleMeta {
  code: Locale;
  label: string;        // displayed in switcher
  nativeLabel: string;  // language's own name
  htmlLang: string;     // value for <html lang="...">
  hreflang: string;     // value for <link hreflang="...">
  prefix: '/us' | '/es';
  beta: boolean;
}

export const LOCALES: Record<Locale, LocaleMeta> = {
  en: {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
    htmlLang: 'en-US',
    hreflang: 'en-US',
    prefix: '/us',
    beta: false
  },
  es: {
    code: 'es',
    label: 'Spanish',
    nativeLabel: 'Espanol',
    htmlLang: 'es-US',
    hreflang: 'es-US',
    prefix: '/es',
    beta: true
  }
};

export const DEFAULT_LOCALE: Locale = 'en';
export const COOKIE_NAME = 'payslipiq-locale';
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

/**
 * Spanish pages that exist as hand-curated translations. The switcher links
 * directly to these when the user is on the equivalent English page.
 *
 * Map: English path (without locale prefix) -> Spanish slug (with /es/ prefix).
 * If an English page is not in this map, the switcher falls back to /es/ landing.
 */
export const ES_AVAILABLE_PAGES: Record<string, string> = {
  '/': '/es/',
  '/us/': '/es/',
  '/us': '/es/',
  '/us/paycheck-calculator': '/es/calculadora-de-cheque/',
  '/us/paycheck-calculator/': '/es/calculadora-de-cheque/',
  '/us/find-a-cpa': '/es/encontrar-un-cpa/',
  '/us/find-a-cpa/': '/es/encontrar-un-cpa/',
  '/us/why-is-my-paycheck-lower': '/es/preguntas-frecuentes/',
  '/us/why-is-my-paycheck-lower/': '/es/preguntas-frecuentes/',
  '/us/pay-stub-glossary': '/es/glosario/',
  '/us/pay-stub-glossary/': '/es/glosario/',
  '/us/glossary': '/es/glosario/',
  '/us/glossary/': '/es/glosario/'
};

/** Reverse direction: Spanish path -> English equivalent. */
export const EN_FROM_ES: Record<string, string> = (() => {
  const out: Record<string, string> = { '/es/': '/us/', '/es': '/us/' };
  for (const [en, es] of Object.entries(ES_AVAILABLE_PAGES)) {
    if (en.endsWith('/')) out[es] = en;
  }
  return out;
})();

export function detectLocaleFromPath(pathname: string): Locale {
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  return 'en';
}

/**
 * Given the current pathname and a target locale, return the URL the
 * language switcher should link to.
 *
 * If switching from /us/foo and /es/foo-translated exists, link there.
 * Otherwise link to the locale's landing page so the user is never dropped
 * onto a 404.
 */
export function alternateUrl(currentPathname: string, target: Locale): string {
  const current = detectLocaleFromPath(currentPathname);
  if (current === target) return currentPathname;

  if (target === 'es') {
    return ES_AVAILABLE_PAGES[currentPathname] ?? '/es/';
  }
  // target === 'en'
  return EN_FROM_ES[currentPathname] ?? '/us/';
}

/**
 * Build the hreflang link tags for a given pathname. Returns absolute URLs
 * suitable for <link rel="alternate" hreflang="..." href="..." />.
 *
 * Rules:
 *   - en-US always points to the English equivalent (the page itself if on /us/,
 *     or the EN equivalent if on /es/).
 *   - es-US points to the Spanish equivalent (only if a hand-curated translation
 *     exists, otherwise omitted, so we never advertise a translation we have not
 *     written).
 *   - x-default points to the English page.
 */
export function buildHreflangs(pathname: string, siteOrigin = 'https://payslipiq.com'): Array<{ hreflang: string; href: string }> {
  const current = detectLocaleFromPath(pathname);
  const enPath = current === 'es' ? (EN_FROM_ES[pathname] ?? '/us/') : pathname;
  const esPath = current === 'en' ? ES_AVAILABLE_PAGES[pathname] : pathname;

  const out: Array<{ hreflang: string; href: string }> = [
    { hreflang: 'en-US', href: siteOrigin + enPath },
    { hreflang: 'x-default', href: siteOrigin + enPath }
  ];
  if (esPath) {
    out.push({ hreflang: 'es-US', href: siteOrigin + esPath });
  }
  return out;
}
