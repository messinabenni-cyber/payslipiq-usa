import type { Metadata } from 'next';
import Link from 'next/link';
import { EDITORIAL_BOARD, LAST_REVIEWED } from '@/lib/editorialBoard';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ArticleSchema } from '@/components/ArticleSchema';

export const metadata: Metadata = {
  title: 'Editorial Standards & Review Process',
  description:
    'How PayslipIQ researches, sources, reviews, and corrects every paycheck explainer. Our editorial process, sourcing standard, corrections policy, and independence. Educational only.',
  alternates: { canonical: 'https://payslipiq.com/us/about-the-team/' },
};

const PROCESS = [
  ['Draft against primary sources', 'Each page is written from primary documents — IRS publications, notices and revenue procedures, the SSA, the US Department of Labor, and state revenue and labor agencies. Secondary sources are not used as the basis for a figure.'],
  ['Fact-check every figure', 'Every rate, threshold, wage base, and limit is checked against the source document and labelled with the tax year it applies to. Where a figure has not been published yet, the page says so rather than estimating.'],
  ['Advice-language review', 'A separate pass removes anything that reads as tax, legal, payroll, or financial advice. Content is held to an educational-only standard and points the reader to an official source or a qualified professional.'],
  ['Hedge uncertainty honestly', 'Anything that can change for an individual — multi-state work, mid-year W-4 changes, employer-specific settings — is hedged explicitly ("verify with payroll", "your actual paycheck may differ").'],
  ['Schema, disclaimer, and date stamp', 'Each page receives the correct structured data, the master disclaimer, and a visible last-reviewed date before it is published.'],
  ['Scheduled re-review', 'Pages are re-reviewed at least quarterly and immediately after any material federal or state-level change, such as new IRS withholding tables or a state rate change.'],
];

export default function Page() {
  const members = Object.values(EDITORIAL_BOARD);
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BreadcrumbSchema
        items={[
          { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' },
          { name: 'Editorial Standards', url: 'https://payslipiq.com/us/about-the-team/' },
        ]}
      />
      <ArticleSchema
        headline="PayslipIQ Editorial Standards & Review Process"
        description="How PayslipIQ researches, sources, reviews, and corrects every paycheck explainer."
        url="https://payslipiq.com/us/about-the-team/"
      />

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Editorial</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Editorial standards &amp; review process</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        PayslipIQ is an independent educational publisher that explains US pay stubs and paychecks
        in plain English. This page documents exactly how every page is researched, sourced,
        reviewed, corrected, and kept current — so you can judge how far to trust what you read here.
      </p>

      <div className="mt-6">
        <MasterDisclaimer variant="long" />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">How every page is reviewed</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          Pages covering federal tax, state withholding, FICA, deductions, overtime, and benefits go
          through a structured editorial review before publishing:
        </p>
        <ol className="mt-5 space-y-4">
          {PROCESS.map(([title, body], i) => (
            <li key={title} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 text-sm font-semibold ring-1 ring-blue-200">
                {i + 1}
              </span>
              <div>
                <div className="font-semibold text-slate-900">{title}</div>
                <p className="mt-1 text-[15px] leading-relaxed text-slate-700">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Our sourcing standard</h2>
        <ul className="mt-4 space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc pl-6">
          <li>Federal figures come from the IRS — Publication 15-T, Publication 15, annual revenue procedures, and notices — and from the SSA for the Social Security wage base.</li>
          <li>State figures come from each state&rsquo;s own revenue and labor agencies, not from aggregators.</li>
          <li>Every figure is tied to the tax year it applies to. When a number changes year to year, the year is stated next to it.</li>
          <li>Where sources conflict, are ambiguous, or have not yet been published, the page says so plainly instead of guessing.</li>
          <li>The calculation methodology, with citations, is documented separately on the{' '}
            <Link href="/methodology" className="text-blue-600 hover:underline">methodology page</Link>.</li>
        </ul>
      </section>

      <section id="corrections" className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-bold text-slate-900">Accuracy &amp; corrections policy</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          PayslipIQ is researched carefully, but it is produced by people and tax rules are
          intricate. If you believe something on the site is wrong or out of date, tell us — we
          treat correction reports as a priority.
        </p>
        <ul className="mt-4 space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc pl-6">
          <li>Report an issue to <a href="mailto:editorial@payslipiq.com" className="text-blue-600 hover:underline font-medium">editorial@payslipiq.com</a> with the page URL and what looks incorrect.</li>
          <li>Confirmed errors are corrected promptly, and the page&rsquo;s last-reviewed date is updated.</li>
          <li>Every page already carries a visible last-reviewed date so you can see how current it is. The most recent site-wide review was {LAST_REVIEWED}.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Independence &amp; funding</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          PayslipIQ is independent. It is not affiliated with, endorsed by, or operated by the IRS,
          the SSA, the US Department of Labor, any state tax or labor agency, any employer, or any
          payroll provider. The core tools and explainers are free to use. Where PayslipIQ offers a
          paid report or links to a partner, that is clearly marked — and it never changes how a
          figure is calculated or how a page is written. Editorial content is kept separate from any
          commercial relationship.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">What PayslipIQ is not</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          PayslipIQ is an educational explainer. It is not a CPA, an enrolled agent, a payroll
          provider, or a law firm, and nothing on the site is tax, legal, payroll, accounting, HR,
          employment, or financial advice. Results depend on what you enter and may be incomplete or
          inaccurate. A PayslipIQ result does not prove a paycheck is right or wrong. For anything
          that matters, verify with your payroll department, the relevant official source, or a
          qualified professional.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">The editorial team</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
          PayslipIQ is reviewed by an in-house editorial team with a payroll and compliance
          background. We are transparent that this is an in-house team rather than a panel of named,
          individually credentialed reviewers — and we hold the work to the documented standards
          above. The &ldquo;Reviewed by&rdquo; stamp on each page links here.
        </p>
        <div className="mt-6 grid gap-6">
          {members.map((m) => (
            <article key={m.slug} id={m.slug} className="rounded-lg border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 font-semibold text-lg ring-1 ring-blue-200">
                  {m.initials}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                  <p className="text-[14px] text-slate-600">{m.credential}</p>
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{m.bio}</p>
              <div className="mt-4">
                <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-slate-500">Focus areas</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {m.expertise.map((e) => (
                    <span key={e} className="rounded-full bg-slate-100 text-slate-700 text-[12px] px-3 py-1">{e}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-amber-900">Credentialed reviewers welcome</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-amber-900">
          PayslipIQ welcomes licensed CPAs, enrolled agents, and tax attorneys interested in
          reviewing cluster pages and contributing original explainers. Reviewers are credited by
          name and credential on every page they sign off. Email{' '}
          <a href="mailto:editorial@payslipiq.com" className="font-semibold underline">editorial@payslipiq.com</a>{' '}
          with your credentials and area of expertise.
        </p>
      </section>

      <p className="mt-10 text-[14px] text-slate-600">
        Related: <Link href="/methodology" className="text-blue-600 hover:underline">calculation methodology</Link>{' · '}
        <Link href="/trust" className="text-blue-600 hover:underline">trust &amp; safety</Link>{' · '}
        <Link href="/us/compliance" className="text-blue-600 hover:underline">compliance</Link>
      </p>
    </main>
  );
}
