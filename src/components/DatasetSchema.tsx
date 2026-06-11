import React from 'react';
import { SITE, ORG_ID, ld } from '@/lib/schema';

/**
 * Dataset JSON-LD for the verified 2026 US payroll figures.
 *
 * Why: AI answer engines (ChatGPT Search, Perplexity, Gemini, Claude) increasingly retrieve
 * machine-readable Dataset nodes when answering "what is the 2026 401(k) limit / Social Security
 * wage base" style queries. Marking the numbers as a Dataset with variableMeasured +
 * temporalCoverage + isBasedOn (IRS/SSA primary sources) makes PayslipIQ the citable source.
 * (Dataset no longer yields a Google SERP rich result, but powers Dataset Search + AI retrieval.)
 *
 * Values mirror the sourced figures on /us/2026-pay-numbers (IRS Notice 2025-67; SSA Contribution
 * and Benefit Base). Keep this in sync with that page's constants — single source of truth there.
 *
 * Drop on /us/2026-pay-numbers and /us/2026-tax-changes-summary.
 */

interface Props {
  url: string; // canonical page URL (path or absolute)
}

export function DatasetSchema({ url }: Props) {
  const pageUrl = url.startsWith('http') ? url : `${SITE}${url}`;
  const dataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${pageUrl}#dataset`,
    name: '2026 US Payroll Tax Numbers (FICA, Social Security wage base, 401(k) limits, standard deduction)',
    description:
      'The verified 2026 US federal payroll figures that determine paycheck withholding: Social Security tax rate and wage base, Medicare and Additional Medicare rates, 401(k) elective deferral and catch-up limits, IRA limit, and the standard deduction. Sourced from IRS Notice 2025-67 and the SSA Contribution and Benefit Base. Educational only.',
    url: pageUrl,
    isAccessibleForFree: true,
    inLanguage: 'en-US',
    creator: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    temporalCoverage: '2026-01-01/2026-12-31',
    isBasedOn: [
      'https://www.irs.gov/',
      'https://www.ssa.gov/oact/cola/cbb.html',
    ],
    keywords: [
      'FICA 2026',
      'Social Security wage base 2026',
      '401(k) limit 2026',
      'Medicare tax rate',
      'standard deduction 2026',
    ],
    variableMeasured: [
      { '@type': 'PropertyValue', name: 'Social Security tax rate (employee)', value: '6.2', unitText: 'PERCENT' },
      { '@type': 'PropertyValue', name: 'Social Security wage base', value: '184500', unitText: 'USD' },
      { '@type': 'PropertyValue', name: 'Medicare tax rate (employee)', value: '1.45', unitText: 'PERCENT' },
      { '@type': 'PropertyValue', name: 'Additional Medicare tax rate', value: '0.9', unitText: 'PERCENT' },
      { '@type': 'PropertyValue', name: '401(k) elective deferral limit', value: '24500', unitText: 'USD' },
      { '@type': 'PropertyValue', name: '401(k) catch-up (age 50+)', value: '8000', unitText: 'USD' },
      { '@type': 'PropertyValue', name: '401(k) catch-up (age 60–63, SECURE 2.0)', value: '11250', unitText: 'USD' },
      { '@type': 'PropertyValue', name: 'IRA contribution limit', value: '7500', unitText: 'USD' },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld(dataset) }} />
  );
}
