import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Salary After Tax (US), Take-Home From Annual Salary",
  description: "Estimate take-home pay from an annual US salary. Federal, state, FICA. All 50 states. Educational only.",
  alternates: { canonical: '/us/salary-after-tax' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Salary After Tax (US)</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>Use the paycheck calculator and select <strong>Annual</strong> as your pay frequency. Enter your salary, state, and filing status. The result shows estimated take-home for the year and per pay period.</p>
        <p>For a state-specific salary calculator (with state context), see the state pages such as <a href="/us/california/paycheck-calculator">California</a><a href="/us/new-york/paycheck-calculator">New York</a><a href="/us/texas/paycheck-calculator">Texas</a>or your state from the directory.</p>
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
