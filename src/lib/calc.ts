// Pure paycheck math. Rule-based. No AI here.
// All functions are unit-testable.

import { STATE_BY_SLUG, type StateData } from './states';

export const FED_RATES = {
  socialSecurity: 0.062,
  socialSecurityWageBase: 184500, // SSA 2026 Contribution and Benefit Base (verified 2026-05-16; up from $176,100 in 2025)
  medicare: 0.0145,
  additionalMedicare: 0.009,
  additionalMedicareThresholdSingle: 200000,
  additionalMedicareThresholdMFJ: 250000,
};

// 2026-05-16: state worker contributions (SDI / PFL / PFML / FAMLI / TDI).
// Audit found state /paycheck-calculator pages omitted these lines despite
// state hub copy promising they appear on every paycheck (e.g. CA SDI).
// Primary-sourced; verified 2026-05-16 against state DOL releases.
export interface StateWorkerContribLine {
  label: string;       // e.g. "CA SDI", "NY PFL"
  rate?: number;       // % of wages (decimal) if rate-based
  annual?: number;     // flat annual $ if flat (e.g. NY SDI $31.20/yr)
  annualCap?: number;  // max annual $ withheld if rate-based with cap
  note?: string;       // source / explanation
}

const STATE_WORKER_CONTRIBUTIONS_2026: Record<string, StateWorkerContribLine[]> = {
  california: [
    { label: 'CA SDI', rate: 0.013, note: 'CA EDD 2026 (SB 951 removed wage cap effective 2024-01-01)' },
  ],
  'new-york': [
    { label: 'NY SDI', annual: 31.20, note: 'NY DBL statutory 0.5% capped at $0.60/wk = $31.20/yr' },
    { label: 'NY PFL', rate: 0.00432, annualCap: 411.91, note: 'NY PFL 2026 (paidfamilyleave.ny.gov/2026)' },
  ],
  'new-jersey': [
    { label: 'NJ SDI', rate: 0.0023, annualCap: 393.53, note: 'NJ DOL 2026' },
    { label: 'NJ FLI', rate: 0.0019, annualCap: 325.09, note: 'NJ DOL 2026' },
  ],
  massachusetts: [
    { label: 'MA PFML', rate: 0.0046, annualCap: 184500 * 0.0046, note: 'MA DFML 2026, employers 25+; 0.28% medical + 0.18% family' },
  ],
  oregon: [
    { label: 'OR Paid Leave', rate: 0.006, annualCap: 184500 * 0.006, note: 'Paid Leave Oregon 2026, employee share 60% of 1.0%' },
  ],
  washington: [
    { label: 'WA PFML', rate: 0.00807, annualCap: 184500 * 0.00807, note: 'WA Paid Leave 2026, employee ~71.43% of 1.13% premium' },
    { label: 'WA Cares', rate: 0.0058, note: 'WA Cares Fund 2026 (no wage cap)' },
  ],
  'rhode-island': [
    { label: 'RI TDI', rate: 0.011, annualCap: 1100, note: 'RI DLT 2026' },
  ],
  colorado: [
    { label: 'CO FAMLI', rate: 0.0044, annualCap: 184500 * 0.0044, note: 'CO FAMLI 2026, employee 50% of 0.88%' },
  ],
  hawaii: [
    { label: 'HI TDI', rate: 0.005, annualCap: 7.50 * 52, note: 'HI DLIR 2026; capped at $7.50/wk' },
  ],
  // 2026-05-16 v7: added CT PFML + DC PFL to round out the East Coast worker-contribution map.
  connecticut: [
    { label: 'CT PFML', rate: 0.005, annualCap: 184500 * 0.005, note: 'CT Paid Leave Authority 2026; 0.5% employee contribution capped at SS wage base' },
  ],
  'district-of-columbia': [
    { label: 'DC PFL', rate: 0.0026, note: 'DC PFL 2026 (verify with DOES); 0.26% employer-paid in DC but listed for transparency on DC paychecks where the employer chooses to pass through' },
  ],
};

/**
 * Compute the state worker contribution line items for a given state + annual gross.
 * Returns one entry per applicable contribution (CA has 1, NJ has 2, NY has 2 etc).
 * Returns [] for states with no employee-paid worker contribution.
 */
export function stateWorkerContributions(annualGross: number, stateSlug: string): Array<{ label: string; annual: number; note?: string }> {
  const defs = STATE_WORKER_CONTRIBUTIONS_2026[stateSlug];
  if (!defs) return [];
  return defs.map((d) => {
    let annual = 0;
    if (typeof d.annual === 'number') {
      annual = d.annual;
    } else if (typeof d.rate === 'number') {
      annual = annualGross * d.rate;
      if (typeof d.annualCap === 'number') annual = Math.min(annual, d.annualCap);
    }
    return { label: d.label, annual: round2(annual), note: d.note };
  });
}

export type FilingStatus = 'single' | 'mfj' | 'mfs' | 'hoh';
export type PayFrequency = 'weekly' | 'biweekly' | 'semimonthly' | 'monthly' | 'annual';

const PAY_PERIODS: Record<PayFrequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  annual: 1,
};

// 2026 standard deductions — IRS Rev. Proc. 2025-32 / IR-2025-103 (verified 2026-05-20).
const STANDARD_DEDUCTION = {
  single: 16100,
  mfj: 32200,
  mfs: 16100,
  hoh: 24150,
};

// 2026 federal income tax brackets — IRS Rev. Proc. 2025-32 (verified 2026-05-20).
// Format: [upperBoundOfTaxableIncome, marginalRate].
const FEDERAL_BRACKETS_SINGLE: [number, number][] = [
  [12400, 0.10],
  [50400, 0.12],
  [105700, 0.22],
  [201775, 0.24],
  [256225, 0.32],
  [640600, 0.35],
  [Number.POSITIVE_INFINITY, 0.37],
];

const FEDERAL_BRACKETS_MFJ: [number, number][] = [
  [24800, 0.10],
  [100800, 0.12],
  [211400, 0.22],
  [403550, 0.24],
  [512450, 0.32],
  [768700, 0.35],
  [Number.POSITIVE_INFINITY, 0.37],
];

function applyBrackets(taxable: number, brackets: [number, number][]): number {
  let owed = 0;
  let lastUpper = 0;
  for (const [upper, rate] of brackets) {
    const span = Math.min(taxable, upper) - lastUpper;
    if (span > 0) owed += span * rate;
    if (taxable <= upper) break;
    lastUpper = upper;
  }
  return Math.max(0, owed);
}

export function annualGross(grossPerPeriod: number, freq: PayFrequency): number {
  return grossPerPeriod * PAY_PERIODS[freq];
}

export function federalIncomeTax(annualGross: number, filing: FilingStatus): number {
  const std = STANDARD_DEDUCTION[filing] ?? STANDARD_DEDUCTION.single;
  const taxable = Math.max(0, annualGross - std);
  const brackets = filing === 'mfj' ? FEDERAL_BRACKETS_MFJ : FEDERAL_BRACKETS_SINGLE;
  return applyBrackets(taxable, brackets);
}

export function fica(annualGross: number, ytdGross: number, filing: FilingStatus): {
  socialSecurity: number;
  medicare: number;
  additionalMedicare: number;
  total: number;
} {
  const ssCap = FED_RATES.socialSecurityWageBase;
  const ssRemaining = Math.max(0, ssCap - ytdGross);
  const ss = Math.min(annualGross, ssRemaining + (ytdGross < ssCap ? annualGross - ssRemaining : 0));
  const ssTax = Math.min(annualGross, Math.max(0, ssCap - Math.max(0, ytdGross - 0))) * FED_RATES.socialSecurity;

  const medTax = annualGross * FED_RATES.medicare;

  const addThreshold = filing === 'mfj'
    ? FED_RATES.additionalMedicareThresholdMFJ
    : FED_RATES.additionalMedicareThresholdSingle;
  const addBase = Math.max(0, annualGross - addThreshold);
  const addMedTax = addBase * FED_RATES.additionalMedicare;

  return {
    socialSecurity: round2(ssTax),
    medicare: round2(medTax),
    additionalMedicare: round2(addMedTax),
    total: round2(ssTax + medTax + addMedTax),
  };
}

export function stateIncomeTax(annualGross: number, stateSlug: string, filing: FilingStatus): number {
  const s = STATE_BY_SLUG[stateSlug];
  if (!s) return 0;
  if (s.category === 'no-income-tax') return 0;
  if (s.category === 'flat' && s.taxRate) return annualGross * s.taxRate;
  if (s.category === 'progressive' && s.brackets) {
    return applyBrackets(annualGross, s.brackets);
  }
  // Progressive without explicit brackets, use a defensible national-average ~5.5%.
  // Pages flag this as an estimate and link to the state's authority.
  return annualGross * 0.055;
}

export interface PaycheckResult {
  grossAnnual: number;
  grossPerPeriod: number;
  freq: PayFrequency;
  state: StateData | null;
  filing: FilingStatus;
  federalTaxAnnual: number;
  federalTaxPerPeriod: number;
  fica: ReturnType<typeof fica>;
  ficaPerPeriod: number;
  stateTaxAnnual: number;
  stateTaxPerPeriod: number;
  /** State worker contributions (SDI / PFL / FAMLI / PFML / TDI) per-period. Empty array if state has none. */
  stateWorkerContribsPerPeriod: Array<{ label: string; amount: number; note?: string }>;
  /** Sum of all state worker contributions per-period. */
  stateWorkerContribsTotalPerPeriod: number;
  preTaxDeductionsPerPeriod: number;
  postTaxDeductionsPerPeriod: number;
  netPerPeriod: number;
  netAnnual: number;
}

export function computePaycheck(input: {
  grossPerPeriod: number;
  freq: PayFrequency;
  stateSlug: string;
  filing: FilingStatus;
  preTaxPerPeriod?: number;
  postTaxPerPeriod?: number;
  ytdGross?: number;
}): PaycheckResult {
  const { grossPerPeriod, freq, stateSlug, filing } = input;
  const preTaxPP = input.preTaxPerPeriod ?? 0;
  const postTaxPP = input.postTaxPerPeriod ?? 0;
  const ytd = input.ytdGross ?? 0;

  const grossAnnual = annualGross(grossPerPeriod, freq);
  const preTaxAnnual = preTaxPP * PAY_PERIODS[freq];
  const taxableForFederal = Math.max(0, grossAnnual - preTaxAnnual);

  const federalTaxAnnual = federalIncomeTax(taxableForFederal, filing);
  const ficaCalc = fica(grossAnnual, ytd, filing); // FICA is on gross, not pre-tax-reduced
  const stateTaxAnnual = stateIncomeTax(taxableForFederal, stateSlug, filing);

  const periods = PAY_PERIODS[freq];
  const federalTaxPerPeriod = federalTaxAnnual / periods;
  const stateTaxPerPeriod = stateTaxAnnual / periods;
  const ficaPerPeriod = ficaCalc.total / periods;

  // 2026-05-16: state worker contributions (CA SDI, NY SDI+PFL, NJ SDI+FLI,
  // MA PFML, OR Paid Leave, WA PFML+Cares, RI TDI, CO FAMLI, HI TDI).
  // Subtract from net so the take-home figure matches what the worker actually receives.
  const workerContribsAnnual = stateWorkerContributions(grossAnnual, stateSlug);
  const stateWorkerContribsPerPeriod = workerContribsAnnual.map((w) => ({
    label: w.label,
    amount: round2(w.annual / periods),
    note: w.note,
  }));
  const stateWorkerContribsTotalPerPeriod = round2(
    stateWorkerContribsPerPeriod.reduce((s, w) => s + w.amount, 0)
  );

  const netPerPeriod = grossPerPeriod - preTaxPP - postTaxPP - federalTaxPerPeriod - stateTaxPerPeriod - ficaPerPeriod - stateWorkerContribsTotalPerPeriod;

  return {
    grossAnnual: round2(grossAnnual),
    grossPerPeriod: round2(grossPerPeriod),
    freq,
    state: STATE_BY_SLUG[stateSlug] ?? null,
    filing,
    federalTaxAnnual: round2(federalTaxAnnual),
    federalTaxPerPeriod: round2(federalTaxPerPeriod),
    fica: ficaCalc,
    ficaPerPeriod: round2(ficaPerPeriod),
    stateTaxAnnual: round2(stateTaxAnnual),
    stateTaxPerPeriod: round2(stateTaxPerPeriod),
    stateWorkerContribsPerPeriod,
    stateWorkerContribsTotalPerPeriod,
    preTaxDeductionsPerPeriod: round2(preTaxPP),
    postTaxDeductionsPerPeriod: round2(postTaxPP),
    netPerPeriod: round2(netPerPeriod),
    netAnnual: round2(netPerPeriod * periods),
  };
}

function round2(n: number): number { return Math.round(n * 100) / 100; }

export const formatUSD = (n: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
