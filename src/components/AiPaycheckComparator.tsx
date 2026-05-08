'use client';
import { useMemo, useState } from 'react';
import { AiPayStubUploader, PayStubExtraction } from './AiPayStubUploader';
import { ToolWarning } from './PageBlocks';

type Side = 'a' | 'b';

export function AiPaycheckComparator() {
  const [a, setA] = useState<PayStubExtraction | null>(null);
  const [b, setB] = useState<PayStubExtraction | null>(null);

  const setSide = (side: Side) => (e: PayStubExtraction) => (side === 'a' ? setA(e) : setB(e));

  const diffs = useMemo(() => {
    if (!a || !b) return null;
    const flat = (e: PayStubExtraction) => ({
      Gross: e.pay?.grossPay,
      'Federal tax': e.taxes?.federalIncomeTax,
      'Social Security': e.taxes?.socialSecurity,
      'Medicare': e.taxes?.medicare,
      'State tax': e.taxes?.stateIncomeTax,
      'Local tax': e.taxes?.localIncomeTax,
      'Pre-tax 401(k)': e.benefits?.pretax401k,
      'Health insurance': e.benefits?.healthInsurance,
      'Net pay': e.pay?.netPay
    } as Record<string, number | null | undefined>);
    const fa = flat(a); const fb = flat(b);
    return Object.keys(fa).map(k => {
      const av = fa[k] ?? 0; const bv = fb[k] ?? 0;
      return { key: k, a: av, b: bv, diff: bv - av };
    });
  }, [a, b]);

  const explanations = useMemo(() => {
    if (!diffs) return [];
    const out: string[] = [];
    diffs.forEach(d => {
      if (Math.abs(d.diff) < 0.01) return;
      const dir = d.diff > 0 ? 'increased' : 'decreased';
      const amt = `$${Math.abs(d.diff).toFixed(2)}`;
      switch (d.key) {
        case 'Gross': out.push(`Gross ${dir} by ${amt}, usually hours, rate, overtime, bonus, or commission.`); break;
        case 'Federal tax': out.push(`Federal ${dir} by ${amt}, common: new W-4, supplemental wages, or YTD pushing into a higher bracket.`); break;
        case 'Social Security': out.push(`Social Security ${dir} by ${amt}, tracks gross wages until you cross the annual SSA wage base ($184,500 in 2026).`); break;
        case 'Medicare': out.push(`Medicare ${dir} by ${amt}, tracks gross; the additional 0.9% kicks in over $200k YTD.`); break;
        case 'State tax': out.push(`State tax ${dir} by ${amt}, state W-4 update, residency change, or YTD bracket cross.`); break;
        case 'Local tax': out.push(`Local tax ${dir} by ${amt}, common in OH, PA, NY, MI, KY, MO when work or home location changes.`); break;
        case 'Pre-tax 401(k)': out.push(`401(k) ${dir} by ${amt}, possibly a percent change or a paycheck where 401(k) didn't apply.`); break;
        case 'Health insurance': out.push(`Health premium ${dir} by ${amt}, likely a benefits enrollment or premium change.`); break;
        case 'Net pay': out.push(`Net pay ${dir} by ${amt}, sum of the items above.`); break;
      }
    });
    return out;
  }, [diffs]);

  return (
    <div className="my-6 space-y-4">
      <ToolWarning kind="no-error" />

      <div className="grid lg:grid-cols-2 gap-4">
        <Pane title="Earlier paycheck" extraction={a} onUpload={setSide('a')} />
        <Pane title="Newer paycheck" extraction={b} onUpload={setSide('b')} />
      </div>

      {diffs && (
        <section className="bg-white border border-line rounded-md p-5">
          <h3 className="font-semibold mb-3">What changed</h3>
          <table className="w-full text-sm">
            <thead><tr className="text-ink/60 text-xs uppercase tracking-wider"><th className="text-left py-2">Line</th><th className="text-right">Earlier</th><th className="text-right">Newer</th><th className="text-right">Change</th></tr></thead>
            <tbody>
              {diffs.map(d => (
                <tr key={d.key} className="border-t border-line">
                  <td className="py-2">{d.key}</td>
                  <td className="text-right tabular-nums">${d.a.toFixed(2)}</td>
                  <td className="text-right tabular-nums">${d.b.toFixed(2)}</td>
                  <td className={`text-right tabular-nums ${d.diff < 0 ? 'text-warn' : d.diff > 0 ? 'text-ok' : ''}`}>{d.diff === 0 ? '-' : (d.diff > 0 ? '+' : '−') + '$' + Math.abs(d.diff).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {explanations.length > 0 && (
            <div className="mt-4">
              <div className="font-semibold text-sm mb-2">Possible reasons</div>
              <ul className="text-sm list-disc pl-5 space-y-1 text-ink/80">{explanations.map((e, i) => <li key={i}>{e}</li>)}</ul>
              <p className="text-xs text-ink/60 mt-2">Possible causes only, not confirmation. Ask payroll for the source data if it matters.</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

function Pane({ title, extraction, onUpload }: { title: string; extraction: PayStubExtraction | null; onUpload: (e: PayStubExtraction) => void }) {
  return (
    <div className="bg-white border border-line rounded-md p-4">
      <h3 className="font-semibold text-base mb-2">{title}</h3>
      {!extraction ? (
        <AiPayStubUploader onExtraction={onUpload} label={`Upload the ${title.toLowerCase()}`} />
      ) : (
        <div className="text-sm">
          <div className="text-ink/70 mb-1">{extraction.payPeriod?.payDate ?? 'Pay date n/a'}</div>
          <div>Gross: <strong>${extraction.pay?.grossPay?.toFixed(2) ?? '-'}</strong></div>
          <div>Net: <strong>${extraction.pay?.netPay?.toFixed(2) ?? '-'}</strong></div>
        </div>
      )}
    </div>
  );
}
