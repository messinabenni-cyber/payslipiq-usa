import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "FICA on Your Paycheck, Social Security + Medicare Explained",
  description: "What is FICA on your paycheck? Plain-English explanation of Social Security tax (6.2%), Medicare tax (1.45%), Additional Medicare Tax. Educational only.",
  alternates: { canonical: '/us/fica-explained' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">What is FICA on your paycheck?</h1>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <p>FICA stands for the <strong>Federal Insurance Contributions Act</strong>. It is the federal payroll tax that funds two programs: Social Security (retirement, disability, survivor benefits) and Medicare (health insurance for people 65+ and certain disabled workers).</p>
        <p>On your pay stub, FICA may appear as a single line or as two separate lines: <strong>Social Security</strong> (6.2%) and <strong>Medicare</strong> (1.45%).</p>
        <h2>The math</h2>
        <ul><li><strong>Social Security:</strong> 6.2% up to the annual wage base.</li><li><strong>Medicare:</strong> 1.45% on all wages.</li><li><strong>Additional Medicare Tax:</strong> 0.9% on wages above $200,000 single / $250,000 married filing jointly. Employee-only.</li></ul>
        <p>Your employer pays an equal Social Security + Medicare amount on your behalf (they do not pay the Additional Medicare Tax).</p>
        <h2>Common questions</h2>
        <h3>Why did Social Security tax stop in November?</h3>
        <p>Once your year-to-date wages exceed the Social Security wage base, the tax stops for the rest of the year. Medicare keeps going.</p>
        <h3>Do 401(k) contributions reduce FICA?</h3>
        <p>No. Pre-tax 401(k) reduces federal income tax withholding, not FICA.</p>
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
