import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { AskPayrollClient } from '@/components/AskPayrollClient';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';

const PAGE_URL = 'https://payslipiq.com/us/ask-payroll-generator';

export const metadata: Metadata = {
  title: 'Ask Payroll, Message Generator (US) · Free, Client-Side',
  description:
    'A free, client-side generator that drafts a polite, factual message to your HR or payroll team about a paycheck question. PayslipIQ does not send the message. Educational only.',
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-US': PAGE_URL,
      'es-US': 'https://payslipiq.com/es',
      'x-default': PAGE_URL
    }
  },
  openGraph: {
    title: 'Ask Payroll, Message Generator (US)',
    description: 'Draft a polite, factual paycheck question for HR or payroll. Client-side only. Educational.',
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: 'https://payslipiq.com/api/og?title=Ask%20Payroll%20Generator&eyebrow=USA%20%C2%B7%20Free%20%C2%B7%20Client-side',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ask Payroll, Message Generator (US)',
    description: 'Draft a polite paycheck question for HR or payroll. Client-side only.'
  }
};

const FAQS = [
  {
    q: 'What does the Ask Payroll Generator do?',
    a: 'It drafts a polite, factual message you can send to your HR or payroll team about a paycheck question. You fill in a few details — your name, pay period, the line you have a question about, and what you noticed — and the generator returns a short message ready to copy. PayslipIQ does not send the message on your behalf. The drafting is fully client-side.'
  },
  {
    q: 'Does PayslipIQ store my message?',
    a: 'No. The Ask Payroll Generator runs entirely in your browser. Nothing is sent to PayslipIQ servers, no draft is stored, no analytics event captures the body of the message. Once you close the page, the draft is gone.'
  },
  {
    q: 'Should I include my Social Security number or bank details?',
    a: 'No. Never include your SSN, bank account number, or full address in an HR or payroll message. The generator omits these by design. Use your employee ID instead, and let HR look you up internally.'
  },
  {
    q: 'What kind of questions is it best for?',
    a: 'Straightforward, factual questions: "My federal withholding looks different this period — can you confirm the W-4 on file?", "My pre-tax 401(k) line is missing this month — could you check my enrolment?", "My state tax line shows X — is my work state still correct?". The generator is not for adversarial or formal disputes; for those, see a CPA or an employment attorney.'
  },
  {
    q: 'Can it replace a CPA or an employment attorney?',
    a: 'No. The generator is a writing aid only. It does not provide tax, legal, financial, employment, or HR advice. For a binding answer, see a qualified professional.'
  }
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Ask Payroll Generator', url: PAGE_URL }
];

function SoftwareApplicationLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PayslipIQ Ask Payroll Generator',
    operatingSystem: 'Web',
    applicationCategory: 'BusinessApplication',
    url: PAGE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'A free client-side message generator that drafts polite, factual paycheck questions for HR or payroll. Educational only.',
    isAccessibleForFree: true
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function AskPayrollGeneratorPage() {
  return (
    <>
      <ArticleSchema headline="Ask Payroll, Message Generator (US)" description="A free client-side generator that drafts a polite, factual message to HR or payroll about a paycheck question." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />
      <SoftwareApplicationLd />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Ask Payroll Generator</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · Free · Client-side · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Ask Payroll, Message Generator</h1>
          <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
            Got a paycheck question that needs HR or payroll to answer? Draft a polite, factual
            message here, review it, and send it yourself. Runs entirely in your browser. PayslipIQ
            does not send the message on your behalf.
          </p>
        </header>

        <ReviewedBy />

        <AskPayrollClient />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">When to use this</h2>
          <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
            <li>A line on your pay stub looks different from last period and you want HR to confirm the calculation.</li>
            <li>A pre-tax deduction (401(k), HSA, health) is missing or wrong.</li>
            <li>Your state withholding looks off after a move or remote-work change.</li>
            <li>A bonus or overtime was taxed in a way you did not expect.</li>
            <li>Your year-to-date totals do not match what you tracked.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">When NOT to use this</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Formal disputes, escalations, wage-and-hour claims, discrimination claims, and anything
            adversarial should go through a qualified professional — a CPA for tax matters, an
            employment attorney for labor matters, your state Department of Labor for wage claims.
            This generator is a writing aid only.
          </p>
        </section>

        <section className="mt-12">
          <MasterDisclaimer variant="long" />
        </section>
      </main>
      <MobileStickyCTA
        href="/us/pay-stub-checker"
        label="Check My Pay Stub"
        secondaryHref="/us/paycheck-calculator"
        secondaryLabel="Paycheck Calc"
      />
    </>
  );
}
