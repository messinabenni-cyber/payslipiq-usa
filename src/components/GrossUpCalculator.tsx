'use client';
import { useMemo, useState } from 'react';

// PayslipIQ USA - Gross-Up / Net-to-Gross Calculator (self-contained, production-portable)
// Educational only. Not advice. Tax year 2026.
// Solves the inverse problem: given a DESIRED take-home (net) amount, what GROSS is
// required so that, after federal income tax + FICA (+ state if chosen), the worker
// nets exactly that amount? Uses a numeric binary search over gross.
// Sources:
//   IRS Pub. 15-T 2026 percentage method (Standard Withholding)
//   IRS Topic 751 (FICA rates) + SSA Contribution and Benefit Base 2026 ($184,500)
//   State revenue agencies (most recently verified rate)

type Filing = 'single' | 'married_jointly' | 'head_of_household';
type Freq = 'weekly' | 'biweekly' | 'semimonthly' | 'monthly';

const PERIODS: Record<Freq, number> = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 };

// 2026 FICA (IRS Topic 751 + SSA 2026 wage base).
const SS_RATE = 0.062;
const SS_WAGE_BASE_2026 = 184_500;
const MEDICARE_RATE = 0.0145;
const ADD_MEDICARE_RATE = 0.009;
const ADD_MEDICARE_THRESHOLD_SINGLE = 200_000;
const ADD_MEDICARE_THRESHOLD_MFJ = 250_000;

// ----- States (most recently verified flat / top-marginal rate) -------------
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

function annualFederal(annualWages: number, filing: Filing): number {
  const table = filing === 'married_jointly' ? FED_BRACKETS_MFJ
    : filing === 'head_of_household' ? FED_BRACKETS_HOH
      : FED_BRACKETS_SINGLE;
  for (let i = 0; i < table.length; i++) {
    const b = table[i];
    if (annualWages <= b.up) {
      const prevUp = i > 0 ? table[i - 1].up : 0;
      return Math.max(0, b.base + (annualWages - prevUp) * b.rate);
    }
  }
  return 0;
}

function round2(n: number): number { return Math.round(n * 100) / 100; }

// Forward function: gross-per-period -> total tax + net for one paycheck.
function taxesForGross(grossPerCheck: number, freq: Freq, filing: Filing, stateRate: number) {
  const periods = PERIODS[freq];

  const annualWages = grossPerCheck * periods;
  const fedPerCheck = annualFederal(annualWages, filing) / periods;

  const ssPerCheck = Math.min(grossPerCheck, SS_WAGE_BASE_2026 / periods) * SS_RATE;
  const medicarePerCheck = grossPerCheck * MEDICARE_RATE;
  const addThreshold = filing === 'married_jointly' ? ADD_MEDICARE_THRESHOLD_MFJ : ADD_MEDICARE_THRESHOLD_SINGLE;
  const addMedicarePerCheck = annualWages > addThreshold
    ? (Math.max(0, annualWages - addThreshold) * ADD_MEDICARE_RATE) / periods
    : 0;

  const statePerCheck = grossPerCheck * stateRate;

  const totalTax = fedPerCheck + ssPerCheck + medicarePerCheck + addMedicarePerCheck + statePerCheck;
  const net = grossPerCheck - totalTax;
  return { fedPerCheck, ssPerCheck, medicarePerCheck, addMedicarePerCheck, statePerCheck, totalTax, net };
}

// Inverse solver: binary search on gross until net matches the desired take-home.
function solveGross(desiredNet: number, freq: Freq, filing: Filing, stateRate: number) {
  if (desiredNet <= 0) {
    return { gross: 0, ...taxesForGross(0, freq, filing, stateRate) };
  }
  let lo = desiredNet;            // gross is always >= net
  let hi = desiredNet * 3 + 1000; // generous upper bound; net is a monotonic, sub-linear function of gross
  // Make sure hi actually overshoots the desired net.
  for (let guard = 0; guard < 40 && taxesForGross(hi, freq, filing, stateRate).net < desiredNet; guard++) {
    hi *= 2;
  }
  let mid = hi;
  for (let i = 0; i < 100; i++) {
    mid = (lo + hi) / 2;
    const net = taxesForGross(mid, freq, filing, stateRate).net;
    if (Math.abs(net - desiredNet) < 0.005) break;
    if (net < desiredNet) lo = mid; else hi = mid;
  }
  const gross = round2(mid);
  return { gross, ...taxesForGross(gross, freq, filing, stateRate) };
}

// ----- Component ------------------------------------------------------------
export function GrossUpCalculator({
  defaultState = 'CA',
  defaultNet = '5000'
}: {
  defaultState?: string;
  defaultNet?: string;
}) {
  const [net, setNet] = useState(defaultNet);
  const [freq, setFreq] = useState<Freq>('biweekly');
  const [stateCode, setStateCode] = useState(defaultState);
  const [filing, setFiling] = useState<Filing>('single');

  const stateRate = STATES.find((s) => s.code === stateCode)?.rate ?? 0;
  const desiredNet = parseFloat(net) || 0;

  const result = useMemo(
    () => solveGross(desiredNet, freq, filing, stateRate),
    [desiredNet, freq, filing, stateRate]
  );

  const periods = PERIODS[freq];
  const effectiveRate = result.gross > 0 ? result.totalTax / result.gross : 0;
  const grossUpAmount = round2(result.gross - desiredNet);

  return (
    <div className="grid lg:grid-cols-5 gap-6 my-8">
      <form
        className="lg:col-span-2 bg-white border border-line rounded-md p-5 space-y-3 text-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <Row label="Desired take-home (net) per paycheck">
          <div className="flex items-center border border-line rounded">
            <span className="px-2 text-ink/50">$</span>
            <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={net} onChange={(e) => setNet(e.target.value)} aria-label="Desired take-home net per paycheck" />
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
          A gross-up answers &ldquo;what should the gross be so the worker keeps exactly $X?&rdquo;
          The tool solves for that gross by trying values until the after-tax net matches your target.
          It is a directional estimate, not a payroll instruction.
        </p>
      </form>

      <div className="lg:col-span-3 space-y-4">
        <div className="bg-white border border-line rounded-md p-5">
          <div className="grid grid-cols-3 gap-4 text-center">
            <Stat label="Required gross per paycheck" value={`$${result.gross.toFixed(2)}`} />
            <Stat label="Gross-up (extra over net)" value={`$${grossUpAmount.toFixed(2)}`} />
            <Stat label="Required gross / year (est.)" value={`$${(result.gross * periods).toFixed(0)}`} />
          </div>

          <div className="mt-4 text-xs text-ink/70 flex flex-wrap gap-x-5 gap-y-1">
            <span>Target net / paycheck: <strong className="tabular-nums">${desiredNet.toFixed(2)}</strong></span>
            <span>Total taxes / paycheck: <strong className="tabular-nums">${result.totalTax.toFixed(2)}</strong></span>
            <span>Effective tax rate: <strong className="tabular-nums">{(effectiveRate * 100).toFixed(1)}%</strong></span>
          </div>

          <table className="w-full text-sm mt-5">
            <caption className="sr-only">Per-paycheck net to gross breakdown</caption>
            <tbody>
              <tr><td className="py-1 text-ink/70">Required gross pay</td><td className="text-right tabular-nums">${result.gross.toFixed(2)}</td></tr>
              <tr><td className="py-1 text-ink/70">Federal income tax (est.)</td><td className="text-right tabular-nums">−${result.fedPerCheck.toFixed(2)}</td></tr>
              <tr><td className="py-1 text-ink/70">Social Security (6.2%)</td><td className="text-right tabular-nums">−${result.ssPerCheck.toFixed(2)}</td></tr>
              <tr><td className="py-1 text-ink/70">Medicare (1.45%{result.addMedicarePerCheck > 0 ? ' + 0.9% additional' : ''})</td><td className="text-right tabular-nums">−${(result.medicarePerCheck + result.addMedicarePerCheck).toFixed(2)}</td></tr>
              {stateRate > 0 && (
                <tr><td className="py-1 text-ink/70">State income tax (est.)</td><td className="text-right tabular-nums">−${result.statePerCheck.toFixed(2)}</td></tr>
              )}
              <tr className="font-semibold border-t border-line">
                <td className="py-2">Take-home (net)</td>
                <td className="text-right tabular-nums">${result.net.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <p className="text-xs text-ink/60 mt-4 leading-relaxed">
            Tax year 2026. Federal withholding uses the IRS Pub. 15-T 2026 percentage method (Standard Withholding tables).
            Social Security is capped at the SSA 2026 wage base of $184,500. State tax uses the most recently verified flat or
            top-marginal rate and may not reflect brackets, local taxes, or mid-year changes. The solved gross is an estimate,
            so payroll&apos;s real gross-up can differ once W-4 details, year-to-date wages, pre-tax benefits, and local taxes
            are applied. Use it as a starting point, not a final figure.
          </p>
        </div>
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
