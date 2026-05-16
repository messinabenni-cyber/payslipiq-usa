'use client';
import { useMemo, useState } from 'react';

// 2026-05-16: render whole-dollar projections with thousands separators.
// Audit found "$94545", "$13000", "$5862" etc on this page. fmt0() wraps
// Intl.NumberFormat so every dollar value renders as "$94,545" / "$13,000".
const fmt0 = (n: number): string =>
  Number.isFinite(n)
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
    : '—';

// PayslipIQ USA - Year-to-Date Paycheck Checker
// Educational only. Not advice. Tax year 2026.
// Projects year-end gross/net, flags Social Security wage base, Additional Medicare 0.9%,
// 401(k) elective deferral limit, HSA limit, and W-2 box 1 expectation.

const SS_RATE = 0.062;
const SS_WAGE_BASE_2026 = 184_500;
const MEDICARE_RATE = 0.0145;
const ADD_MEDICARE_RATE = 0.009;
const ADD_MEDICARE_THRESHOLD_SINGLE = 200_000;
const ADD_MEDICARE_THRESHOLD_MFJ = 250_000;

// IRS 2026 limits (verify against IRS Notice on release)
const LIMIT_401K_ELECTIVE = 24500;       // 2026 elective deferral (catch-up extra at 50+)
const LIMIT_401K_CATCHUP_50 = 8500;
const LIMIT_HSA_SELF = 4400;
const LIMIT_HSA_FAMILY = 8750;

type Filing = 'single' | 'married_jointly' | 'head_of_household';

export function YearToDateChecker() {
  const [ytdGross, setYtdGross] = useState('40000');
  const [ytdFedWH, setYtdFedWH] = useState('5500');
  const [ytdSS, setYtdSS] = useState('2480');
  const [ytdMedicare, setYtdMedicare] = useState('580');
  const [ytdState, setYtdState] = useState('2400');
  const [ytd401k, setYtd401k] = useState('3000');
  const [ytdHsa, setYtdHsa] = useState('1000');
  const [periodsCompleted, setPeriodsCompleted] = useState('11');
  const [periodsRemaining, setPeriodsRemaining] = useState('15');
  const [filing, setFiling] = useState<Filing>('single');
  const [age50plus, setAge50plus] = useState(false);
  const [hsaCoverage, setHsaCoverage] = useState<'self'|'family'|'none'>('self');

  const result = useMemo(() => {
    const ytd = parseFloat(ytdGross) || 0;
    const fed = parseFloat(ytdFedWH) || 0;
    const ss = parseFloat(ytdSS) || 0;
    const med = parseFloat(ytdMedicare) || 0;
    const st = parseFloat(ytdState) || 0;
    const k401 = parseFloat(ytd401k) || 0;
    const hsa = parseFloat(ytdHsa) || 0;
    const done = parseFloat(periodsCompleted) || 0;
    const remain = parseFloat(periodsRemaining) || 0;

    const totalPeriods = done + remain;
    const grossPerPeriod = done > 0 ? ytd / done : 0;
    const projectedAnnualGross = grossPerPeriod * totalPeriods;
    const projectedFed = (fed / Math.max(done, 1)) * totalPeriods;
    const projectedState = (st / Math.max(done, 1)) * totalPeriods;
    const projected401k = (k401 / Math.max(done, 1)) * totalPeriods;
    const projectedHsa = (hsa / Math.max(done, 1)) * totalPeriods;

    // SS wage base check
    const ssRemainingCap = Math.max(0, SS_WAGE_BASE_2026 - ytd);
    const ssWillCap = projectedAnnualGross > SS_WAGE_BASE_2026;
    const periodsUntilSsCap = grossPerPeriod > 0 && ssWillCap ? Math.ceil(ssRemainingCap / grossPerPeriod) : null;
    const projectedSS = Math.min(projectedAnnualGross, SS_WAGE_BASE_2026) * SS_RATE;

    // Additional Medicare check
    const addMedThreshold = filing === 'married_jointly' ? ADD_MEDICARE_THRESHOLD_MFJ : ADD_MEDICARE_THRESHOLD_SINGLE;
    const addMedWillTrigger = projectedAnnualGross > addMedThreshold;
    const projectedAddMedicare = addMedWillTrigger
      ? Math.max(0, projectedAnnualGross - addMedThreshold) * ADD_MEDICARE_RATE
      : 0;
    const projectedMedicare = projectedAnnualGross * MEDICARE_RATE + projectedAddMedicare;

    // 401(k) limit check
    const limit401k = LIMIT_401K_ELECTIVE + (age50plus ? LIMIT_401K_CATCHUP_50 : 0);
    const k401WillCap = projected401k > limit401k;
    const k401PerPeriod = (projected401k - k401) / Math.max(remain, 1);
    const k401MaxAdditional = limit401k - k401;
    const k401MaxPerPeriod = remain > 0 ? k401MaxAdditional / remain : 0;

    // HSA limit check
    const hsaLimit = hsaCoverage === 'family' ? LIMIT_HSA_FAMILY : hsaCoverage === 'self' ? LIMIT_HSA_SELF : 0;
    const hsaWillCap = hsaCoverage !== 'none' && projectedHsa > hsaLimit;
    const hsaMaxPerPeriod = remain > 0 ? Math.max(0, hsaLimit - hsa) / remain : 0;

    // W-2 box 1 expectation
    const projectedW2Box1 = projectedAnnualGross - projected401k; // 401k traditional reduces box 1, HSA via cafeteria reduces too
    const projectedW2Box1MinusHsa = projectedW2Box1 - (hsaCoverage !== 'none' ? projectedHsa : 0);

    // Net projection (rough)
    const totalProjectedTax = projectedFed + projectedSS + projectedMedicare + projectedState;
    const projectedNet = projectedAnnualGross - totalProjectedTax - projected401k - (hsaCoverage !== 'none' ? projectedHsa : 0);

    return {
      grossPerPeriod, totalPeriods, projectedAnnualGross,
      projectedFed, projectedSS, projectedMedicare, projectedState,
      projectedAddMedicare, projected401k, projectedHsa,
      ssWillCap, periodsUntilSsCap, ssRemainingCap,
      addMedWillTrigger, addMedThreshold,
      limit401k, k401WillCap, k401MaxPerPeriod, k401PerPeriod,
      hsaLimit, hsaWillCap, hsaMaxPerPeriod,
      projectedW2Box1: projectedW2Box1MinusHsa,
      projectedNet, totalProjectedTax,
      effectiveTax: projectedAnnualGross > 0 ? totalProjectedTax / projectedAnnualGross : 0
    };
  }, [ytdGross, ytdFedWH, ytdSS, ytdMedicare, ytdState, ytd401k, ytdHsa, periodsCompleted, periodsRemaining, filing, age50plus, hsaCoverage]);

  return (
    <div className="grid lg:grid-cols-5 gap-6 my-8">
      <form className="lg:col-span-2 bg-white border border-line rounded-md p-5 space-y-3 text-sm" onSubmit={(e) => e.preventDefault()}>
        <h3 className="font-semibold">Year-to-date inputs</h3>
        <p className="text-xs text-ink/65 -mt-1">Copy these from the YTD column on your most recent pay stub.</p>

        <Row label="YTD gross wages">
          <DollarInput value={ytdGross} onChange={setYtdGross} aria="YTD gross" />
        </Row>
        <div className="grid grid-cols-2 gap-2">
          <Row label="YTD federal WH">
            <DollarInput value={ytdFedWH} onChange={setYtdFedWH} aria="YTD federal withholding" />
          </Row>
          <Row label="YTD state tax">
            <DollarInput value={ytdState} onChange={setYtdState} aria="YTD state tax" />
          </Row>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Row label="YTD Social Security">
            <DollarInput value={ytdSS} onChange={setYtdSS} aria="YTD social security" />
          </Row>
          <Row label="YTD Medicare">
            <DollarInput value={ytdMedicare} onChange={setYtdMedicare} aria="YTD medicare" />
          </Row>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Row label="YTD 401(k) traditional">
            <DollarInput value={ytd401k} onChange={setYtd401k} aria="YTD 401k" />
          </Row>
          <Row label="YTD HSA">
            <DollarInput value={ytdHsa} onChange={setYtdHsa} aria="YTD HSA" />
          </Row>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Row label="Periods completed">
            <input className="w-full px-2 py-2 border border-line rounded outline-none" inputMode="decimal" value={periodsCompleted} onChange={(e) => setPeriodsCompleted(e.target.value)} aria-label="Periods completed" />
          </Row>
          <Row label="Periods remaining">
            <input className="w-full px-2 py-2 border border-line rounded outline-none" inputMode="decimal" value={periodsRemaining} onChange={(e) => setPeriodsRemaining(e.target.value)} aria-label="Periods remaining" />
          </Row>
        </div>

        <Row label="Filing status">
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={filing} onChange={(e) => setFiling(e.target.value as Filing)}>
            <option value="single">Single / MFS</option>
            <option value="married_jointly">Married filing jointly</option>
            <option value="head_of_household">Head of household</option>
          </select>
        </Row>

        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center gap-2 text-xs text-ink/80">
            <input type="checkbox" checked={age50plus} onChange={(e) => setAge50plus(e.target.checked)} aria-label="Age 50 or older" />
            Age 50+ (catch-up)
          </label>
          <Row label="HSA coverage">
            <select className="w-full px-2 py-2 border border-line rounded bg-white" value={hsaCoverage} onChange={(e) => setHsaCoverage(e.target.value as 'self'|'family'|'none')}>
              <option value="none">None</option>
              <option value="self">Self only</option>
              <option value="family">Family</option>
            </select>
          </Row>
        </div>
      </form>

      <div className="lg:col-span-3 space-y-4">
        <div className="bg-white border border-line rounded-md p-5">
          <h3 className="font-semibold mb-4 text-[15px]">Year-end projection</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <Stat label="Projected annual gross" value={fmt0(result.projectedAnnualGross)} />
            <Stat label="Projected take-home" value={fmt0(result.projectedNet)} />
            <Stat label="Effective tax rate" value={`${(result.effectiveTax * 100).toFixed(1)}%`} />
          </div>
          <table className="w-full text-sm mt-5">
            <tbody>
              <tr><td className="py-1 text-ink/70">Projected federal income tax</td><td className="text-right tabular-nums">{fmt0(result.projectedFed)}</td></tr>
              <tr><td className="py-1 text-ink/70">Projected Social Security</td><td className="text-right tabular-nums">{fmt0(result.projectedSS)}</td></tr>
              <tr><td className="py-1 text-ink/70">Projected Medicare {result.projectedAddMedicare > 0 ? '+ Additional Medicare' : ''}</td><td className="text-right tabular-nums">{fmt0(result.projectedMedicare)}</td></tr>
              <tr><td className="py-1 text-ink/70">Projected state tax</td><td className="text-right tabular-nums">{fmt0(result.projectedState)}</td></tr>
              <tr><td className="py-1 text-ink/70">Projected 401(k) traditional</td><td className="text-right tabular-nums">{fmt0(result.projected401k)}</td></tr>
              <tr><td className="py-1 text-ink/70">Projected HSA</td><td className="text-right tabular-nums">{fmt0(result.projectedHsa)}</td></tr>
              <tr className="font-semibold border-t border-line"><td className="py-2">Expected W-2 Box 1</td><td className="text-right tabular-nums">{fmt0(result.projectedW2Box1)}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-line rounded-md p-5 space-y-3">
          <h3 className="font-semibold text-[15px]">Flags + threshold tracking</h3>
          <FlagRow
            ok={!result.ssWillCap}
            okLabel="You will not hit the Social Security wage base ($184,500 in 2026)."
            warnLabel={`You are projected to hit the SS wage base. After ~${fmt0(result.ssRemainingCap)} more in wages (about ${result.periodsUntilSsCap ?? 'n/a'} more periods), the 6.2% Social Security line will stop.`}
          />
          <FlagRow
            ok={!result.addMedWillTrigger}
            okLabel="You will not trigger the Additional 0.9% Medicare tax."
            warnLabel={`You are projected to exceed $${result.addMedThreshold.toLocaleString()}. Additional 0.9% Medicare will apply on the excess (~${fmt0(result.projectedAddMedicare)} extra). Your employer is required to start withholding the extra 0.9% on wages above $200,000 regardless of filing status.`}
          />
          <FlagRow
            ok={!result.k401WillCap}
            okLabel={`You are within the 401(k) elective deferral limit ($${result.limit401k.toLocaleString()}).`}
            warnLabel={`You are projected to hit the 401(k) elective deferral limit ($${result.limit401k.toLocaleString()}). Consider reducing your contribution rate to about ${fmt0(result.k401MaxPerPeriod)} per remaining check, or your employer match could be reduced.`}
          />
          {hsaCoverage !== 'none' && (
            <FlagRow
              ok={!result.hsaWillCap}
              okLabel={`You are within the HSA limit ($${result.hsaLimit.toLocaleString()}).`}
              warnLabel={`You are projected to exceed the HSA limit ($${result.hsaLimit.toLocaleString()}). Excess HSA contributions can trigger a 6% excise tax. Consider reducing to about ${fmt0(result.hsaMaxPerPeriod)} per remaining check.`}
            />
          )}
        </div>

        <p className="text-xs text-ink/60 leading-relaxed">
          Tax year 2026. Projections assume the same gross per period continues through year-end. Real paychecks vary because of bonuses, commissions, schedule changes, leave, raises, and benefit elections.
          Limits sourced from IRS 2026 published values for 401(k) elective deferral and HSA contribution limits, SSA 2026 wage base, and IRS Pub 15-T 2026 Additional Medicare Tax Q&A. Verify the current published limits with IRS / SSA.
        </p>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="block text-xs text-ink/70 mb-1">{label}</span>{children}</label>;
}
function DollarInput({ value, onChange, aria }: { value: string; onChange: (v: string) => void; aria: string }) {
  return (
    <div className="flex items-center border border-line rounded">
      <span className="px-2 text-ink/50">$</span>
      <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={value} onChange={(e) => onChange(e.target.value)} aria-label={aria} />
    </div>
  );
}
function Stat({ label, value }: { label: string; value: string }) {
  return <div className="bg-paper rounded p-3"><div className="text-xs text-ink/60">{label}</div><div className="text-lg font-semibold mt-1 tabular-nums">{value}</div></div>;
}
function FlagRow({ ok, okLabel, warnLabel }: { ok: boolean; okLabel: string; warnLabel: string }) {
  return (
    <div className={`flex items-start gap-2 text-[13px] leading-relaxed rounded p-3 ${ok ? 'bg-green-50 text-green-900' : 'bg-amber-50 text-amber-900'}`}>
      <span aria-hidden className="font-bold mt-0.5">{ok ? '✓' : '⚠'}</span>
      <span>{ok ? okLabel : warnLabel}</span>
    </div>
  );
}
