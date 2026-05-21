'use client';
import { useMemo, useState } from 'react';

// PayslipIQ USA - Hourly <-> Salary Converter
// Educational only. Not advice.
// Uses simplified flat tax estimate (federal effective + 7.65% FICA + state).
// For precise per-paycheck withholding, use the Gross to Net Paycheck Calculator.

type Direction = 'h2s' | 's2h';

const STATES_FLAT_RATE: { code: string; name: string; rate: number }[] = [
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

// IRS Pub 15-T 2026 Single annualised brackets, Step 2 unchecked
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

function annualFederal(annual: number): number {
  for (let i = 0; i < FED_BRACKETS_SINGLE.length; i++) {
    const b = FED_BRACKETS_SINGLE[i];
    if (annual <= b.up) {
      const prev = i > 0 ? FED_BRACKETS_SINGLE[i - 1].up : 0;
      return Math.max(0, b.base + (annual - prev) * b.rate);
    }
  }
  return 0;
}

const SS_RATE = 0.062, SS_CAP = 184500, MED_RATE = 0.0145;

export function HourlySalaryConverter({ direction = 'h2s' as Direction, defaultState = 'CA' }: { direction?: Direction; defaultState?: string }) {
  const [hourly, setHourly] = useState('25');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [weeksPerYear, setWeeksPerYear] = useState('52');
  const [overtimeHoursPerWeek, setOvertimeHoursPerWeek] = useState('0');
  const [overtimeMultiplier, setOvertimeMultiplier] = useState('1.5');
  const [salary, setSalary] = useState('60000');
  const [stateCode, setStateCode] = useState(defaultState);

  const result = useMemo(() => {
    let annualGross: number;
    let derivedHourly: number;
    if (direction === 'h2s') {
      const r = parseFloat(hourly) || 0;
      const h = parseFloat(hoursPerWeek) || 0;
      const w = parseFloat(weeksPerYear) || 0;
      const otHrs = parseFloat(overtimeHoursPerWeek) || 0;
      const otMult = parseFloat(overtimeMultiplier) || 1.5;
      const baseAnnual = r * h * w;
      const otAnnual = otHrs * r * otMult * w;
      annualGross = baseAnnual + otAnnual;
      derivedHourly = r;
    } else {
      const s = parseFloat(salary) || 0;
      const h = parseFloat(hoursPerWeek) || 40;
      const w = parseFloat(weeksPerYear) || 52;
      annualGross = s;
      derivedHourly = (s / w) / h;
    }

    const fed = annualFederal(annualGross);
    const ss = Math.min(annualGross, SS_CAP) * SS_RATE;
    const medicare = annualGross * MED_RATE;
    const stateRate = STATES_FLAT_RATE.find((s) => s.code === stateCode)?.rate ?? 0;
    const stateTax = annualGross * stateRate;
    const totalTax = fed + ss + medicare + stateTax;
    const netAnnual = annualGross - totalTax;

    return {
      annualGross,
      hourly: derivedHourly,
      monthly: annualGross / 12,
      biweekly: annualGross / 26,
      weekly: annualGross / 52,
      daily: annualGross / 260, // 5 days × 52 weeks
      fed, ss, medicare, stateTax, totalTax, netAnnual,
      effectiveTax: annualGross > 0 ? totalTax / annualGross : 0
    };
  }, [direction, hourly, hoursPerWeek, weeksPerYear, overtimeHoursPerWeek, overtimeMultiplier, salary, stateCode]);

  return (
    <div className="grid lg:grid-cols-5 gap-6 my-8">
      <form className="lg:col-span-2 bg-white border border-line rounded-md p-5 space-y-3 text-sm" onSubmit={(e) => e.preventDefault()}>
        <h3 className="font-semibold">{direction === 'h2s' ? 'Hourly inputs' : 'Salary inputs'}</h3>

        {direction === 'h2s' ? (
          <>
            <Row label="Hourly rate">
              <div className="flex items-center border border-line rounded">
                <span className="px-2 text-ink/50">$</span>
                <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={hourly} onChange={(e) => setHourly(e.target.value)} aria-label="Hourly rate" />
              </div>
            </Row>
            <Row label="Hours per week">
              <input className="w-full px-2 py-2 border border-line rounded outline-none" inputMode="decimal" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} aria-label="Hours per week" />
            </Row>
            <Row label="Weeks worked per year">
              <input className="w-full px-2 py-2 border border-line rounded outline-none" inputMode="decimal" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)} aria-label="Weeks per year" />
              <span className="block text-[11px] text-ink/55 mt-1">52 = no unpaid weeks. 50 = 2 weeks unpaid PTO. 48 = 4 weeks unpaid.</span>
            </Row>
            <details className="bg-paper rounded px-3 py-2">
              <summary className="text-xs text-ink/70 cursor-pointer">Overtime (optional)</summary>
              <div className="mt-2 space-y-2">
                <Row label="Overtime hours per week">
                  <input className="w-full px-2 py-2 border border-line rounded bg-white outline-none" inputMode="decimal" value={overtimeHoursPerWeek} onChange={(e) => setOvertimeHoursPerWeek(e.target.value)} aria-label="Overtime hours per week" />
                </Row>
                <Row label="Overtime multiplier">
                  <select className="w-full px-2 py-2 border border-line rounded bg-white" value={overtimeMultiplier} onChange={(e) => setOvertimeMultiplier(e.target.value)}>
                    <option value="1.5">1.5x (FLSA standard)</option>
                    <option value="2">2x (CA daily, holiday)</option>
                  </select>
                </Row>
              </div>
            </details>
          </>
        ) : (
          <>
            <Row label="Annual salary">
              <div className="flex items-center border border-line rounded">
                <span className="px-2 text-ink/50">$</span>
                <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={salary} onChange={(e) => setSalary(e.target.value)} aria-label="Annual salary" />
              </div>
            </Row>
            <Row label="Hours per week">
              <input className="w-full px-2 py-2 border border-line rounded outline-none" inputMode="decimal" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} aria-label="Hours per week" />
            </Row>
            <Row label="Weeks worked per year">
              <input className="w-full px-2 py-2 border border-line rounded outline-none" inputMode="decimal" value={weeksPerYear} onChange={(e) => setWeeksPerYear(e.target.value)} aria-label="Weeks per year" />
            </Row>
          </>
        )}

        <Row label="State (for tax estimate)">
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={stateCode} onChange={(e) => setStateCode(e.target.value)}>
            {STATES_FLAT_RATE.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
          </select>
        </Row>
      </form>

      <div className="lg:col-span-3 space-y-4">
        <div className="bg-white border border-line rounded-md p-5">
          <h3 className="font-semibold mb-4 text-[15px]">Gross conversions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <Stat label="Hourly" value={`$${result.hourly.toFixed(2)}`} />
            <Stat label="Daily (8h)" value={`$${(result.hourly * 8).toFixed(0)}`} />
            <Stat label="Weekly" value={`$${result.weekly.toFixed(0)}`} />
            <Stat label="Biweekly" value={`$${result.biweekly.toFixed(0)}`} />
            <Stat label="Monthly" value={`$${result.monthly.toFixed(0)}`} />
            <Stat label="Annual" value={`$${result.annualGross.toFixed(0)}`} />
          </div>
        </div>

        <div className="bg-white border border-line rounded-md p-5">
          <h3 className="font-semibold mb-4 text-[15px]">Net (after estimated tax)</h3>
          <table className="w-full text-sm">
            <tbody>
              <tr><td className="py-1 text-ink/70">Annual gross</td><td className="text-right tabular-nums">${result.annualGross.toFixed(0)}</td></tr>
              <tr><td className="py-1 text-ink/70">Federal income tax (est.)</td><td className="text-right tabular-nums">−${result.fed.toFixed(0)}</td></tr>
              <tr><td className="py-1 text-ink/70">Social Security (6.2%)</td><td className="text-right tabular-nums">−${result.ss.toFixed(0)}</td></tr>
              <tr><td className="py-1 text-ink/70">Medicare (1.45%)</td><td className="text-right tabular-nums">−${result.medicare.toFixed(0)}</td></tr>
              <tr><td className="py-1 text-ink/70">State tax (est.)</td><td className="text-right tabular-nums">−${result.stateTax.toFixed(0)}</td></tr>
              <tr className="font-semibold border-t border-line"><td className="py-2">Annual take-home</td><td className="text-right tabular-nums">${result.netAnnual.toFixed(0)}</td></tr>
              <tr><td className="py-1 text-ink/70">Net per month (avg)</td><td className="text-right tabular-nums">${(result.netAnnual / 12).toFixed(0)}</td></tr>
              <tr><td className="py-1 text-ink/70">Net per biweekly check</td><td className="text-right tabular-nums">${(result.netAnnual / 26).toFixed(0)}</td></tr>
              <tr><td className="py-1 text-ink/70">Effective tax rate</td><td className="text-right tabular-nums">{(result.effectiveTax * 100).toFixed(1)}%</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-ink/60 mt-3">
            Single filer assumption. State tax uses each state&apos;s flat or top-marginal rate verified 2026-05-06. Pre-tax 401(k), HSA, FSA, health premiums, and W-4 dependents are not modelled here. For precise per-paycheck numbers use the
            <a className="text-accent underline mx-1" href="/us/gross-to-net-paycheck-calculator">Gross to Net Paycheck Calculator</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="block text-xs text-ink/70 mb-1">{label}</span>{children}</label>;
}
function Stat({ label, value }: { label: string; value: string }) {
  return <div className="bg-paper rounded p-3"><div className="text-xs text-ink/60">{label}</div><div className="text-lg font-semibold mt-1 tabular-nums">{value}</div></div>;
}
