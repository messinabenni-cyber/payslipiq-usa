import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';

export const metadata: Metadata = {
  title: "Learn, All Paycheck Topics (US)",
  description: "Index of all PayslipIQ paycheck guides for US workers: federal, state, FICA, W-4, 401(k), benefits, overtime. Educational only.",
  alternates: { canonical: '/us/learn' },
};

const BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'Learn', url: '/us/learn' },
];

const FAQS = [
  { q: 'Where should I start if I just want to understand my paycheck?', a: 'Begin with how to read a pay stub, then FICA explained (Social Security and Medicare) and federal income tax withholding. Those three cover the deductions on almost every US paycheck.' },
  { q: 'Are these guides specific to my state?', a: 'The federal and FICA guides apply nationwide. State income tax, SDI and paid-leave rules vary, so each of the 50 states has its own page linked above and in the footer.' },
  { q: 'Is this tax advice?', a: 'No. PayslipIQ is educational only. These guides explain how US paycheck deductions generally work; for decisions about your own situation, check official sources or a qualified professional.' },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <ArticleSchema
        headline="Learn, All Paycheck Topics (US)"
        description="Index of PayslipIQ paycheck guides for US workers: federal income tax, FICA, W-4, W-2, 401(k), benefits, overtime, and state-by-state pages."
        url="https://payslipiq.com/us/learn"
      />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-700">Home</Link>
        <span className="mx-1">›</span>
        <span className="text-slate-700">Learn</span>
      </nav>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Learn, All Paycheck Topics</h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-700">
        Every PayslipIQ guide for US workers in one place. Whether you want to know why your net pay is lower than
        your salary, how FICA splits into Social Security and Medicare, or what each W-2 box means, the topic is
        grouped below by federal taxes, forms, deductions, common problems, worker type, and state.
      </p>
      <section className="mt-6 rounded-md border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-base font-semibold text-slate-900">In short</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
          This hub indexes PayslipIQ&rsquo;s educational US paycheck guides. Start with how to read a pay stub, FICA
          (Social Security and Medicare), and federal income tax withholding to understand the deductions on almost
          every paycheck, then drill into forms (W-4, W-2), deductions (401(k), health insurance, pre-tax vs post-tax),
          common pay problems, or your specific state and worker type.
        </p>
      </section>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <article className="mt-8 prose prose-slate max-w-none">
        <h2>Federal</h2><ul><li><a href="/us/federal-tax-withholding">Federal income tax withholding</a></li><li><a href="/us/fica-explained">FICA explained</a></li><li><a href="/us/social-security-tax">Social Security tax</a></li><li><a href="/us/medicare-tax">Medicare tax</a></li><li><a href="/us/additional-medicare-tax">Additional Medicare Tax</a></li><li><a href="/us/bonus-tax-paycheck">Bonus tax explained</a></li></ul>
        <h2>Forms</h2><ul><li><a href="/us/w4-guide">W-4 guide</a></li><li><a href="/us/w2-explained">How to read a W-2</a></li><li><a href="/us/pay-stub-anatomy">How to read a pay stub</a></li><li><a href="/us/glossary">Pay stub glossary</a></li></ul>
        <h2>Deductions</h2><ul><li><a href="/us/401k-deductions">401(k) deductions</a></li><li><a href="/us/health-insurance-deductions">Health insurance deductions</a></li><li><a href="/us/pre-tax-vs-post-tax-deductions">Pre-tax vs post-tax</a></li></ul>
        <h2>Problems</h2><ul><li><a href="/us/why-is-my-paycheck-lower">Why is my paycheck lower?</a></li><li><a href="/us/pay-stub-mistakes">Common pay stub mistakes</a></li><li><a href="/us/paycheck-comparison">Paycheck comparison</a></li></ul>
        <h2>By worker type</h2><ul><li><a href="/us/roles">Paycheck guides by worker type</a> — hourly, salaried, tipped, gig, contractor, remote, multi-state, federal, military, teacher, nurse, seasonal, and student workers</li></ul>
        <h2>By state</h2><p>50 state-specific paycheck pages. Start with <a href="/us/california">California</a>, <a href="/us/new-york">New York</a>, <a href="/us/texas">Texas</a>, or any of the 50 from the footer.</p>
      </article>
      <FAQSchema items={FAQS} />
      <div className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Related tools</p>
        <ul className="mt-2 space-y-1 text-sm text-blue-700">
          <li><Link href="/us/paycheck-calculator">Paycheck calculator →</Link></li>
          <li><Link href="/us/pay-stub-checker">AI pay stub explainer →</Link></li>
          <li><Link href="/us/learn">All paycheck topics →</Link></li>
        </ul>
      </div>
    </main>
  );
}
