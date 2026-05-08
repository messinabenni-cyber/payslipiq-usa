import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: 'Find a CPA or Tax Preparer | PayslipIQ',
  description: 'When the pay stub questions go beyond educational guidance, talk to a qualified CPA or IRS-credentialed tax preparer. Here is how to find one and what to ask.',
  alternates: { canonical: 'https://payslipiq.com/us/find-a-cpa/' }
};

const FAQS = [
  { q: 'When should I talk to a CPA about my paycheck?', a: 'When the dollar amount or risk of getting it wrong matters more than the cost of an hour of professional time. Common triggers: multi-state work, equity compensation (RSUs, ESPP, ISOs), bonuses over $10k, garnishments, suspected employer errors, or year-over-year W-2 totals that look wrong.' },
  { q: 'Is a CPA the same as an enrolled agent?', a: 'No. A CPA (Certified Public Accountant) is licensed by a state board and can do tax prep, audits, and broader accounting. An EA (Enrolled Agent) is credentialed by the IRS and can represent taxpayers in IRS matters. Either can handle most paycheck questions.' },
  { q: 'How much does a CPA cost?', a: 'For a single paycheck consultation, expect $150 to $400 for an hour. For full annual tax prep, usually $250 to $1,500 depending on complexity. Some CPAs offer flat-fee paycheck reviews.' },
  { q: 'How do I check that someone is a real CPA?', a: 'Every state has a CPA license lookup on its Board of Accountancy site. The AICPA also maintains a national directory. The IRS has a Directory of Federal Tax Return Preparers with Credentials.' },
  { q: 'What should I bring to a CPA consultation?', a: 'Last 3 pay stubs, most recent W-2, current W-4, prior year tax return, any 1099s, your state of residence and work, and a clear list of questions written down.' },
  { q: 'Does PayslipIQ recommend specific CPAs?', a: 'No. PayslipIQ is independent and not affiliated with any specific accountant or firm. We point to the IRS and state-board directories so you can find a credentialed professional in your area.' }
];

const DIRECTORIES = [
  { name: 'IRS Directory of Federal Tax Return Preparers', url: 'https://irs.treasury.gov/rpo/rpo.jsf', note: 'Search by zip code, state, or credential. Filter for CPA, EA, or attorney.' },
  { name: 'AICPA Find a CPA', url: 'https://www.aicpa-cima.com/topic/find-a-cpa', note: 'American Institute of CPAs national directory.' },
  { name: 'NAEA Find an Enrolled Agent', url: 'https://taxexperts.naea.org/', note: 'National Association of Enrolled Agents.' },
  { name: 'NABA Find a Black CPA', url: 'https://www.nabainc.org/', note: 'National Association of Black Accountants directory.' },
  { name: 'NACBA Find a Bankruptcy Attorney (for garnishment cases)', url: 'https://www.nacba.org/find-an-attorney/', note: 'When wage garnishment becomes a bankruptcy question.' }
];

const QUESTIONS_FOR_CPA = [
  'I have a 401(k) at one employer and a Roth IRA. Am I withholding the right amount given both?',
  'I worked in two states this year. How do I file in each, and is there a credit?',
  'My bonus was withheld at 22% flat. Was that right, and will I owe at filing?',
  'Equity vested in 2025 (RSUs, ESPP, or ISOs). What does my pay stub miss?',
  'My W-2 box 1 does not match my YTD gross. Why?',
  'My state withholding is much higher (or lower) than expected. What should we change on the W-4 or state form?',
  'Garnishment started showing on my paycheck. What are my options and obligations?',
  'I am switching from W-2 to 1099 (or vice versa). What changes for my withholding strategy?',
  'I am close to the FICA wage base. What does this mean for my net pay in Q4?',
  'I want to maximize 401(k), HSA, and dependent-care FSA. What should my deductions look like?'
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' },
        { name: 'Find a CPA', url: 'https://payslipiq.com/us/find-a-cpa/' }
      ]} />
      <ArticleSchema
        headline="Find a CPA or Tax Preparer"
        description="When paycheck questions exceed educational guidance, here is how to find a qualified American CPA or IRS-credentialed tax preparer."
        url="https://payslipiq.com/us/find-a-cpa/"
      />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Directory</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">When the pay stub question is too big for a checker.</h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        PayslipIQ is educational. There are paycheck questions where you should be talking to a credentialed professional instead, or in addition. Below are the verified directories run by the IRS and the major US accountancy bodies.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Verified directories</h2>
        <ul className="mt-5 grid gap-3">
          {DIRECTORIES.map(d => (
            <li key={d.url} className="card border border-line rounded-xl p-4 bg-white">
              <a href={d.url} target="_blank" rel="nofollow noopener" className="font-semibold text-accent hover:underline">{d.name}</a>
              <p className="text-[14px] text-ink/75 mt-1">{d.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[12.5px] text-ink/55">PayslipIQ is independent of every directory listed. Inclusion is informational, not endorsement.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">When to talk to a professional, not just PayslipIQ</h2>
        <ul className="mt-5 grid gap-2 text-[15px] text-ink/85 list-disc pl-5">
          <li>You earn or are about to earn over $200k a year (Additional Medicare, AMT, more brackets).</li>
          <li>You worked in two or more states in the same year.</li>
          <li>You vested or sold equity (RSUs, ESPP, ISOs).</li>
          <li>You had a bonus over $10,000 and want to plan withholding.</li>
          <li>Wage garnishment showed up on your paycheck.</li>
          <li>You suspect a real employer payroll error.</li>
          <li>You are switching between W-2 and 1099 mid-year.</li>
          <li>Your W-2 box 1 amount looks wrong by more than $1,000.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">10 questions to bring to a CPA</h2>
        <ol className="mt-5 grid gap-2 text-[15px] text-ink/85 list-decimal pl-5">
          {QUESTIONS_FOR_CPA.map((q, i) => <li key={i}>{q}</li>)}
        </ol>
      </section>

      <section className="mt-10">
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
