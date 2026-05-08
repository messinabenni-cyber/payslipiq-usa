'use client';
import { useCallback, useRef, useState } from 'react';

export interface PayStubExtraction {
  isPayStub: boolean;
  confidence: 'low' | 'medium' | 'high';
  payPeriod?: { start: string | null; end: string | null; payDate: string | null; frequency: string };
  employee?: { stateCode: string | null; filingStatusGuess: string };
  pay?: { grossPay: number | null; regularPay: number | null; overtimePay: number | null; bonus: number | null; commission: number | null; tips: number | null; netPay: number | null };
  taxes?: { federalIncomeTax: number | null; stateIncomeTax: number | null; localIncomeTax: number | null; socialSecurity: number | null; medicare: number | null; additionalMedicare: number | null };
  benefits?: { pretax401k: number | null; rothContribution: number | null; hsa: number | null; fsa: number | null; healthInsurance: number | null; dentalVision: number | null };
  otherDeductions?: { garnishment: number | null; childSupport: number | null; unionDues: number | null; other: number | null };
  ytd?: { grossWages: number | null; federalWithheld: number | null; socialSecurity: number | null; medicare: number | null; stateWithheld: number | null };
  explanation: string;
  flags: { line: string; severity: 'check' | 'normal' | 'uncertain'; note: string }[];
  unreadable: string[];
  identifiersDetected: string[];
  askPayrollDraft: string;
}

interface Props {
  onExtraction: (e: PayStubExtraction) => void;
  label?: string;
}

export function AiPayStubUploader({ onExtraction, label = 'Upload a pay stub image' }: Props) {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'analyzing' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (file: File) => {
    if (!acceptedPrivacy) { setStatus('error'); setErrorMsg('Please confirm you have removed sensitive identifiers before uploading.'); return; }
    if (file.size > 6 * 1024 * 1024) { setStatus('error'); setErrorMsg('File too large, max 6 MB.'); return; }
    if (!file.type.startsWith('image/')) { setStatus('error'); setErrorMsg('Please upload an image file (PNG, JPG, WEBP).'); return; }

    setStatus('uploading'); setErrorMsg('');
    const reader = new FileReader();
    reader.onload = e => { if (e.target?.result) setPreviewSrc(e.target.result as string); };
    reader.readAsDataURL(file);

    setStatus('analyzing');
    const fd = new FormData();
    fd.append('file', file);
    try {
      const res = await fetch('/api/analyze-paystub/', { method: 'POST', body: fd });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus('error');
        setErrorMsg(json.error === 'ai_provider_not_configured' || json.manualFallback
          ? 'AI extraction is not available right now, switch to Manual entry below.'
          : (json.detail ?? json.error ?? 'Could not extract this image. Please try a clearer photo or use manual entry.'));
        return;
      }
      setStatus('done');
      onExtraction(json.extraction as PayStubExtraction);
    } catch {
      setStatus('error'); setErrorMsg('Network error. Please try again or use manual entry.');
    }
  }, [acceptedPrivacy, onExtraction]);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  return (
    <div className="bg-white border border-line rounded-md p-5 my-4">
      <h3 className="font-semibold text-base mb-2">{label}</h3>

      <div className="bg-amber-50 border-l-4 border-warn px-4 py-3 my-3 text-[13px] leading-relaxed text-amber-900">
        <strong>Before uploading:</strong> remove or cover your <strong>Social Security number, bank account / routing numbers, home address, employee ID, employer reference numbers, QR codes, and barcodes</strong>. PayslipIQ does not need any of those to explain a pay stub. Uploaded images are analyzed by an AI vision model and not used to train models. Treat anything you upload as if it could be retained.
      </div>

      <label className="flex items-start gap-2 text-sm mb-3">
        <input type="checkbox" checked={acceptedPrivacy} onChange={e => setAcceptedPrivacy(e.target.checked)} className="mt-0.5" />
        <span>I have removed my Social Security number, bank details, address, and any personal identifiers from this image. I understand PayslipIQ is educational only, not tax, legal, payroll, or financial advice.</span>
      </label>

      <div
        onDragOver={e => e.preventDefault()}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer transition ${acceptedPrivacy ? 'border-accent/40 hover:border-accent bg-cyan-50/30' : 'border-line bg-paper'}`}
        role="button"
        aria-disabled={!acceptedPrivacy}
        tabIndex={0}
      >
        {previewSrc ? (
          <img src={previewSrc} alt="Pay stub preview" className="max-h-64 mx-auto rounded border border-line" />
        ) : (
          <>
            <p className="text-sm font-semibold mb-1">Drag your pay stub here, or click to choose</p>
            <p className="text-xs text-ink/60">PNG, JPG, WEBP, GIF. Up to 6 MB.</p>
          </>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
        disabled={!acceptedPrivacy}
      />

      {status === 'analyzing' && <p className="text-sm text-accent mt-3">Analyzing your pay stub... this usually takes 5-15 seconds.</p>}
      {status === 'error' && <p className="text-sm text-warn mt-3">{errorMsg}</p>}
      {status === 'done' && <p className="text-sm text-ok mt-3">Done, see the breakdown below.</p>}
    </div>
  );
}
