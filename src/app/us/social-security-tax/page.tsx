import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Social Security Tax on Your Paycheck (6.2%)",
  description: "Social Security tax (OASDI) explained: 6.2% rate, annual wage base, what happens when you hit the cap. Educational only.",
  alternates: { canonical: '/us/social-security-tax' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Social Security Tax on Your Paycheck</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>Social Security tax (also called OASDI — Old Age, Survivors, and Disability Insurance) is a federal payroll tax that funds the Social Security program.</p>
        <ul><li><strong>Rate:</strong> 6.2% (employee side)</li><li><strong>Wage base:</strong> Annually set by the Social Security Administration</li><li><strong>Employer match:</strong> Yes — employer pays an equal 6.2%</li></ul>
        <p>Once your year-to-date wages exceed the wage base in a calendar year, Social Security tax stops being withheld.</p>
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
