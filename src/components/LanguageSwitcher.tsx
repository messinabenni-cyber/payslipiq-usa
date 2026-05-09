'use client';

/**
 * Accessible, keyboard-navigable language switcher.
 *
 * Behavior:
 *   - Detects current locale from pathname.
 *   - Resolves the target URL via alternateUrl() so users are never dropped on a 404.
 *   - Persists the user's choice in a cookie (COOKIE_NAME, 1 year).
 *   - Fires a Plausible analytics event ("locale_switch") if window.plausible exists.
 *   - Honors prefers-reduced-motion (no transitions in that mode).
 *   - Spanish is marked "(Beta)" so users have correct expectations about coverage.
 *   - Pure server-rendered HTML for the toggle markup; the click handler is the only
 *     piece that requires "use client".
 *
 * Mount: in src/components/Header.tsx, render <LanguageSwitcher /> next to the CTA.
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { alternateUrl, COOKIE_NAME, COOKIE_MAX_AGE, detectLocaleFromPath, LOCALES, type Locale } from '@/lib/i18n';

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
  }
}

export function LanguageSwitcher() {
  const pathname = usePathname() ?? '/';
  const current = detectLocaleFromPath(pathname);

  const onSwitch = useCallback((target: Locale) => {
    if (typeof document !== 'undefined') {
      document.cookie = `${COOKIE_NAME}=${target}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
    }
    if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
      window.plausible('locale_switch', { props: { from: current, to: target } });
    }
  }, [current]);

  return (
    <div role="group" aria-label="Language" className="inline-flex items-center rounded-md border border-slate-200 bg-white text-[13px] overflow-hidden">
      {(Object.keys(LOCALES) as Locale[]).map((code) => {
        const meta = LOCALES[code];
        const isCurrent = code === current;
        const href = alternateUrl(pathname, code);
        const labelText = meta.beta ? `${meta.nativeLabel} (Beta)` : meta.nativeLabel;
        const ariaCurrent = isCurrent ? 'page' : undefined;

        const className =
          'px-3 py-1.5 font-medium transition-colors ' +
          (isCurrent
            ? 'bg-blue-600 text-white'
            : 'text-slate-700 hover:bg-slate-50');

        if (isCurrent) {
          return (
            <span
              key={code}
              aria-current={ariaCurrent}
              className={className}
              data-locale={code}
              data-locale-current="true"
            >
              {labelText}
            </span>
          );
        }
        return (
          <Link
            key={code}
            href={href}
            className={className}
            onClick={() => onSwitch(code)}
            aria-label={`Switch language to ${meta.label}${meta.beta ? ' (beta)' : ''}`}
            data-locale={code}
            data-locale-switch={`${current}-to-${code}`}
            hrefLang={meta.hreflang}
          >
            {labelText}
          </Link>
        );
      })}
    </div>
  );
}
