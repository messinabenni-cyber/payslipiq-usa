import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "HSA vs FSA",
  description: "Health Savings Account versus Flexible Spending Account. Eligibility, limits, rollover, ownership. Educational only.",
  alternates: { canonical: "/us/hsa-vs-fsa" },
};

const FAQS = [{"q": "Can I have both HSA and FSA?", "a": "Generally not at the same time. A limited-purpose FSA (dental and vision only) can co-exist with HSA. A general-purpose FSA disqualifies HSA contributions."}, {"q": "Do HSA contributions reduce FICA?", "a": "Pre-tax HSA contributions through payroll (cafeteria plan) reduce FICA wages. After-tax HSA contributions you make outside payroll do not."}, {"q": "What happens to my FSA if I leave my job?", "a": "Unspent FSA funds typically forfeit, with limited COBRA-style continuation rights in some plans. Use it before you leave."}];
const RELATED = [{"label": "Health insurance deductions", "href": "/us/health-insurance-deductions"}, {"label": "Pre-tax vs post-tax", "href": "/us/pre-tax-vs-post-tax-deductions"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "HSA vs FSA", "url": "/us/hsa-vs-fsa"}];

export default function Page() {
  return (
    <RichArticle
      title="HSA vs FSA"
      url="/us/hsa-vs-fsa"
      description="Health Savings Account versus Flexible Spending Account. Eligibility, limits, rollover, ownership. Educational only."
      intro={<>Both pay for medical expenses with pre-tax dollars. They behave very differently. HSA is yours for life, FSA is use-it-or-lose-it.</>}
      body={<><h2>Eligibility</h2>
<p>HSA requires a High Deductible Health Plan (HDHP). FSA is offered with most employer plans, no HDHP required.</p>
<h2>Annual limits</h2>
<p>HSA limits are higher than FSA and rise faster. The IRS publishes both annually. Verify at irs.gov.</p>
<h2>Rollover</h2>
<p>HSA rolls over fully year to year. Forever. You take it with you when you change employers. FSA traditionally is use-it-or-lose-it, with a small carryover or grace period if your plan allows.</p>
<h2>Investment</h2>
<p>HSA can be invested once you hit a balance threshold. Long-term investment growth is tax-free for qualified medical expenses. FSA is not invested.</p>
<h2>Tax treatment</h2>
<p>Both are pre-tax for federal income tax, FICA, and most state taxes. Both reduce taxable wages.</p>
<h2>Ownership</h2>
<p>HSA is yours, in your name, at a custodian (bank or broker) you choose (within plan rules). FSA is owned by the employer's plan, you forfeit unspent funds when you leave.</p>
<h2>Triple tax advantage of HSA</h2>
<p>1. Contributions reduce taxable wages. 2. Investment growth is tax-deferred. 3. Withdrawals for qualified medical expenses are tax-free. No other account has all three.</p>
<h2>FSA strengths</h2>
<p>No HDHP requirement. Often lower-deductible plans pair with FSA. Useful if you have predictable medical or dependent-care expenses each year.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
