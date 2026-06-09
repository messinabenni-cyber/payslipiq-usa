import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { STATE_CONFIGS, getStateConfig } from '@/components/StateGrossToNetConfig';
import { computePaycheck, federalIncomeTax, stateIncomeTax, formatUSD, FED_RATES } from '@/lib/calc';
import { SALARY_LADDER } from '@/lib/takeHomeSalaries';

// Wave 1 (2026-06-09): programmatic "take-home pay by salary + state" pages.
// Concept benchmarked from Talent.com's salary x state matrix, rebuilt to be
// honest, educational, and YMYL-safe: real per-paycheck breakdown, marginal +
// average rate, employer-side cost shown transparently, state worker
// contributions, and a verify-with-payroll disclaimer on every page.
// Math comes from the shared rule-based calc.ts engine (no AI, unit-testable).

const SALARY_SET = new Set(SALARY_LADDER.map(String));

export function generateStaticParams() {
  const params: { state: string; salary: string }[] = [];
  for (const s of STATE_CONFIGS) {
    for (const sal of SALARY_LADDER) {
      params.push({ state: s.slug, salary: String(sal) });
    }
  }
  return params;
}

export const dynamicParams = false;

function fmt0(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

interface Picture {
  gross: number;
  federal: number;
  ficaTotal: number;
  ss: number;
  medicare: number;
  stateTax: number;
  workerContribs: Array<{ label: string; annual: number; note?: string }>;
  workerContribsTotal: number;
  totalTax: number;
  net: number;
  avgRate: number;
  marginalRate: number;
  employerCost: number;
}

function buildPicture(salary: number, stateSlug: string): Picture {
  const r = computePaycheck({ grossPerPeriod: salary, freq: 'annual', stateSlug, filing: 'single' });
  const ficaTotal = r.fica.total;
  const workerContribs = r.stateWorkerContribsPerPeriod.map((w) => ({ label: w.label, annual: w.amount, note: w.note }));
  const workerContribsTotal = r.stateWorkerContribsTotalPerPeriod;
  const totalTax = r.federalTaxAnnual + ficaTotal + r.stateTaxAnnual + workerContribsTotal;
  const net = salary - totalTax;
  const avgRate = salary > 0 ? totalTax / salary : 0;

  // Marginal rate: add $1,000 of gross and see how much of it is taken by
  // federal + state income tax + the employee FICA rate at this income level.
  const fed2 = federalIncomeTax(salary + 1000, 'single');
  const st2 = stateIncomeTax(salary + 1000, stateSlug, 'single');
  const ficaMarginal = (salary < FED_RATES.socialSecurityWageBase ? FED_RATES.socialSecurity : 0) + FED_RATES.medicare;
  const marginalRate =
    (fed2 - r.federalTaxAnnual) / 1000 +
    (st2 - r.stateTaxAnnual) / 1000 +
    ficaMarginal;

  // Employer-side cost (educational "full cost of employing you" figure):
  // matching SS 6.2% up to the wage base + Medicare 1.45% + ~$42 FUTA.
  const ssBase = Math.min(salary, FED_RATES.socialSecurityWageBase);
  const employerFica = ssBase * FED_RATES.socialSecurity + salary * FED_RATES.medicare + 42;
  const employerCost = salary + employerFica;

  return {
    gross: salary,
    federal: r.federalTaxAnnual,
    ficaTotal,
    ss: r.fica.socialSecurity,
    medicare: r.fica.medicare + r.fica.additionalMedicare,
    stateTax: r.stateTaxAnnual,
    workerContribs,
    workerContribsTotal,
    totalTax,
    net,
    avgRate,
    marginalRate,
    employerCost,
  };
}

export function generateMetadata({ params }: { params: { state: string; salary: string } }): Metadata {
  const cfg = getStateConfig(params.state);
  if (!cfg || !SALARY_SET.has(params.salary)) {
    return { title: 'Page not found', robots: { index: false, follow: false } };
  }
  const salary = Number(params.salary);
  const url = `https://payslipiq.com/us/take-home-pay/${cfg.slug}/${salary}/`;
  const pic = buildPicture(salary, cfg.slug);
  return {
    title: `${fmt0(salary)} After Tax in ${cfg.name} (2026): Take-Home Pay | PayslipIQ`,
    description: `A ${fmt0(salary)} salary in ${cfg.name} takes home about ${fmt0(pic.net)} a year (${fmt0(pic.net / 26)} per biweekly paycheck) after federal tax, FICA${cfg.noIncomeTax ? '' : ', and ' + cfg.name + ' state tax'}. 2026 estimate. Educational only.`,
    alternates: { canonical: url, languages: { 'en-US': url, 'x-default': url } },
    openGraph: {
      title: `${fmt0(salary)} after tax in ${cfg.name} (2026)`,
      description: `Take-home pay, every deduction, and per-paycheck breakdown for a ${fmt0(salary)} salary in ${cfg.name}.`,
      url, type: 'website',
      images: [{ url: `https://payslipiq.com/api/og?title=${encodeURIComponent(fmt0(salary) + ' after tax in ' + cfg.name)}&eyebrow=USA%202026`, width: 1200, height: 630 }],
    },
  };
}

const FREQS: Array<{ label: string; periods: number }> = [
  { label: 'Monthly', periods: 12 },
  { label: 'Semi-monthly', periods: 24 },
  { label: 'Biweekly', periods: 26 },
  { label: 'Weekly', periods: 52 },
];

export default function Page({ params }: { params: { state: string; salary: string } }) {
  const cfg = getStateConfig(params.state);
  if (!cfg || !SALARY_SET.has(params.salary)) notFound();
  const salary = Number(params.salary);
  const url = `https://payslipiq.com/us/take-home-pay/${cfg!.slug}/${salary}/`;
  const pic = buildPicture(salary, cfg!.slug);
  const pct = (n: number) => `${(n * 100).toFixed(1)}%`;
  // Deterministic 0/1/2 phrasing selector (stable per salary + state).
  const variant = (Math.round(salary / 1000) + cfg!.slug.length) % 3;
  // Effective state rate derived from the ACTUAL computed figure, so the rate
  // we quote always matches the dollar amount in the table (no drift).
  const stateEff = salary > 0 ? pic.stateTax / salary : 0;

  // Adjacent salaries for internal linking
  const idx = SALARY_LADDER.indexOf(salary);
  const neighbours = [SALARY_LADDER[idx - 2], SALARY_LADDER[idx - 1], SALARY_LADDER[idx + 1], SALARY_LADDER[idx + 2]].filter(Boolean);

  const FAQS = [
    {
      q: `What is the take-home pay on a ${fmt0(salary)} salary in ${cfg!.name} for 2026?`,
      a: `A ${fmt0(salary)} gross salary in ${cfg!.name} leaves an estimated ${fmt0(pic.net)} per year after federal income tax, Social Security, Medicare${cfg!.noIncomeTax ? '' : `, and ${cfg!.name} state income tax`}${pic.workerContribsTotal > 0 ? ', plus state worker contributions' : ''}. That works out to roughly ${fmt0(pic.net / 26)} per biweekly paycheck or ${fmt0(pic.net / 12)} per month. This is a single-filer estimate; your real figure changes with W-4 settings, dependents, and benefit deductions.`,
    },
    {
      q: `How much tax do you pay on ${fmt0(salary)} in ${cfg!.name}?`,
      a: `About ${fmt0(pic.totalTax)} in total: ${fmt0(pic.federal)} federal income tax, ${fmt0(pic.ficaTotal)} FICA (Social Security and Medicare)${cfg!.noIncomeTax ? '' : `, and ${fmt0(pic.stateTax)} ${cfg!.name} state income tax`}${pic.workerContribsTotal > 0 ? `, plus ${fmt0(pic.workerContribsTotal)} in ${cfg!.name} worker contributions` : ''}. That is an average tax rate of ${pct(pic.avgRate)}.`,
    },
    {
      q: `What is the difference between marginal and average tax rate at ${fmt0(salary)}?`,
      a: `Your average rate (${pct(pic.avgRate)}) is total tax divided by gross pay, the share of your whole salary that goes to tax. Your marginal rate (about ${pct(pic.marginalRate)}) is the tax on your next dollar earned. The marginal rate is higher because income tax is banded: only the top slice of your pay is taxed at the highest band.`,
    },
    {
      q: cfg!.noIncomeTax
        ? `Why is there no state tax line for ${cfg!.name}?`
        : `What is the ${cfg!.name} state income tax on ${fmt0(salary)}?`,
      a: cfg!.noIncomeTax
        ? `${cfg!.name} does not levy a state income tax on wages, so the state tax line reads $0. You still pay federal income tax and FICA. ${cfg!.notes}`
        : `Approximately ${fmt0(pic.stateTax)}, ${cfg!.hasFlatTax ? `using ${cfg!.name}'s flat ${pct(stateEff)} rate` : `an estimated ${pct(stateEff)} effective rate for this income (PayslipIQ models ${cfg!.name}'s brackets with a representative rate)`}. Verify with the ${cfg!.revenueAgency.name}.`,
    },
    {
      q: `Does this prove my paycheck is correct?`,
      a: `No. This is an educational 2026 estimate for a single filer with no extra deductions. It does not prove your paycheck is right or wrong. If your real take-home is very different, that is usually explained by your W-4, pre-tax benefits (401(k), health insurance, HSA/FSA), or year-to-date wages, not an error. Check the figures with your payroll team.`,
    },
  ];

  return (
    <main className="piq-container py-10 max-w-3xl">
      <BreadcrumbSchema items={[
        { name: 'PayslipIQ USA', url: 'https://payslipiq.com/us' },
        { name: 'Take-home pay', url: 'https://payslipiq.com/us/salary-after-tax' },
        { name: cfg!.name, url: `https://payslipiq.com/us/gross-to-net-paycheck/${cfg!.slug}` },
        { name: `${fmt0(salary)} after tax`, url },
      ]} />
      <ArticleSchema headline={`${fmt0(salary)} After Tax in ${cfg!.name} (2026)`} description={`Estimated take-home pay and full deduction breakdown for a ${fmt0(salary)} salary in ${cfg!.name}, tax year 2026.`} url={url} />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">{cfg!.name} · USA 2026 · single filer</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
        {fmt0(salary)} after tax in {cfg!.name}.
      </h1>

      {/* AEO direct-answer block: first ~60 words, quotable. Three deterministic
          phrasings keyed off salary + state so pages don't share identical copy. */}
      <p className="mt-5 text-[17px] text-ink/85 leading-relaxed">
        {variant === 0 && (
          <>A <strong>{fmt0(salary)}</strong> salary in {cfg!.name} takes home an estimated{' '}
          <strong>{fmt0(pic.net)} a year</strong> for 2026. That works out to about{' '}
          <strong>{fmt0(pic.net / 26)}</strong> per biweekly paycheck, or{' '}
          <strong>{fmt0(pic.net / 12)}</strong> a month, after federal income tax,
          Social Security, Medicare{cfg!.noIncomeTax ? ' (no state income tax applies)' : `, and ${cfg!.name} state income tax`}.
          The total estimated tax is {fmt0(pic.totalTax)}, an average rate of {pct(pic.avgRate)}.</>
        )}
        {variant === 1 && (
          <>If you earn <strong>{fmt0(salary)}</strong> in {cfg!.name}, your estimated 2026 take-home pay is{' '}
          <strong>{fmt0(pic.net)} a year</strong>. Per paycheck that is roughly{' '}
          <strong>{fmt0(pic.net / 26)}</strong> every two weeks, or{' '}
          <strong>{fmt0(pic.net / 12)}</strong> each month. The figure is what remains after{' '}
          {fmt0(pic.totalTax)} in federal income tax, Social Security, Medicare{cfg!.noIncomeTax ? '' : `, and ${cfg!.name} state income tax`},
          an average rate of {pct(pic.avgRate)}.</>
        )}
        {variant === 2 && (
          <>On a <strong>{fmt0(salary)}</strong> salary, a single filer in {cfg!.name} keeps an estimated{' '}
          <strong>{fmt0(pic.net)}</strong> of it in 2026. Spread across the year that is about{' '}
          <strong>{fmt0(pic.net / 26)}</strong> a biweekly paycheck, or{' '}
          <strong>{fmt0(pic.net / 12)}</strong> a month. The rest, {fmt0(pic.totalTax)}, covers federal income tax,
          Social Security, Medicare{cfg!.noIncomeTax ? ' (there is no state income tax)' : `, and ${cfg!.name} state income tax`},
          for an average rate of {pct(pic.avgRate)}.</>
        )}
      </p>

      <ReviewedBy />

      {/* Headline numbers */}
      <section className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white border border-line rounded-md p-4">
          <div className="text-xs uppercase tracking-wider text-ink/60">Gross</div>
          <div className="font-semibold text-lg mt-1">{fmt0(pic.gross)}</div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-md p-4">
          <div className="text-xs uppercase tracking-wider text-emerald-800/70">Take-home</div>
          <div className="font-semibold text-lg mt-1 text-emerald-800">{fmt0(pic.net)}</div>
        </div>
        <div className="bg-white border border-line rounded-md p-4">
          <div className="text-xs uppercase tracking-wider text-ink/60">Average rate</div>
          <div className="font-semibold text-lg mt-1">{pct(pic.avgRate)}</div>
        </div>
        <div className="bg-white border border-line rounded-md p-4">
          <div className="text-xs uppercase tracking-wider text-ink/60">Marginal rate</div>
          <div className="font-semibold text-lg mt-1">{pct(pic.marginalRate)}</div>
        </div>
      </section>

      {/* Where the money goes */}
      <section className="mt-8 rounded-md border border-line bg-white p-5">
        <h2 className="text-xl font-semibold mb-3">Where your {fmt0(salary)} goes ({cfg!.name}, 2026)</h2>
        <table className="w-full text-[15px]">
          <tbody>
            <tr className="border-b border-line"><td className="py-2">Gross salary</td><td className="py-2 text-right font-semibold">{fmt0(pic.gross)}</td></tr>
            <tr className="border-b border-line text-ink/80"><td className="py-2">Federal income tax</td><td className="py-2 text-right">− {fmt0(pic.federal)}</td></tr>
            <tr className="border-b border-line text-ink/80"><td className="py-2">Social Security (6.2%)</td><td className="py-2 text-right">− {fmt0(pic.ss)}</td></tr>
            <tr className="border-b border-line text-ink/80"><td className="py-2">Medicare (1.45%)</td><td className="py-2 text-right">− {fmt0(pic.medicare)}</td></tr>
            {!cfg!.noIncomeTax && (
              <tr className="border-b border-line text-ink/80"><td className="py-2">{cfg!.name} state income tax</td><td className="py-2 text-right">− {fmt0(pic.stateTax)}</td></tr>
            )}
            {pic.workerContribs.map((w) => (
              <tr key={w.label} className="border-b border-line text-ink/80"><td className="py-2">{w.label}</td><td className="py-2 text-right">− {fmt0(w.annual)}</td></tr>
            ))}
            <tr className="border-t-2 border-ink/20"><td className="py-2 font-semibold text-emerald-800">Estimated take-home</td><td className="py-2 text-right font-semibold text-emerald-800">{fmt0(pic.net)}</td></tr>
          </tbody>
        </table>
        <p className="mt-3 text-[12.5px] text-ink/55">Federal: IRS Pub. 15-T 2026 percentage method, standard deduction, single filer. FICA: SSA 2026 wage base {formatUSD(FED_RATES.socialSecurityWageBase)}. State: {cfg!.noIncomeTax ? 'no wage income tax' : `${cfg!.name} ${pct(stateEff)} effective on this income`}.</p>
      </section>

      {/* Per-paycheck */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold tracking-tight">Take-home per paycheck</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[15px]">
          {FREQS.map((f) => (
            <div key={f.label} className="bg-white border border-line rounded-md p-4">
              <div className="text-xs uppercase tracking-wider text-ink/60">{f.label}</div>
              <div className="font-semibold mt-1">{fmt0(pic.net / f.periods)}</div>
              <div className="text-[11px] text-ink/50 mt-0.5">{f.periods} paychecks/yr</div>
            </div>
          ))}
        </div>
      </section>

      {/* Full cost to employer — honest, educational replacement for the gimmicky "taxberg" */}
      <section className="mt-8 rounded-md border border-line bg-stone-50 p-5">
        <h2 className="text-xl font-semibold mb-2">The full cost of your {fmt0(salary)} job</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          Your employer also pays tax on your wages that never appears on your stub: a matching 6.2% Social Security, 1.45% Medicare, and federal unemployment tax. For a {fmt0(salary)} salary that is roughly <strong>{fmt0(pic.employerCost - pic.gross)}</strong> on top, so it costs about <strong>{fmt0(pic.employerCost)}</strong> to employ you. This is context, not a deduction from your pay. It is shown so you can see the whole tax picture.
        </p>
      </section>

      {/* Interactive: change the salary */}
      <section className="mt-8 rounded-md border border-accent/30 bg-accent/5 p-5">
        <h2 className="text-lg font-semibold mb-1">Different salary or pay frequency?</h2>
        <p className="text-[14px] text-ink/80">Use the full {cfg!.name} calculator to enter your exact gross, filing status, and pre-tax deductions.</p>
        <div className="mt-3 flex flex-wrap gap-2 text-[14px]">
          <Link href={`/us/gross-to-net-paycheck/${cfg!.slug}`} className="inline-block bg-accent text-white rounded px-4 py-2 font-medium hover:opacity-90">Open the {cfg!.name} calculator</Link>
          <Link href="/us/paycheck-calculator" className="inline-block bg-white border border-line rounded px-4 py-2 font-medium hover:border-accent">Full paycheck calculator</Link>
        </div>
      </section>

      <aside className="mt-6 border-l-4 border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900 rounded" role="note">
        <strong className="font-semibold">Important:</strong> This is a single-filer estimate with no extra deductions. Your real take-home changes with your W-4, dependents, 401(k)/health/HSA deductions, year-to-date wages{cfg!.hasLocalTax ? `, and any ${cfg!.name} local income tax` : ''}. It does not prove your paycheck is right or wrong. Verify with the {cfg!.revenueAgency.name} or your payroll team.
      </aside>

      {/* Same salary, other states */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">{fmt0(salary)} in other states</h2>
        <p className="mt-2 text-[14px] text-ink/70">How far {fmt0(salary)} goes changes a lot by state, mostly because of state income tax.</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[14px]">
          {STATE_CONFIGS.filter((s) => s.slug !== cfg!.slug).slice(0, 12).map((s) => (
            <Link key={s.slug} href={`/us/take-home-pay/${s.slug}/${salary}`} className="block bg-white border border-line rounded p-2 text-center hover:border-accent">{fmt0(salary)} in {s.name}</Link>
          ))}
        </div>
      </section>

      {/* Other salaries, same state */}
      {neighbours.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold tracking-tight">Other salaries in {cfg!.name}</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[14px]">
            {neighbours.map((n) => (
              <Link key={n} href={`/us/take-home-pay/${cfg!.slug}/${n}`} className="block bg-white border border-line rounded p-2 text-center hover:border-accent">{fmt0(n!)} after tax</Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Common questions</h2>
        <dl className="mt-5 grid gap-5">
          {FAQS.map((f) => (<div key={f.q}><dt className="font-semibold text-ink">{f.q}</dt><dd className="mt-1 text-[15px] text-ink/80 leading-relaxed">{f.a}</dd></div>))}
        </dl>
      </section>

      <section className="mt-10 border border-line rounded-md bg-white p-4">
        <h2 className="text-base font-semibold mb-2">Official sources</h2>
        <ul className="text-[14px] space-y-1">
          <li><a href={cfg!.revenueAgency.url} target="_blank" rel="nofollow noopener" className="text-accent hover:underline">{cfg!.revenueAgency.name}</a></li>
          <li><a href="https://www.irs.gov/publications/p15t" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">IRS Publication 15-T (federal withholding)</a></li>
          <li><a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="nofollow noopener" className="text-accent hover:underline">SSA Contribution and Benefit Base</a></li>
        </ul>
      </section>

      <nav className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm" aria-label="Related tools">
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/salary-after-tax">Salary after tax</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/fica-explained">FICA explained</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href="/us/why-is-my-paycheck-lower">Why is my paycheck lower?</Link>
        <Link className="block bg-white border border-line rounded p-3 text-center hover:border-accent" href={`/us/${cfg!.slug}`}>{cfg!.name} hub</Link>
      </nav>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
