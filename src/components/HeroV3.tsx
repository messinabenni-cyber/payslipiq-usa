/**
 * HeroV3 - cinematic hero replacement for the /us/ homepage.
 * Drop-in replacement: import HeroV3 from '@/components/HeroV3' and render
 * inside USHomepage.tsx in place of the existing hero <section>.
 *
 * Apple-style: massive display type, gradient background, two CTAs, trust microcopy.
 * Honors prefers-reduced-motion.
 */
import Link from 'next/link';

export function HeroV3() {
  return (
    <section className="piq-hero-gradient border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="piq-fade-in">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-blue-700">PayslipIQ USA</p>
        </div>

        <h1 className="mt-4 text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 piq-display piq-fade-in piq-fade-in-delay-1 leading-[1.05]">
          Read your paycheck.<br />
          <span className="text-blue-600">In plain English.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-slate-700 piq-fade-in piq-fade-in-delay-2">
          Pay stubs are full of acronyms and lines that nobody explains. PayslipIQ walks through each one in language a worker can use. Federal tax. State tax. FICA. Pre-tax 401(k). Health premiums. Overtime math. Bonus withholding.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row piq-fade-in piq-fade-in-delay-3">
          <Link
            href="/us/pay-stub-checker"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            data-cta="hero_primary"
          >
            Check My Pay Stub
            <span aria-hidden className="ml-2">{'>'}</span>
          </Link>
          <Link
            href="/us/paycheck-calculator"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-900 hover:border-slate-400 transition-colors"
            data-cta="hero_secondary"
          >
            Calculate Take-Home Pay
          </Link>
        </div>

        <p className="mt-10 text-[13px] text-slate-500 piq-fade-in piq-fade-in-delay-3">
          Educational estimates only. Not tax, legal, financial, accounting, or payroll advice. Always verify with payroll or a qualified CPA.
        </p>
      </div>
    </section>
  );
}
