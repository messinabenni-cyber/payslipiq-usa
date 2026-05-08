import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Pay Stub Glossary — What Every Abbreviation Means",
  description: "Pay stub abbreviations explained: FED, FICA, OASDI, MED, ST, LOC, 401K, HSA, FSA, YTD, DD. Educational only.",
  alternates: { canonical: '/us/pay-stub-glossary' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Pay Stub Glossary</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <dl className="space-y-3"><dt>FED / FIT</dt><dd>Federal Income Tax</dd><dt>FICA / OASDI</dt><dd>Federal Insurance Contributions Act / Old Age Survivors Disability Insurance — Social Security tax</dd><dt>MED / Medicare</dt><dd>Medicare tax (1.45% + 0.9% above thresholds)</dd><dt>ST / SIT</dt><dd>State Income Tax</dd><dt>LOC / LIT</dt><dd>Local Income Tax</dd><dt>401K</dt><dd>401(k) retirement contribution</dd><dt>HSA</dt><dd>Health Savings Account contribution</dd><dt>FSA</dt><dd>Flexible Spending Account contribution</dd><dt>YTD</dt><dd>Year-to-Date</dd><dt>DD</dt><dd>Direct Deposit</dd></dl>
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
