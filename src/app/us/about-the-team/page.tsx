import type { Metadata } from 'next';
import Link from 'next/link';
import { EDITORIAL_BOARD } from '@/lib/editorialBoard';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ArticleSchema } from '@/components/ArticleSchema';

export const metadata: Metadata = {
  title: 'About the Team | PayslipIQ',
  description: 'PayslipIQ\'s editorial team and review standards. The people who sign off on every paycheck explainer.',
  alternates: { canonical: 'https://payslipiq.com/us/about-the-team/' }
};

export default function Page() {
  const members = Object.values(EDITORIAL_BOARD);
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' },
        { name: 'About the Team', url: 'https://payslipiq.com/us/about-the-team/' }
      ]} />
      <ArticleSchema
        headline="About the PayslipIQ Editorial Team"
        description="The editorial team that reviews PayslipIQ's pay-stub explainers, calculators, and state guides."
        url="https://payslipiq.com/us/about-the-team/"
      />

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Editorial</div>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">The team behind every page.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        PayslipIQ pages covering federal tax, state withholding, FICA, deductions, overtime, and benefits go through a structured editorial review before publishing. The reviewing editors are listed below. Every page on the site shows the most recent review date.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Editorial standards</h2>
        <ul className="mt-4 space-y-2 text-[15px] text-slate-700 leading-relaxed list-disc pl-6">
          <li>Every claim that could change is hedged ("verify with payroll", "your actual paycheck may differ").</li>
          <li>Every state-specific number references the year it applies to.</li>
          <li>Local quirks (city tax, county tax, SDI, PFL, daily OT) are called out explicitly when present.</li>
          <li>No advice language. Educational only. Always points to the IRS, state revenue agency, or a qualified CPA for confirmation.</li>
          <li>Pages are reviewed at least quarterly and after any material federal or state-level change.</li>
        </ul>
        <p className="mt-4 text-[14px] text-slate-600">
          Full editorial process documented on <Link href="/us/methodology/" className="text-blue-600 hover:underline">/us/methodology</Link>.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">The team</h2>
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
                <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-slate-500">Expertise</div>
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
        <h2 className="text-xl font-semibold text-amber-900">Want to be a credentialed reviewer?</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-amber-900">
          PayslipIQ welcomes credentialed CPAs, EAs, and tax attorneys interested in providing review on cluster pages and contributing original explainers. Reviewers are credited by name and credential on every page they sign off. Email{' '}
          <a href="mailto:editorial@payslipiq.com" className="font-semibold underline">editorial@payslipiq.com</a>{' '}
          with your credentials and area of expertise.
        </p>
      </section>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
