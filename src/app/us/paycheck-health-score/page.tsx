import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { EmailCapture } from '@/components/EmailCapture';

const PAGE_URL = 'https://payslipiq.com/us/paycheck-health-score/';

export const metadata: Metadata = {
  title: 'Paycheck Health Score — 8 Things to Check on Your Next US Pay Stub (Free PDF)',
  description:
    'A free PDF that walks you through the 8 things to check on your next US pay stub: W-4 status, FICA caps, state worker contributions, local tax, pre-tax order, bonus-month variance, YTD pace, and benefits drift. Drop your email, get it.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Paycheck Health Score — Free PDF',
    description: '8 checks every US worker should run on their next pay stub. Free, no spam.',
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS = [
  { q: 'What is the Paycheck Health Score?', a: 'A free 1-page PDF (with a worked example) that walks you through 8 things to check on your next US pay stub: W-4 filing status accuracy, FICA wage-base proximity (the 6.2% Social Security cap of $184,500 for 2026), state-specific worker contributions like CA SDI / NY PFL / NJ SDI+FLI, local tax presence (NYC, Yonkers, Philadelphia, Detroit, RITA cities), pre-tax vs post-tax deduction order, bonus-month withholding variance, YTD pace against the 401(k) and HSA limits, and benefit-drift (premiums silently increasing mid-year). Educational only, not tax advice.' },
  { q: 'What do I get when I sign up?', a: 'A confirmation email immediately, then the PDF within minutes. We will email you only when we publish substantive updates to the Pay Stub Checker or the Take-Home Index. Unsubscribe one-click.' },
  { q: 'Why is this free?', a: 'Educational explainers are the core PayslipIQ mission. The free Paycheck Calculator, FICA explainer, and state hub pages cover the basics. The Health Score PDF distills the 8 highest-leverage checks into a portable format you can keep with your records.' },
  { q: 'Is this tax or financial advice?', a: 'No. PayslipIQ is educational only. The Health Score helps you spot questions to ask your payroll team or a CPA / EA. It does not constitute tax, legal, payroll, accounting, or financial advice. Always verify important numbers with your employer or a qualified professional.' },
  { q: 'What happens to my email?', a: 'It is stored solely so we can send the PDF and occasional product updates. We do not sell, share, or rent it. Our privacy notice describes the full handling.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Paycheck Health Score', url: PAGE_URL },
];

export default function PaycheckHealthScorePage() {
  return (
    <>
      <ArticleSchema headline="Paycheck Health Score" description="8 things to check on your next US pay stub. Free PDF, no spam." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />

      <main id="main" className="mx-auto max-w-3xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Paycheck Health Score</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · 2026 · Educational only · Free</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            8 things to check on your next pay stub.
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            A free 1-page PDF (plus a worked example) covering the eight highest-leverage checks
            every US worker should run on their next paycheck. Drop your email, get it instantly.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8">
          <EmailCapture
            source="paycheck-health-score"
            headline="Email me the Paycheck Health Score PDF"
            subheadline="Free 1-page PDF, no spam, unsubscribe one-click. Educational only."
            cta="Email me the PDF"
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">What the 8 checks cover</h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-700">
            <li><strong>W-4 filing status.</strong> Single, Married Filing Jointly, Head of Household, Married Filing Separately — does the stub match what you actually filed?</li>
            <li><strong>FICA wage-base proximity.</strong> Social Security 6.2% stops once your YTD wages cross the SSA wage base ($184,500 for 2026). High earners get a Q4 take-home bump; check when that happens.</li>
            <li><strong>State worker contributions.</strong> CA SDI 1.3%; NY SDI ($31.20/yr cap) + NY PFL 0.432%; NJ SDI 0.23% + FLI 0.19%; MA PFML 0.46%; OR Paid Leave 0.6%; WA PFML 0.807% + WA Cares 0.58%; RI TDI 1.1%; CO FAMLI 0.44%; HI TDI 0.5%. Should appear as separate lines on your stub if applicable.</li>
            <li><strong>Local tax.</strong> NYC (3.078-3.876% resident), Yonkers (16.75% of NYS tax), Philadelphia (3.74% resident / 3.43% non-resident), Detroit (2.4% / 1.2%), Ohio RITA / CCA cities, MD counties, IN counties, KCMO / STL 1%, Wilmington DE 1.25%, Multnomah PFA + Portland Metro SHS. If you live or work somewhere on this list, expect a local line.</li>
            <li><strong>Pre-tax vs post-tax order.</strong> Pre-tax (401(k) traditional, HSA, FSA, Section 125 health/dental/vision) come out BEFORE federal income tax. Roth and garnishments come out AFTER. Check the order on your stub.</li>
            <li><strong>Bonus-month variance.</strong> Bonuses are typically withheld at the flat 22% federal supplemental rate (or 37% on YTD supplemental over $1M). Looks high — but it is withholding, not final tax. You reconcile at filing.</li>
            <li><strong>YTD pace vs limits.</strong> 401(k) 2026 elective deferral $24,500 ($33,000 if age 50+). HSA $4,400 self / $8,750 family ($1,000 catch-up at 55+). Are you on pace? Use the Year-to-Date Checker.</li>
            <li><strong>Benefit drift.</strong> Health premium / dental / vision premiums can change mid-year (open enrollment, plan-year resets). Compare each stub to the prior period and ask payroll if anything moved unexpectedly.</li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Tools mentioned in the PDF</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/us/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Federal + FICA + state + worker contribs.</div>
            </Link>
            <Link href="/us/year-to-date-paycheck-checker/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Year-to-Date Checker</div>
              <div className="text-sm text-slate-500">SS wage base, Additional Medicare, 401(k), HSA pacing.</div>
            </Link>
            <Link href="/us/fica-explained/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">FICA Explained</div>
              <div className="text-sm text-slate-500">Social Security + Medicare basics.</div>
            </Link>
            <Link href="/us/local-paycheck-taxes/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Local Paycheck Taxes</div>
              <div className="text-sm text-slate-500">NYC, Yonkers, Philadelphia, Detroit, RITA, and more.</div>
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Common questions</h2>
          <dl className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-1 text-slate-700">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <MasterDisclaimer variant="long" />
        </section>
      </main>
      <MobileStickyCTA
        href="/us/paycheck-calculator"
        label="Calculate Take-Home"
        secondaryHref="/us/pay-stub-checker"
        secondaryLabel="Check Stub"
      />
    </>
  );
}
