'use client';
import { useMemo, useState } from 'react';

// PayslipIQ USA - Dual-method Bonus Tax Calculator (self-contained, production-portable)
// Educational only. Not advice. Tax year 2026.
// Shows BOTH bonus-withholding methods side by side:
//   (a) Percentage / flat method - 22% federal supplemental (37% over $1,000,000) + FICA
//   (b) Aggregate method - bonus added to a regular paycheck, federal logic applied, regular tax backed out
// Sources:
//   IRS Pub. 15 (Circular E), Section 7 - Supplemental Wages (22% / 37% flat rates)
//   IRS Pub. 15-T 2026 percentage method (Standard Withholding) for the aggregate method
//   IRS Topic 751 (FICA rates) + SSA Contribution and Benefit Base 2026 ($184,500)

type Filing = 'single' | 'married_jointly' | 'head_of_household';
type Freq = 'weekly' | 'biweekly' | 'semimonthly' | 'monthly';

const PERIODS: Record<Freq, number> = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 };

// 2026 federal supplemental withholding rates (IRS Pub. 15, Section 7).
const SUPPLEMENTAL_RATE = 0.22;
const SUPPLEMENTAL_RATE_MILLION = 0.37;
const SUPPLEMENTAL_MILLION_THRESHOLD = 1_000_000;

// 2026 FICA (IRS Topic 751 + SSA 2026 wage base).
const SS_RATE = 0.062;
const SS_WAGE_BASE_2026 = 184_500;
const MEDICARE_RATE = 0.0145;
const ADD_MEDICARE_RATE = 0.009;
const ADD_MEDICARE_THRESHOLD_SINGLE = 200_000;
const ADD_MEDICARE_THRESHOLD_MFJ = 250_000;

// ----- States (most recently verified flat / top-marginal rate) -------------
// Mirrors the list used across PayslipIQ's self-contained calculators.
const STATES: { code: string; name: string; rate: number }[] = [
  { code: '', name: 'No state / skip state tax', rate: 0 },
  { code: 'AL', name: 'Alabama', rate: 0.05 },
  { code: 'AK', name: 'Alaska', rate: 0 },
  { code: 'AZ', name: 'Arizona', rate: 0.025 },
  { code: 'AR', name: 'Arkansas', rate: 0.044 },
  { code: 'CA', name: 'California', rate: 0.066 },
  { code: 'CO', name: 'Colorado', rate: 0.044 },
  { code: 'CT', name: 'Connecticut', rate: 0.055 },
  { code: 'DE', name: 'Delaware', rate: 0.052 },
  { code: 'DC', name: 'District of Columbia', rate: 0.065 },
  { code: 'FL', name: 'Florida', rate: 0 },
  { code: 'GA', name: 'Georgia', rate: 0.0539 },
  { code: 'HI', name: 'Hawaii', rate: 0.072 },
  { code: 'ID', name: 'Idaho', rate: 0.058 },
  { code: 'IL', name: 'Illinois', rate: 0.0495 },
  { code: 'IN', name: 'Indiana', rate: 0.0305 },
  { code: 'IA', name: 'Iowa', rate: 0.038 },
  { code: 'KS', name: 'Kansas', rate: 0.052 },
  { code: 'KY', name: 'Kentucky', rate: 0.04 },
  { code: 'LA', name: 'Louisiana', rate: 0.03 },
  { code: 'ME', name: 'Maine', rate: 0.058 },
  { code: 'MD', name: 'Maryland', rate: 0.0475 },
  { code: 'MA', name: 'Massachusetts', rate: 0.05 },
  { code: 'MI', name: 'Michigan', rate: 0.0425 },
  { code: 'MN', name: 'Minnesota', rate: 0.068 },
  { code: 'MS', name: 'Mississippi', rate: 0.044 },
  { code: 'MO', name: 'Missouri', rate: 0.047 },
  { code: 'MT', name: 'Montana', rate: 0.059 },
  { code: 'NE', name: 'Nebraska', rate: 0.052 },
  { code: 'NV', name: 'Nevada', rate: 0 },
  { code: 'NH', name: 'New Hampshire', rate: 0 },
  { code: 'NJ', name: 'New Jersey', rate: 0.058 },
  { code: 'NM', name: 'New Mexico', rate: 0.049 },
  { code: 'NY', name: 'New York', rate: 0.06 },
  { code: 'NC', name: 'North Carolina', rate: 0.0425 },
  { code: 'ND', name: 'North Dakota', rate: 0.025 },
  { code: 'OH', name: 'Ohio', rate: 0.035 },
  { code: 'OK', name: 'Oklahoma', rate: 0.0475 },
  { code: 'OR', name: 'Oregon', rate: 0.087 },
  { code: 'PA', name: 'Pennsylvania', rate: 0.0307 },
  { code: 'RI', name: 'Rhode Island', rate: 0.0499 },
  { code: 'SC', name: 'South Carolina', rate: 0.062 },
  { code: 'SD', name: 'South Dakota', rate: 0 },
  { code: 'TN', name: 'Tennessee', rate: 0 },
  { code: 'TX', name: 'Texas', rate: 0 },
  { code: 'UT', name: 'Utah', rate: 0.0455 },
  { code: 'VT', name: 'Vermont', rate: 0.066 },
  { code: 'VA', name: 'Virginia', rate: 0.0525 },
  { code: 'WA', name: 'Washington', rate: 0 },
  { code: 'WV', name: 'West Virginia', rate: 0.0482 },
  { code: 'WI', name: 'Wisconsin', rate: 0.0535 },
  { code: 'WY', name: 'Wyoming', rate: 0 }
];

// ----- IRS Pub 15-T 2026 percentage method (Standard Withholding) -----------
// Self-contained annual tables: feed RAW annual taxable wages directly.
// Each table's 0% band equals the 2026 standard deduction (Worksheet 1A fixed reduction folded in).
// Source: IRS Pub 15-T 2026 (https://www.irs.gov/pub/irs-pdf/p15t.pdf), verified 2026-05-20.
const FED_BRACKETS_SINGLE = [
  { up: 16100, base: 0, rate: 0 },
  { up: 28500, base: 0, rate: 0.10 },
  { up: 66500, base: 1240, rate: 0.12 },
  { up: 121800, base: 5800, rate: 0.22 },
  { up: 217875, base: 17966, rate: 0.24 },
  { up: 272325, base: 41024, rate: 0.32 },
  { up: 656700, base: 58448, rate: 0.35 },
  { up: Infinity, base: 192979.25, rate: 0.37 }
];
const FED_BRACKETS_MFJ = [
  { up: 32200, base: 0, rate: 0 },
  { up: 57000, base: 0, rate: 0.10 },
  { up: 133000, base: 2480, rate: 0.12 },
  { up: 243600, base: 11600, rate: 0.22 },
  { up: 435750, base: 35932, rate: 0.24 },
  { up: 544650, base: 82048, rate: 0.32 },
  { up: 800900, base: 116896, rate: 0.35 },
  { up: Infinity, base: 206583.50, rate: 0.37 }
];
const FED_BRACKETS_HOH = [
  { up: 24150, base: 0, rate: 0 },
  { up: 41850, base: 0, rate: 0.10 },
  { up: 91600, base: 1770, rate: 0.12 },
  { up: 129850, base: 7740, rate: 0.22 },
  { up: 225900, base: 16155, rate: 0.24 },
  { up: 280350, base: 39207, rate: 0.32 },
  { up: 664750, base: 56631, rate: 0.35 },
  { up: Infinity, base: 191171.00, rate: 0.37 }
];

function tableFor(filing: Filing) {
  return filing === 'married_jointly' ? FED_BRACKETS_MFJ
    : filing === 'head_of_household' ? FED_BRACKETS_HOH
      : FED_BRACKETS_SINGLE;
}

function annualFederal(annualWages: number, filing: Filing): number {
  const table = tableFor(filing);
  for (let i = 0; i < table.length; i++) {
    const b = table[i];
    if (annualWages <= b.up) {
      const prevUp = i > 0 ? table[i - 1].up : 0;
      return Math.max(0, b.base + (annualWages - prevUp) * b.rate);
    }
  }
  return 0;
}

// Marginal federal withholding rate at a given annual wage level.
function marginalFederalRate(annualWages: number, filing: Filing): number {
  const table = tableFor(filing);
  for (let i = 0; i < table.length; i++) {
    if (annualWages <= table[i].up) return table[i].rate;
  }
  return table[table.length - 1].rate;
}

function ficaOnBonus(bonus: number, filing: Filing): number {
  // Conservative single-event view: assume YTD below the SS wage base so the full
  // bonus is SS-taxable (the typical case). Medicare applies to every dollar.
  const ss = Math.min(bonus, SS_WAGE_BASE_2026) * SS_RATE;
  const med = bonus * MEDICARE_RATE;
  const addThreshold = filing === 'married_jointly' ? ADD_MEDICARE_THRESHOLD_MFJ : ADD_MEDICARE_THRESHOLD_SINGLE;
  const addMed = bonus > addThreshold ? (bonus - addThreshold) * ADD_MEDICARE_RATE : 0;
  return +(ss + med + addMed).toFixed(2);
}

function round2(n: number): number { return Math.round(n * 100) / 100; }

function calcBonus(args: {
  bonus: number;
  regularGross: number; // gross per pay period
  freq: Freq;
  filing: Filing;
  stateCode: string;
}) {
  const { bonus, regularGross, freq, filing, stateCode } = args;
  const periods = PERIODS[freq];
  const stateRate = STATES.find((s) => s.code === stateCode)?.rate ?? 0;

  // ---- (a) Percentage / flat method -------------------------------------
  const flatFedOver = Math.max(0, bonus - SUPPLEMENTAL_MILLION_THRESHOLD);
  const flatFedUnder = Math.min(bonus, SUPPLEMENTAL_MILLION_THRESHOLD);
  const flatFederal = round2(flatFedUnder * SUPPLEMENTAL_RATE + flatFedOver * SUPPLEMENTAL_RATE_MILLION);
  const flatFica = ficaOnBonus(bonus, filing);
  const flatState = round2(bonus * stateRate);
  const flatTotal = round2(flatFederal + flatFica + flatState);
  const flatNet = round2(bonus - flatTotal);
  const flatEffective = bonus > 0 ? flatTotal / bonus : 0;

  // ---- (b) Aggregate method ---------------------------------------------
  // Federal withholding on a regular check alone vs. a check that includes the bonus,
  // both annualised via the Pub 15-T percentage method, then the difference is the
  // federal withholding attributable to the bonus.
  const regAnnual = regularGross * periods;
  const combinedAnnual = (regularGross + bonus) * periods;
  const fedTaxRegularAnnual = annualFederal(regAnnual, filing);
  const fedTaxCombinedAnnual = annualFederal(combinedAnnual, filing);
  const aggFederalAnnual = Math.max(0, fedTaxCombinedAnnual - fedTaxRegularAnnual);
  // The combined check is one period, so the per-period withholding on the bonus is
  // the annual difference divided by periods.
  const aggFederal = round2(aggFederalAnnual / periods);
  const aggFica = ficaOnBonus(bonus, filing); // FICA identical regardless of method
  const aggState = round2(bonus * stateRate);
  const aggTotal = round2(aggFederal + aggFica + aggState);
  const aggNet = round2(bonus - aggTotal);
  const aggEffective = bonus > 0 ? aggTotal / bonus : 0;

  // Average vs marginal federal rate on the aggregate scenario (#14).
  const avgFederalRate = bonus > 0 ? aggFederalAnnual / bonus : 0;
  const marginalRate = marginalFederalRate(combinedAnnual, filing);

  return {
    bonus,
    stateRate,
    flat: { federal: flatFederal, fica: flatFica, state: flatState, total: flatTotal, net: flatNet, effective: flatEffective },
    agg: { federal: aggFederal, fica: aggFica, state: aggState, total: aggTotal, net: aggNet, effective: aggEffective },
    avgFederalRate,
    marginalRate
  };
}

// ----- Component ------------------------------------------------------------
export function BonusCalculator({
  defaultState = 'CA',
  defaultBonus = '10000'
}: {
  defaultState?: string;
  defaultBonus?: string;
}) {
  const [bonus, setBonus] = useState(defaultBonus);
  const [regularGross, setRegularGross] = useState('3000');
  const [freq, setFreq] = useState<Freq>('biweekly');
  const [stateCode, setStateCode] = useState(defaultState);
  const [filing, setFiling] = useState<Filing>('single');

  const r = useMemo(() => calcBonus({
    bonus: parseFloat(bonus) || 0,
    regularGross: parseFloat(regularGross) || 0,
    freq,
    filing,
    stateCode
  }), [bonus, regularGross, freq, filing, stateCode]);

  return (
    <div className="grid lg:grid-cols-5 gap-6 my-8">
      <form
        className="lg:col-span-2 bg-white border border-line rounded-md p-5 space-y-3 text-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <Row label="Bonus amount">
          <div className="flex items-center border border-line rounded">
            <span className="px-2 text-ink/50">$</span>
            <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={bonus} onChange={(e) => setBonus(e.target.value)} aria-label="Bonus amount" />
          </div>
        </Row>

        <Row label="Regular gross pay (per paycheck)">
          <div className="flex items-center border border-line rounded">
            <span className="px-2 text-ink/50">$</span>
            <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={regularGross} onChange={(e) => setRegularGross(e.target.value)} aria-label="Regular gross pay per paycheck" />
          </div>
        </Row>

        <Row label="Pay frequency">
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={freq} onChange={(e) => setFreq(e.target.value as Freq)}>
            <option value="weekly">Weekly (52)</option>
            <option value="biweekly">Biweekly (26)</option>
            <option value="semimonthly">Semimonthly (24)</option>
            <option value="monthly">Monthly (12)</option>
          </select>
        </Row>

        <Row label="Filing status (W-4)">
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={filing} onChange={(e) => setFiling(e.target.value as Filing)}>
            <option value="single">Single or married filing separately</option>
            <option value="married_jointly">Married filing jointly</option>
            <option value="head_of_household">Head of household</option>
          </select>
        </Row>

        <Row label="State (optional)">
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={stateCode} onChange={(e) => setStateCode(e.target.value)}>
            {STATES.map((s) => <option key={s.code || 'none'} value={s.code}>{s.name}</option>)}
          </select>
        </Row>

        <p className="text-xs text-ink/60 leading-relaxed pt-1">
          State supplemental rules vary. Some states use a flat supplemental rate, some use the
          aggregate method, some tax bonuses exactly like regular wages. This tool applies your
          state&apos;s most recently verified effective rate as a directional estimate only.
        </p>
      </form>

      <div className="lg:col-span-3 space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Flat / percentage method */}
          <div className="bg-white border border-line rounded-md p-5">
            <div className="text-xs uppercase tracking-wide text-accent font-semibold">Method A</div>
            <h3 className="text-base font-semibold mt-1">Percentage (flat) method</h3>
            <p className="text-xs text-ink/60 mt-1">22% federal flat rate. What most employers use.</p>
            <div className="mt-4">
              <div className="text-xs text-ink/60">Net bonus (take-home)</div>
              <div className="text-2xl font-semibold tabular-nums">${r.flat.net.toFixed(2)}</div>
            </div>
            <table className="w-full text-sm mt-4">
              <tbody>
                <tr><td className="py-1 text-ink/70">Bonus</td><td className="text-right tabular-nums">${r.bonus.toFixed(2)}</td></tr>
                <tr><td className="py-1 text-ink/70">Federal supplemental (22%{r.bonus > SUPPLEMENTAL_MILLION_THRESHOLD ? ' / 37%' : ''})</td><td className="text-right tabular-nums">−${r.flat.federal.toFixed(2)}</td></tr>
                <tr><td className="py-1 text-ink/70">FICA (SS + Medicare)</td><td className="text-right tabular-nums">−${r.flat.fica.toFixed(2)}</td></tr>
                {r.stateRate > 0 && (
                  <tr><td className="py-1 text-ink/70">State (est.)</td><td className="text-right tabular-nums">−${r.flat.state.toFixed(2)}</td></tr>
                )}
                <tr className="font-semibold border-t border-line">
                  <td className="py-2">Effective withholding rate</td>
                  <td className="text-right tabular-nums">{(r.flat.effective * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Aggregate method */}
          <div className="bg-white border border-line rounded-md p-5">
            <div className="text-xs uppercase tracking-wide text-accent font-semibold">Method B</div>
            <h3 className="text-base font-semibold mt-1">Aggregate method</h3>
            <p className="text-xs text-ink/60 mt-1">Bonus added to a regular check, then taxed.</p>
            <div className="mt-4">
              <div className="text-xs text-ink/60">Net bonus (take-home)</div>
              <div className="text-2xl font-semibold tabular-nums">${r.agg.net.toFixed(2)}</div>
            </div>
            <table className="w-full text-sm mt-4">
              <tbody>
                <tr><td className="py-1 text-ink/70">Bonus</td><td className="text-right tabular-nums">${r.bonus.toFixed(2)}</td></tr>
                <tr><td className="py-1 text-ink/70">Federal withholding (on bonus)</td><td className="text-right tabular-nums">−${r.agg.federal.toFixed(2)}</td></tr>
                <tr><td className="py-1 text-ink/70">FICA (SS + Medicare)</td><td className="text-right tabular-nums">−${r.agg.fica.toFixed(2)}</td></tr>
                {r.stateRate > 0 && (
                  <tr><td className="py-1 text-ink/70">State (est.)</td><td className="text-right tabular-nums">−${r.agg.state.toFixed(2)}</td></tr>
                )}
                <tr className="font-semibold border-t border-line">
                  <td className="py-2">Effective withholding rate</td>
                  <td className="text-right tabular-nums">{(r.agg.effective * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Average vs marginal on the aggregate scenario */}
        <div className="bg-white border border-line rounded-md p-5">
          <h3 className="text-sm font-semibold">Average vs. marginal federal rate (aggregate scenario)</h3>
          <div className="mt-3 grid grid-cols-2 gap-4 text-center">
            <Stat label="Average federal rate on bonus" value={`${(r.avgFederalRate * 100).toFixed(1)}%`} />
            <Stat label="Marginal federal rate (top bracket hit)" value={`${(r.marginalRate * 100).toFixed(0)}%`} />
          </div>
          <p className="text-xs text-ink/60 mt-3 leading-relaxed">
            The <strong>average</strong> rate is the share of the whole bonus withheld for federal income tax.
            The <strong>marginal</strong> rate is the bracket the last dollar of the combined check lands in.
            Marginal is usually higher than average, which is why the aggregate method can withhold more than a flat 22%.
          </p>
        </div>

        <aside className="border-l-4 border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900 rounded" role="note">
          <strong className="font-semibold">A flat 22% is what most employers use,</strong> and it is withholding, not your
          final tax. Your actual tax on the bonus is settled when you file your return based on your total annual income, so
          over-withholding comes back as part of a refund and under-withholding is paid at filing. Both methods above are
          estimates; your real check depends on year-to-date wages, W-4 details, and employer-specific settings.
        </aside>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs text-ink/70 mb-1">{label}</span>
      {children}
    </label>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper rounded p-3">
      <div className="text-xs text-ink/60">{label}</div>
      <div className="text-xl font-semibold mt-1 tabular-nums">{value}</div>
    </div>
  );
}
