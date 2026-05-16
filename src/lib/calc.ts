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

export type FilingStatus = 'single' | 'mfj' | 'mfs' | 'hoh';
export type PayFrequency = 'weekly' | 'biweekly' | 'semimonthly' | 'monthly' | 'annual';

const PAY_PERIODS: Record<PayFrequency, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
  annual: 1,
};

// 2026 standard deductions (verify with IRS Pub 15-T annually)
const STANDARD_DEDUCTION = {
  single: 15000,
  mfj: 30000,
  mfs: 15000,
  hoh: 22500,
};

// Simplified 2026 federal income tax brackets (single & MFJ shown; verify yearly).
const FEDERAL_BRACKETS_SINGLE: [number, number][] = [
  [11925, 0.10],
  [48475, 0.12],
  [103350, 0.22],
  [197300, 0.24],
  [250525, 0.32],
  [626350, 0.35],
  [Number.POSITIVE_INFINITY, 0.37],
];

const FEDERAL_BRACKETS_MFJ: [number, number][] = [
  [23850, 0.10],
  [96950, 0.12],
  [206700, 0.22],
  [394600, 0.24],
  [501050, 0.32],
  [751600, 0.35],
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

  const netPerPeriod = grossPerPeriod - preTaxPP - postTaxPP - federalTaxPerPeriod - stateTaxPerPeriod - ficaPerPeriod;

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
    preTaxDeductionsPerPeriod: round2(preTaxPP),
    postTaxDeductionsPerPeriod: round2(postTaxPP),
    netPerPeriod: round2(netPerPeriod),
    netAnnual: round2(netPerPeriod * periods),
  };
}

function round2(n: number): number { return Math.round(n * 100) / 100; }

export const formatUSD = (n: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
