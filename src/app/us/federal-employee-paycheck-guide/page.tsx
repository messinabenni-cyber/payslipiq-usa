import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Federal Civilian Paycheck Guide (GS, FERS, TSP)",
  description: "GS pay scale, locality pay, FERS retirement, FEHB health insurance, Thrift Savings Plan. Educational only.",
  alternates: { canonical: "/us/federal-employee-paycheck-guide" },
};

const FAQS = [{"q": "Where do I find my GS pay?", "a": "OPM publishes annual GS pay tables at opm.gov. Find your grade, step and locality."}, {"q": "What is FEHB?", "a": "Federal Employees Health Benefits. The largest employer-sponsored health insurance program in the US. Premiums partly subsidized."}, {"q": "Are TSP contributions pre-tax or Roth?", "a": "Both. Traditional reduces taxable wages now. Roth is post-tax with tax-free qualified withdrawals. You can split."}, {"q": "What is the FERS pension?", "a": "Defined-benefit pension based on years of service times high-3 average salary times 1 percent (or 1.1 percent if you retire at 62 plus with 20+ years). Vesting at 5 years."}];
const RELATED = [{"label": "Military guide", "href": "/us/military-paycheck-guide"}, {"label": "401(k) explained", "href": "/us/401k-deductions"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Federal Employee Paycheck Guide", "url": "/us/federal-employee-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Federal Civilian Paycheck Guide (GS, FERS, TSP)"
      url="/us/federal-employee-paycheck-guide"
      description="GS pay scale, locality pay, FERS retirement, FEHB health insurance, Thrift Savings Plan. Educational only."
      intro={<>Federal civilian employees on the General Schedule have a structured pay setup. Base GS pay, locality pay, FERS contributions, FEHB premiums, TSP. Here is how each piece works on the LES.</>}
      body={<><h2>General Schedule (GS) pay</h2>
<p>GS-1 through GS-15, ten steps each. Higher steps reflect longevity. OPM publishes new pay tables every January. Senior Executive Service is a separate scale above GS-15.</p>
<h2>Locality pay</h2>
<p>A percentage uplift on top of base GS pay, by duty location. Higher in DC, NYC and SF. Lower in rest-of-US areas. Locality pay is taxable wages.</p>
<h2>FERS retirement</h2>
<p>Most federal employees hired after 1984 are FERS. Three components: a defined-benefit pension (small employee contribution, 0.8 to 4.4 percent depending on hire year), Social Security, and TSP.</p>
<h2>Thrift Savings Plan</h2>
<p>The federal 401(k)-equivalent. Traditional or Roth. Government matches up to 5 percent (1 percent automatic plus 4 percent match). Annual limits match 401(k).</p>
<h2>FEHB health insurance</h2>
<p>Federal Employees Health Benefits. Many plans. Premiums partly subsidized. Pre-tax via the Federal Employees Health Benefits Premium Conversion plan.</p>
<h2>Common LES lines</h2>
<ul>
<li>Base GS pay.</li>
<li>Locality pay.</li>
<li>FERS retirement contribution.</li>
<li>Social Security and Medicare.</li>
<li>Federal income tax withholding.</li>
<li>State income tax (where applicable).</li>
<li>FEHB premium.</li>
<li>TSP contribution.</li>
</ul></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
