import Link from 'next/link';
import React from 'react';

interface Props {
  href: string;
  label: string;
  /** Optional secondary link shown on wider mobile screens */
  secondaryHref?: string;
  secondaryLabel?: string;
}

/**
 * Mobile-only sticky CTA bar. Pinned to viewport bottom on screens < md.
 * Hidden on md+ to avoid duplicating in-page CTAs.
 *
 * Drop into a tool page (paycheck calculator, pay-stub checker, etc.) just
 * before the closing </main> tag. It uses position: fixed so it does not
 * push page content, and adds bottom padding to <body> via a spacer span.
 */
export function MobileStickyCTA({ href, label, secondaryHref, secondaryLabel }: Props) {
  return (
    <>
      {/* Spacer so bottom content is not covered */}
      <div aria-hidden="true" className="block h-20 md:hidden" />
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] backdrop-blur md:hidden"
        role="region"
        aria-label="Primary action"
      >
        <div className="mx-auto flex max-w-md items-center gap-2">
          <Link
            href={href}
            className="flex-1 rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            data-cta="mobile_sticky_primary"
          >
            {label}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="rounded-md border border-slate-300 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-900 hover:border-slate-400"
              data-cta="mobile_sticky_secondary"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
