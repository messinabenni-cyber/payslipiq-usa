import React from 'react';
import { ORG_ID, WEBSITE_ID, ld } from '@/lib/schema';

/**
 * Homepage-only schema: SoftwareApplication (the Pay Stub Explainer) + FAQPage.
 *
 * Organization + WebSite are NO LONGER emitted here — they are now emitted site-wide by
 * <SiteSchema /> in the root layout with stable @id anchors, so every URL (not just `/`)
 * carries the publisher entity. This component references those nodes by @id to avoid the
 * duplicate-Organization problem and keep one canonical entity graph.
 */

const SOFTWARE_APP = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://payslipiq.com/us/pay-stub-checker#app',
  name: 'PayslipIQ Pay Stub Explainer',
  operatingSystem: 'Any (web)',
  applicationCategory: 'FinanceApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  isAccessibleForFree: true,
  url: 'https://payslipiq.com/us/pay-stub-checker',
  publisher: { '@id': ORG_ID },
  isPartOf: { '@id': WEBSITE_ID },
  description:
    'Upload a US pay stub and get a plain-English explanation of every line. Educational only.',
};

const FAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://payslipiq.com/us/#faq',
  isPartOf: { '@id': WEBSITE_ID },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.faq-answer'],
  },
  mainEntity: [
    { '@type': 'Question', name: 'What does PayslipIQ do?', acceptedAnswer: { '@type': 'Answer', text: 'PayslipIQ explains American pay stubs and paychecks. We help you understand gross pay, federal and state withholding, FICA, deductions, overtime, 401(k), and take-home pay. Educational information only, not tax, legal, financial, or payroll advice.' } },
    { '@type': 'Question', name: 'Is PayslipIQ free?', acceptedAnswer: { '@type': 'Answer', text: 'The core PayslipIQ tools are free. Premium monitoring features are offered separately.' } },
    { '@type': 'Question', name: 'Does PayslipIQ give tax advice?', acceptedAnswer: { '@type': 'Answer', text: 'No. PayslipIQ provides educational explanations and estimated calculations only. Always verify with your payroll team, a CPA, the IRS, your state tax authority, or another appropriately qualified professional.' } },
    { '@type': 'Question', name: 'Does PayslipIQ cover all 50 states?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PayslipIQ has dedicated pages for all 50 states plus DC, plus city-specific paycheck calculators for major metros.' } },
  ],
};

export function USAHomepageSchema() {
  return (
    <>
      {[SOFTWARE_APP, FAQ].map((b, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld(b) }} />
      ))}
    </>
  );
}
