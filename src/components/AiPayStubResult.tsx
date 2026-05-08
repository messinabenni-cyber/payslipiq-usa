'use client';
import { PayStubExtraction } from './AiPayStubUploader';
import { ToolWarning } from './PageBlocks';

interface Props { extraction: PayStubExtraction | null; }

export function AiPayStubResult({ extraction }: Props) {
  if (!extraction) return null;

  if (!extraction.isPayStub) {
    return (
      <div className="border-l-4 border-warn bg-amber-50 px-4 py-3 my-4 text-sm text-amber-900">
        <strong>That doesn&apos;t look like a US pay stub.</strong> {extraction.explanation}
      </div>
    );
  }

  const fmt = (n: number | null | undefined) => (n == null ? '-' : `$${n.toFixed(2)}`);
  const sections: { title: string; rows: [string, number | null | undefined][] }[] = [
    { title: 'Pay this period', rows: [
      ['Gross pay', extraction.pay?.grossPay],
      ['Regular pay', extraction.pay?.regularPay],
      ['Overtime', extraction.pay?.overtimePay],
      ['Bonus', extraction.pay?.bonus],
      ['Commission', extraction.pay?.commission],
      ['Tips', extraction.pay?.tips],
      ['Net pay (take-home)', extraction.pay?.netPay]
    ]},
    { title: 'Taxes', rows: [
      ['Federal income tax', extraction.taxes?.federalIncomeTax],
      ['Social Security (6.2%)', extraction.taxes?.socialSecurity],
      ['Medicare (1.45%)', extraction.taxes?.medicare],
      ['Additional Medicare (0.9%)', extraction.taxes?.additionalMedicare],
      ['State income tax', extraction.taxes?.stateIncomeTax],
      ['Local / city tax', extraction.taxes?.localIncomeTax]
    ]},
    { title: 'Pre-tax & retirement', rows: [
      ['Traditional 401(k)', extraction.benefits?.pretax401k],
      ['Roth 401(k)', extraction.benefits?.rothContribution],
      ['HSA', extraction.benefits?.hsa],
      ['FSA', extraction.benefits?.fsa],
      ['Health insurance', extraction.benefits?.healthInsurance],
      ['Dental / vision', extraction.benefits?.dentalVision]
    ]},
    { title: 'Other deductions', rows: [
      ['Garnishment', extraction.otherDeductions?.garnishment],
      ['Child support', extraction.otherDeductions?.childSupport],
      ['Union dues', extraction.otherDeductions?.unionDues],
      ['Other', extraction.otherDeductions?.other]
    ]},
    { title: 'Year-to-date', rows: [
      ['YTD gross', extraction.ytd?.grossWages],
      ['YTD federal withheld', extraction.ytd?.federalWithheld],
      ['YTD Social Security', extraction.ytd?.socialSecurity],
      ['YTD Medicare', extraction.ytd?.medicare],
      ['YTD state withheld', extraction.ytd?.stateWithheld]
    ]}
  ];

  const checkFlags = extraction.flags.filter(f => f.severity === 'check');
  const uncertainFlags = extraction.flags.filter(f => f.severity === 'uncertain');

  return (
    <div className="space-y-6 my-6">
      <ToolWarning kind="no-error" />

      <section className="bg-white border border-line rounded-md p-5">
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <h3 className="font-semibold text-lg">Plain-English summary</h3>
          <span className={`text-xs px-2 py-0.5 rounded ${extraction.confidence === 'high' ? 'bg-ok/15 text-ok' : extraction.confidence === 'medium' ? 'bg-amber-100 text-amber-900' : 'bg-warn/15 text-warn'}`}>{extraction.confidence} confidence</span>
        </div>
        <div className="text-[15px] leading-relaxed text-ink/85 whitespace-pre-wrap">{extraction.explanation}</div>
      </section>

      <section className="grid sm:grid-cols-2 gap-3">
        {sections.map(sec => {
          const visible = sec.rows.filter(([, v]) => v != null);
          if (!visible.length) return null;
          return (
            <div key={sec.title} className="bg-white border border-line rounded-md p-4">
              <div className="font-semibold text-sm mb-2">{sec.title}</div>
              <table className="w-full text-sm">
                <tbody>
                  {visible.map(([k, v]) => (
                    <tr key={k} className="border-t border-line/50 first:border-t-0">
                      <td className="py-1.5 text-ink/75">{k}</td>
                      <td className="py-1.5 text-right tabular-nums font-medium">{fmt(v)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </section>

      {checkFlags.length > 0 && (
        <section className="border-l-4 border-warn bg-amber-50 px-4 py-3 rounded">
          <div className="font-semibold text-sm mb-2">Items worth checking with payroll</div>
          <ul className="space-y-2 text-sm text-amber-900">
            {checkFlags.map((f, i) => (<li key={i}><strong>{f.line}:</strong> {f.note}</li>))}
          </ul>
          <p className="text-xs text-amber-900/70 mt-2">Flags do not prove an error. They mean a polite question is reasonable.</p>
        </section>
      )}

      {uncertainFlags.length > 0 && (
        <section className="border-l-4 border-line bg-paper px-4 py-3 rounded">
          <div className="font-semibold text-sm mb-2">Could not confirm these from the image</div>
          <ul className="space-y-2 text-sm text-ink/80">
            {uncertainFlags.map((f, i) => (<li key={i}><strong>{f.line}:</strong> {f.note}</li>))}
          </ul>
        </section>
      )}

      {extraction.unreadable.length > 0 && (
        <section className="text-xs text-ink/60 bg-paper border border-line rounded p-3">
          <strong>Unreadable fields:</strong> {extraction.unreadable.join(', ')}. Try a clearer photo or enter manually below.
        </section>
      )}

      {extraction.identifiersDetected.length > 0 && (
        <section className="border-l-4 border-warn bg-red-50 px-4 py-3 rounded text-sm text-red-900">
          <strong>⚠ Sensitive identifiers were visible on the image you uploaded:</strong> {extraction.identifiersDetected.join(', ')}. PayslipIQ did not retain or repeat them. Please cover or remove these before any future upload.
        </section>
      )}

      {extraction.askPayrollDraft && (
        <section className="bg-white border border-line rounded-md p-5">
          <h3 className="font-semibold text-base mb-2">Ready-to-send message for payroll</h3>
          <pre className="text-sm whitespace-pre-wrap bg-paper border border-line rounded p-3 leading-relaxed">{extraction.askPayrollDraft}</pre>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(extraction.askPayrollDraft)}
            className="mt-3 inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded font-semibold text-sm"
          >Copy to clipboard</button>
          <p className="text-xs text-ink/60 mt-2">This is a polite question, not an accusation. Edit before sending.</p>
        </section>
      )}
    </div>
  );
}
