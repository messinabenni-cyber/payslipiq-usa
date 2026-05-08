// Minimal helpers needed by the AI components.
// Trimmed copy of the workspace's PageBlocks.tsx, with only ToolWarning ported.

export function ToolWarning({ kind = 'no-error' }: { kind?: 'no-error' | 'estimate' | 'upload' }) {
  const text = kind === 'no-error'
    ? 'This tool cannot confirm whether your employer made an error. Flags mean a question is worth asking, not a confirmed mistake. No outcome, refund, or correction is guaranteed.'
    : kind === 'estimate'
    ? 'Estimates only, your actual paycheck may differ. Tax and payroll rules vary by state, city, employer, and individual situation. Verify with your payroll team or a qualified professional before relying on a number.'
    : 'Remove your Social Security number, bank details, and personal identifiers before uploading any pay stub.';
  return (
    <aside className="border-l-4 border-yellow-400 bg-amber-50 px-4 py-3 my-4 text-[13px] leading-relaxed text-amber-900" role="note">
      <strong className="font-semibold">Important:</strong> {text}
    </aside>
  );
}
