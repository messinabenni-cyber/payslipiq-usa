import Link from 'next/link';

// Wave 5 (2026-06-10): trust-first monetisation surface.
// Surfaces the existing optional paid products (premium report, monthly monitor)
// and the independent CPA / tax-preparer directories. Always rendered BELOW the
// free tool or content, never above the primary CTA (per the project rule:
// monetise without damaging trust). No prices are shown here; details, pricing
// and refund/cancel policy live on each linked page. Educational only.
export function NextStepsBlock({ className = '' }: { className?: string }) {
  return (
    <section className={`rounded-md border border-line bg-white p-6 ${className}`} aria-label="Next steps">
      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Next steps</div>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight">Want to go further?</h2>
      <p className="mt-2 text-[15px] text-ink/80 leading-relaxed">
        The calculators and guides here are free. If you want a closer look at one specific stub, these optional next steps go deeper.
      </p>
      <div className="mt-5 grid sm:grid-cols-3 gap-3 text-[14px]">
        <Link href="/us/premium-pay-stub-report" className="block rounded border border-line bg-white p-4 hover:border-accent">
          <div className="font-semibold text-ink">Premium pay stub report</div>
          <div className="mt-1 text-ink/70">A detailed one-off PDF that walks through every line on one stub, with a verify-with-payroll checklist.</div>
        </Link>
        <Link href="/us/monthly-paycheck-monitor" className="block rounded border border-line bg-white p-4 hover:border-accent">
          <div className="font-semibold text-ink">Monthly paycheck monitor</div>
          <div className="mt-1 text-ink/70">Track each stub against the last one and get a plain-English alert when something shifts.</div>
        </Link>
        <Link href="/us/find-a-cpa" className="block rounded border border-line bg-white p-4 hover:border-accent">
          <div className="font-semibold text-ink">Talk to a CPA or EA</div>
          <div className="mt-1 text-ink/70">For anything that affects your taxes, find a credentialed professional through the IRS and state directories.</div>
        </Link>
      </div>
      <p className="mt-4 text-[12.5px] text-ink/55 leading-relaxed">
        How PayslipIQ stays free: the tools and guides are free to use. PayslipIQ offers optional paid reports and monitoring, and links to independent CPA and tax-preparer directories. It is not affiliated with the IRS, the SSA, any employer, or any payroll provider, and does not sell user data. Educational only, not tax, legal, or financial advice.
      </p>
    </section>
  );
}
