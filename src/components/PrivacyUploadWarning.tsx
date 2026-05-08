import { DISCLAIMERS } from '@/lib/disclaimers';

export function PrivacyUploadWarning() {
  return (
    <section
      role="note"
      aria-label="Upload privacy notice"
      className="rounded-xl border border-warn/30 bg-warn-soft px-5 py-5 my-6"
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-amber-200 text-amber-900 shrink-0" aria-hidden>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </span>
        <div className="text-amber-900 text-[14px] leading-relaxed">
          <strong className="font-semibold block">Before you upload, cover or crop these details.</strong>
          <p className="mt-1">{DISCLAIMERS.privacy}</p>
          <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-[13.5px]">
            <li>· Full Social Security number</li>
            <li>· Bank account / routing numbers</li>
            <li>· Home address</li>
            <li>· Employee ID, reference numbers</li>
            <li>· QR codes, barcodes, signatures</li>
            <li>· Any personal identifier</li>
          </ul>
          <p className="mt-3 text-[12.5px] text-amber-800">
            Prefer not to upload? Use manual entry, every field can be typed.
          </p>
        </div>
      </div>
    </section>
  );
}
