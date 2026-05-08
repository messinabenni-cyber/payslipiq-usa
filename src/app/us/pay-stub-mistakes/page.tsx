import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Common Pay Stub Mistakes (US)",
  description: "Twelve common payroll errors and how to spot them on a US pay stub. Educational only.",
  alternates: { canonical: "/us/pay-stub-mistakes" },
};

const FAQS = [{"q": "Is my employer required to give me a pay stub?", "a": "Depends on the state. See your state's pay stub laws page. Federal FLSA requires recordkeeping but does not require you receive a stub."}, {"q": "Can I sue my employer over a pay stub mistake?", "a": "Maybe, depending on the violation and state law. Consult an employment attorney."}, {"q": "Will PayslipIQ contact my employer for me?", "a": "No. We help you understand the stub and draft polite messages. You contact your employer."}];
const RELATED = [{"label": "Ask Payroll generator", "href": "/us/ask-payroll-generator"}, {"label": "Pay stub anatomy", "href": "/us/pay-stub-anatomy"}, {"label": "Wage garnishment", "href": "/us/wage-garnishment-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Pay Stub Mistakes", "url": "/us/pay-stub-mistakes"}];

export default function Page() {
  return (
    <RichArticle
      title="Common Pay Stub Mistakes (US)"
      url="/us/pay-stub-mistakes"
      description="Twelve common payroll errors and how to spot them on a US pay stub. Educational only."
      intro={<>Most payroll errors are software glitches or data-entry mistakes, not malice. Spot them early and most resolve quickly. Twelve patterns cover the majority of cases.</>}
      body={<><h2>The twelve most common errors</h2>
<ol>
<li><strong>Missing overtime</strong> on a non-exempt worker who exceeded 40 hours.</li>
<li><strong>Wrong filing status applied.</strong> W-4 says single but withholding looks MFJ, or vice versa.</li>
<li><strong>YTD mismatch.</strong> YTD on this stub does not equal prior YTD plus current period.</li>
<li><strong>Pre-tax deduction not reducing taxable wages.</strong> You contribute to traditional 401(k) but federal taxable wages match gross.</li>
<li><strong>Doubled deduction.</strong> Health premium deducted twice in one period.</li>
<li><strong>Missing 401(k) employer match</strong> per plan rules.</li>
<li><strong>State tax for a state you do not work in.</strong> Common after a remote-work address change.</li>
<li><strong>No FICA on bonus.</strong> Bonuses are FICA-taxable. Missing FICA on a supplemental check is a flag.</li>
<li><strong>Pay rate mismatch.</strong> Hourly rate or salary does not match offer letter.</li>
<li><strong>PTO accrual disappearing</strong> without a corresponding payout.</li>
<li><strong>Wage garnishment without notice.</strong> Most states require notice before garnishment starts.</li>
<li><strong>Final paycheck delayed.</strong> Many states require fast turnaround on terminations.</li>
</ol>
<h2>What to do if you spot one</h2>
<ol>
<li>Do not accuse. Most payroll errors are software or data-entry, not malice.</li>
<li>Document. Save the pay stub PDF. Note the specific line and the discrepancy.</li>
<li>Use the <a href="/us/ask-payroll-generator">Ask Payroll generator</a> to draft a polite, factual message.</li>
<li>If unresolved within a reasonable time and wages are at stake, the US Department of Labor Wage and Hour Division accepts complaints. State labor departments also handle wage claims.</li>
</ol>
<h2>What PayslipIQ does and does not do</h2>
<p>We help you spot patterns and frame the question. We do not adjudicate any specific employer's records. We do not contact your employer. We do not represent you in any dispute.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
