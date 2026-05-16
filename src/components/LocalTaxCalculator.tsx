'use client';
import { useMemo, useState } from 'react';

// PayslipIQ USA - Local (city/county) tax calculator, self-contained.
// Educational only. Not advice. Verified 2026-05-06.
// Sources:
//   NYC: NY Department of Taxation and Finance (resident income tax)
//   Yonkers: NYS DTF (16.75% surcharge of NYS personal income tax liability — see NYS Pub NYS-50-T-Y).
//           Approximated as ~1% flat-of-wages for this estimator (mid-income worker), since the true
//           surcharge is "16.75% × NYS tax", not "% of wages". Use the dedicated Yonkers calc for exact form.
//   PA EIT: PA DCED, Local Earned Income Tax (Act 32) - varies by municipality
//   Ohio: Ohio Department of Taxation, RITA / CCA local tax registers
//   Maryland: Comptroller of MD, county income tax piggyback rates
//   San Francisco: Payroll expense tax (employer-paid, not employee withholding) - excluded
//   Wilmington DE: Wilmington City Wage Tax 1.25%
//   Kansas City MO: City Earnings Tax 1%
//   St. Louis MO: City Earnings Tax 1%
//   Indiana: County income tax piggyback - varies by county
//   Detroit / many MI cities: City income tax (resident vs nonresident rates)

type LocalKind =
  | 'none'
  | 'nyc'
  | 'yonkers'
  | 'paeit'
  | 'oh-rita'
  | 'md-county'
  | 'wilmington'
  | 'kc'
  | 'stl'
  | 'in-county'
  | 'mi-city'
  | 'custom';

interface Locality {
  id: LocalKind;
  label: string;
  rate: number;     // resident rate, decimal
  inputRate: boolean; // user can override
  notes: string;
}

const LOCALITIES: Locality[] = [
  { id: 'none',       label: 'No local tax',                   rate: 0,        inputRate: false, notes: '' },
  { id: 'nyc',        label: 'New York City resident',          rate: 0.03876,  inputRate: false, notes: 'NYC resident income tax (top marginal). Nonresidents who work in NYC do not pay this.' },
  { id: 'yonkers',    label: 'Yonkers (NY) resident',           rate: 0.01,     inputRate: true,  notes: 'The true Yonkers resident surcharge is 16.75% of your NYS personal income tax liability (NYS Pub NYS-50-T-Y). For a mid-income worker that works out to roughly 1% of taxable wages, which is what we use here. Override the rate above with your exact figure if your NYS effective rate is materially different.' },
  { id: 'paeit',      label: 'PA EIT municipality',             rate: 0.01,     inputRate: true,  notes: 'PA Earned Income Tax under Act 32. Rate varies by municipality and school district (commonly 1-3.5%). Enter your actual EIT rate.' },
  { id: 'oh-rita',    label: 'Ohio RITA / CCA city',            rate: 0.025,    inputRate: true,  notes: 'Ohio municipal income tax via RITA or CCA. Rates commonly 1-3%. Enter your city rate.' },
  { id: 'md-county',  label: 'Maryland county piggyback',       rate: 0.0275,   inputRate: true,  notes: 'MD county income tax piggyback (2.25-3.2% range). Defaults to mid-range; enter actual.' },
  { id: 'wilmington', label: 'Wilmington, DE',                  rate: 0.0125,   inputRate: false, notes: 'Wilmington City Wage Tax 1.25% on wages earned in Wilmington.' },
  { id: 'kc',         label: 'Kansas City, MO earnings tax',    rate: 0.01,     inputRate: false, notes: '1% earnings tax on residents and on wages earned in KC by nonresidents.' },
  { id: 'stl',        label: 'St. Louis, MO earnings tax',      rate: 0.01,     inputRate: false, notes: '1% earnings tax on residents and on wages earned in STL by nonresidents.' },
  { id: 'in-county',  label: 'Indiana county tax',              rate: 0.0175,   inputRate: true,  notes: 'IN county income tax (0.35-3.38% range). Defaults to typical; enter actual.' },
  { id: 'mi-city',    label: 'Michigan city (Detroit etc.)',    rate: 0.024,    inputRate: true,  notes: 'Detroit resident 2.4%, nonresident 1.2%. Many MI cities have lower rates.' },
  { id: 'custom',     label: 'Other / custom rate',             rate: 0.01,     inputRate: true,  notes: 'Enter your local rate as a decimal percentage.' }
];

export function LocalTaxCalculator({ defaultGross = '3000', defaultLocality = 'nyc' as LocalKind }: { defaultGross?: string; defaultLocality?: LocalKind }) {
  const [gross, setGross] = useState(defaultGross);
  const [localityId, setLocalityId] = useState<LocalKind>(defaultLocality);
  const [customRate, setCustomRate] = useState('1.0');

  const locality = LOCALITIES.find((l) => l.id === localityId)!;
  const effectiveRate = locality.inputRate ? (parseFloat(customRate) / 100 || 0) : locality.rate;

  const result = useMemo(() => {
    const g = parseFloat(gross) || 0;
    const localTax = +(g * effectiveRate).toFixed(2);
    return { localTax, percentOfGross: g > 0 ? (localTax / g) * 100 : 0 };
  }, [gross, effectiveRate]);

  return (
    <div className="bg-white border border-line rounded-md p-5 my-8">
      <h3 className="font-semibold mb-4 text-[15px]">Local tax estimator</h3>
      <div className="grid sm:grid-cols-3 gap-3 text-sm">
        <label className="block">
          <span className="block text-xs text-ink/70 mb-1">Gross pay this paycheck</span>
          <div className="flex items-center border border-line rounded">
            <span className="px-2 text-ink/50">$</span>
            <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={gross} onChange={(e) => setGross(e.target.value)} aria-label="Gross pay" />
          </div>
        </label>
        <label className="block">
          <span className="block text-xs text-ink/70 mb-1">Locality</span>
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={localityId} onChange={(e) => setLocalityId(e.target.value as LocalKind)}>
            {LOCALITIES.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
          </select>
        </label>
        {locality.inputRate && (
          <label className="block">
            <span className="block text-xs text-ink/70 mb-1">Local rate (%)</span>
            <div className="flex items-center border border-line rounded">
              <input className="w-full px-2 py-2 outline-none" inputMode="decimal" value={customRate} onChange={(e) => setCustomRate(e.target.value)} aria-label="Local rate percent" />
              <span className="px-2 text-ink/50">%</span>
            </div>
          </label>
        )}
      </div>

      <div className="mt-4 grid sm:grid-cols-3 gap-3 text-center">
        <div className="bg-paper rounded p-3">
          <div className="text-xs text-ink/60">Local tax this paycheck</div>
          <div className="text-xl font-semibold mt-1 tabular-nums">${result.localTax.toFixed(2)}</div>
        </div>
        <div className="bg-paper rounded p-3">
          <div className="text-xs text-ink/60">Effective rate</div>
          <div className="text-xl font-semibold mt-1 tabular-nums">{(effectiveRate * 100).toFixed(2)}%</div>
        </div>
        <div className="bg-paper rounded p-3">
          <div className="text-xs text-ink/60">Annualised local tax</div>
          <div className="text-xl font-semibold mt-1 tabular-nums">${(result.localTax * 26).toFixed(0)}</div>
        </div>
      </div>

      {locality.notes && (
        <p className="mt-4 text-xs text-ink/65 leading-relaxed">{locality.notes}</p>
      )}

      <p className="mt-3 text-xs text-ink/60 leading-relaxed">
        Estimate only. Local income tax rules vary by residency, work location, school district, and special assessments.
        Some localities (NYC, Yonkers) tax residents but not commuters; others (KC, STL, Wilmington) tax both. Verify with the city revenue agency or your payroll team before relying on a number.
        This calculator does not include state income tax, federal income tax, Social Security, or Medicare. Pair it with the
        <a className="text-accent underline mx-1" href="/us/gross-to-net-paycheck-calculator/">Gross to Net Paycheck Calculator</a>
        for a complete picture.
      </p>
    </div>
  );
}
