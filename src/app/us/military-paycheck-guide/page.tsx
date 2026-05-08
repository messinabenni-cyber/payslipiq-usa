import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Military Paycheck Guide (LES, BAH, BAS, CZTE, TSP)",
  description: "Active-duty pay structure: base pay, BAH, BAS, special pays, combat zone tax exclusion, Thrift Savings Plan. Educational only.",
  alternates: { canonical: "/us/military-paycheck-guide" },
};

const FAQS = [{"q": "Is BAH taxed?", "a": "No. BAH is tax-free federally and in most states. Does not appear in Box 1 wages on the W-2."}, {"q": "Is BAS taxed?", "a": "No. Same treatment as BAH."}, {"q": "Do I pay state tax where I am stationed?", "a": "Generally no. You pay state tax in your State of Legal Residence (SLR), regardless of where you are stationed. The Servicemembers Civil Relief Act protects this. You set SLR via DD 2058."}, {"q": "How does the combat zone exclusion show on my LES?", "a": "The pay earned in the combat zone is shown but excluded from federal income tax. Enlisted get full exclusion. Officers are capped."}];
const RELATED = [{"label": "Federal employee guide", "href": "/us/federal-employee-paycheck-guide"}, {"label": "W-2 explained", "href": "/us/w2-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Military Paycheck Guide", "url": "/us/military-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Military Paycheck Guide (LES, BAH, BAS, CZTE, TSP)"
      url="/us/military-paycheck-guide"
      description="Active-duty pay structure: base pay, BAH, BAS, special pays, combat zone tax exclusion, Thrift Savings Plan. Educational only."
      intro={<>Active-duty military pay is unlike civilian pay in several ways. Pay scale by grade and time in service, tax-free housing and food allowances, special pays for hazardous duty, and a separate retirement system. Here is how each piece sits on the LES.</>}
      body={<><h2>Base pay</h2>
<p>Determined by pay grade (E-1 through O-10) and years of service. The Department of Defense publishes annual pay charts. Base pay is taxable.</p>
<h2>BAH and BAS</h2>
<p>BAH (Basic Allowance for Housing) covers housing costs when not in government quarters. Amount depends on rank, dependents and ZIP code. BAS (Basic Allowance for Subsistence) is a flat monthly food allowance. Both are tax-free at the federal level and in most states.</p>
<h2>Special pays</h2>
<ul>
<li>Hazardous Duty Pay (paratrooper, demolition).</li>
<li>Sea Pay.</li>
<li>Flight Pay.</li>
<li>Submarine Pay.</li>
<li>Hostile Fire / Imminent Danger Pay.</li>
<li>Family Separation Allowance.</li>
</ul>
<p>Most special pays are taxable. Some (combat zone) are excluded.</p>
<h2>Combat Zone Tax Exclusion (CZTE)</h2>
<p>Pay earned while serving in a designated combat zone is excluded from federal income tax. Enlisted get full exclusion. Officers are capped at the maximum enlisted pay rate plus imminent danger pay. State exclusion varies.</p>
<h2>Thrift Savings Plan (TSP)</h2>
<p>The military and federal civilian 401(k)-equivalent. Traditional or Roth. Up to 5 percent government match under the Blended Retirement System.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
