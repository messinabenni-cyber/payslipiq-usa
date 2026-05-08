import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Health Insurance Deductions on Your Paycheck",
  description: "Pre-tax health, dental, vision premiums under Section 125. HSA, FSA. How they show on a US pay stub. Educational only.",
  alternates: { canonical: "/us/health-insurance-deductions" },
};

const FAQS = [{"q": "Is my health insurance pre-tax?", "a": "Almost always, when you elect it through the employer's cafeteria plan. After-tax COBRA premiums are post-tax."}, {"q": "Does Section 125 reduce my FICA?", "a": "Yes. Section 125 deductions reduce both federal income tax wages and FICA wages. This is rare, most pre-tax deductions only reduce income tax wages."}, {"q": "Can I have HSA and FSA?", "a": "Limited Purpose FSA (dental and vision only) can co-exist with HSA. General-purpose FSA disqualifies HSA contributions."}, {"q": "What happens to FSA at the end of the year?", "a": "Use-it-or-lose-it, except many plans offer a small carryover (up to ~$640 in recent years) or a grace period."}];
const RELATED = [{"label": "HSA vs FSA", "href": "/us/hsa-vs-fsa"}, {"label": "HSA and FSA explained", "href": "/us/hsa-fsa-explained"}, {"label": "Pre-tax vs post-tax", "href": "/us/pre-tax-vs-post-tax-deductions"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Health Insurance Deductions", "url": "/us/health-insurance-deductions"}];

export default function Page() {
  return (
    <RichArticle
      title="Health Insurance Deductions on Your Paycheck"
      url="/us/health-insurance-deductions"
      description="Pre-tax health, dental, vision premiums under Section 125. HSA, FSA. How they show on a US pay stub. Educational only."
      intro={<>Most US employer-sponsored health insurance is paid for via pre-tax payroll deductions under Section 125 of the tax code. The deduction reduces both federal income tax wages and FICA wages. Here is how the pieces fit.</>}
      body={<><h2>Section 125 cafeteria plan</h2>
<p>The legal vehicle that lets employers pre-tax health, dental, vision, FSA and HSA premiums. The "cafeteria" name comes from employees picking benefits from a list. Section 125 deductions reduce both income tax wages AND FICA wages, which is rare.</p>
<h2>Common pre-tax health lines</h2>
<ul>
<li>Medical premium (employer-sponsored health insurance employee share)</li>
<li>Dental premium</li>
<li>Vision premium</li>
<li>HSA contributions (only under cafeteria plan; outside-payroll HSA is post-tax-then-deductible)</li>
<li>Health FSA</li>
<li>Dependent Care FSA (separate annual limit, separate purpose)</li>
</ul>
<h2>What they save you</h2>
<p>Pre-tax means lower federal income tax wages, lower FICA wages (rare), lower most state income tax wages. For a $200/month medical premium at a 22 percent federal bracket plus 7.65 percent FICA plus 5 percent state, the pre-tax savings are roughly 35 percent. So $200 of pre-tax premium costs about $130 in net pay terms.</p>
<h2>HSA</h2>
<p>Available with a High Deductible Health Plan (HDHP). Annual limit set by the IRS. Funds roll over indefinitely. Tax-free for qualified medical expenses. Investable once balance crosses a threshold.</p>
<h2>FSA</h2>
<p>Available with most plans. Annual limit lower than HSA. Use-it-or-lose-it (with limited carryover or grace period in some plans).</p>
<h2>Limited Purpose FSA</h2>
<p>Restricts FSA use to dental and vision so it can co-exist with HSA.</p>
<h2>Dependent Care FSA</h2>
<p>Different account for childcare or adult-care expenses. Separate limit.</p>
<h2>Common pay stub labels</h2>
<p>MED, MEDICAL, HLTH, DEN, VIS, HSA, FSA, DEP CARE.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
