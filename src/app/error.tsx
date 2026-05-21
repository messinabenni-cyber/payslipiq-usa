'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log to console; production should pipe through to Sentry once SENTRY_DSN env is set.
    console.error('global error', error);
  }, [error]);

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-red-600">Error</div>
      <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900 piq-display">Something went sideways.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        An unexpected error came up while loading this page. Reload to try again, or go back to the homepage.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button onClick={reset} className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Try again
        </button>
        <Link href="/us" className="inline-flex items-center justify-center bg-white text-slate-900 px-5 py-3 rounded-lg font-semibold ring-1 ring-slate-300 hover:bg-slate-50">
          Go to homepage
        </Link>
      </div>

      {error.digest && (
        <p className="mt-12 text-[12px] text-slate-500 font-mono">
          Error ID: {error.digest}
        </p>
      )}

      <p className="mt-4 text-[14px] text-slate-600">
        If this keeps happening, email{' '}
        <a href="mailto:hello@payslipiq.com" className="text-blue-600 hover:underline">hello@payslipiq.com</a>{' '}
        with the Error ID above and a brief description.
      </p>
    </main>
  );
}
