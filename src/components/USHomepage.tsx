import React from 'react';
import Link from 'next/link';
import { MasterDisclaimer } from './MasterDisclaimer';
import { MobileStickyCTA } from './MobileStickyCTA';
import { USAHomepageSchema } from './USAHomepageSchema';

const TOOLS = [
  { title: 'Pay Stub Checker', sub: 'Upload a pay stub. Walk through every line.', cta: 'Check my pay stub', href: '/us/pay-stub-checker' },
  { title: 'Paycheck Calculator', sub: 'Estimate take-home from gross. Federal, state, FICA.', cta: 'Calculate', href: '/us/paycheck-calculator' },
  { title: 'Salary After Tax', sub: 'Annual salary to bi-weekly or monthly take-home.', cta: 'Estimate', href: '/us/salary-after-tax' },
  { title: 'Hourly Calculator', sub: 'Hours times rate. Overtime aware. State aware.', cta: 'Run the math', href: '/us/hourly-paycheck-calculator' },
  { title: 'Overtime Pay', sub: 'Verify overtime is calculated correctly under FLSA.', cta: 'Check overtime', href: '/us/overtime-paycheck' },
  { title: 'FICA Calculator', sub: 'What Social Security and Medicare are taking.', cta: 'See FICA', href: '/us/fica-explained' },
  { title: 'W-4 Guide', sub: 'What every W-4 box does, line by line.', cta: 'Read the guide', href: '/us/w4-guide' },
  { title: '401(k) Deductions', sub: 'Pre-tax vs Roth. Match. Limits. Vesting.', cta: 'Read', href: '/us/401k-deductions' },
  { title: 'Pay Stub Mistakes', sub: 'Twelve common payroll errors and how to spot them.', cta: 'Read', href: '/us/pay-stub-mistakes' },
];

const QUESTIONS = [
  { q: 'Why is my paycheck lower than expected?', href: '/us/why-is-my-paycheck-lower' },
  { q: 'Why was so much tax taken out?', href: '/us/federal-tax-withholding' },
  { q: 'Why was my overtime taxed heavily?', href: '/us/overtime-paycheck' },
  { q: 'What does FICA mean on my pay stub?', href: '/us/fica-explained' },
  { q: 'Pre-tax versus post-tax deductions', href: '/us/pre-tax-vs-post-tax-deductions' },
  { q: 'Why did my net pay change this month?', href: '/us/paycheck-comparison' },
  { q: 'What does Social Security tax pay for?', href: '/us/social-security-tax' },
  { q: 'Why is my bonus taxed at 22 percent?', href: '/us/bonus-tax-paycheck' },
];

export default function USHomepage() {
  return (
    <main className="bg-white text-slate-900">
      <USAHomepageSchema />

      {/* Hero */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-sm font-medium tracking-wide text-blue-700">Paycheck help for US workers</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Read your paycheck. Spot what is wrong. Ask the right questions.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            Pay stubs are full of acronyms and lines that nobody explains. PayslipIQ walks through each
            one in language a worker can use. Federal tax. State tax. FICA. Pre-tax 401(k). Health
            premiums. Overtime math. Bonus withholding. The lot.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/us/pay-stub-checker"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
              data-cta="hero_primary"
            >
              Check My Pay Stub
            </Link>
            <Link
              href="/us/paycheck-calculator"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:border-slate-400"
              data-cta="hero_secondary"
            >
              Calculate Take-Home Pay
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-slate-500">
            Numbers shown are estimates. Your real paycheck depends on your employer, your benefits and
            your W-4. Verify with payroll, the IRS or your state authority before relying on anything.
          </p>
        </div>
      </section>

      {/* Trust strip - flat, no triple structure */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-900">Built for the United States</p>
              <p className="mt-1 text-sm text-slate-600">
                Federal rules, FICA, every state. Local taxes where they apply (NYC, Philadelphia,
                Detroit, Ohio cities).
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Plain language</p>
              <p className="mt-1 text-sm text-slate-600">
                The pay stub jargon decoded once, kept consistent across every page.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Not advice</p>
              <p className="mt-1 text-sm text-slate-600">
                Education and rough numbers. For a binding answer, see your CPA, the IRS or your state
                tax authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool grid */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Tools</h2>
            <p className="mt-3 text-slate-700">Free. No account. No upsell on the basics.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group rounded-lg border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-sm"
                data-cta="tool_card"
                data-tool={t.title}
              >
                <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{t.sub}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                  {t.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Questions you might be asking</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            What people search after they look at their pay stub. Each links to a written answer.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {QUESTIONS.map((q) => (
              <li key={q.href}>
                <Link
                  href={q.href}
                  className="block rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:border-blue-300 hover:bg-slate-50"
                  data-cta="problem_intent"
                >
                  {q.q}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link href="/us/learn" className="font-semibold text-blue-700 hover:text-blue-800">
              All paycheck topics
            </Link>
          </p>
        </div>
      </section>

      {/* How US payroll works - prose */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">How a US paycheck is built</h2>
          <div className="mt-8 space-y-5 text-slate-700">
            <p>
              Five things shape what lands in your bank account every pay period. Federal law sets the
              first three. State and city add the next two. Your own choices fill in the rest.
            </p>
            <p>
              <strong>Federal income tax</strong> comes off first, calculated using the IRS Publication
              15-T method against what you wrote on your W-4. Then <strong>FICA</strong>: 6.2 percent
              Social Security up to the annual wage base, plus 1.45 percent Medicare on every dollar.
              An extra 0.9 percent Medicare kicks in once year-to-date wages cross 200,000 single or
              250,000 married filing jointly.
            </p>
            <p>
              <strong>State income tax</strong> varies. Nine states do not levy one (Alaska, Florida,
              Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming). Several use
              flat rates. The rest run progressive brackets. <strong>Local tax</strong> applies in a
              few jurisdictions: New York City, Yonkers, Philadelphia, Detroit and many Ohio cities.
            </p>
            <p>
              The remaining lines are yours. <strong>Pre-tax deductions</strong> like traditional 401(k),
              HSA and Section 125 health insurance reduce taxable wages. <strong>Post-tax</strong> like
              Roth 401(k), garnishments and after-tax life insurance come off net. PayslipIQ walks
              through each line on the dedicated explainer pages.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Link
              href="/us/federal-tax-withholding"
              className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:border-blue-300"
            >
              Federal withholding
            </Link>
            <Link href="/us/fica-explained" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:border-blue-300">FICA</Link>
            <Link href="/us/social-security-tax" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:border-blue-300">Social Security</Link>
            <Link href="/us/medicare-tax" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:border-blue-300">Medicare</Link>
            <Link href="/us/w4-guide" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:border-blue-300">W-4</Link>
            <Link href="/us/401k-deductions" className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:border-blue-300">401(k)</Link>
          </div>
        </div>
      </section>

      {/* What this is not */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-2xl font-bold tracking-tight">What this is not</h2>
          <p className="mt-4 text-slate-700">
            PayslipIQ is a reading guide and a calculator. Not a CPA. Not a payroll provider. Not a law
            firm. Not affiliated with the IRS, the SSA, or any state tax authority. If a number on your
            stub is wrong, raise it with payroll. If you need filing advice, see a CPA. The goal here is
            just to help you read the stub and ask the right question.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-700">
            <li><Link href="/methodology">Methodology</Link></li>
            <li><Link href="/trust">Trust Center</Link></li>
            <li><Link href="/ai-transparency">AI transparency</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/disclaimer">Disclaimers</Link></li>
          </ul>
          <div className="mt-8">
            <MasterDisclaimer variant="long" />
          </div>
        </div>
      </section>

      <MobileStickyCTA
        href="/us/pay-stub-checker"
        label="Check My Pay Stub"
        secondaryHref="/us/paycheck-calculator"
        secondaryLabel="Calculate"
      />
    </main>
  );
}
