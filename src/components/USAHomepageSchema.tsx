import React from 'react';

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: "PayslipIQ",
  alternateName: 'PayslipIQ USA',
  url: 'https://payslipiq.com/',
  logo: 'https://payslipiq.com/icon-512.png',
  description: "PayslipIQ is the plain-English paycheck intelligence platform for American workers. Educational only — not tax, legal, or financial advice.",
  areaServed: { '@type': 'Country', name: 'United States' },
  knowsAbout: [
    'US payroll', 'federal income tax withholding', 'FICA', 'Social Security tax', 'Medicare tax',
    'state income tax', 'W-2', 'W-4', '401(k)', 'pay stub', 'paycheck', 'overtime pay', 'FLSA',
    'pre-tax deductions', 'post-tax deductions',
  ],
};

const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "PayslipIQ",
  url: 'https://payslipiq.com/',
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://payslipiq.com/us/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const SOFTWARE_APP = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "PayslipIQ Pay Stub Explainer",
  operatingSystem: 'Any (web)',
  applicationCategory: 'FinanceApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://payslipiq.com/us/pay-stub-checker',
  description: "Upload a US pay stub and get a plain-English explanation of every line. Educational only.",
};

const FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does PayslipIQ do?', acceptedAnswer: { '@type': 'Answer', text: 'PayslipIQ explains American pay stubs and paychecks in plain English. We help you understand gross pay, federal and state withholding, FICA, deductions, overtime, 401(k), and take-home pay. Educational information only — not tax, legal, financial, or payroll advice.' } },
    { '@type': 'Question', name: 'Is PayslipIQ free?', acceptedAnswer: { '@type': 'Answer', text: 'The core PayslipIQ tools are free. Premium monitoring features are offered separately.' } },
    { '@type': 'Question', name: 'Does PayslipIQ give tax advice?', acceptedAnswer: { '@type': 'Answer', text: "No. PayslipIQ provides educational explanations and estimated calculations only. Always verify with your payroll team, a CPA, the IRS, your state tax authority, or another appropriately qualified professional." } },
    { '@type': 'Question', name: 'Does PayslipIQ cover all 50 states?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PayslipIQ has dedicated pages for all 50 states plus DC.' } },
  ],
};

export function USAHomepageSchema() {
  return (
    <>
      {[ORGANIZATION, WEBSITE, SOFTWARE_APP, FAQ].map((b, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }} />
      ))}
    </>
  );
}
