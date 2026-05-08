import type { MetadataRoute } from 'next';
import { STATES } from '@/lib/states';

const SITE = 'https://payslipiq.com';
const NOW = new Date();

const STATIC_PATHS = [
  '/',
  '/trust',
  '/security',
  '/ai-transparency',
  '/methodology',
  '/how-it-works',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/about',
  '/contact',
  '/press',
  '/us/pay-stub-checker',
  '/us/paycheck-calculator',
  '/us/salary-after-tax',
  '/us/hourly-paycheck-calculator',
  '/us/overtime-paycheck',
  '/us/fica-explained',
  '/us/federal-tax-withholding',
  '/us/social-security-tax',
  '/us/medicare-tax',
  '/us/additional-medicare-tax',
  '/us/w4-guide',
  '/us/w2-explained',
  '/us/401k-deductions',
  '/us/health-insurance-deductions',
  '/us/bonus-tax-paycheck',
  '/us/pre-tax-vs-post-tax-deductions',
  '/us/gross-vs-net-pay',
  '/us/pay-stub-anatomy',
  '/us/pay-stub-glossary',
  '/us/pay-stub-mistakes',
  '/us/why-is-my-paycheck-lower',
  '/us/paycheck-comparison',
  '/us/ask-payroll-generator',
  '/us/learn',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: NOW,
    changeFrequency: 'weekly',
    priority: p === '/' ? 1.0 : 0.7,
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
