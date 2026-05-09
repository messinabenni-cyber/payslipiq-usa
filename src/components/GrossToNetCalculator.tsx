'use client';
import { useMemo, useState } from 'react';

// PayslipIQ USA - Gross to Net Paycheck Calculator (self-contained, production-portable)
// Educational only. Not advice. Tax year 2026.
// Sources:
//   IRS Pub. 15-T 2026 percentage method (Standard Withholding)
//   IRS Topic 751 (FICA rates)
//   SSA Contribution and Benefit Base 2026 ($184,500)
//   IRS Additional Medicare Tax Q&A
//   State revenue agencies (verified 2026-05-06, see /us/state-tax/)

type Mode = 'paycheck' | 'salary' | 'hourly';
type Filing = 'single' | 'married_jointly' | 'head_of_household';
type Freq = 'weekly' | 'biweekly' | 'semimonthly' | 'monthly';

const PERIODS: Record<Freq, number> = { weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12 };

// ----- States ---------------------------------------------------------------
const STATES: { code: string; name: string; rate: number; flat: boolean }[] = [
  { code: 'AL', name: 'Alabama', rate: 0.05, flat: false },
  { code: 'AK', name: 'Alaska', rate: 0, flat: true },
  { code: 'AZ', name: 'Arizona', rate: 0.025, flat: true },
  { code: 'AR', name: 'Arkansas', rate: 0.044, flat: false },
  { code: 'CA', name: 'California', rate: 0.066, flat: false },
  { code: 'CO', name: 'Colorado', rate: 0.044, flat: true },
  { code: 'CT', name: 'Connecticut', rate: 0.055, flat: false },
  { code: 'DE', name: 'Delaware', rate: 0.052, flat: false },
  { code: 'DC', name: 'District of Columbia', rate: 0.065, flat: false },
  { code: 'FL', name: 'Florida', rate: 0, flat: true },
  { code: 'GA', name: 'Georgia', rate: 0.0539, flat: true },
  { code: 'HI', name: 'Hawaii', rate: 0.072, flat: false },
  { code: 'ID', name: 'Idaho', rate: 0.058, flat: true },
  { code: 'IL', name: 'Illinois', rate: 0.0495, flat: true },
  { code: 'IN', name: 'Indiana', rate: 0.0305, flat: true },
  { code: 'IA', name: 'Iowa', rate: 0.038, flat: true },
  { code: 'KS', name: 'Kansas', rate: 0.052, flat: false },
  { code: 'KY', name: 'Kentucky', rate: 0.04, flat: true },
  { code: 'LA', name: 'Louisiana', rate: 0.03, flat: true },
  { code: 'ME', name: 'Maine', rate: 0.058, flat: false },
  { code: 'MD', name: 'Maryland', rate: 0.0475, flat: false },
  { code: 'MA', name: 'Massachusetts', rate: 0.05, flat: true },
  { code: 'MI', name: 'Michigan', rate: 0.0425, flat: true },
  { code: 'MN', name: 'Minnesota', rate: 0.068, flat: false },
  { code: 'MS', name: 'Mississippi', rate: 0.044, flat: true },
  { code: 'MO', name: 'Missouri', rate: 0.047, flat: false },
  { code: 'MT', name: 'Montana', rate: 0.059, flat: false },
  { code: 'NE', name: 'Nebraska', rate: 0.052, flat: false },
  { code: 'NV', name: 'Nevada', rate: 0, flat: true },
  { code: 'NH', name: 'New Hampshire', rate: 0, flat: true },
  { code: 'NJ', name: 'New Jersey', rate: 0.058, flat: false },
  { code: 'NM', name: 'New Mexico', rate: 0.049, flat: false },
  { code: 'NY', name: 'New York', rate: 0.06, flat: false },
  { code: 'NC', name: 'North Carolina', rate: 0.0425, flat: true },
  { code: 'ND', name: 'North Dakota', rate: 0.025, flat: false },
  { code: 'OH', name: 'Ohio', rate: 0.035, flat: false },
  { code: 'OK', name: 'Oklahoma', rate: 0.0475, flat: false },
  { code: 'OR', name: 'Oregon', rate: 0.087, flat: false },
  { code: 'PA', name: 'Pennsylvania', rate: 0.0307, flat: true },
  { code: 'RI', name: 'Rhode Island', rate: 0.0499, flat: false },
  { code: 'SC', name: 'South Carolina', rate: 0.062, flat: false },
  { code: 'SD', name: 'South Dakota', rate: 0, flat: true },
  { code: 'TN', name: 'Tennessee', rate: 0, flat: true },
  { code: 'TX', name: 'Texas', rate: 0, flat: true },
  { code: 'UT', name: 'Utah', rate: 0.0455, flat: true },
  { code: 'VT', name: 'Vermont', rate: 0.066, flat: false },
  { code: 'VA', name: 'Virginia', rate: 0.0525, flat: false },
  { code: 'WA', name: 'Washington', rate: 0, flat: true },
  { code: 'WV', name: 'West Virginia', rate: 0.0482, flat: false },
  { code: 'WI', name: 'Wisconsin', rate: 0.0535, flat: false },
  { code: 'WY', name: 'Wyoming', rate: 0, flat: true }
];

// ----- IRS Pub 15-T 2026 percentage method (Standard Withholding) -----------
// Annualised brackets, single filer (Step 2 unchecked). Other filings approximate.
// Source: IRS Pub 15-T 2026 (https://www.irs.gov/publications/p15t)
const FED_BRACKETS_SINGLE = [
  { up: 6800, base: 0, rate: 0 },
  { up: 17150, base: 0, rate: 0.10 },
  { up: 49500, base: 1035, rate: 0.12 },
  { up: 102500, base: 4917, rate: 0.22 },
  { up: 191400, base: 16577, rate: 0.24 },
  { up: 245350, base: 37913, rate: 0.32 },
  { up: 605700, base: 55177, rate: 0.35 },
  { up: Infinity, base: 181299, rate: 0.37 }
];
const FED_BRACKETS_MFJ = [
  { up: 17100, base: 0, rate: 0 },
  { up: 40500, base: 0, rate: 0.10 },
  { up: 105550, base: 2340, rate: 0.12 },
  { up: 210750, base: 10146, rate: 0.22 },
  { up: 388550, base: 33290, rate: 0.24 },
  { up: 496450, base: 75962, rate: 0.32 },
  { up: 743650, base: 110490, rate: 0.35 },
  { up: Infinity, base: 197010, rate: 0.37 }
];
const FED_BRACKETS_HOH = [
  { up: 13900, base: 0, rate: 0 },
  { up: 30700, base: 0, rate: 0.10 },
  { up: 79050, base: 1680, rate: 0.12 },
  { up: 117150, base: 7482, rate: 0.22 },
  { up: 206050, base: 15864, rate: 0.24 },
  { up: 260000, base: 37200, rate: 0.32 },
  { up: 620350, base: 54464, rate: 0.35 },
  { up: Infinity, base: 180586, rate: 0.37 }
];

function annualFederal(annualWages: number, filing: Filing): number {
  const table =
    filing === 'married_jointly' ? FED_BRACKETS_MFJ
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

// ----- Calculation core -----------------------------------------------------
const SS_RATE = 0.062;
const SS_WAGE_BASE_2026 = 184_500;
const MEDICARE_RATE = 0.0145;
const ADD_MEDICARE_RATE = 0.009;
const ADD_MEDICARE_THRESHOLD_SINGLE = 200_000;

function calcPaycheck(args: {
  grossPay: number;
  freq: Freq;
  filing: Filing;
  stateCode: string;
  pretax401k: number;
  pretaxHsa: number;
  pretaxHealth: number;
  extraWithholding: number;
}) {
  const { grossPay, freq, filing, stateCode, pretax401k, pretaxHsa, pretaxHealth, extraWithholding } = args;
  const periods = PERIODS[freq];

  const preTaxTotal = pretax401k + pretaxHsa + pretaxHealth;
  const federalTaxable = Math.max(0, grossPay - preTaxTotal);
  // FICA: HSA + health (Section 125) reduce. 401(k) does NOT reduce FICA.
  const ficaReduction = pretaxHsa + pretaxHealth;
  const ficaTaxable = Math.max(0, grossPay - ficaReduction);

  // Federal withholding via annualised bracket method
  const annualWages = federalTaxable * periods;
  const annualFedTax = annualFederal(annualWages, filing);
  const fedPerCheck = +(annualFedTax / periods).toFixed(2) + (extraWithholding || 0);

  // FICA per check (treat YTD = 0 - shows max scenario)
  const ssPerCheck = +(Math.min(ficaTaxable, SS_WAGE_BASE_2026 / periods) * SS_RATE).toFixed(2);
  const medicarePerCheck = +(ficaTaxable * MEDICARE_RATE).toFixed(2);
  const annualFica = ficaTaxable * periods;
  const addMedicarePerCheck = annualFica > ADD_MEDICARE_THRESHOLD_SINGLE
    ? +((Math.max(0, annualFica - ADD_MEDICARE_THRESHOLD_SINGLE) * ADD_MEDICARE_RATE) / periods).toFixed(2)
    : 0;

  // State tax (flat rate effective approximation, per-check)
  const stateRate = STATES.find((s) => s.code === stateCode)?.rate ?? 0;
  const statePerCheck = +(federalTaxable * stateRate).toFixed(2);

  const totalDeductions = +(preTaxTotal + fedPerCheck + ssPerCheck + medicarePerCheck + addMedicarePerCheck + statePerCheck).toFixed(2);
  const netPay = +(grossPay - totalDeductions).toFixed(2);
  const effectiveTax = grossPay > 0 ? (fedPerCheck + ssPerCheck + medicarePerCheck + addMedicarePerCheck + statePerCheck) / grossPay : 0;
  const takeHome = grossPay > 0 ? netPay / grossPay : 0;

  return {
    gross: grossPay,
    preTaxTotal,
    federalWithholding: fedPerCheck,
    socialSecurity: ssPerCheck,
    medicare: medicarePerCheck,
    additionalMedicare: addMedicarePerCheck,
    stateTax: statePerCheck,
    netPay,
    effectiveTax,
    takeHome,
    annualWages
  };
}

// ----- Component ------------------------------------------------------------
export function GrossToNetCalculator({
  defaultState = 'CA',
  defaultGross = '3000'
}: {
  defaultState?: string;
  defaultGross?: string;
}) {
  const [mode, setMode] = useState<Mode>('paycheck');
  const [gross, setGross] = useState(defaultGross);
  const [salary, setSalary] = useState('60000');
  const [hourlyRate, setHourlyRate] = useState('25');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [freq, setFreq] = useState<Freq>('biweekly');
  const [stateCode, setStateCode] = useState(defaultState);
  const [filing, setFiling] = useState<Filing>('single');
  const [pretax401kPct, setPretax401kPct] = useState('0');
  const [pretaxHsaPerCheck, setPretaxHsaPerCheck] = useState('0');
  const [healthMonthly, setHealthMonthly] = useState('0');
  const [extraWithholding, setExtraWithholding] = useState('0');

  const grossPerCheck = useMemo(() => {
    if (mode === 'paycheck') return parseFloat(gross) || 0;
    if (mode === 'salary') return (parseFloat(salary) || 0) / PERIODS[freq];
    const annual = (parseFloat(hourlyRate) || 0) * (parseFloat(hoursPerWeek) || 0) * 52;
    return annual / PERIODS[freq];
  }, [mode, gross, salary, hourlyRate, hoursPerWeek, freq]);

  const result = useMemo(() => calcPaycheck({
    grossPay: grossPerCheck,
    freq,
    filing,
    stateCode,
    pretax401k: grossPerCheck * (parseFloat(pretax401kPct) / 100 || 0),
    pretaxHsa: parseFloat(pretaxHsaPerCheck) || 0,
    pretaxHealth: (parseFloat(healthMonthly) || 0) * (12 / PERIODS[freq]),
    extraWithholding: parseFloat(extraWithholding) || 0
  }), [grossPerCheck, freq, filing, stateCode, pretax401kPct, pretaxHsaPerCheck, healthMonthly, extraWithholding]);

  const annualNet = result.netPay * PERIODS[freq];
  const annualGross = grossPerCheck * PERIODS[freq];

  return (
    <div className="grid lg:grid-cols-5 gap-6 my-8">
      <form
        className="lg:col-span-2 bg-white border border-line rounded-md p-5 space-y-3 text-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <fieldset>
          <legend className="text-xs text-ink/70 mb-2">How do you want to enter pay?</legend>
          <div role="radiogroup" className="grid grid-cols-3 gap-1 bg-paper rounded p-1">
            {(['paycheck', 'salary', 'hourly'] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                role="radio"
                aria-checked={mode === m}
                onClick={() => setMode(m)}
                className={`px-2 py-1.5 text-xs rounded ${mode === m ? 'bg-white shadow-sm font-semibold' : 'text-ink/60'}`}
              >
                {m === 'paycheck' ? 'Per paycheck' : m === 'salary' ? 'Annual salary' : 'Hourly'}
              </button>
            ))}
          </div>
        </fieldset>

        {mode === 'paycheck' && (
          <Row label="Gross pay this paycheck">
            <div className="flex items-center border border-line rounded">
              <span className="px-2 text-ink/50">$</span>
              <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={gross} onChange={(e) => setGross(e.target.value)} aria-label="Gross pay this paycheck" />
            </div>
          </Row>
        )}
        {mode === 'salary' && (
          <Row label="Annual salary">
            <div className="flex items-center border border-line rounded">
              <span className="px-2 text-ink/50">$</span>
              <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={salary} onChange={(e) => setSalary(e.target.value)} aria-label="Annual salary" />
            </div>
          </Row>
        )}
        {mode === 'hourly' && (
          <div className="grid grid-cols-2 gap-2">
            <Row label="Hourly rate">
              <div className="flex items-center border border-line rounded">
                <span className="px-2 text-ink/50">$</span>
                <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} aria-label="Hourly rate" />
              </div>
            </Row>
            <Row label="Hours / week">
              <input className="w-full px-2 py-2 border border-line rounded outline-none" inputMode="decimal" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} aria-label="Hours per week" />
            </Row>
          </div>
        )}

        <Row label="Pay frequency">
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={freq} onChange={(e) => setFreq(e.target.value as Freq)}>
            <option value="weekly">Weekly (52)</option>
            <option value="biweekly">Biweekly (26)</option>
            <option value="semimonthly">Semimonthly (24)</option>
            <option value="monthly">Monthly (12)</option>
          </select>
        </Row>

        <Row label="State">
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={stateCode} onChange={(e) => setStateCode(e.target.value)}>
            {STATES.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
          </select>
        </Row>

        <Row label="Filing status (W-4)">
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={filing} onChange={(e) => setFiling(e.target.value as Filing)}>
            <option value="single">Single or married filing separately</option>
            <option value="married_jointly">Married filing jointly</option>
            <option value="head_of_household">Head of household</option>
          </select>
        </Row>

        <details className="bg-paper rounded px-3 py-2">
          <summary className="text-xs text-ink/70 cursor-pointer">Pre-tax deductions (optional)</summary>
          <div className="mt-2 space-y-2">
            <Row label="Traditional 401(k) % of gross">
              <div className="flex items-center border border-line rounded bg-white">
                <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={pretax401kPct} onChange={(e) => setPretax401kPct(e.target.value)} aria-label="401(k) percent" />
                <span className="px-2 text-ink/50">%</span>
              </div>
            </Row>
            <Row label="HSA contribution / paycheck">
              <div className="flex items-center border border-line rounded bg-white">
                <span className="px-2 text-ink/50">$</span>
                <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={pretaxHsaPerCheck} onChange={(e) => setPretaxHsaPerCheck(e.target.value)} aria-label="HSA per paycheck" />
              </div>
            </Row>
            <Row label="Health premium / month">
              <div className="flex items-center border border-line rounded bg-white">
                <span className="px-2 text-ink/50">$</span>
                <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={healthMonthly} onChange={(e) => setHealthMonthly(e.target.value)} aria-label="Health premium per month" />
              </div>
            </Row>
            <Row label="Extra W-4 withholding / paycheck">
              <div className="flex items-center border border-line rounded bg-white">
                <span className="px-2 text-ink/50">$</span>
                <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={extraWithholding} onChange={(e) => setExtraWithholding(e.target.value)} aria-label="Extra withholding per paycheck" />
              </div>
            </Row>
          </div>
        </details>
      </form>

      <div className="lg:col-span-3 space-y-4">
        <div className="bg-white border border-line rounded-md p-5">
          <div className="grid grid-cols-3 gap-4 text-center">
            <Stat label="Net per paycheck" value={`$${result.netPay.toFixed(2)}`} />
            <Stat label="Net per month (avg)" value={`$${(annualNet / 12).toFixed(0)}`} />
            <Stat label="Net per year (est.)" value={`$${annualNet.toFixed(0)}`} />
          </div>

          <div className="mt-4 text-xs text-ink/70 flex flex-wrap gap-x-5 gap-y-1">
            <span>Gross / year: <strong className="tabular-nums">${annualGross.toFixed(0)}</strong></span>
            <span>Take-home: <strong className="tabular-nums">{(result.takeHome * 100).toFixed(1)}%</strong></span>
            <span>Effective tax rate: <strong className="tabular-nums">{(result.effectiveTax * 100).toFixed(1)}%</strong></span>
          </div>

          <table className="w-full text-sm mt-5">
            <caption className="sr-only">Per-paycheck gross to net breakdown</caption>
            <tbody>
              <tr><td className="py-1 text-ink/70">Gross pay</td><td className="text-right tabular-nums">${result.gross.toFixed(2)}</td></tr>
              {result.preTaxTotal > 0 && (
                <tr><td className="py-1 text-ink/70">Pre-tax deductions (401k / HSA / health)</td><td className="text-right tabular-nums">−${result.preTaxTotal.toFixed(2)}</td></tr>
              )}
              <tr><td className="py-1 text-ink/70">Federal income tax (est.)</td><td className="text-right tabular-nums">−${result.federalWithholding.toFixed(2)}</td></tr>
              <tr><td className="py-1 text-ink/70">Social Security (6.2%)</td><td className="text-right tabular-nums">−${result.socialSecurity.toFixed(2)}</td></tr>
              <tr><td className="py-1 text-ink/70">Medicare (1.45%{result.additionalMedicare > 0 ? ' + 0.9% additional' : ''})</td><td className="text-right tabular-nums">−${(result.medicare + result.additionalMedicare).toFixed(2)}</td></tr>
              <tr><td className="py-1 text-ink/70">State income tax (est.)</td><td className="text-right tabular-nums">−${result.stateTax.toFixed(2)}</td></tr>
              <tr className="font-semibold border-t border-line">
                <td className="py-2">Estimated take-home (net)</td>
                <td className="text-right tabular-nums">${result.netPay.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <p className="text-xs text-ink/60 mt-4">
            Tax year 2026. Federal withholding uses the IRS Pub. 15-T 2026 percentage method (Standard Withholding tables).
            Social Security is capped at the SSA 2026 wage base of $184,500. State tax uses the most recently verified flat or top-marginal rate
            and may not reflect mid-year changes, brackets, or local taxes (NYC, Yonkers, PA EIT, Ohio RITA, MD county, KY occupational, IN county, DE Wilmington, MO KC/STL, OR Multnomah).
            Worker contributions like CA SDI, NJ SDI/FLI/UI, NY PFL, MA PFML, OR Paid Leave, WA PFML/Cares, RI TDI/TCI, CO FAMLI are not included.
            Use the result as a starting point, not a final answer. Your real paycheck depends on year-to-date wages, dependents, multiple jobs,
            and employer-specific settings.
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
