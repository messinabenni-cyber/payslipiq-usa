import type { MetadataRoute } from 'next';
import { STATES } from '@/lib/states';

const SITE = 'https://payslipiq.com';
const NOW = new Date();

const STATIC_PATHS: string[] = ['/', '/about', '/ai-transparency', '/contact', '/disclaimer', '/how-it-works', '/methodology', '/press', '/privacy', '/security', '/terms', '/trust', '/us/401k-contribution-limits', '/us/401k-deductions', '/us/additional-medicare-tax', '/us/ask-payroll-generator', '/us/biweekly-vs-semimonthly-pay', '/us/bonus-tax-paycheck', '/us/contractor-vs-employee-paycheck-guide', '/us/deductions', '/us/federal-employee-paycheck-guide', '/us/federal-tax-withholding', '/us/fica-explained', '/us/final-paycheck-rules', '/us/gig-worker-paycheck-guide', '/us/gross-vs-net-pay', '/us/health-insurance-deductions', '/us/hourly-paycheck-calculator', '/us/hourly-worker-paycheck-calculator', '/us/hsa-fsa-explained', '/us/hsa-vs-fsa', '/us/learn', '/us/medicare-tax', '/us/military-paycheck-guide', '/us/multi-state-payroll-guide', '/us/new-job-first-paycheck-guide', '/us/nurse-paycheck-guide', '/us/overtime-paycheck', '/us/pay-stub-anatomy', '/us/pay-stub-checker', '/us/pay-stub-glossary', '/us/pay-stub-mistakes', '/us/paycheck-calculator', '/us/paycheck-comparison', '/us/pre-tax-vs-post-tax-deductions', '/us/pre-tax-vs-roth-401k', '/us/problems', '/us/remote-worker-state-tax-guide', '/us/roles', '/us/salaried-worker-paycheck-calculator', '/us/salary-after-tax', '/us/seasonal-worker-paycheck-guide', '/us/single-vs-married-filing-jointly-paycheck', '/us/social-security-tax', '/us/student-job-paycheck-guide', '/us/supplemental-wage-withholding', '/us/teacher-paycheck-guide', '/us/tipped-worker-paycheck-guide', '/us/w2-explained', '/us/w4-guide', '/us/wage-garnishment-explained', '/us/what-does-medicare-mean-on-paycheck', '/us/what-does-social-security-mean-on-paycheck', '/us/why-am-i-paying-state-tax-i-don-t-live-there', '/us/why-did-my-net-pay-change', '/us/why-is-my-paycheck-lower', '/us/why-was-my-overtime-taxed-so-much', '/us/why-was-so-much-tax-taken'];

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${SITE}${p === '/' ? '' : p}`,
    lastModified: NOW,
    changeFrequency: 'weekly' as const,
    priority: p === '/' ? 1.0 : (p.startsWith('/us/') ? 0.7 : 0.6),
  }));

  for (const s of STATES) {
    out.push({ url: `${SITE}/us/${s.slug}`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.6 });
    out.push({ url: `${SITE}/us/${s.slug}/paycheck-calculator`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.7 });
    out.push({ url: `${SITE}/us/${s.slug}/pay-stub-checker`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.6 });
    out.push({ url: `${SITE}/us/${s.slug}/state-tax`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.5 });
    out.push({ url: `${SITE}/us/${s.slug}/overtime-pay`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.5 });
    out.push({ url: `${SITE}/us/${s.slug}/pay-stub-laws`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.5 });
  }

  return out;
}
