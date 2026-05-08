import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Trust Center",
  description: "How PayslipIQ works, where AI is used, what data we hold, what we will not claim, how to verify everything.",
  alternates: { canonical: "/trust" },
};

const FAQS = [{"q": "Does PayslipIQ give tax advice?", "a": "No. PayslipIQ provides educational explanations and estimated calculations only. Always verify with your payroll department, a qualified CPA, the IRS, your state tax authority, or another appropriately qualified professional."}, {"q": "Is my pay stub stored?", "a": "Free tier: pay stub files are retained only long enough to return the explanation, then purged within 24 hours. Premium tier (saved reports): files are retained encrypted at rest for the lifetime of the saved report. Users can delete reports any time."}, {"q": "Does PayslipIQ sell user data?", "a": "No. We do not sell user data. We do not share pay stub content with employers, advertisers, or data brokers. We do not use pay stub content to train AI models."}, {"q": "Can PayslipIQ correct an error on my pay stub?", "a": "No. We help you understand the stub. You raise any errors with your employer's payroll team. We do not represent workers in any dispute."}, {"q": "Is PayslipIQ affiliated with the IRS or Social Security Administration?", "a": "No. We are independent. We are not affiliated with the IRS, the Social Security Administration, the Department of Labor, or any state tax authority."}];
const RELATED = [{"label": "Security", "href": "/security"}, {"label": "AI Transparency", "href": "/ai-transparency"}, {"label": "Methodology", "href": "/methodology"}, {"label": "Privacy", "href": "/privacy"}, {"label": "Disclaimers", "href": "/disclaimer"}, {"label": "How it works", "href": "/how-it-works"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "Trust Center", "url": "/trust"}];

export default function Page() {
  return (
    <RichArticle
      title="Trust Center"
      url="/trust"
      description="How PayslipIQ works, where AI is used, what data we hold, what we will not claim, how to verify everything."
      intro={<>PayslipIQ exists to help American workers read their paycheck. To do that responsibly, we publish how the product works, where AI is involved, what data is held, and what we explicitly will not claim. This is the index page. Detail lives in the linked sections.</>}
      body={<><h2>What PayslipIQ is</h2>
<ul>
<li>An educational pay stub and paycheck explainer for US workers.</li>
<li>A free set of paycheck calculators and explainer tools.</li>
<li>An AI-assisted plain-English layer over payroll line items.</li>
<li>An independent media and tools brand operating in the United States.</li>
</ul>
<h2>What PayslipIQ is not</h2>
<ul>
<li>A CPA, tax preparer, or enrolled agent.</li>
<li>A licensed financial, legal, accounting, or employment advisor.</li>
<li>A payroll provider or payroll-correction service.</li>
<li>An employer-dispute representative.</li>
<li>Affiliated with the IRS, the Social Security Administration, the Department of Labor, or any state tax authority.</li>
</ul>
<p>If you need any of the above, we explain the question and point you to a qualified professional.</p>
<h2>Trust principles</h2>
<ol>
<li><strong>Educational only.</strong> Every output is information, not advice. Every page that returns numbers carries a verification reminder.</li>
<li><strong>Plain language.</strong> No payroll jargon, no legalese hidden in tooltips. If a worker cannot read the explanation, the explanation has failed.</li>
<li><strong>Privacy by design.</strong> We collect the minimum data needed. We do not sell user data. We do not profile workers. We do not share pay stub content with third parties for marketing.</li>
<li><strong>Transparent AI.</strong> We disclose every place AI is used, what it does, and what its limits are.</li>
<li><strong>Verify with the source.</strong> We always tell users to confirm with payroll, the IRS, their state tax authority, or a CPA. We do not pretend to replace any of them.</li>
<li><strong>No predatory monetization.</strong> No high-pressure upsells, fake countdowns, dark patterns, or affiliate placements that push users toward decisions against their interest.</li>
<li><strong>Acquisition-grade compliance.</strong> Operate as if a regulator, a buyer, and a journalist will read every page tomorrow.</li>
</ol>
<h2>How pay stub uploads are handled</h2>
<p>On upload: TLS 1.2+ in transit, encrypted at rest during processing, processed by our pay stub parser (rules + AI summarization), result returned to your session.</p>
<p>Free tier retention: pay stub files are retained only long enough to return the explanation, then automatically purged within 24 hours. Free tier files are not linked to any persistent identity.</p>
<p>Premium tier retention: files associated with saved reports are retained for the lifetime of the saved report, encrypted at rest, accessible only to the user. Users can delete reports at any time.</p>
<p>What we do not do: sell pay stub content, share it with employers, use it for advertising profiling, or train AI models on user pay stubs.</p>
<h2>How AI is used</h2>
<ol>
<li>Pay Stub Explainer parses uploaded stubs and returns line-by-line plain-English summaries.</li>
<li>Calculator narrative generates a one-paragraph human summary alongside numeric results from rule-based code.</li>
<li>Ask Payroll generator drafts a polite message you can send to HR. PayslipIQ never sends.</li>
</ol>
<p>Where AI is NOT used: tax-rate lookups, eligibility decisions, refund predictions, personalized tax advice, profiling, advertising.</p>
<h2>What we will never claim</h2>
<ul>
<li>Guaranteed refund.</li>
<li>Guaranteed calculation accuracy.</li>
<li>Representation in any employer or tax dispute.</li>
<li>Replacement for your CPA, tax preparer, or attorney.</li>
<li>Authority to correct payroll errors.</li>
<li>Tax, legal, financial, accounting, or payroll advice.</li>
</ul>
<h2>Compliance posture</h2>
<ul>
<li><strong>US privacy:</strong> CCPA / CPRA compliant. State-specific notices honored (Virginia, Colorado, Connecticut, Utah, others as enacted).</li>
<li><strong>Children:</strong> We do not knowingly collect data from anyone under 13. COPPA-aligned.</li>
<li><strong>Accessibility:</strong> Working toward WCAG 2.1 AA. Statement in footer.</li>
<li><strong>SOC 2:</strong> Roadmapped. We do not claim certification until earned.</li>
<li><strong>Tax authority claims:</strong> None. We are independent.</li>
</ul>
<h2>How to reach us</h2>
<ul>
<li>General questions: <a href="/contact">contact</a></li>
<li>Privacy requests: privacy@payslipiq.com</li>
<li>Security disclosures: security@payslipiq.com</li>
<li>Press: press@payslipiq.com</li>
<li>Partnerships: partners@payslipiq.com</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
