import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { GrossToNetCalculator } from '@/components/GrossToNetCalculator';
import { STATE_CONFIGS, getStateConfig } from '@/components/StateGrossToNetConfig';

export function generateStaticParams() {
  return STATE_CONFIGS.map((s) => ({ state: s.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { state: string } }): Metadata {
  const cfg = getStateConfig(params.state);
  if (!cfg) return { title: 'State page not found', robots: { index: false, follow: false } };
  const url = `https://payslipiq.com/us/gross-to-net-paycheck/${cfg.slug}/`;
  return {
    title: `${cfg.name} Gross to Net Paycheck Calculator (2026) | PayslipIQ`,
    description: `Convert any gross paycheck into estimated take-home pay in ${cfg.name}. Federal income tax, FICA, and ${cfg.name} state tax for 2026. Educational only, not advice.`,
    alternates: { canonical: url, languages: { 'en-US': url, 'x-default': url } },
    openGraph: {
      title: `${cfg.name} Gross to Net Paycheck Calculator (2026)`,
      description: `Type a gross amount, see what it becomes in ${cfg.name} after federal, FICA, and state tax.`,
      url, type: 'website',
      images: [{ url: `https://payslipiq.com/api/og?title=${encodeURIComponent(cfg.name + ' Gross to Net')}&eyebrow=USA%202026`, width: 1200, height: 630 }]
    }
  };
}

export default function Page({ params }: { params: { state: string } }) {
  const cfg = getStateConfig(params.state);
  if (!cfg) notFound();

  const url = `https://payslipiq.com/us/gross-to-net-paycheck/${cfg!.slug}/`;
  const stateRatePct = (cfg!.rate * 100).toFixed(2);

  const FAQS = [
    {
      q: `Does ${cfg!.name} have a state income tax?`,
      a: cfg!.noIncomeTax
        ? `No. ${cfg!.name} does not levy a state income tax on wages. Federal income tax, Social Security, and Medicare still apply. ${cfg!.workerContributions.length > 0 ? 'Note that ' + cfg!.workerContributions.join(', ') + ' may still appear on your stub as separate worker-contribution lines.' : 'There are no major worker-contribution programs to model.'}`
        : `Yes. ${cfg!.name} levies a ${cfg!.hasFlatTax ? `flat ${stateRatePct}%` : `progressive`} state income tax on wages, which appears on your pay stub as a separate line in addition to federal income tax, Social Security, and Medicare.`
    },
    {
      q: `What is the ${cfg!.name} state income tax rate for 2026?`,
      a: cfg!.noIncomeTax
        ? `${cfg!.name} has no state income tax on wages, so the rate is effectively 0%.`
        : `${cfg!.name} uses ${cfg!.hasFlatTax ? `a flat rate of approximately ${stateRatePct}%` : `progressive brackets`}. PayslipIQ uses a verified ${stateRatePct}% effective rate appropriate for typical $60-100k earners. Higher earners should expect a slightly higher effective rate. Always verify with the ${cfg!.revenueAgency.name}.`
    },
    {
      q: `Are there local income taxes in ${cfg!.name}?`,
      a: cfg!.hasLocalTax
        ? `Yes. ${cfg!.name} has localities with their own income tax. The Gross to Net Paycheck Calculator above estimates state tax only. For locality-specific math, use the PayslipIQ Local Paycheck Taxes calculator and add the result to the state tax line.`
        : `No major localities in ${cfg!.name} levy a local income tax on wages. ${cfg!.notes ? cfg!.notes : ''}`
    },
    {
      q: `What worker contributions appear on a ${cfg!.name} pay stub?`,
      a: cfg!.workerContributions.length > 0
        ? `${cfg!.name} workers typically see: ${cfg!.workerContributions.join('; ')}. These are separate from federal income tax and FICA, and they may not be modeled by the calculator above. Verify the exact percentage with your payroll team.`
        : `${cfg!.name} does not have major worker-contribution programs (no SDI, no PFML, etc.). The standard federal payroll deductions (income tax, Social Security, Medicare) plus state income tax (if any) make up the bulk of withholding.`
    },
    {
      q: `Can I rely on this calculator for ${cfg!.name} tax filing?`,
      a: 'No. This calculator is educational only. It is not tax, legal, payroll, accounting, HR, or financial advice. PayslipIQ is independent and not affiliated with the IRS, SSA, the Department of Labor, the ' + cfg!.revenueAgency.name + ', any payroll provider, or your employer. For filing decisions, talk to a qualified CPA or EA.'
    },
    {
      q: `How accurate is this for ${cfg!.name}?`,
      a: `It uses the IRS Pub. 15-T 2026 percentage method for federal withholding, the SSA 2026 wage base of $184,500 for Social Security, the standard 1.45% Medicare rate plus 0.9% Additional Medicare on wages over $200,000, and a verified ${cfg!.name} state rate of ${stateRatePct}% (verified 2026-05-06). Real paychecks vary because of W-4 dependents, multiple jobs, year-to-date wages, employer-specific benefit deductions, and ${cfg!.name}-specific worker contributions. Use it as a starting point, not a final answer.`
    }
  ];

  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
        { name: 'Gross to Net Paycheck', url: 'https://payslipiq.com/us/gross-to-net-paycheck-calculator' },
        { name: cfg!.name, url }
      ]} />
      <ArticleSchema headline={`${cfg!.name} Gross to Net Paycheck Calculator (2026)`} description={`Convert any gross paycheck into estimated take-home pay in ${cfg!.name} for tax year 2026.`} url={url} />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">{cfg!.name} · USA 2026</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
        {cfg!.name} gross to net paycheck calculator.
      </h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        Type any gross paycheck and see the estimated take-home pay in {cfg!.name} after federal income tax, Social Security, Medicare, and {cfg!.noIncomeTax ? 'with no state income tax' : `${cfg!.name} state income tax`}.
      </p>

      <ReviewedBy />

      <section className="mt-8 rounded-md border border-line bg-white p-5">
        <h2 className="text-xl font-semibold mb-2">In plain English ({cfg!.name})</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          {cfg!.noIncomeTax
            ? `${cfg!.name} has no state income tax on wages, so the state tax line on your pay stub will read $0. Federal income tax, Social Security (6.2% up to $184,500 for 2026), and Medicare (1.45% no cap) still apply. ${cfg!.workerContributions.length > 0 ? 'Worker-contribution lines you may see: ' + cfg!.workerContributions.join(', ') + '.' : ''} The PayslipIQ calculator below estimates the federal portion and you can pair it with locality info if relevant.`
            : `${cfg!.name} uses ${cfg!.hasFlatTax ? `a flat ${stateRatePct}% income tax` : `progressive brackets, with PayslipIQ using a verified ${stateRatePct}% effective rate for typical earners`}. Federal income tax (IRS Pub 15-T 2026 percentage method), Social Security (6.2% up to the SSA 2026 wage base of $184,500), and Medicare (1.45% no cap) apply on top. ${cfg!.hasLocalTax ? `${cfg!.name} also has localities with their own income tax, modeled separately.` : ''} ${cfg!.workerContributions.length > 0 ? 'Worker-contribution lines you may see: ' + cfg!.workerContributions.join(', ') + '.' : ''}`}
        </p>
      </section>

      <aside className="mt-6 border-l-4 border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900 rounded" role="note">
        <strong className="font-semibold">Important:</strong> Estimates only. {cfg!.name} payroll rules vary by employer, residency, work location, and individual W-4 settings. Always verify with the {cfg!.revenueAgency.name} or your payroll team before relying on a number.
      </aside>

      {/* Reuse the master Gross to Net calculator with the state pre-selected */}
      <GrossToNetCalculator defaultState={cfg!.code} />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Snapshot, {cfg!.name} 2026</h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-3 text-[15px]">
          <div className="bg-white border border-line rounded-md p-4">
            <div className="text-xs uppercase tracking-wider text-ink/60">State income tax</div>
            <div className="font-semibold mt-1">{cfg!.noIncomeTax ? 'None on wages' : cfg!.hasFlatTax ? `Flat ${stateRatePct}%` : `Progressive (PayslipIQ uses ${stateRatePct}% effective)`}</div>
          </div>
          <div className="bg-white border border-line rounded-md p-4">
            <div className="text-xs uppercase tracking-wider text-ink/60">Local income tax</div>
            <div className="font-semibold mt-1">{cfg!.hasLocalTax ? 'Yes, in some localities' : 'None'}</div>
          </div>
          <div className="bg-white border border-line rounded-md p-4">
            <div className="text-xs uppercase tracking-wider text-ink/60">Disability insurance (SDI)</div>
            <div className="font-semibold mt-1">{cfg!.hasSDI ? 'Yes, employee deduction' : 'No'}</div>
          </div>
          <div className="bg-white border border-line rounded-md p-4">
            <div className="text-xs uppercase tracking-wider text-ink/60">Paid family / medical leave</div>
            <div className="font-semibold mt-1">{cfg!.hasPFML ? 'Yes, employee premium' : 'No'}</div>
          </div>
        </div>
      </section>

      {cfg!.workerContributions.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">{cfg!.name} worker contributions</h2>
          <ul className="mt-5 grid gap-2 text-[15px] text-ink/85 list-disc pl-5">
            {cfg!.workerContributions.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p className="text-xs text-ink/60 mt-3">These are separate from the federal payroll taxes and may appear as small line items on your stub. The calculator above does not always model them precisely. Verify with your payroll team.</p>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Common questions ({cfg!.name})</h2>
        <dl className="mt-5 grid gap-5">
          {FAQS.map((f) => (<div key={f.q}><dt className="font-semibold text-ink">{f.q}</dt><dd className="mt-1 text-[15px] text-ink/80 leading-relaxed">{f.a}</dd></div>))}
        </dl>
      </section>

      <section className="mt-10 border border-line rounded-md bg-white p-4">
        <h2 className="text-base font-semibold mb-2">Official sources for {cfg!.name}</h2>
        <ul className="text-[14px] space-y-1">
          <li><a href={cfg!.revenueAgency.url} target="_blank" rel="nofollow noopener" className="text-accent hover:underline">{cfg!.revenueAgency.name}</a></li>
          <li><a href={cfg!.laborAgency.url} target="_blank" rel="nofollow noopener" className="text-accent hover:underline">{cfg!.laborAgency.name}</a></li>
          <li><a href={cfg!.paycheckCalculator} target="_blank" rel="nofollow noopener" className="text-accent hover:underline">{cfg!.name} withholding / payroll resources</a></li>
          <li><a href="https://www.irs.gov/publications/p15t" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">IRS Publication 15-T (federal withholding)</a></li>
          <li><a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">SSA Contribution and Benefit Base</a></li>
        </ul>
        <p className="mt-3 text-[12.5px] text-ink/55">PayslipIQ is independent of every agency listed. Source links are informational, not endorsement.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Other state pages</h2>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[14px]">
          {STATE_CONFIGS.filter((s) => s.slug !== cfg!.slug).map((s) => (
            <Link key={s.slug} href={`/us/gross-to-net-paycheck/${s.slug}`} className="block bg-white border border-line rounded p-2 text-center hover:border-accent">{s.name}</Link>
          ))}
        </div>
      </section>

      <nav className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm" aria-label="Core PayslipIQ pages">
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/gross-to-net-paycheck-calculator">Master Gross to Net</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/paycheck-calculator">Paycheck Calculator</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/fica-explained">FICA explained</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/w4-guide">W-4 Guide</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href={`/us/${cfg!.slug}`}>State hub</Link>
      </nav>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
