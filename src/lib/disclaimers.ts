// Layered disclaimer system. Use these constants, never inline.
// Updated for v2 rebuild: adds FCRA / consumer-reporting boundary,
// non-screening clause, and reinforced no-guarantee language.

export const DISCLAIMERS = {
  short:
    'Educational guidance only. Not tax, legal, payroll, accounting, HR, employment, credit, or financial advice.',

  full:
    'PayslipIQ USA provides educational guidance only. It is not legal, tax, accounting, payroll, ' +
    'employment, credit, financial, or consumer reporting advice. Results are estimates based on the ' +
    'information you enter or upload and may be incomplete, outdated, or inaccurate. PayslipIQ USA ' +
    'does not verify income, certify payroll accuracy, determine legal violations, or confirm that ' +
    'money is owed. PayslipIQ is independent and not affiliated with the IRS, SSA, U.S. Department ' +
    'of Labor, any state tax agency, employer, or payroll provider. Always confirm with your ' +
    'employer, payroll department, the IRS, your state labor or revenue agency, a CPA, attorney, or ' +
    'another qualified professional before acting.',

  fcra:
    'PayslipIQ USA is not a consumer reporting agency. PayslipIQ USA must not be used for ' +
    'employment screening, tenant screening, lending, insurance, credit, immigration, benefits ' +
    'eligibility, or any decision affecting a person\'s legal rights. Outputs are educational ' +
    'estimates and explanations only, they are not consumer reports under the Fair Credit ' +
    'Reporting Act (FCRA) or any analogous state law.',

  calculation:
    'Paycheck estimates may vary because of W-4 settings, filing status, dependents, multiple jobs, ' +
    'state tax, local tax, pre-tax deductions, post-tax deductions, benefits, employer payroll ' +
    'settings, pay frequency, bonuses, overtime, commissions, tips, garnishments, and other ' +
    'individual factors. Use this as a starting point, not a final answer.',

  upload:
    'If you upload a pay stub image or document, text extraction may misread figures. Always check ' +
    'extracted numbers before relying on any explanation. Remove or cover information you do not ' +
    'want processed before uploading.',

  noGuarantee:
    'PayslipIQ cannot confirm that your employer made a mistake, that tax was over-withheld, that ' +
    'money is owed, or that you are entitled to a refund. A flag means "worth a question", it ' +
    'does not prove an error.',

  privacy:
    'Pay stubs contain sensitive information. Before uploading, cover or crop your full Social ' +
    'Security number, bank details, address, employee ID, employer reference numbers, QR codes, ' +
    'barcodes, and any personal identifiers.',

  state:
    'State and local rules can change the result. Confirm with your state revenue or labor agency.',

  taxYear: (year: number, lastVerified: string) =>
    `Figures reflect tax year ${year}. Last verified ${lastVerified}. Rules and limits may change.`
} as const;

export const NEXT_STEPS = {
  askPayroll:
    'If something on your pay stub looks off, ask your payroll department for an itemized breakdown ' +
    'and the source of each deduction.',
  verifyW4:
    'Compare what you submitted on your most recent Form W-4 against the federal withholding on this ' +
    'pay stub.',
  consultProfessional:
    'For tax, legal, or financial decisions that affect your income or filing, speak with a CPA, ' +
    'enrolled agent, tax preparer, or attorney licensed in your state.',
  contactStateAgency:
    'For state-specific rules, contact your state revenue or labor agency directly.',
  contactDOL:
    'For federal wage and hour questions, the U.S. Department of Labor Wage and Hour Division is ' +
    'the primary resource.'
} as const;
