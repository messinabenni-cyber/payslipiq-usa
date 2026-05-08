import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Medicare Tax on Your Paycheck (1.45% + 0.9%)",
  description: "Medicare tax explained: 1.45% rate on all wages, plus 0.9% Additional Medicare Tax above 00,000 single / 50,000 MFJ. Educational only.",
  alternates: { canonical: '/us/medicare-tax' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Medicare Tax on Your Paycheck</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>Medicare tax funds Medicare — the federal health insurance program for people 65+ and certain disabled workers.</p>
        <ul><li><strong>Base rate:</strong> 1.45% (employee side, all wages, no cap)</li><li><strong>Additional Medicare Tax:</strong> 0.9% on wages above $200,000 (single) or $250,000 (married filing jointly). Employee-only — no employer match.</li><li><strong>Employer match:</strong> 1.45% on the base rate</li></ul>
      </article>
      <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Related tools</p>
        <ul className="mt-2 space-y-1 text-sm text-blue-700">
          <li><Link href="/us/paycheck-calculator">Paycheck calculator →</Link></li>
          <li><Link href="/us/pay-stub-checker">AI pay stub explainer →</Link></li>
          <li><Link href="/us/learn">All paycheck topics →</Link></li>
        </ul>
      </div>
    </main>
  );
}
