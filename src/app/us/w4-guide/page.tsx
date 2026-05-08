import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "How to Fill Out a W-4 (2026), Plain-English Guide",
  description: "Step-by-step W-4 guide: filing status, multiple jobs, dependents, deductions, extra withholding. Educational only.",
  alternates: { canonical: '/us/w4-guide' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">How to Fill Out a W-4</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>The W-4 is the form you give your employer to tell them how much federal tax to withhold from each paycheck. It does not change your tax liability, it only changes when you pay it.</p>
        <h2>Step-by-step</h2>
        <ol><li><strong>Step 1:</strong> Personal information + filing status.</li><li><strong>Step 2:</strong> Multiple jobs / spouse works. Use the IRS Tax Withholding Estimator, the multiple-jobs worksheet, or check the box if both jobs pay similarly.</li><li><strong>Step 3:</strong> Dependents. Multiply qualifying children under 17 by $2,000, other dependents by $500.</li><li><strong>Step 4(a):</strong> Other income (interest, dividends, retirement), to increase withholding.</li><li><strong>Step 4(b):</strong> Deductions, itemizing? Use the worksheet.</li><li><strong>Step 4(c):</strong> Extra withholding, flat dollar amount per pay period.</li><li><strong>Step 5:</strong> Sign and date.</li></ol>
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
