import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

const SITE_URL = 'https://payslipiq.com';

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  // colorScheme removed so OS dark mode preference can take effect via globals.css.
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PayslipIQ, Understand Your Paycheck | Plain-English Pay Stub Help (US)',
    template: '%s · PayslipIQ',
  },
  description:
    'PayslipIQ explains pay stubs, federal and state withholding, FICA, deductions, overtime, 401(k), and take-home pay. Educational only, not tax, legal, or financial advice.',
  applicationName: 'PayslipIQ',
  category: 'finance',
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
      'es-US': '/es/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    title: "PayslipIQ, Understand Your Paycheck With Confidence",
    description:
      'Plain-English help for American workers: pay stubs, federal & state withholding, FICA, deductions, overtime, 401(k), take-home pay. Educational only.',
    url: SITE_URL,
    siteName: 'PayslipIQ',
    locale: 'en_US',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'PayslipIQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Understand Your Paycheck With Confidence, PayslipIQ",
    description: "Plain-English paycheck help for American workers.",
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  } as Metadata['robots'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://va.vercel-scripts.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
