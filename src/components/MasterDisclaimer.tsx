import React from 'react';

export type DisclaimerVariant = 'long' | 'short' | 'ai' | 'footer';

const COPY: Record<DisclaimerVariant, string> = {
  long:
    'PayslipIQ provides educational information and estimated calculations only. ' +
    'It does not provide tax, legal, financial, accounting, employment, benefits, ' +
    'or payroll advice. PayslipIQ is not a CPA firm, law firm, financial advisor, ' +
    'payroll provider, or tax authority. Always verify your paycheck, deductions, ' +
    "withholdings, and tax position with your employer's payroll department, a " +
    'qualified CPA, the IRS, your state tax authority, or another appropriately ' +
    'qualified professional. Calculations are estimates; your actual paycheck may ' +
    'differ based on factors specific to your employer, location, benefits ' +
    'elections, and personal tax situation.',
  short:
    'Educational only, not tax, legal, financial, or payroll advice. Verify with ' +
    'your payroll team, a CPA, the IRS, or your state tax authority.',
  ai:
    'Estimate only, not advice. AI may misread unusual pay stubs or lag recent ' +
    'rule changes. Always verify with your payroll department, a qualified CPA, ' +
    'the IRS, or your state tax authority.',
  footer:
    'PayslipIQ is built for the United States. Educational guidance only. Not tax, ' +
    'legal, financial, accounting, employment, benefits, or payroll advice.',
};

interface Props {
  variant?: DisclaimerVariant;
  className?: string;
}

export function MasterDisclaimer({ variant = 'short', className = '' }: Props) {
  const text = COPY[variant];
  const baseClass =
    variant === 'long'
      ? 'rounded-md border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700'
      : variant === 'ai'
      ? 'mt-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900'
      : variant === 'footer'
      ? 'text-xs text-slate-500 leading-relaxed'
      : 'text-xs text-slate-600 leading-relaxed';

  return (
    <p className={`${baseClass} ${className}`} role="note" aria-label="Disclaimer">
      {text}
    </p>
  );
}

export function withAIDisclaimer(aiOutput: string): string {
  if (aiOutput.includes(COPY.ai)) return aiOutput;
  return `${aiOutput.trim()}\n\n${COPY.ai}`;
}
