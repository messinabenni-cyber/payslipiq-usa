// PayslipIQ. Confidence framework.
// Every numeric output (calculator, checker, comparison) must surface ONE of:
//   - higher  (most/all required signals present + user-confirmed)
//   - medium  (core signals present, secondary signals missing)
//   - lower   (core signals missing or inferred, output is illustrative)
// Wording is deliberately educational. Never "verified", "accurate", "certified".

export type ConfidenceTier = 'higher' | 'medium' | 'lower';

export interface ConfidenceSignal {
  // Stable id so we can A/B which signals correlate with downstream user action.
  id: string;
  // Short label shown on the badge popover (≤6 words).
  label: string;
  // Did the input/check pass? Falsy = signal absent.
  present: boolean;
  // Optional weight (default 1). Reserved for future weighted scoring.
  weight?: number;
}

export interface ConfidenceResult {
  tier: ConfidenceTier;
  score: number;        // 0..1 ratio of present-signals/total-signals (weighted)
  total: number;        // total signals considered
  passed: number;       // signals passed
  missing: ConfidenceSignal[];
  rationale: string;    // one-line explanation surfaced in the result body
}

/** Compute a confidence tier from a list of signals.
 * Thresholds are tuned for "feels honest" rather than statistical accuracy:
 *  - higher: ≥85% of signals present
 *  - medium: 60-84%
 *  - lower : <60%
 */
export function scoreConfidence(signals: ConfidenceSignal[]): ConfidenceResult {
  const total = signals.reduce((a, s) => a + (s.weight ?? 1), 0);
  const passed = signals.reduce((a, s) => a + (s.present ? (s.weight ?? 1) : 0), 0);
  const score = total === 0 ? 0 : passed / total;
  const missing = signals.filter((s) => !s.present);

  const tier: ConfidenceTier = score >= 0.85 ? 'higher' : score >= 0.6 ? 'medium' : 'lower';

  const rationale = buildRationale(tier, missing);
  return { tier, score, total, passed, missing, rationale };
}

function buildRationale(tier: ConfidenceTier, missing: ConfidenceSignal[]): string {
  const lead =
    tier === 'higher'
      ? 'Higher-confidence educational estimate'
      : tier === 'medium'
      ? 'Medium-confidence educational estimate'
      : 'Lower-confidence educational estimate';

  if (missing.length === 0) {
    return `${lead}: all expected inputs were provided. Your actual paycheck may still differ because employer payroll settings, mid-year W-4 changes, and state allowances are not visible to PayslipIQ.`;
  }

  const top = missing.slice(0, 3).map((m) => m.label).join(', ');
  const more = missing.length > 3 ? `, and ${missing.length - 3} more` : '';

  return `${lead}: missing ${top}${more}. With those inputs the result would be more reliable. Your actual paycheck may differ.`;
}

/** Standard signals for the Pay Stub Checker. Pass a subset that applies to the form. */
export const CHECKER_SIGNAL_SPECS: { id: string; label: string }[] = [
  { id: 'gross_pay', label: 'gross pay for the period' },
  { id: 'pay_frequency', label: 'pay frequency' },
  { id: 'state', label: 'work state' },
  { id: 'filing_status', label: 'W-4 filing status' },
  { id: 'federal_withheld', label: 'federal income tax withheld' },
  { id: 'social_security', label: 'Social Security withheld' },
  { id: 'medicare', label: 'Medicare withheld' },
  { id: 'state_tax_or_no_tax', label: 'state tax (or confirmed no-tax state)' },
  { id: 'pretax_deductions', label: 'pre-tax deductions (401k / HSA / health)' },
  { id: 'ytd_gross', label: 'year-to-date gross wages' },
  { id: 'ytd_ss', label: 'year-to-date Social Security wages' },
  { id: 'net_pay', label: 'net pay for the period' },
  { id: 'user_confirmed', label: 'user-confirmed extracted figures' }
];

/** Visual badge component. Drop into result panes. */
export function ConfidenceBadge({ result, className = '' }: { result: ConfidenceResult; className?: string }) {
  const tone =
    result.tier === 'higher'
      ? { dot: 'bg-ok', text: 'text-emerald-900', bg: 'bg-emerald-50', border: 'border-emerald-200', label: 'Higher confidence' }
      : result.tier === 'medium'
      ? { dot: 'bg-warn', text: 'text-amber-900', bg: 'bg-amber-50', border: 'border-amber-200', label: 'Medium confidence' }
      : { dot: 'bg-warn', text: 'text-rose-900', bg: 'bg-rose-50', border: 'border-rose-200', label: 'Lower confidence' };

  const pct = Math.round(result.score * 100);

  return (
    <aside
      className={`rounded-md border ${tone.border} ${tone.bg} px-4 py-3 my-4 text-[13px] leading-relaxed ${tone.text} ${className}`}
      role="note"
      aria-label="Confidence rating"
    >
      <div className="flex items-center gap-2 font-semibold">
        <span className={`inline-block w-2 h-2 rounded-full ${tone.dot}`} aria-hidden />
        <span>{tone.label}</span>
        <span className="ml-auto text-[12px] tabular-nums opacity-70">
          {result.passed}/{result.total} signals · {pct}%
        </span>
      </div>
      <p className="mt-1">{result.rationale}</p>
      {result.missing.length > 0 && (
        <details className="mt-2">
          <summary className="cursor-pointer text-[12px] underline opacity-80">What would raise confidence</summary>
          <ul className="mt-1 list-disc pl-5 text-[12px] opacity-90">
            {result.missing.map((m) => (
              <li key={m.id}>{m.label}</li>
            ))}
          </ul>
        </details>
      )}
      <p className="mt-2 text-[11px] opacity-70">
        Educational estimate only. Not tax, legal, payroll, accounting, employment, credit, or financial advice.
      </p>
    </aside>
  );
}

/** Convenience: build signals from a flat dict of present/absent values. */
export function signalsFromState(state: Record<string, unknown>): ConfidenceSignal[] {
  return CHECKER_SIGNAL_SPECS.map((spec) => ({
    id: spec.id,
    label: spec.label,
    present: Boolean(state[spec.id])
  }));
}
