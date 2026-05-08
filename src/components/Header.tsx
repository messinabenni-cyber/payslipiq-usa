import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-slate-900">PayslipIQ</span>
          <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">USA</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/us/pay-stub-checker" className="hover:text-slate-900">Pay Stub Checker</Link>
          <Link href="/us/paycheck-calculator" className="hover:text-slate-900">Calculator</Link>
          <Link href="/us/learn" className="hover:text-slate-900">Learn</Link>
          <Link href="/trust" className="hover:text-slate-900">Trust</Link>
        </nav>
        <Link
          href="/us/pay-stub-checker"
          className="hidden rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 md:inline-block"
          data-cta="header_primary"
        >
          Check My Pay Stub →
        </Link>
      </div>
    </header>
  );
}
