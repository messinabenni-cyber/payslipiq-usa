import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

export const metadata: Metadata = {
  title: "Privacy Policy, PayslipIQ (US)",
  description: "PayslipIQ US privacy policy: what we collect, what we don't, your CCPA/state-law rights, sub-processors, AI processing.",
  alternates: { canonical: '/privacy' },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy (US)</h1>
      <article className="mt-8 prose prose-slate max-w-none">
        <p><strong>Effective:</strong> 2026-05-08. This site is for users in the United States, and US state privacy rights (including CCPA / CPRA) apply. The operator is GoldPaid Ltd, a company registered in England and Wales (no. 17382540), trading as PayslipIQ. That is not a US or Delaware company.</p>
        <h2>Plain-English summary</h2>
        <p>We help American workers understand pay stubs and paychecks. We collect the minimum data we need. We do not sell your data. We do not share pay stub content with employers, advertisers, or data brokers. The pay stub explainer does not require an account. We honor CCPA / VCDPA / CPA / CTDPA / UCPA rights for all US users.</p>
        <h2>What we collect</h2>
        <ul><li>Pay stub file or paycheck values you paste.</li><li>IP address (security).</li><li>Browser user agent (compatibility).</li><li>Aggregated page views (Plausible, no cookies).</li><li>Email, if you join a waitlist or if a premium account is created later. There is no live premium login today.</li></ul>
        <h2>We do not collect</h2>
        <p>SSNs, bank account numbers, government IDs, biometric data.</p>
        <h2>Your rights (US)</h2>
        <p>Under CCPA / CPRA in California, VCDPA in Virginia, CPA in Colorado, CTDPA in Connecticut, UCPA in Utah, and other state laws as enacted, you may know, access, correct, delete, opt out, limit, and not be discriminated against. Email <strong>privacy@payslipiq.com</strong> to exercise any right. See also <Link href="/your-privacy-choices">Your Privacy Choices</Link> (Do Not Sell or Share My Personal Information).</p>
        <h2>Cookies</h2>
        <p>We use <strong>Plausible Analytics</strong> which is cookieless and does not collect personal information. We do not sell personal information and we do not share it for cross-context behavioral advertising. We honor Global Privacy Control (GPC) signals: because we do not sell or share, a GPC opt-out is already the default for every visitor.</p>
        <h2>AI processing</h2>
        <p>De-identified pay stub data (with SSN/bank account redacted) is sent to a third-party LLM API to generate explanations. The provider does not retain user data for training. Current provider is listed under <Link href="/security">Security</Link>.</p>
      </article>
      <div className="mt-12">
        <MasterDisclaimer variant="footer" />
      </div>
    </main>
  );
}
