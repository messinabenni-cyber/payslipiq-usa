'use client';
import { useState } from 'react';
import { AiPayStubUploader, PayStubExtraction } from './AiPayStubUploader';

export function AiAskPayrollComposer() {
  const [extraction, setExtraction] = useState<PayStubExtraction | null>(null);
  const [edited, setEdited] = useState('');

  const handleExtraction = (e: PayStubExtraction) => {
    setExtraction(e);
    setEdited(e.askPayrollDraft || 'Hi Payroll team,\n\nI was reviewing my recent pay stub and would appreciate help understanding a few items. Could you confirm the W-4 settings currently on file and walk me through any line items that changed this period? Thanks for your help.');
  };

  return (
    <div className="my-6">
      {!extraction ? (
        <AiPayStubUploader onExtraction={handleExtraction} label="Upload a pay stub, we'll draft the message for you" />
      ) : (
        <div className="space-y-4">
          <section className="bg-white border border-line rounded-md p-5">
            <h3 className="font-semibold mb-2">AI-drafted message, edit before sending</h3>
            <textarea
              value={edited}
              onChange={e => setEdited(e.target.value)}
              className="w-full min-h-[260px] px-3 py-2 border border-line rounded text-sm font-mono"
            />
            <div className="flex gap-2 mt-3">
              <button type="button" onClick={() => navigator.clipboard?.writeText(edited)} className="bg-accent text-white px-4 py-2 rounded font-semibold text-sm">Copy to clipboard</button>
              <button type="button" onClick={() => { setExtraction(null); setEdited(''); }} className="border border-line px-4 py-2 rounded font-semibold text-sm">Start over with another stub</button>
            </div>
            <p className="text-xs text-ink/60 mt-2">This is a polite question, not an accusation. Edit before sending.</p>
          </section>

          {extraction.flags.filter(f => f.severity === 'check').length > 0 && (
            <section className="border-l-4 border-warn bg-amber-50 px-4 py-3 rounded text-sm">
              <div className="font-semibold mb-1">PayslipIQ flagged these as worth a question</div>
              <ul className="list-disc pl-5 text-amber-900 space-y-1">
                {extraction.flags.filter(f => f.severity === 'check').map((f, i) => <li key={i}><strong>{f.line}:</strong> {f.note}</li>)}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
