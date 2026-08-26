// PayslipIQ USA - Local (city/county) income-tax estimator rates.
// Educational only. Not advice. Shared by LocalTaxCalculator and take-home tools.
// Verified 2026-05-06 against the sources named in each row.
// NYC uses the published top resident marginal rate as a conservative estimate,
// not a full NYC bracket table. Yonkers is approximated as ~1% of wages
// (true rule is 16.75% of NYS tax). Enterable rates default to a typical midpoint.

export type LocalKind =
  | 'none'
  | 'nyc'
  | 'yonkers'
  | 'paeit'
  | 'oh-rita'
  | 'md-county'
  | 'wilmington'
  | 'kc'
  | 'stl'
  | 'in-county'
  | 'mi-city'
  | 'custom';

export interface Locality {
  id: LocalKind;
  label: string;
  rate: number;
  inputRate: boolean;
  notes: string;
}

export const LOCAL_TAX_OPTIONS: Locality[] = [
  { id: 'none', label: 'No local tax', rate: 0, inputRate: false, notes: '' },
  { id: 'nyc', label: 'New York City resident', rate: 0.03876, inputRate: false, notes: 'NYC resident income tax (top marginal). Nonresidents who work in NYC do not pay this.' },
  { id: 'yonkers', label: 'Yonkers (NY) resident', rate: 0.01, inputRate: true, notes: 'The true Yonkers resident surcharge is 16.75% of NYS personal income tax liability (NYS Pub NYS-50-T-Y). For a mid-income worker that works out to roughly 1% of taxable wages. Override if your NYS effective rate is different.' },
  { id: 'paeit', label: 'PA EIT municipality', rate: 0.01, inputRate: true, notes: 'PA Earned Income Tax under Act 32. Rate varies by municipality and school district (commonly 1-3.5%). Enter your actual EIT rate.' },
  { id: 'oh-rita', label: 'Ohio RITA / CCA city', rate: 0.025, inputRate: true, notes: 'Ohio municipal income tax via RITA or CCA. Rates commonly 1-3%. Enter your city rate.' },
  { id: 'md-county', label: 'Maryland county piggyback', rate: 0.0275, inputRate: true, notes: 'MD county income tax piggyback (2.25-3.2% range). Defaults to mid-range; enter actual.' },
  { id: 'wilmington', label: 'Wilmington, DE', rate: 0.0125, inputRate: false, notes: 'Wilmington City Wage Tax 1.25% on wages earned in Wilmington.' },
  { id: 'kc', label: 'Kansas City, MO earnings tax', rate: 0.01, inputRate: false, notes: '1% earnings tax on residents and on wages earned in KC by nonresidents.' },
  { id: 'stl', label: 'St. Louis, MO earnings tax', rate: 0.01, inputRate: false, notes: '1% earnings tax on residents and on wages earned in STL by nonresidents.' },
  { id: 'in-county', label: 'Indiana county tax', rate: 0.0175, inputRate: true, notes: 'IN county income tax (0.35-3.38% range). Defaults to typical; enter actual.' },
  { id: 'mi-city', label: 'Michigan city (Detroit etc.)', rate: 0.024, inputRate: true, notes: 'Detroit resident 2.4%, nonresident 1.2%. Many MI cities have lower rates.' },
  { id: 'custom', label: 'Other / custom rate', rate: 0.01, inputRate: true, notes: 'Enter your local rate as a percent.' },
];

export function getLocality(id: LocalKind): Locality {
  return LOCAL_TAX_OPTIONS.find((l) => l.id === id) ?? LOCAL_TAX_OPTIONS[0];
}

/** overridePercent is e.g. 2.4 meaning 2.4%. */
export function localRateFor(id: LocalKind, overridePercent?: number): number {
  const loc = getLocality(id);
  if (loc.id === 'none') return 0;
  if (loc.inputRate && typeof overridePercent === 'number' && Number.isFinite(overridePercent)) {
    return Math.max(0, overridePercent / 100);
  }
  return loc.rate;
}

export function localTaxOnWages(wages: number, id: LocalKind, overridePercent?: number): {
  label: string;
  rate: number;
  amount: number;
} {
  const loc = getLocality(id);
  const rate = localRateFor(id, overridePercent);
  const amount = Math.round(wages * rate * 100) / 100;
  return { label: loc.id === 'none' ? '' : loc.label, rate, amount };
}
