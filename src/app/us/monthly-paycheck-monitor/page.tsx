import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Monthly Paycheck Monitor | PayslipIQ',
  description: 'Submit each pay stub for tracking. PayslipIQ flags net pay changes, withholding shifts, and anomalies in plain English. Educational only.',
  alternates: { canonical: 'https://payslipiq.com/us/monthly-paycheck-monitor' }
};

const FAQS = [
  { q: 'What does the Monthly Monitor track?', a: 'Each pay stub uploaded is compared to the previous one and to your YTD baseline. The system flags any noticeable change in net pay, withholding rate, deduction amounts, or new line items, and emails a plain-English summary.' },
  { q: 'Is this real-time?', a: 'Reports run within 1 hour of upload. Email digest goes out daily if any change is flagged.' },
  { q: 'How is my data handled?', a: 'Pay stub images are processed by an AI vision model under a no-training agreement, the structured extracts are stored encrypted for the duration of your subscription plus 30 days, originals are deleted within 24 hours of processing. Cover SSN, bank, and identifiers before upload.' },
  { q: 'Will the Monitor catch payroll errors?', a: 'It flags items that look outside expected ranges. It does not declare an employer error or instruct a correction. Workers and payroll handle that, the Monitor surfaces the question.' },
  { q: 'How do I cancel?', a: 'Cancel anytime in account settings. No prorated refunds, but you keep access until the end of the billing month.' },
  { q: 'Is this financial or tax advice?', a: 'No. Educational only. Confirm anything tax-related with a CPA or qualified tax preparer.' }
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
        { name: 'Monthly Paycheck Monitor', url: 'https://payslipiq.com/us/monthly-paycheck-monitor' }
      ]} />
      <ArticleSchema
        headline="Monthly Paycheck Monitor"
        description="Subscription pay stub tracking with anomaly alerts and withholding shift detection."
        url="https://payslipiq.com/us/monthly-paycheck-monitor"
      />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Subscription</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">A second set of eyes on every paycheck.</h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        Upload each pay stub as it lands. PayslipIQ tracks it against the prior stub, flags anything that shifted, and emails a plain-English summary. Designed for hourly, multi-job, tipped, and remote workers whose pay stubs change month to month. Educational only.
      </p>

      <div className="mt-8 card border border-line rounded-2xl p-6 bg-paper">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold">$9</span>
          <span className="text-ink/60 text-sm">/month, cancel anytime</span>
        </div>
        <ul className="mt-4 grid gap-2 text-[15px] text-ink/85">
          <li>Unlimited pay stub uploads per month</li>
          <li>Anomaly alerts on net pay changes over 5%</li>
          <li>Withholding shift detection</li>
          <li>Year-to-date trend chart</li>
          <li>Monthly email digest</li>
          <li>One free Premium Pay Stub Report per quarter ($29 value)</li>
        </ul>
        <Link href="/contact" className="mt-6 inline-flex items-center justify-center w-full bg-accent text-white py-3 rounded-lg font-semibold">
          Request Early Access
        </Link>
        <p className="text-[12px] text-ink/55 mt-3">Contact us to join the Paycheck Monitor early-access list. We will confirm availability and pricing by email.</p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">What the Monitor flags</h2>
        <ul className="mt-5 grid gap-2 text-[15px] text-ink/85 list-disc pl-5">
          <li>Net pay change of more than 5% versus prior period (with no obvious cause).</li>
          <li>Federal withholding rate shift greater than 1 percentage point.</li>
          <li>State withholding rate shift greater than 0.5 percentage point.</li>
          <li>New deduction line item or removed line item.</li>
          <li>FICA cap reached (Social Security wage base hit mid-year).</li>
          <li>Additional Medicare tax kicking in (YTD wages over $200k).</li>
          <li>Pre-tax 401(k) limit approaching ($23,500 in 2025, $31,000 if 50+).</li>
          <li>HSA limit approaching ($4,300 self, $8,550 family in 2025).</li>
          <li>Bonus or supplemental wage withheld at 22% flat (or 37% if YTD over $1M).</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Who this is for</h2>
        <ul className="mt-5 grid gap-2 text-[15px] text-ink/85 list-disc pl-5">
          <li>Hourly workers with variable schedules.</li>
          <li>Tipped workers who see large swings month to month.</li>
          <li>Multi-job workers juggling federal withholding across employers.</li>
          <li>Remote workers in multi-state setups.</li>
          <li>New hires in the first 90 days of a job.</li>
          <li>Workers who recently changed W-4, married, had a child, or moved states.</li>
          <li>Anyone whose paycheck dropped unexpectedly and they cannot explain why.</li>
        </ul>
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
