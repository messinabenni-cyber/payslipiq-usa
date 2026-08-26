import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "HSA and FSA Explained",
  description: "How Health Savings Account and Flexible Spending Account work on a US paycheck. Pre-tax. Limits. Tax-free for medical. Educational only.",
  alternates: { canonical: "/us/hsa-fsa-explained" },
};

const FAQS = [{"q": "What is the HSA contribution limit?", "a": "The IRS sets it annually. Verify the current year at irs.gov. There is a catch-up contribution for age 55+."}, {"q": "Can I have HSA and FSA at the same time?", "a": "Limited Purpose FSA (dental and vision only) yes. General-purpose FSA disqualifies HSA contributions."}, {"q": "What happens to my FSA when I leave a job?", "a": "Unspent funds typically forfeit unless your plan offers run-out or COBRA-style continuation."}, {"q": "Can I invest my HSA?", "a": "Yes, once you hit the plan's investment threshold. Most custodians allow mutual fund investments inside HSA."}];
const RELATED = [{"label": "HSA vs FSA", "href": "/us/hsa-vs-fsa"}, {"label": "Health insurance deductions", "href": "/us/health-insurance-deductions"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "HSA and FSA Explained", "url": "/us/hsa-fsa-explained"}];

export default function Page() {
  return (
    <RichArticle
      title="HSA and FSA Explained"
      url="/us/hsa-fsa-explained"
      description="How Health Savings Account and Flexible Spending Account work on a US paycheck. Pre-tax. Limits. Tax-free for medical. Educational only."
      intro={<>Tax-advantaged ways to pay for medical expenses through your paycheck. HSA and FSA both use pre-tax dollars but with different rules.</>}
      body={<><h2>HSA basics</h2>
<p>Health Savings Account. Available only with a High Deductible Health Plan (HDHP). Annual limits set by the IRS. Funds roll over year to year, and the account is yours for life. Can be invested once balance hits a plan threshold.</p>
<h2>FSA basics</h2>
<p>Flexible Spending Account. Available with most employer health plans. Annual limit set by the IRS, lower than HSA. Use-it-or-lose-it: any unspent funds at year-end are forfeited (with a small carryover or grace period in some plans).</p>
<h2>Tax treatment</h2>
<p>Both reduce federal income tax wages, FICA wages, and most state income tax wages when contributed through a Section 125 cafeteria plan via payroll deduction.</p>
<h2>Triple tax advantage of HSA</h2>
<p>HSA is the only account in the US tax code that is tax-free at all three stages: contribution, growth, and qualified withdrawal. No other vehicle matches this.</p>
<h2>Limited Purpose FSA</h2>
<p>A special FSA limited to dental and vision expenses. Can co-exist with HSA. Useful if you want HSA contributions plus dental/vision FSA.</p>
<h2>Dependent Care FSA</h2>
<p>Different account for dependent care expenses (childcare, after-school care). Separate annual limit. Use-it-or-lose-it.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
