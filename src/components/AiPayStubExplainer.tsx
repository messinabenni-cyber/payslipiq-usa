'use client';
import { useState } from 'react';
import { AiPayStubUploader, PayStubExtraction } from './AiPayStubUploader';
import { AiPayStubResult } from './AiPayStubResult';

type Mode = 'ai' | 'manual';

export function AiPayStubExplainer() {
  const [mode, setMode] = useState<Mode>('ai');
  const [extraction, setExtraction] = useState<PayStubExtraction | null>(null);

  return (
    <div className="my-6">
      <div className="flex items-center gap-2 text-sm mb-4 border border-line rounded-md p-1 bg-white max-w-md">
        <button type="button" onClick={() => setMode('ai')} className={`flex-1 px-3 py-2 rounded font-semibold transition ${mode === 'ai' ? 'bg-accent text-white' : 'text-ink/70 hover:text-ink'}`}>📷 Upload pay stub (AI)</button>
        <button type="button" onClick={() => setMode('manual')} className={`flex-1 px-3 py-2 rounded font-semibold transition ${mode === 'manual' ? 'bg-accent text-white' : 'text-ink/70 hover:text-ink'}`}>✎ Enter manually</button>
      </div>

      {mode === 'ai' && (
        <>
          <AiPayStubUploader onExtraction={setExtraction} />
          {extraction && <AiPayStubResult extraction={extraction} />}
          {!extraction && (
            <p className="text-xs text-ink/60 mt-2">Prefer to type? Switch to <button type="button" onClick={() => setMode('manual')} className="text-accent underline">Enter manually</button>.</p>
          )}
        </>
      )}

      {mode === 'manual' && <div className="text-sm text-slate-600">Manual entry: <a href="/us/paycheck-calculator" className="text-blue-600 underline">use the paycheck calculator</a>.</div>}
    </div>
  );
}
