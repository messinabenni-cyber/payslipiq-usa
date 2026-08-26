'use client';

import React, { useMemo, useState } from 'react';
import { computePaycheck, formatUSD, type FilingStatus, type PayFrequency } from '@/lib/calc';
import { STATES } from '@/lib/states';
import { LOCAL_TAX_OPTIONS, type LocalKind, getLocality, localTaxOnWages, ratePercentDefault } from '@/lib/localTax';
import { MasterDisclaimer } from './MasterDisclaimer';

interface Props {
  defaultStateSlug?: string;
  defaultLocality?: LocalKind;
  defaultLocalRatePct?: string;
}

export function PaycheckCalculator({ defaultStateSlug = 'california', defaultLocality = 'none', defaultLocalRatePct }: Props) {
  const [gross, setGross] = useState<number>(3000);
  const [freq, setFreq] = useState<PayFrequency>('biweekly');
  const [stateSlug, setStateSlug] = useState<string>(defaultStateSlug);
  const [filing, setFiling] = useState<FilingStatus>('single');
  const [preTax, setPreTax] = useState<number>(0);
  const [postTax, setPostTax] = useState<number>(0);
  const [localityId, setLocalityId] = useState<LocalKind>(defaultLocality);
  const [localRatePct, setLocalRatePct] = useState(defaultLocalRatePct ?? ratePercentDefault(defaultLocality));

  const local = localTaxOnWages(
    gross,
    localityId,
    getLocality(localityId).inputRate ? parseFloat(localRatePct) : undefined,
  );

  const result = useMemo(
    () => computePaycheck({
      grossPerPeriod: gross,
      freq,
      stateSlug,
      filing,
      preTaxPerPeriod: preTax,
      postTaxPerPeriod: postTax,
      localTaxPerPeriod: local.amount,
      localTaxLabel: local.label,
    }),
    [gross, freq, stateSlug, filing, preTax, postTax, local.amount, local.label],
  );

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Paycheck calculator</h2>
      <p className="mt-1 text-sm text-slate-600">Enter gross, state, and filing status. Estimates only.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Gross pay (per period)">
          <input
            type="number"
            min="0"
            step="0.01"
            value={gross}
            onChange={(e) => setGross(Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        </Field>
        <Field label="Pay frequency">
          <select value={freq} onChange={(e) => setFreq(e.target.value as PayFrequency)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="semimonthly">Semi-monthly</option>
            <option value="monthly">Monthly</option>
            <option value="annual">Annual</option>
          </select>
        </Field>
        <Field label="State">
          <select value={stateSlug} onChange={(e) => setStateSlug(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
            {STATES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </Field>
        <Field label="Filing status">
          <select value={filing} onChange={(e) => setFiling(e.target.value as FilingStatus)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
            <option value="single">Single</option>
            <option value="mfj">Married filing jointly</option>
            <option value="mfs">Married filing separately</option>
            <option value="hoh">Head of household</option>
          </select>
        </Field>
        <Field label="Pre-tax deductions / period (401k, HSA, etc.)">
          <input type="number" min="0" step="0.01" value={preTax} onChange={(e) => setPreTax(Number(e.target.value))} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
        </Field>
        <Field label="Local city / county tax">
          <select value={localityId} onChange={(e) => {
            const id = e.target.value as LocalKind;
            setLocalityId(id);
            setLocalRatePct(ratePercentDefault(id));
          }} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
            {LOCAL_TAX_OPTIONS.map((l) => (
              <option key={l.id} value={l.id}>{l.label}</option>
            ))}
          </select>
        </Field>
        {getLocality(localityId).inputRate ? (
          <Field label="Local rate (%)">
            <input type="number" min="0" step="0.01" value={localRatePct} onChange={(e) => setLocalRatePct(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
          </Field>
        ) : null}
        <Field label="Post-tax deductions / period (Roth, garnishments, etc.)">
          <input type="number" min="0" step="0.01" value={postTax} onChange={(e) => setPostTax(Number(e.target.value))} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
        </Field>
      </div>

      <div className="mt-8 rounded-lg bg-slate-50 p-6">
        <p className="text-sm font-medium text-slate-600">Estimated take-home (per period)</p>
        <p className="mt-1 text-3xl font-bold text-slate-900">{formatUSD(result.netPerPeriod)}</p>
        <p className="mt-1 text-xs text-slate-500">Estimated take-home (annual): {formatUSD(result.netAnnual)}</p>

        <div className="mt-6 space-y-2 text-sm">
          <Row label="Gross pay" value={formatUSD(result.grossPerPeriod)} />
          <Row label="Pre-tax deductions" value={`-${formatUSD(result.preTaxDeductionsPerPeriod)}`} />
          <Row label="Federal income tax" value={`-${formatUSD(result.federalTaxPerPeriod)}`} />
          <Row label="Social Security (6.2%)" value={`-${formatUSD(result.fica.socialSecurity / payPeriods(result.freq))}`} />
          <Row label="Medicare (1.45%)" value={`-${formatUSD(result.fica.medicare / payPeriods(result.freq))}`} />
          {result.fica.additionalMedicare > 0 ? (
            <Row label="Additional Medicare Tax (0.9%)" value={`-${formatUSD(result.fica.additionalMedicare / payPeriods(result.freq))}`} />
          ) : null}
          {result.stateTaxPerPeriod > 0 ? (
            <Row label={`${result.state?.name ?? 'State'} state tax`} value={`-${formatUSD(result.stateTaxPerPeriod)}`} />
          ) : (
            <Row label={`${result.state?.name ?? 'State'} state tax`} value="$0.00 (no state income tax)" />
          )}
          {/* 2026-05-16: state worker contributions (CA SDI, NY SDI+PFL, NJ SDI+FLI, MA PFML, OR Paid Leave, WA PFML+Cares, RI TDI, CO FAMLI, HI TDI) */}
          {result.stateWorkerContribsPerPeriod.map((w) => (
            <Row key={w.label} label={w.label} value={`-${formatUSD(w.amount)}`} />
          ))}
          {result.localTaxPerPeriod > 0 ? (
            <Row label={result.localTaxLabel || 'Local tax'} value={`-${formatUSD(result.localTaxPerPeriod)}`} />
          ) : null}
          <Row label="Post-tax deductions" value={`-${formatUSD(result.postTaxDeductionsPerPeriod)}`} />
          <hr className="my-2 border-slate-200" />
          <Row label="Net (take-home)" value={formatUSD(result.netPerPeriod)} bold />
        </div>
      </div>

      <div className="mt-6">
        <MasterDisclaimer variant="short" />
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}

function Row({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function payPeriods(freq: PayFrequency): number {
  return ({ weekly: 52, biweekly: 26, semimonthly: 24, monthly: 12, annual: 1 } as const)[freq];
}
