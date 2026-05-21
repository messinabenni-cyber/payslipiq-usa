import type { Metadata } from 'next';
import Link from 'next/link';
import { EmailCapture } from '@/components/EmailCapture';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: 'Free Pay Stub Anatomy Guide',
  description: 'Free 12-page printable PDF that walks through every line on a US pay stub. Educational only.',
  alternates: { canonical: 'https://payslipiq.com/us/free-guide' }
};

const CHAPTERS = [
  { n: '01', title: 'The header', body: 'Employer name, your name, pay period dates, pay date, and check number. What each one tells you.' },
  { n: '02', title: 'Gross pay vs taxable wages', body: 'Why the federal taxable amount is smaller than gross. Where the difference goes.' },
  { n: '03', title: 'Federal income tax', body: 'How IRS Pub 15-T tables convert your W-4 entries into a per-paycheck withholding.' },
  { n: '04', title: 'FICA: Social Security', body: '6.2% up to the annual wage base. What happens when you cross the cap mid-year.' },
  { n: '05', title: 'FICA: Medicare', body: '1.45% on every dollar. The 0.9% Additional Medicare surcharge on wages above $200k YTD.' },
  { n: '06', title: 'State income tax', body: 'Flat, progressive, or none. How to read your state\'s line and verify it.' },
  { n: '07', title: 'Local taxes', body: 'When your city, county, or school district levies its own income tax. Common in OH, PA, NY, MD, IN.' },
  { n: '08', title: 'SDI, PFL, and worker contributions', body: 'CA SDI, NY PFL, NJ FLI, RI TDI, WA Cares Fund, MA PFML. Where they appear and what they fund.' },
  { n: '09', title: 'Pre-tax deductions', body: '401(k), HSA, FSA, health/dental/vision premiums, transit. What each one reduces and what it does not.' },
  { n: '10', title: 'Post-tax deductions', body: 'Roth 401(k), garnishments, after-tax disability, after-tax life. Why these come out of net.' },
  { n: '11', title: 'Year-to-date totals', body: 'How to reconcile YTD against current period. What looks wrong if YTD does not add up.' },
  { n: '12', title: 'Taking a question to payroll', body: 'A 10-question pack you can email to your payroll team that does not accuse anyone of anything.' }
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
        { name: 'Free Guide', url: 'https://payslipiq.com/us/free-guide' }
      ]} />
      <ArticleSchema
        headline="Free Pay Stub Anatomy Guide"
        description="12-chapter walkthrough of every line on a US pay stub."
        url="https://payslipiq.com/us/free-guide"
      />

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Free download</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 piq-display">
        Pay stub anatomy, in 12 chapters.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        Every line on a US pay stub, walked through in plain English. Free. Email it to yourself, print it, share it with a coworker who is staring at a stub and asking what FICA means.
      </p>

      <div className="mt-8">
        <EmailCapture
          source="free-guide"
          headline="Send me the free guide"
          subheadline="12-page PDF, 5-minute read, every line on a US pay stub explained."
          cta="Email me the guide"
        />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">What is in the guide</h2>
        <ol className="mt-6 grid gap-4">
          {CHAPTERS.map((c) => (
            <li key={c.n} className="rounded-lg border border-slate-200 bg-white p-5 flex gap-4">
              <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600 shrink-0 w-10">{c.n}</div>
              <div>
                <div className="font-semibold text-slate-900">{c.title}</div>
                <p className="mt-1 text-[14px] text-slate-700 leading-relaxed">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Want it deeper?</h2>
        <p className="mt-2 text-[15px] text-slate-700 leading-relaxed">
          The free guide covers the anatomy. The{' '}
          <Link href="/us/premium-pay-stub-report" className="text-blue-600 font-semibold hover:underline">$29 Premium Pay Stub Report</Link>{' '}
          covers your specific pay stub. Upload one and get a 12-page personalized PDF: line-by-line review, comparison to standard rates, and a payroll question pack.
        </p>
      </section>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
