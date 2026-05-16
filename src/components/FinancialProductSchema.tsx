import React from 'react';

/**
 * FinancialProduct JSON-LD for calculator pages.
 * Schema.org/FinancialProduct signals to crawlers and AI search engines that a page
 * is a financial tool (not just an article). Pairs with SoftwareApplication on pages
 * that ARE the tool (PaycheckCalculator, GrossToNetCalculator) and FinancialProduct
 * on pages that DESCRIBE a financial product line.
 *
 * 2026-05-16 audit: ships in v3.
 */

interface Props {
  name: string;
  description: string;
  url: string;
  category?: string; // e.g. "Paycheck estimator", "Year-end planning"
}

export function FinancialProductSchema({ name, description, url, category = 'Paycheck estimator' }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name,
    description,
    url,
    category,
    provider: { '@type': 'Organization', name: 'PayslipIQ', url: 'https://payslipiq.com/' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    areaServed: { '@type': 'Country', name: 'United States' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
