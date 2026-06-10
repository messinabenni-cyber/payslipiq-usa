import Link from 'next/link';
import {
  FED_RATES,
  STANDARD_DEDUCTION,
  FEDERAL_BRACKETS_SINGLE,
  formatUSD,
} from '@/lib/calc';

// Wave 2 (2026-06-09): the "2026 Pay Numbers" authority block.
// One sourced, dated panel of the federal figures that drive every US paycheck.
// Built to win AI-answer citations and to be the freshest reference in the
// category (competitors still publish 2022/2023 FICA numbers). Single source of
// truth: the SS wage base, brackets and standard deduction are read straight
// from the calc engine, so this panel can never drift from what the tools use.
//
// Every figure verified 2026-06-09 against primary sources:
//   Social Security wage base $184,500 ....... SSA (ssa.gov/oact/cola/cbb.html)
//   Federal brackets + standard deduction .... IRS Rev. Proc. 2025-32 / IR-2025-103
//   401(k) / catch-up limits ................. IRS Notice 2025-67
//   Medicare 1.45% + Additional 0.9% ......... statutory (FICA / IRC 3101)

const VERIFIED = 'June 2026';

const ssMaxEmployee = Math.round(FED_RATES.socialSecurityWageBase * FED_RATES.socialSecurity);

function fmt0(n: number): string {
  if (!Number.isFinite(n)) return '';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

// Build readable single-filer bracket rows from the engine's bracket table.
function bracketRows() {
  const rows: { range: string; rate: string }[] = [];
  let lower = 0;
  for (const [upper, rate] of FEDERAL_BRACKETS_SINGLE) {
    const ratePct = `${Math.round(rate * 100)}%`;
    if (!Number.isFinite(upper)) {
      rows.push({ range: `Over ${fmt0(lower)}`, rate: ratePct });
    } else if (lower === 0) {
      rows.push({ range: `Up to ${fmt0(upper)}`, rate: ratePct });
    } else {
      rows.push({ range: `${fmt0(lower)} to ${fmt0(upper)}`, rate: ratePct });
    }
    lower = Number.isFinite(upper) ? upper : lower;
  }
  return rows;
}

const SOURCES = (
  <p className="mt-3 text-[12px] text-ink/55 leading-relaxed">
    Verified {VERIFIED}. Sources:{' '}
    <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="nofollow noopener" className="underline hover:text-accent">SSA Contribution and Benefit Base</a>,{' '}
    <a href="https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill" target="_blank" rel="nofollow noopener" className="underline hover:text-accent">IRS Rev. Proc. 2025-32</a>,{' '}
    <a href="https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500" target="_blank" rel="nofollow noopener" className="underline hover:text-accent">IRS Notice 2025-67</a>. Educational only, not advice.
  </p>
);

/**
 * 2026 federal pay-number reference panel.
 * variant="full"    full grid + bracket table + sources (use on the canonical page)
 * variant="compact" tight strip of the most-cited numbers + link to the full page
 */
export function PayNumbers2026({ variant = 'full', className = '' }: { variant?: 'full' | 'compact'; className?: string }) {
  const ssBase = FED_RATES.socialSecurityWageBase;

  if (variant === 'compact') {
    return (
      <aside className={`rounded-md border border-line bg-white p-5 ${className}`} aria-label="2026 US pay numbers">
        <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">USA · 2026 · verified</div>
        <h2 className="mt-1 text-xl font-semibold tracking-tight">2026 pay numbers</h2>
        <p className="mt-2 text-[14px] text-ink/80 leading-relaxed">
          For 2026, Social Security is 6.2% on the first {fmt0(ssBase)} of wages, Medicare is 1.45% with no cap, and an extra 0.9% Medicare applies above {fmt0(FED_RATES.additionalMedicareThresholdSingle)} (single) or {fmt0(FED_RATES.additionalMedicareThresholdMFJ)} (married filing jointly).
        </p>
        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[13.5px]">
          <div><dt className="text-ink/55">Social Security wage base</dt><dd className="font-semibold">{fmt0(ssBase)}</dd></div>
          <div><dt className="text-ink/55">Max employee Social Security</dt><dd className="font-semibold">{fmt0(ssMaxEmployee)}</dd></div>
          <div><dt className="text-ink/55">Standard deduction (single)</dt><dd className="font-semibold">{fmt0(STANDARD_DEDUCTION.single)}</dd></div>
          <div><dt className="text-ink/55">401(k) elective deferral</dt><dd className="font-semibold">{fmt0(24500)}</dd></div>
        </dl>
        <Link href="/us/2026-pay-numbers" className="mt-3 inline-block text-[13.5px] font-medium text-accent hover:underline">See all 2026 pay numbers and brackets</Link>
        {SOURCES}
      </aside>
    );
  }

  return (
    <section className={`rounded-md border border-line bg-white p-6 ${className}`} aria-label="2026 US pay numbers">
      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">USA · 2026 · verified</div>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight">2026 US pay numbers</h2>
      <p className="mt-3 text-[15px] text-ink/85 leading-relaxed">
        For 2026, Social Security tax is 6.2% on the first {fmt0(ssBase)} of wages, so the most an employee pays into Social Security is {fmt0(ssMaxEmployee)}. Medicare is 1.45% with no wage cap, and an extra 0.9% Additional Medicare applies to wages above {fmt0(FED_RATES.additionalMedicareThresholdSingle)} for single filers or {fmt0(FED_RATES.additionalMedicareThresholdMFJ)} for married couples filing jointly. The standard deduction is {fmt0(STANDARD_DEDUCTION.single)} for single filers and {fmt0(STANDARD_DEDUCTION.mfj)} for married couples filing jointly.
      </p>

      <div className="mt-5 grid sm:grid-cols-2 gap-3 text-[14px]">
        <div className="border border-line rounded p-4">
          <div className="text-xs uppercase tracking-wider text-ink/55">Social Security (OASDI)</div>
          <div className="font-semibold mt-1">6.2% up to {fmt0(ssBase)}</div>
          <div className="text-ink/70 mt-1">Max employee: {fmt0(ssMaxEmployee)}. Employer matches the same amount.</div>
        </div>
        <div className="border border-line rounded p-4">
          <div className="text-xs uppercase tracking-wider text-ink/55">Medicare</div>
          <div className="font-semibold mt-1">1.45%, no wage cap</div>
          <div className="text-ink/70 mt-1">Plus 0.9% Additional Medicare above {fmt0(FED_RATES.additionalMedicareThresholdSingle)} (single) / {fmt0(FED_RATES.additionalMedicareThresholdMFJ)} (MFJ).</div>
        </div>
        <div className="border border-line rounded p-4">
          <div className="text-xs uppercase tracking-wider text-ink/55">Standard deduction</div>
          <div className="font-semibold mt-1">{fmt0(STANDARD_DEDUCTION.single)} single · {fmt0(STANDARD_DEDUCTION.mfj)} MFJ</div>
          <div className="text-ink/70 mt-1">Head of household: {fmt0(STANDARD_DEDUCTION.hoh)}.</div>
        </div>
        <div className="border border-line rounded p-4">
          <div className="text-xs uppercase tracking-wider text-ink/55">401(k) elective deferral</div>
          <div className="font-semibold mt-1">{fmt0(24500)}</div>
          <div className="text-ink/70 mt-1">Catch-up (50+): {fmt0(8000)}. Ages 60 to 63: {fmt0(11250)}. IRA: {fmt0(7500)}.</div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-base font-semibold">2026 federal income tax brackets (single filer)</h3>
        <table className="mt-2 w-full text-[14px] border border-line rounded overflow-hidden">
          <caption className="sr-only">2026 federal income tax brackets for a single filer, taxable income and marginal rate</caption>
          <thead>
            <tr className="bg-stone-50 text-left">
              <th scope="col" className="py-2 px-3 font-medium">Taxable income</th>
              <th scope="col" className="py-2 px-3 font-medium text-right">Rate</th>
            </tr>
          </thead>
          <tbody>
            {bracketRows().map((r) => (
              <tr key={r.range} className="border-t border-line">
                <td className="py-2 px-3">{r.range}</td>
                <td className="py-2 px-3 text-right font-semibold">{r.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-[12.5px] text-ink/55">Brackets apply to taxable income after the standard deduction. Married-filing-jointly thresholds are roughly double the single figures.</p>
      </div>

      {SOURCES}
    </section>
  );
}
