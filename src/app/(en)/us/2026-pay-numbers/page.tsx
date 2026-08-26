import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { DatasetSchema } from '@/components/DatasetSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { PayNumbers2026 } from '@/components/PayNumbers2026';
import { FED_RATES, STANDARD_DEDUCTION } from '@/lib/calc';

const PAGE_URL = 'https://payslipiq.com/us/2026-pay-numbers';

function fmt0(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}
const ssBase = FED_RATES.socialSecurityWageBase;
const ssMax = Math.round(ssBase * FED_RATES.socialSecurity);

export const metadata: Metadata = {
  title: '2026 US Pay Numbers: FICA, Brackets, 401(k) Limits | PayslipIQ',
  description: `The 2026 figures that drive every US paycheck: Social Security 6.2% up to ${fmt0(ssBase)}, Medicare 1.45%, 2026 federal tax brackets, standard deduction ${fmt0(STANDARD_DEDUCTION.single)}, and the ${fmt0(24500)} 401(k) limit. Sourced and dated. Educational only.`,
  alternates: { canonical: PAGE_URL, languages: { 'en-US': PAGE_URL, 'x-default': PAGE_URL } },
  openGraph: {
    title: '2026 US Pay Numbers: FICA, Brackets, 401(k) Limits',
    description: 'The verified 2026 federal figures behind your paycheck, in one sourced reference.',
    url: PAGE_URL, type: 'website',
    images: [{ url: `https://payslipiq.com/api/og?title=${encodeURIComponent('2026 US Pay Numbers')}&eyebrow=USA%202026`, width: 1200, height: 630 }],
  },
};

const FAQS = [
  {
    q: 'What is the 2026 Social Security wage base?',
    a: `For 2026 the Social Security wage base is ${fmt0(ssBase)}. Social Security tax is 6.2% on wages up to that cap, so the most an employee pays into Social Security in 2026 is ${fmt0(ssMax)}. Employers pay a matching 6.2%. Source: SSA Contribution and Benefit Base.`,
  },
  {
    q: 'What is the Medicare tax rate for 2026?',
    a: `Medicare tax is 1.45% of all wages with no wage cap in 2026. An Additional Medicare tax of 0.9% applies to wages above ${fmt0(FED_RATES.additionalMedicareThresholdSingle)} for single filers and ${fmt0(FED_RATES.additionalMedicareThresholdMFJ)} for married couples filing jointly. Employers do not match the 0.9% Additional Medicare tax.`,
  },
  {
    q: 'What is the 2026 standard deduction?',
    a: `For 2026 the standard deduction is ${fmt0(STANDARD_DEDUCTION.single)} for single filers and married filing separately, ${fmt0(STANDARD_DEDUCTION.mfj)} for married couples filing jointly, and ${fmt0(STANDARD_DEDUCTION.hoh)} for head of household. Source: IRS Rev. Proc. 2025-32.`,
  },
  {
    q: 'What is the 2026 401(k) contribution limit?',
    a: `The 2026 401(k) elective deferral limit is ${fmt0(24500)}. The age-50 catch-up is ${fmt0(8000)}, and a higher SECURE 2.0 catch-up of ${fmt0(11250)} applies to workers aged 60 to 63. The 2026 IRA limit is ${fmt0(7500)}. Source: IRS Notice 2025-67.`,
  },
  {
    q: 'What are the 2026 federal income tax brackets?',
    a: 'For 2026 the federal rates are 10%, 12%, 22%, 24%, 32%, 35% and 37%. For a single filer the 10% band runs up to $12,400 of taxable income, 12% to $50,400, 22% to $105,700, 24% to $201,775, 32% to $256,225, 35% to $640,600, and 37% above that. Married-filing-jointly thresholds are roughly double. Source: IRS Rev. Proc. 2025-32.',
  },
  {
    q: 'Why do these numbers matter for my paycheck?',
    a: 'These figures set how much is withheld from your pay. The Social Security cap limits how long the 6.2% comes out each year, the brackets and standard deduction drive federal income tax withholding, and the 401(k) limit caps how much you can defer pre-tax. Using current-year numbers matters: several published calculators still show older Social Security caps, which produces wrong results.',
  },
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <DatasetSchema url="/us/2026-pay-numbers" />
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
        { name: '2026 pay numbers', url: PAGE_URL },
      ]} />
      <ArticleSchema headline="2026 US Pay Numbers: FICA, Brackets and 401(k) Limits" description="The verified 2026 federal figures that drive every US paycheck, in one sourced reference." url={PAGE_URL} />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">USA · 2026 · verified June 2026</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">The 2026 numbers behind your paycheck.</h1>
      <p className="mt-5 text-[17px] text-ink/85 leading-relaxed">
        These are the federal figures that decide what comes out of your pay in 2026. Social Security is 6.2% on the first {fmt0(ssBase)} of wages, Medicare is 1.45% with no cap, the standard deduction is {fmt0(STANDARD_DEDUCTION.single)} for a single filer, and the 401(k) elective deferral limit is {fmt0(24500)}. Every number below is dated and linked to its primary source.
      </p>

      <ReviewedBy />

      <div className="mt-8">
        <PayNumbers2026 variant="full" />
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Common questions</h2>
        <dl className="mt-5 grid gap-5">
          {FAQS.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-ink">{f.q}</dt>
              <dd className="mt-1 text-[15px] text-ink/80 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Use the numbers</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/paycheck-calculator">Paycheck calculator</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/take-home-pay">Take-home by salary</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/fica-explained">FICA explained</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/social-security-tax">Social Security tax</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/medicare-tax">Medicare tax</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/federal-tax-withholding">Federal withholding</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/401k-contribution-limits">401(k) limits</Link>
          <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/2026-tax-changes-summary">2026 tax changes</Link>
        </div>
      </section>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
