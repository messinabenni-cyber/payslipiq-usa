import React from 'react';
import Link from 'next/link';
import { MasterDisclaimer } from './MasterDisclaimer';
import { USAHomepageSchema } from './USAHomepageSchema';

const TOOL_CARDS = [
  { title: 'AI Pay Stub Explainer', sub: 'Upload a pay stub. We walk you through every line in plain English.', cta: 'Explain my pay stub', href: '/us/pay-stub-checker' },
  { title: 'Paycheck Calculator', sub: 'Estimate take-home from gross — federal + state + FICA.', cta: 'Calculate', href: '/us/paycheck-calculator' },
  { title: 'Salary Paycheck Calculator', sub: 'Annual salary → bi-weekly or monthly take-home.', cta: 'Estimate take-home', href: '/us/salary-after-tax' },
  { title: 'Overtime Pay Calculator', sub: 'Verify overtime is calculated correctly under FLSA.', cta: 'Check overtime', href: '/us/overtime-paycheck' },
  { title: 'FICA Calculator', sub: 'Exactly what Social Security and Medicare are taking.', cta: 'Calculate FICA', href: '/us/fica-explained' },
  { title: 'W-4 Withholding Explainer', sub: 'What every W-4 box does — and how it changes your check.', cta: 'Decode my W-4', href: '/us/w4-guide' },
  { title: '401(k) Deduction Explainer', sub: 'Pre-tax vs Roth, employer match, contribution limits.', cta: 'Understand 401(k)', href: '/us/401k-deductions' },
  { title: 'Benefits Deduction Explainer', sub: 'Health, dental, vision, HSA, FSA — pre-tax and post-tax.', cta: 'Decode benefits', href: '/us/health-insurance-deductions' },
  { title: 'Payroll Mistake Checker', sub: 'Common payroll errors — and how to spot them on your stub.', cta: 'Spot mistakes', href: '/us/pay-stub-mistakes' },
];

const TRUST_STRIP = [
  { label: 'Private by design', sub: "Your pay stub is processed securely. We don't sell data." },
  { label: 'Built for America', sub: 'Federal + 50-state aware guidance.' },
  { label: 'Plain-English explanations', sub: 'No payroll jargon. Just clarity.' },
  { label: 'AI-assisted, not advisory', sub: 'We help you understand — not replace your CPA.' },
  { label: 'Verify with the source', sub: 'Always cross-check with payroll, IRS, or a CPA.' },
];

const PROBLEM_INTENT = [
  { q: 'Why is my paycheck lower than expected?', href: '/us/why-is-my-paycheck-lower' },
  { q: 'Why was so much tax taken out?', href: '/us/federal-tax-withholding' },
  { q: 'Why was my overtime taxed heavily?', href: '/us/overtime-paycheck' },
  { q: 'What does FICA mean on my pay stub?', href: '/us/fica-explained' },
  { q: 'What are pre-tax deductions?', href: '/us/pre-tax-vs-post-tax-deductions' },
  { q: 'What are post-tax deductions?', href: '/us/pre-tax-vs-post-tax-deductions' },
  { q: 'Why did my net pay change this month?', href: '/us/paycheck-comparison' },
  { q: 'What does Social Security tax pay for?', href: '/us/social-security-tax' },
  { q: 'What does Medicare tax do?', href: '/us/medicare-tax' },
  { q: 'Why is my bonus taxed at 22% (or 37%)?', href: '/us/bonus-tax-paycheck' },
];

export default function USHomepage() {
  return (
    <main className="bg-white text-slate-900">
      <USAHomepageSchema />

      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <p className="mb-3 text-sm font-medium tracking-wide text-blue-700">America&rsquo;s plain-English paycheck explainer</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Understand your paycheck with confidence.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
            PayslipIQ helps US workers make sense of pay stubs, federal and state taxes, FICA, deductions,
            overtime, 401(k), and take-home pay &mdash; privately, clearly, and educationally. No jargon. No
            advice. Just clarity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/us/pay-stub-checker" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700" data-cta="hero_primary">
              Check My Pay Stub &rarr;
            </Link>
            <Link href="/us/paycheck-calculator" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:border-slate-400" data-cta="hero_secondary">
              Calculate My Take-Home Pay
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-slate-500">
            Educational estimates only. Not tax, legal, financial, accounting, or payroll advice. Always verify
            with your payroll department, the IRS, your state tax authority, or a qualified CPA.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {TRUST_STRIP.map((item) => (
              <li key={item.label}>
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.sub}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">The PayslipIQ tool suite</h2>
            <p className="mt-3 text-slate-700">Free, private, and built around how Americans actually search for paycheck answers.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOOL_CARDS.map((card) => (
              <Link key={card.href} href={card.href} className="group rounded-lg border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-sm" data-cta="tool_card" data-tool={card.title}>
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.sub}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                  {card.cta} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Why is my paycheck different than I expected?</h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            The most common questions American workers ask after looking at a pay stub. Each is answered in plain English on PayslipIQ.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PROBLEM_INTENT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 hover:border-blue-300 hover:bg-slate-50" data-cta="problem_intent">
                  {item.q}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm">
            <Link href="/us/learn" className="font-semibold text-blue-700 hover:text-blue-800">See all paycheck questions &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Built around how American payroll actually works.</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-slate-700">
              <p>The US payroll system is layered. Your paycheck is shaped by federal law, your state&rsquo;s rules, your local jurisdiction, your employer&rsquo;s payroll provider, and the choices you made on your W-4 and benefits enrollment. PayslipIQ explains each layer in plain English so you can spot what looks right, what looks off, and what to ask payroll.</p>
              <p><strong>Federal layer</strong> &mdash; Federal income tax withholding (driven by your W-4), Social Security (6.2% up to the wage base), and Medicare (1.45% with an Additional Medicare Tax of 0.9% above $200,000 single / $250,000 married filing jointly).</p>
              <p><strong>State layer</strong> &mdash; Some states have no income tax (Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming). Others have flat rates. California, New York, and others use brackets. We cover every state.</p>
            </div>
            <div className="space-y-4 text-slate-700">
              <p><strong>Local layer</strong> &mdash; A handful of cities and counties (NYC, Yonkers, Philadelphia, Detroit, several Ohio jurisdictions) levy local income tax on top.</p>
              <p><strong>Employer layer</strong> &mdash; Your benefits, 401(k) contributions, HSA/FSA elections, and any pre-tax or post-tax deductions live here.</p>
              <p><strong>You</strong> &mdash; W-4 entries, filing status, allowances, additional withholding requests.</p>
              <p>PayslipIQ helps you understand all five.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold tracking-tight">How PayslipIQ works (and what it isn&rsquo;t)</h2>
          <p className="mt-4 text-slate-700">
            PayslipIQ is an educational pay stub and paycheck explainer. We use plain-English content, public payroll data, federal and state tax tables, and AI-assisted summarization to help you understand your paycheck. We are not a CPA, tax preparer, payroll provider, law firm, or financial advisor &mdash; and we are not affiliated with the IRS, the Social Security Administration, or any state tax authority.
          </p>
          <p className="mt-4 text-slate-700">
            Always verify your paycheck, deductions, withholdings, and tax position with your employer&rsquo;s payroll department, a qualified CPA, the IRS, your state tax authority, or another appropriately qualified professional.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-700">
            <li><Link href="/methodology">Methodology</Link></li>
            <li><Link href="/trust">Trust Center</Link></li>
            <li><Link href="/ai-transparency">AI Transparency</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/disclaimer">Disclaimers</Link></li>
          </ul>
          <div className="mt-8">
            <MasterDisclaimer variant="long" />
          </div>
        </div>
      </section>
    </main>
  );
}
