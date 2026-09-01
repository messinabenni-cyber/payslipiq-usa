import type { Metadata, Viewport } from 'next';

const SITE_URL = 'https://payslipiq.com';

export const rootViewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PayslipIQ — Understand Your Paycheck & Pay Stub (US)',
    template: '%s · PayslipIQ',
  },
  description:
    'PayslipIQ explains pay stubs, withholding, FICA, deductions, overtime, 401(k) and take-home pay in plain English. Educational only, not financial advice.',
  applicationName: 'PayslipIQ',
  category: 'finance',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'es-US': '/es',
      'en-GB': 'https://payslipiq.co.uk',
      'en-IE': 'https://payslipiq.co.uk/ie',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    title: 'PayslipIQ, Understand Your Paycheck With Confidence',
    description:
      'Plain-English help for American workers: pay stubs, federal & state withholding, FICA, deductions, overtime, 401(k), take-home pay. Educational only.',
    url: SITE_URL,
    siteName: 'PayslipIQ',
    locale: 'en_US',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'PayslipIQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Understand Your Paycheck With Confidence, PayslipIQ',
    description: 'Plain-English paycheck help for American workers.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  } as Metadata['robots'],
};
