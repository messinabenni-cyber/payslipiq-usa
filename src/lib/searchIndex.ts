// On-site search index for PayslipIQ USA.
//
// A static, hand-curated list of the highest-value /us pages (tools + key explainers
// + glossary + state hub). Data-only (no JSX) so it can be imported into the search
// page, future nav, or schema without pulling in React.
//
// Every `url` here has been verified to resolve to a real static route under
// src/app/us/. When adding an entry, confirm the route exists first.

export interface SearchEntry {
  title: string;
  url: string;
  description: string;
  keywords: string[];
}

export const SEARCH_INDEX: SearchEntry[] = [
  // --- Core tools ---
  {
    title: 'Pay Stub Checker',
    url: '/us/pay-stub-checker',
    description: 'Upload or read a pay stub and see what every line means, in plain English.',
    keywords: ['pay stub', 'paystub', 'check', 'read', 'upload', 'analyze', 'tool', 'ai'],
  },
  {
    title: 'Paycheck Calculator',
    url: '/us/paycheck-calculator',
    description: 'Estimate your take-home pay after federal tax, FICA, state tax, and deductions.',
    keywords: ['paycheck', 'calculator', 'take-home', 'net pay', 'estimate', 'withholding'],
  },
  {
    title: 'Salary After Tax',
    url: '/us/salary-after-tax',
    description: 'See what an annual salary works out to after federal, state, and FICA taxes.',
    keywords: ['salary', 'after tax', 'annual', 'take-home', 'net', 'income'],
  },
  {
    title: 'Gross-to-Net Paycheck Calculator',
    url: '/us/gross-to-net-paycheck-calculator',
    description: 'Convert gross pay to net pay step by step, with every deduction itemized.',
    keywords: ['gross to net', 'gross', 'net', 'paycheck', 'calculator', 'deductions'],
  },
  {
    title: 'Hourly Paycheck Calculator',
    url: '/us/hourly-paycheck-calculator',
    description: 'Estimate take-home pay from an hourly rate, including overtime.',
    keywords: ['hourly', 'paycheck', 'calculator', 'wage', 'overtime', 'take-home'],
  },
  {
    title: 'Hourly Worker Paycheck Calculator',
    url: '/us/hourly-worker-paycheck-calculator',
    description: 'A paycheck estimate built for hourly workers with variable hours.',
    keywords: ['hourly worker', 'paycheck', 'calculator', 'wage', 'hours'],
  },
  {
    title: 'Salaried Worker Paycheck Calculator',
    url: '/us/salaried-worker-paycheck-calculator',
    description: 'Estimate take-home pay for a fixed annual salary across pay frequencies.',
    keywords: ['salaried', 'salary', 'paycheck', 'calculator', 'annual', 'take-home'],
  },
  {
    title: 'Bonus Tax Paycheck',
    url: '/us/bonus-tax-paycheck',
    description: 'How bonuses are taxed and why your bonus check looks smaller than expected.',
    keywords: ['bonus', 'supplemental', 'tax', 'paycheck', 'withholding', '22%'],
  },
  {
    title: 'Overtime Paycheck',
    url: '/us/overtime-paycheck',
    description: 'How overtime is calculated and taxed, including daily-overtime states.',
    keywords: ['overtime', 'ot', 'time and a half', 'paycheck', 'flsa', '1.5x'],
  },
  {
    title: 'Hourly to Salary',
    url: '/us/hourly-to-salary',
    description: 'Convert an hourly wage into an equivalent annual salary.',
    keywords: ['hourly to salary', 'convert', 'wage', 'annual', 'salary'],
  },
  {
    title: 'Salary to Hourly',
    url: '/us/salary-to-hourly',
    description: 'Convert an annual salary into an equivalent hourly rate.',
    keywords: ['salary to hourly', 'convert', 'wage', 'rate', 'hourly'],
  },
  {
    title: 'Paycheck Comparison',
    url: '/us/paycheck-comparison',
    description: 'Compare two paychecks side by side to see what changed.',
    keywords: ['compare', 'comparison', 'paycheck', 'side by side', 'difference'],
  },
  {
    title: 'Paycheck Health Score',
    url: '/us/paycheck-health-score',
    description: 'A quick read on whether your paycheck deductions look in range.',
    keywords: ['health score', 'paycheck', 'check', 'score', 'deductions'],
  },
  {
    title: 'Year-to-Date Paycheck Checker',
    url: '/us/year-to-date-paycheck-checker',
    description: 'Verify your YTD totals add up across pay stubs and reconcile to your W-2.',
    keywords: ['ytd', 'year to date', 'checker', 'totals', 'w-2', 'reconcile'],
  },
  {
    title: 'Ask Payroll Generator',
    url: '/us/ask-payroll-generator',
    description: 'Generate a clear, polite question to send your payroll department.',
    keywords: ['ask payroll', 'generator', 'question', 'hr', 'payroll', 'email'],
  },

  // --- FICA / federal taxes ---
  {
    title: 'FICA Explained',
    url: '/us/fica-explained',
    description: 'FICA is the federal payroll tax funding Social Security and Medicare.',
    keywords: ['fica', 'social security', 'medicare', 'payroll tax', 'oasdi', '7.65%'],
  },
  {
    title: 'Social Security Tax',
    url: '/us/social-security-tax',
    description: '6.2% of wages up to the annual wage base, funding Social Security.',
    keywords: ['social security', 'oasdi', 'ss', 'wage base', '6.2%', 'tax'],
  },
  {
    title: 'Medicare Tax',
    url: '/us/medicare-tax',
    description: '1.45% on all wages, funding Medicare hospital insurance.',
    keywords: ['medicare', 'hi', 'tax', '1.45%', 'hospital insurance'],
  },
  {
    title: 'Additional Medicare Tax',
    url: '/us/additional-medicare-tax',
    description: 'A 0.9% surcharge on wages over $200,000 single or $250,000 married.',
    keywords: ['additional medicare', '0.9%', 'surcharge', 'high earner', 'tax'],
  },
  {
    title: 'Federal Tax Withholding',
    url: '/us/federal-tax-withholding',
    description: 'How federal income tax is withheld from your paycheck using your W-4.',
    keywords: ['federal', 'withholding', 'fit', 'income tax', 'w-4', 'pub 15-t'],
  },
  {
    title: 'Supplemental Wage Withholding',
    url: '/us/supplemental-wage-withholding',
    description: 'How bonuses, commissions, and other supplemental wages are withheld.',
    keywords: ['supplemental', 'wages', 'bonus', 'commission', 'withholding', '22%'],
  },

  // --- Forms ---
  {
    title: 'W-4 Guide',
    url: '/us/w4-guide',
    description: 'How to fill out Form W-4 to set your federal withholding.',
    keywords: ['w-4', 'w4', 'form', 'withholding', 'allowances', 'guide'],
  },
  {
    title: 'W-2 Explained',
    url: '/us/w2-explained',
    description: 'What every box on your W-2 means and how to read it.',
    keywords: ['w-2', 'w2', 'form', 'wages', 'boxes', 'annual', 'tax form'],
  },

  // --- State & local tax ---
  {
    title: 'State Tax',
    url: '/us/state-tax',
    description: 'How state income tax withholding works, state by state.',
    keywords: ['state tax', 'state income tax', 'withholding', 'state', 'sit'],
  },
  {
    title: 'Local Paycheck Taxes',
    url: '/us/local-paycheck-taxes',
    description: 'City and county income taxes that come out of your paycheck.',
    keywords: ['local tax', 'city tax', 'county', 'municipal', 'local income tax'],
  },
  {
    title: 'Multi-State Payroll Guide',
    url: '/us/multi-state-payroll-guide',
    description: 'How payroll works when you live in one state and work in another.',
    keywords: ['multi-state', 'multistate', 'reciprocity', 'payroll', 'two states'],
  },
  {
    title: 'Remote Worker State Tax Guide',
    url: '/us/remote-worker-state-tax-guide',
    description: 'State tax rules for remote workers and where you owe tax.',
    keywords: ['remote', 'work from home', 'state tax', 'nexus', 'guide'],
  },
  {
    title: "Why Am I Paying State Tax I Don't Live There",
    url: '/us/why-am-i-paying-state-tax-i-don-t-live-there',
    description: 'Why your paycheck shows tax for a state you do not live in.',
    keywords: ['state tax', "don't live there", 'wrong state', 'nonresident', 'remote'],
  },

  // --- Deductions ---
  {
    title: '401(k) Deductions',
    url: '/us/401k-deductions',
    description: 'How pre-tax and Roth 401(k) contributions show up on your paycheck.',
    keywords: ['401k', '401(k)', 'retirement', 'pre-tax', 'roth', 'deduction'],
  },
  {
    title: '401(k) Contribution Limits',
    url: '/us/401k-contribution-limits',
    description: 'The 2026 annual 401(k) contribution and catch-up limits.',
    keywords: ['401k', 'limits', 'contribution', 'catch-up', '2026', 'max'],
  },
  {
    title: 'Health Insurance Deductions',
    url: '/us/health-insurance-deductions',
    description: 'Pre-tax health, dental, and vision premiums on your pay stub.',
    keywords: ['health insurance', 'premium', 'section 125', 'pre-tax', 'deduction'],
  },
  {
    title: 'HSA & FSA Explained',
    url: '/us/hsa-fsa-explained',
    description: 'How Health Savings Accounts and Flexible Spending Accounts work.',
    keywords: ['hsa', 'fsa', 'health savings', 'flexible spending', 'pre-tax'],
  },
  {
    title: 'HSA vs FSA',
    url: '/us/hsa-vs-fsa',
    description: 'The differences between an HSA and an FSA and which fits you.',
    keywords: ['hsa vs fsa', 'compare', 'health savings', 'flexible spending'],
  },
  {
    title: 'Pre-Tax vs Post-Tax Deductions',
    url: '/us/pre-tax-vs-post-tax-deductions',
    description: 'Which deductions come out before tax and which come out after.',
    keywords: ['pre-tax', 'post-tax', 'after-tax', 'deductions', 'difference'],
  },
  {
    title: 'Pre-Tax vs Roth 401(k)',
    url: '/us/pre-tax-vs-roth-401k',
    description: 'Traditional pre-tax 401(k) versus Roth 401(k), compared.',
    keywords: ['pre-tax', 'roth', '401k', 'traditional', 'compare', 'retirement'],
  },
  {
    title: 'Wage Garnishment Explained',
    url: '/us/wage-garnishment-explained',
    description: 'How court-ordered garnishments come out of your net pay.',
    keywords: ['garnishment', 'wage garnishment', 'child support', 'levy', 'court'],
  },

  // --- Pay concepts ---
  {
    title: 'Gross vs Net Pay',
    url: '/us/gross-vs-net-pay',
    description: 'The difference between gross pay and net take-home pay.',
    keywords: ['gross', 'net', 'gross vs net', 'take-home', 'pay', 'difference'],
  },
  {
    title: 'Take-Home Pay',
    url: '/us/take-home-pay',
    description: 'What take-home pay means and how it is calculated.',
    keywords: ['take-home', 'net pay', 'after tax', 'paycheck', 'home pay'],
  },
  {
    title: 'Pay Stub Anatomy',
    url: '/us/pay-stub-anatomy',
    description: 'A guided tour of every section of a US pay stub.',
    keywords: ['pay stub', 'anatomy', 'sections', 'layout', 'read', 'lines'],
  },
  {
    title: 'Pay Stub Mistakes',
    url: '/us/pay-stub-mistakes',
    description: 'Common pay stub errors and how to spot them.',
    keywords: ['pay stub', 'mistakes', 'errors', 'wrong', 'spot', 'check'],
  },
  {
    title: 'Single vs Married Filing Jointly Paycheck',
    url: '/us/single-vs-married-filing-jointly-paycheck',
    description: 'How your W-4 filing status changes your paycheck withholding.',
    keywords: ['single', 'married', 'filing jointly', 'mfj', 'status', 'w-4'],
  },
  {
    title: 'Biweekly vs Semimonthly Pay',
    url: '/us/biweekly-vs-semimonthly-pay',
    description: 'The difference between biweekly and semimonthly pay schedules.',
    keywords: ['biweekly', 'semimonthly', 'pay frequency', 'schedule', 'paydays'],
  },
  {
    title: 'Final Paycheck Rules',
    url: '/us/final-paycheck-rules',
    description: 'When your final paycheck is due after leaving a job, by state.',
    keywords: ['final paycheck', 'last paycheck', 'quit', 'fired', 'termination'],
  },

  // --- "Why is my paycheck..." explainers ---
  {
    title: 'Why Is My Paycheck Lower',
    url: '/us/why-is-my-paycheck-lower',
    description: 'Reasons your paycheck is smaller than you expected.',
    keywords: ['paycheck lower', 'smaller', 'less', 'why', 'deductions'],
  },
  {
    title: 'Why Did My Net Pay Change',
    url: '/us/why-did-my-net-pay-change',
    description: 'Common reasons your take-home pay changed between paychecks.',
    keywords: ['net pay change', 'changed', 'different', 'take-home', 'why'],
  },
  {
    title: 'Why Was So Much Tax Taken',
    url: '/us/why-was-so-much-tax-taken',
    description: 'Why a paycheck can have a surprisingly large tax withholding.',
    keywords: ['too much tax', 'high tax', 'withholding', 'why', 'large'],
  },
  {
    title: 'Why Was My Overtime Taxed So Much',
    url: '/us/why-was-my-overtime-taxed-so-much',
    description: 'Why overtime can look heavily taxed and how the math actually works.',
    keywords: ['overtime', 'taxed', 'too much', 'why', 'withholding'],
  },
  {
    title: 'What Does Medicare Mean on Paycheck',
    url: '/us/what-does-medicare-mean-on-paycheck',
    description: 'The Medicare line on your pay stub, explained.',
    keywords: ['medicare', 'paycheck', 'line', 'meaning', 'what does'],
  },
  {
    title: 'What Does Social Security Mean on Paycheck',
    url: '/us/what-does-social-security-mean-on-paycheck',
    description: 'The Social Security line on your pay stub, explained.',
    keywords: ['social security', 'paycheck', 'line', 'meaning', 'oasdi', 'what does'],
  },

  // --- Worker guides ---
  {
    title: 'New Job First Paycheck Guide',
    url: '/us/new-job-first-paycheck-guide',
    description: 'What to expect on your first paycheck at a new job.',
    keywords: ['new job', 'first paycheck', 'starting', 'guide', 'onboarding'],
  },
  {
    title: 'Gig Worker Paycheck Guide',
    url: '/us/gig-worker-paycheck-guide',
    description: 'How pay and taxes work for gig and 1099 workers.',
    keywords: ['gig', '1099', 'contractor', 'self-employed', 'guide'],
  },
  {
    title: 'Contractor vs Employee Paycheck Guide',
    url: '/us/contractor-vs-employee-paycheck-guide',
    description: 'How pay and taxes differ between 1099 contractors and W-2 employees.',
    keywords: ['contractor', 'employee', '1099', 'w-2', 'compare', 'guide'],
  },
  {
    title: 'Nurse Paycheck Guide',
    url: '/us/nurse-paycheck-guide',
    description: 'Shift differentials, overtime, and pay specifics for nurses.',
    keywords: ['nurse', 'nursing', 'shift differential', 'paycheck', 'guide'],
  },
  {
    title: 'Teacher Paycheck Guide',
    url: '/us/teacher-paycheck-guide',
    description: 'Pay schedules, pensions, and deductions for teachers.',
    keywords: ['teacher', 'education', 'pension', '403b', 'paycheck', 'guide'],
  },
  {
    title: 'Military Paycheck Guide',
    url: '/us/military-paycheck-guide',
    description: 'How military pay, allowances, and taxes appear on an LES.',
    keywords: ['military', 'les', 'allowances', 'bah', 'paycheck', 'guide'],
  },
  {
    title: 'Federal Employee Paycheck Guide',
    url: '/us/federal-employee-paycheck-guide',
    description: 'Pay, FERS, and deductions for federal government employees.',
    keywords: ['federal employee', 'fers', 'tsp', 'government', 'paycheck', 'guide'],
  },
  {
    title: 'Tipped Worker Paycheck Guide',
    url: '/us/tipped-worker-paycheck-guide',
    description: 'How tips, tip credits, and minimum wage interact on your paycheck.',
    keywords: ['tipped', 'tips', 'tip credit', 'server', 'paycheck', 'guide'],
  },
  {
    title: 'Seasonal Worker Paycheck Guide',
    url: '/us/seasonal-worker-paycheck-guide',
    description: 'What seasonal and temporary workers should know about their pay.',
    keywords: ['seasonal', 'temporary', 'temp', 'paycheck', 'guide'],
  },
  {
    title: 'Student Job Paycheck Guide',
    url: '/us/student-job-paycheck-guide',
    description: 'Pay and tax basics for students working part-time jobs.',
    keywords: ['student', 'part-time', 'job', 'fica exemption', 'paycheck', 'guide'],
  },

  // --- Reference & hubs ---
  {
    title: 'Pay Stub Glossary',
    url: '/us/glossary',
    description: 'Every code, abbreviation, and acronym you might see on a US pay stub.',
    keywords: ['glossary', 'terms', 'abbreviations', 'codes', 'acronyms', 'definitions'],
  },
  {
    title: '2026 Pay Numbers',
    url: '/us/2026-pay-numbers',
    description: 'The 2026 tax, FICA, and contribution numbers that drive your paycheck.',
    keywords: ['2026', 'pay numbers', 'limits', 'wage base', 'rates', 'reference'],
  },
  {
    title: '2026 Tax Changes Summary',
    url: '/us/2026-tax-changes-summary',
    description: 'What changed for 2026 payroll taxes, limits, and withholding.',
    keywords: ['2026', 'tax changes', 'updates', 'new', 'summary', 'limits'],
  },
  {
    title: 'Learn',
    url: '/us/learn',
    description: 'The PayslipIQ library of paycheck and payroll explainers.',
    keywords: ['learn', 'library', 'guides', 'explainers', 'index', 'topics'],
  },
  {
    title: 'Cities',
    url: '/us/cities',
    description: 'City-level paycheck and local-tax guides.',
    keywords: ['cities', 'city', 'local', 'metro', 'index'],
  },
  {
    title: 'States',
    url: '/us/state-tax',
    description: 'State income tax withholding, browsable state by state.',
    keywords: ['states', 'state', 'state tax', 'hub', 'directory'],
  },
];
