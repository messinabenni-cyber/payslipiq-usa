import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Premium Pay Stub Report | PayslipIQ',
  description: 'Detailed pay stub analysis with deduction breakdown, withholding optimization checklist, and a personalized payroll question pack. Educational only, not advice.',
  alternates: { canonical: 'https://payslipiq.com/us/premium-pay-stub-report/' }
};

const FAQS = [
  { q: 'What is a Premium Pay Stub Report?', a: 'A 12-page printable PDF that walks through every line on the pay stub uploaded, compares it to standard rates and IRS Pub 15-T expectations, and lays out a checklist of items to verify with payroll. Educational only, not professional advice.' },
  { q: 'How long does it take?', a: 'Most reports are emailed within 60 minutes of upload. Complex multi-state stubs can take up to 24 hours.' },
  { q: 'How is my data handled?', a: 'The pay stub image is processed by an AI vision model under a no-training agreement, the structured extract is stored encrypted for 30 days, and the original image is deleted within 24 hours. Cover SSN, bank, and any identifiers before upload.' },
  { q: 'Is this tax advice?', a: 'No. PayslipIQ is educational only and not a CPA, attorney, or tax preparer. Always confirm anything that could affect a tax return with a qualified professional.' },
  { q: 'Can I get a refund?', a: 'Yes, within 7 days of delivery if the report did not match the upload, no questions asked.' },
  { q: 'Will the report identify employer errors?', a: 'It will flag deductions that look outside standard ranges and prompt questions for payroll. It will not declare an error or instruct an employer correction. That is the role of the worker, payroll, and a CPA.' }
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' },
        { name: 'Premium Pay Stub Report', url: 'https://payslipiq.com/us/premium-pay-stub-report/' }
      ]} />
      <ArticleSchema
        headline="Premium Pay Stub Report"
        description="Detailed paid analysis of one US pay stub, with comparisons to federal IRS Pub 15-T tables and state-by-state expectations."
        url="https://payslipiq.com/us/premium-pay-stub-report/"
      />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Premium</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">A 12-page report on one pay stub.</h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        Upload a single US pay stub and get back a detailed PDF that walks through every line, compares each deduction to standard rates, flags any items worth a polite question to payroll, and packages a checklist you can take to a CPA, HR, or a tax preparer. Educational only.
      </p>

      <div className="mt-8 card border border-line rounded-2xl p-6 bg-paper">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold">$29</span>
          <span className="text-ink/60 text-sm">one-time, per stub</span>
        </div>
        <ul className="mt-4 grid gap-2 text-[15px] text-ink/85">
          <li>12-page printable PDF report</li>
          <li>Line-by-line breakdown of every deduction</li>
          <li>Federal, state, FICA, and local tax check</li>
          <li>W-4 withholding optimization checklist</li>
          <li>10-question pack to take to payroll</li>
          <li>7-day refund if the report did not match the upload</li>
        </ul>
        <Link href="/us/premium-pay-stub-report/checkout/" className="mt-6 inline-flex items-center justify-center w-full bg-accent text-white py-3 rounded-lg font-semibold">
          Buy Premium Report
        </Link>
        <p className="text-[12px] text-ink/55 mt-3">
          Payment processed securely. PayslipIQ does not store payment card details.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">What is in the report</h2>
        <ol className="mt-5 grid gap-3 text-[15px] text-ink/85 list-decimal pl-5">
          <li>Cover page with the stub period, gross, net, and YTD totals.</li>
          <li>Federal income tax check against IRS Pub 15-T tables for your filing status.</li>
          <li>FICA breakdown: Social Security 6.2% up to wage base, Medicare 1.45%, Additional Medicare 0.9% on YTD over $200k.</li>
          <li>State tax line check against the rate schedule for your state.</li>
          <li>Local tax line check (if your city or county levies one).</li>
          <li>Pre-tax deduction summary: 401(k), HSA, FSA, health, dental, vision, transit.</li>
          <li>Post-tax deduction summary: Roth 401(k), garnishments, after-tax disability, after-tax life.</li>
          <li>YTD reconciliation: does the YTD total tally with current period plus prior?</li>
          <li>Anomaly flags: deductions that look outside the standard range.</li>
          <li>W-4 calibration: is your federal withholding tracking your expected annual tax?</li>
          <li>10-question pack you can email to payroll.</li>
          <li>What to verify with a CPA or qualified tax preparer.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <dl className="mt-5 grid gap-5">
          {FAQS.map(f => (
            <div key={f.q}>
              <dt className="font-semibold text-ink">{f.q}</dt>
              <dd className="mt-1 text-[15px] text-ink/80 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
