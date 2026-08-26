import type { Metadata } from 'next';
import { Suspense } from 'react';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { SiteSearch } from '@/components/SiteSearch';

export const metadata: Metadata = {
  title: 'Search · PayslipIQ',
  description:
    'Search PayslipIQ for paycheck calculators, tax explainers, deduction guides, and pay-stub terms.',
  alternates: { canonical: 'https://payslipiq.com/us/search' },
  // Search results pages add no unique indexable value; keep them out of the index.
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">
        Search
      </div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 piq-display">
        Search
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Find a calculator, tax explainer, deduction guide, or pay-stub term across PayslipIQ.
      </p>

      <Suspense fallback={<div className="mt-8 h-12 w-full rounded-lg bg-slate-100" />}>
        <SiteSearch />
      </Suspense>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
