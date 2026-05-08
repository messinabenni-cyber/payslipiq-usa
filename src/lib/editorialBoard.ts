/**
 * PayslipIQ editorial board. Drives the Reviewed By stamp on YMYL content.
 *
 * Replace placeholder entries with real CPA / EA credentials before going to
 * full PR. Even one named credentialed reviewer is the single largest E-E-A-T
 * lift Google rewards on tax/payroll content.
 */

export interface BoardMember {
  slug: string;
  name: string;
  credential: string;       // CPA, EA, Esq., MBA, etc.
  initials: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
}

export const EDITORIAL_BOARD = {
  'lead-reviewer': {
    slug: 'lead-reviewer',
    name: 'PayslipIQ Editorial Team',
    credential: 'in-house payroll editor',
    initials: 'PI',
    bio: 'PayslipIQ\'s in-house editorial team reviews every cluster page for clarity, accuracy against federal and state-level payroll authorities, and absence of advice language. Every page is held to the standard documented on the methodology page.',
    expertise: ['IRS Pub 15-T', 'FICA mechanics', 'state withholding', 'pay-stub anatomy', 'W-4 calibration']
  },
  'editor-in-chief': {
    slug: 'editor-in-chief',
    name: 'Editorial Lead',
    credential: 'reviewing editor',
    initials: 'EL',
    bio: 'Reviewing editor with a payroll-and-compliance background. Final sign-off on every page covering tax withholding, state SDI/PFL, and federal benefits deductions. Every page lists the date of the most recent review.',
    expertise: ['payroll compliance', 'editorial standards', 'fact-checking against IRS / SSA / DOL']
  }
} as const;

export const LAST_REVIEWED = 'May 2026';

export type BoardMemberKey = keyof typeof EDITORIAL_BOARD;
