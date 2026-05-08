import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Press kit | PayslipIQ',
  description: 'PayslipIQ press kit: brand assets, fact sheet, founder bio, media inquiries.',
  alternates: { canonical: 'https://payslipiq.com/us/press/' }
};

const FACTS = [
  ['What it is', 'A USA-only paycheck and pay-stub explainer for American workers. Educational only, not tax / legal / financial advice.'],
  ['Audience', 'US workers reading their pay stub and asking a question. Hourly, salaried, tipped, multi-state, contractor-vs-employee, gig.'],
  ['Coverage', 'All 50 states + DC. Federal tax (IRS Pub 15-T), FICA, Social Security wage base, Medicare + Additional Medicare, state SDI/PFL, daily overtime, local city/county taxes, W-4 calibration, bonus and supplemental wages, 401(k)/HSA/FSA pre-tax stack, garnishments.'],
  ['Format', 'Web. Mobile-first. No app required.'],
  ['AI', 'Optional Claude vision pay-stub upload under a no-training agreement. Image deleted within 24 hours of processing.'],
  ['Independence', 'Not affiliated with the IRS, SSA, US Department of Labor, any state tax agency, employer, or payroll provider.'],
  ['Privacy', 'Cookie-less analytics. No third-party ad networks. No data sold.'],
  ['Funded by', 'Two paid products ($29 one-time Premium Pay Stub Report, $9/mo Paycheck Monitor). No ads.'],
  ['Founded', '2025'],
  ['HQ', 'United States'],
];

const ASSETS = [
  { name: 'Logo (SVG, light background)', href: '/icon.svg' },
  { name: 'Apple-touch-icon (SVG, 180x180)', href: '/apple-icon.svg' },
  { name: 'OG image (dynamic)', href: '/api/og?title=PayslipIQ&eyebrow=Press' },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us/' },
        { name: 'Press', url: 'https://payslipiq.com/us/press/' }
      ]} />
      <ArticleSchema
        headline="PayslipIQ Press Kit"
        description="Brand assets, fact sheet, and media inquiry contact for PayslipIQ."
        url="https://payslipiq.com/us/press/"
      />

      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Press</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 piq-display">
        Press kit.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        For interviews, factual quotes about US payroll, or background on the AI pay-stub explainer pipeline, email{' '}
        <a href="mailto:press@payslipiq.com" className="text-blue-600 font-semibold hover:underline">press@payslipiq.com</a>.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Fact sheet</h2>
        <dl className="mt-5 grid gap-3 text-[15px] text-slate-700">
          {FACTS.map(([k, v]) => (
            <div key={k} className="rounded-lg border border-slate-200 bg-white p-4">
              <dt className="text-[12px] uppercase tracking-[0.14em] font-semibold text-slate-500">{k}</dt>
              <dd className="mt-1 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Brand assets</h2>
        <ul className="mt-5 grid gap-3">
          {ASSETS.map((a) => (
            <li key={a.href} className="rounded-lg border border-slate-200 bg-white p-4">
              <a href={a.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">{a.name}</a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[13px] text-slate-500">
          Use of the PayslipIQ wordmark and assets is permitted in editorial press contexts about PayslipIQ. For commercial or sponsored use, email{' '}
          <a href="mailto:press@payslipiq.com" className="text-blue-600 hover:underline">press@payslipiq.com</a>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Suggested headline angles</h2>
        <ul className="mt-5 list-disc pl-6 space-y-2 text-[15px] text-slate-700">
          <li>The plain-English pay-stub checker built for American workers, not employers.</li>
          <li>Why no-advice language is a feature: how PayslipIQ writes about tax without crossing into legal liability.</li>
          <li>What changes on a paycheck across 50 states: a 50-state narrative database open to journalists.</li>
          <li>Privacy posture: no ad networks, AI under a no-training agreement, image deleted within 24 hours.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-900">Boilerplate (50 words)</h2>
        <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-[14px] leading-relaxed text-slate-800">
          PayslipIQ is a USA-only pay-stub and paycheck explainer for American workers. It walks through every line on a stub in plain English, flags items worth checking with payroll, and points users to the IRS, state agency, or a CPA. Educational only. Not tax, legal, or financial advice.
        </p>
      </section>

      <p className="mt-12 text-[14px] text-slate-600">
        Looking for editorial review on a pay-stub explainer or a state-specific story? See{' '}
        <Link href="/us/about-the-team/" className="text-blue-600 hover:underline">/us/about-the-team</Link>.
      </p>
    </main>
  );
}
