'use client';
import { useMemo, useState } from 'react';
import { LOCAL_TAX_OPTIONS, type LocalKind, getLocality, localRateFor, ratePercentDefault } from '@/lib/localTax';

export function LocalTaxCalculator({ defaultGross = '3000', defaultLocality = 'nyc' as LocalKind, defaultRatePct }: { defaultGross?: string; defaultLocality?: LocalKind; defaultRatePct?: string }) {
  const [gross, setGross] = useState(defaultGross);
  const [localityId, setLocalityId] = useState<LocalKind>(defaultLocality);
  const [customRate, setCustomRate] = useState(defaultRatePct ?? ratePercentDefault(defaultLocality));

  const locality = getLocality(localityId);
  const effectiveRate = localRateFor(localityId, locality.inputRate ? parseFloat(customRate) : undefined);

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
          <select className="w-full px-2 py-2 border border-line rounded bg-white" value={localityId} onChange={(e) => {
            const id = e.target.value as LocalKind;
            setLocalityId(id);
            setCustomRate(ratePercentDefault(id));
          }}>
            {LOCAL_TAX_OPTIONS.map((l) => <option key={l.id} value={l.id}>{l.label}</option>)}
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
        Pair this with the
        <a className="text-accent underline mx-1" href="/us/gross-to-net-paycheck-calculator">Gross to Net Paycheck Calculator</a>
        and pick the same locality there so take-home includes this line.
      </p>
    </div>
  );
}
