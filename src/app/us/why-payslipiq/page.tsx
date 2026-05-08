import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ReviewedBy } from '@/components/ReviewedBy';

export const metadata: Metadata = {
  title: 'Why PayslipIQ? | PayslipIQ',
  description: 'How PayslipIQ compares to SmartAsset, NerdWallet, ADP, and a CPA. Worker-first, plain-English, educational only.',
  alternates: { canonical: 'https://payslipiq.com/us/why-payslipiq/' }
};

const COMPARISON = [
  {
    feature: 'Plain-English pay stub explainer',
    piq: true,
    smartasset: false,
    nerdwallet: false,
    adp: false,
    cpa: 'Yes, but billed by the hour',
  },
  {
    feature: 'Free 50-state paycheck calculator',
    piq: true,
    smartasset: true,
    nerdwallet: true,
    adp: false,
    cpa: 'Not their job',
  },
  {
    feature: 'AI-assisted pay stub upload',
    piq: 'Yes, with no-training agreement',
    smartasset: false,
    nerdwallet: false,
    adp: 'Internal to ADP customers only',
    cpa: 'Manual review, hourly rate',
  },
  {
    feature: 'State-specific narratives (50 + DC)',
    piq: 'Yes, hand-written, dated',
    smartasset: 'Generic',
    nerdwallet: 'Generic',
    adp: false,
    cpa: 'Per consult',
  },
  {
    feature: 'Editorial review on tax content',
    piq: 'Yes, named reviewer + last-reviewed dates',
    smartasset: 'Some',
    nerdwallet: 'Some',
    adp: 'In-product, not public',
    cpa: 'Yes, by definition',
  },
  {
    feature: 'No advice language',
    piq: 'Strict, educational only',
    smartasset: 'Mixed',
    nerdwallet: 'Mixed',
    adp: 'Mixed',
    cpa: 'Yes, advice is the product',
  },
  {
    feature: 'No ad networks',
    piq: 'Yes',
    smartasset: false,
    nerdwallet: false,
    adp: 'Yes',
    cpa: 'Yes',
  },
  {
    feature: 'No account required for the explainer',
    piq: true,
    smartasset: true,
    nerdwallet: 'Some tools',
    adp: false,
    cpa: 'Engagement letter required',
  }
];

const Cell = ({ value }: { value: boolean | string }) => {
  if (value === true) return <td className="px-4 py-3 text-emerald-700 font-semibold">Yes</td>;
  if (value === false) return <td className="px-4 py-3 text-slate-400">No</td>;
  return <td className="px-4 py-3 text-slate-700">{value}</td>;
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' },
        { name: 'Why PayslipIQ', url: 'https://payslipiq.com/us/why-payslipiq/' }
      ]} />
      <ArticleSchema
        headline="Why PayslipIQ"
        description="How PayslipIQ compares to SmartAsset, NerdWallet, ADP, and a CPA on pay stub help and paycheck explanation."
        url="https://payslipiq.com/us/why-payslipiq/"
      />

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Compare</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 piq-display">
        Why PayslipIQ.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Most paycheck tools are built for employers, lead-gen networks, or ad inventory. PayslipIQ is built for the worker reading a stub and asking a question. The table below is the honest comparison against the alternatives most workers reach for first.
      </p>

      <ReviewedBy />

      <section className="mt-10 overflow-x-auto">
        <table className="min-w-full border-collapse text-[14px]">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-4 py-3 text-left text-[12px] uppercase tracking-[0.14em] font-semibold text-slate-500">Feature</th>
              <th className="px-4 py-3 text-left text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">PayslipIQ</th>
              <th className="px-4 py-3 text-left text-[12px] uppercase tracking-[0.14em] font-semibold text-slate-500">SmartAsset</th>
              <th className="px-4 py-3 text-left text-[12px] uppercase tracking-[0.14em] font-semibold text-slate-500">NerdWallet</th>
              <th className="px-4 py-3 text-left text-[12px] uppercase tracking-[0.14em] font-semibold text-slate-500">ADP</th>
              <th className="px-4 py-3 text-left text-[12px] uppercase tracking-[0.14em] font-semibold text-slate-500">CPA</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row, i) => (
              <tr key={i} className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-900">{row.feature}</td>
                <Cell value={row.piq} />
                <Cell value={row.smartasset} />
                <Cell value={row.nerdwallet} />
                <Cell value={row.adp} />
                <Cell value={row.cpa} />
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-12 prose prose-slate max-w-none">
        <h2>What PayslipIQ is good for</h2>
        <p>Reading a stub line by line. Spotting the question to ask payroll. Comparing your pay period against the prior one. Sanity-checking a bonus, an overtime week, a state move, a benefits change. Educational only, not advice.</p>

        <h2>What PayslipIQ is not for</h2>
        <ul>
          <li>Filing a tax return. Use a tax preparer or self-file software (TurboTax, FreeTaxUSA, IRS Free File).</li>
          <li>Disputing an employer error formally. PayslipIQ surfaces the question, you take it to payroll or a labor-law attorney.</li>
          <li>Running payroll for a business. That is what ADP, Gusto, Paychex, and Rippling do.</li>
          <li>Investment, retirement, or wealth-management advice. Talk to a fiduciary financial advisor.</li>
          <li>Anything legally binding. PayslipIQ outputs are not consumer reports under the FCRA.</li>
        </ul>

        <h2>Why we are stricter on advice language than the alternatives</h2>
        <p>Pay-stub questions live in a YMYL (Your Money, Your Life) zone where wrong information has real cost. Most consumer tax sites are written by SEO writers, not payroll specialists, and the language drifts toward soft advice. PayslipIQ deliberately holds the line: the worker asks the question, the IRS or state agency or CPA confirms the answer.</p>

        <h2>How we are funded</h2>
        <p>The free site is supported by two paid products: a one-time <Link href="/us/premium-pay-stub-report/">$29 Premium Pay Stub Report</Link> and a <Link href="/us/monthly-paycheck-monitor/">$9/mo Paycheck Monitor</Link>. We do not run ad networks, we do not sell payroll data, and we do not generate leads for predatory finance products. <Link href="/us/affiliate-disclosure/">Affiliate disclosure</Link> is published.</p>
      </section>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
