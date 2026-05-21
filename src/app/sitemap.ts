import type { MetadataRoute } from 'next';
import { STATES } from '@/lib/states';

const SITE = 'https://payslipiq.com';
const NOW = new Date();

const STATIC_PATHS: string[] = ['/', '/about', '/ai-transparency', '/contact', '/disclaimer', '/how-it-works', '/methodology', '/press', '/privacy', '/security', '/terms', '/trust', '/us/', '/us/state-tax', '/us/401k-contribution-limits', '/us/401k-deductions', '/us/additional-medicare-tax', '/us/ask-payroll-generator', '/us/biweekly-vs-semimonthly-pay', '/us/bonus-tax-paycheck', '/us/california-daily-overtime', '/us/california-sdi', '/us/contractor-vs-employee-paycheck-guide', '/us/deductions', '/us/detroit-tax', '/us/federal-employee-paycheck-guide', '/us/federal-tax-withholding', '/us/fica-explained', '/us/final-paycheck-rules', '/us/gig-worker-paycheck-guide', '/us/gross-to-net-paycheck-calculator', '/us/gross-vs-net-pay', '/us/health-insurance-deductions', '/us/hourly-paycheck-calculator', '/us/hourly-to-salary', '/us/hourly-worker-paycheck-calculator', '/us/hsa-fsa-explained', '/us/hsa-vs-fsa', '/us/learn', '/us/local-paycheck-taxes', '/us/local-taxes', '/us/medicare-tax', '/us/military-paycheck-guide', '/us/multi-state-payroll-guide', '/us/new-jersey-sdi-fli', '/us/new-job-first-paycheck-guide', '/us/new-york-pfl', '/us/nurse-paycheck-guide', '/us/nyc-tax', '/us/ohio-rita-cca', '/us/overtime-paycheck', '/us/pay-stub-anatomy', '/us/pay-stub-checker', '/us/pay-stub-glossary', '/us/pay-stub-mistakes', '/us/paycheck-calculator', '/us/paycheck-comparison', '/us/philadelphia-wage-tax', '/us/pre-tax-vs-post-tax-deductions', '/us/pre-tax-vs-roth-401k', '/us/problems', '/us/remote-worker-state-tax-guide', '/us/roles', '/us/salaried-worker-paycheck-calculator', '/us/salary-after-tax', '/us/salary-to-hourly', '/us/seasonal-worker-paycheck-guide', '/us/single-vs-married-filing-jointly-paycheck', '/us/social-security-tax', '/us/student-job-paycheck-guide', '/us/supplemental-wage-withholding', '/us/teacher-paycheck-guide', '/us/tipped-worker-paycheck-guide', '/us/w2-explained', '/us/w4-guide', '/us/wage-garnishment-explained', '/us/what-does-medicare-mean-on-paycheck', '/us/what-does-social-security-mean-on-paycheck', '/us/why-am-i-paying-state-tax-i-don-t-live-there', '/us/why-did-my-net-pay-change', '/us/why-is-my-paycheck-lower', '/us/why-was-my-overtime-taxed-so-much', '/us/why-was-so-much-tax-taken', '/us/year-to-date-paycheck-checker',
  // v4-v6: lead-magnet landing + cities index + per-city paycheck calculators
  '/us/paycheck-health-score', '/us/cities',
  '/us/cities/new-york-city/paycheck-calculator',
  '/us/cities/yonkers/paycheck-calculator',
  '/us/cities/philadelphia/paycheck-calculator',
  '/us/cities/detroit/paycheck-calculator',
  '/us/cities/san-francisco/paycheck-calculator',
  '/us/cities/wilmington/paycheck-calculator',
  '/us/cities/kansas-city/paycheck-calculator',
  '/us/cities/st-louis/paycheck-calculator',
  '/us/cities/portland-multnomah/paycheck-calculator',
  '/us/cities/cleveland/paycheck-calculator',
  '/us/cities/pittsburgh/paycheck-calculator',
  '/us/cities/cincinnati/paycheck-calculator',
  '/us/cities/baltimore/paycheck-calculator',
  // v7 additions
  '/us/cities/indianapolis/paycheck-calculator',
  '/us/cities/louisville/paycheck-calculator',
  '/us/cities/newark/paycheck-calculator',
  '/us/cities/minneapolis/paycheck-calculator',
  '/us/maryland-counties',
  // v8 additions
  '/us/cities/boston/paycheck-calculator',
  '/us/cities/seattle/paycheck-calculator',
  '/us/cities/denver/paycheck-calculator',
  '/us/cities/atlanta/paycheck-calculator',
  '/us/cities/phoenix/paycheck-calculator',
  '/us/state-worker-contributions',
  // v9 additions: 8 top-metro city pages + methodology + accessibility + 2 comparison pages
  '/us/cities/las-vegas/paycheck-calculator',
  '/us/cities/dallas/paycheck-calculator',
  '/us/cities/houston/paycheck-calculator',
  '/us/cities/austin/paycheck-calculator',
  '/us/cities/miami/paycheck-calculator',
  '/us/cities/san-diego/paycheck-calculator',
  '/us/cities/charlotte/paycheck-calculator',
  '/us/cities/nashville/paycheck-calculator',
  '/us/accessibility',
  '/us/vs-paycheckcity',
  '/us/vs-smartasset',
  // v11: 2026 tax-changes evergreen
  '/us/2026-tax-changes-summary',
  // v12: commercial comparison pages
  '/us/vs-adp', '/us/vs-gusto'];

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${SITE}${p === '/' ? '' : p}`,
    lastModified: NOW,
    changeFrequency: 'weekly' as const,
    priority: p === '/' ? 1.0 : (p === '/us/' ? 0.95 : (p.startsWith('/us/') ? 0.7 : 0.6)),
  }));

  for (const s of STATES) {
    out.push({ url: `${SITE}/us/${s.slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.6 });
    out.push({ url: `${SITE}/us/${s.slug}/paycheck-calculator`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.7 });
    out.push({ url: `${SITE}/us/${s.slug}/pay-stub-checker`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.6 });
    out.push({ url: `${SITE}/us/${s.slug}/state-tax`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.5 });
    out.push({ url: `${SITE}/us/${s.slug}/overtime-pay`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.5 });
    out.push({ url: `${SITE}/us/${s.slug}/pay-stub-laws`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.5 });
    // PR #11 addition: programmatic gross-to-net per state (50 states + DC)
    out.push({ url: `${SITE}/us/gross-to-net-paycheck/${s.slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.7 });
  }

  return out;
}
