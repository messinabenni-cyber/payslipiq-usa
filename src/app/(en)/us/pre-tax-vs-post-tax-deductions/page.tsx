import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Pre-Tax vs Post-Tax Deductions",
  description: "Pre-tax and post-tax deductions on a US paycheck. What reduces taxable wages, what reduces FICA, what does neither. Educational only.",
  alternates: { canonical: "/us/pre-tax-vs-post-tax-deductions" },
};

const FAQS = [{"q": "Does a Roth 401(k) reduce taxable wages?", "a": "No. Roth contributions are post-tax, so they don't reduce current taxable wages. Qualified withdrawals are tax-free in retirement."}, {"q": "Why doesn't my 401(k) reduce my FICA?", "a": "Pre-tax 401(k) is exempt from federal income tax but NOT from FICA. Section 125 cafeteria plan deductions (most health insurance, FSA) reduce FICA wages. 401(k) does not."}, {"q": "Are HSA contributions pre-tax or post-tax?", "a": "Pre-tax when made through payroll under a Section 125 cafeteria plan. After-tax HSA contributions you make outside payroll do not reduce FICA."}, {"q": "Are union dues pre-tax?", "a": "Almost always post-tax."}];
const RELATED = [{"label": "401(k) deductions", "href": "/us/401k-deductions"}, {"label": "HSA vs FSA", "href": "/us/hsa-vs-fsa"}, {"label": "Health insurance deductions", "href": "/us/health-insurance-deductions"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Pre-Tax vs Post-Tax", "url": "/us/pre-tax-vs-post-tax-deductions"}];

export default function Page() {
  return (
    <RichArticle
      title="Pre-Tax vs Post-Tax Deductions"
      url="/us/pre-tax-vs-post-tax-deductions"
      description="Pre-tax and post-tax deductions on a US paycheck. What reduces taxable wages, what reduces FICA, what does neither. Educational only."
      intro={<>Some paycheck deductions reduce your taxable wages before tax is calculated. Others come out after tax. The difference is real money over the course of a year. Here is the structure.</>}
      body={<><h2>Pre-tax deductions</h2>
<p>Come out of gross before federal (and most state) income tax is calculated. Examples:</p>
<ul>
<li>Traditional 401(k), 403(b), 457(b) elective deferrals</li>
<li>Traditional HSA contributions through payroll</li>
<li>Health FSA contributions</li>
<li>Dependent Care FSA contributions</li>
<li>Most employer-sponsored health, dental, vision insurance under Section 125</li>
<li>Commuter benefits (transit and parking) under Section 132</li>
</ul>
<h2>Post-tax deductions</h2>
<p>Come out after taxes are withheld. Examples:</p>
<ul>
<li>Roth 401(k), 403(b), 457(b) elective deferrals</li>
<li>Wage garnishments</li>
<li>Charitable contributions via payroll</li>
<li>Some life insurance, AD&D, disability insurance premiums</li>
<li>Union dues (in many cases)</li>
<li>401(k) loan repayments</li>
</ul>
<h2>The FICA exception</h2>
<p>Most pre-tax deductions reduce both income tax wages and FICA wages. But pre-tax 401(k), 403(b) and 457(b) do NOT reduce FICA wages. Only Section 125 cafeteria plan deductions and Section 132 commuter benefits reduce FICA.</p>
<h2>How they show on your stub</h2>
<p>Pre-tax deductions usually appear in their own section, separate from withholding taxes. The pay stub may label the section "pre-tax" or just show the items. The "Federal Taxable Wages" line is reduced by these.</p>
<p>Post-tax deductions appear in another section, after the tax lines.</p>
<h2>Why it matters</h2>
<p>A $200 monthly traditional 401(k) contribution at a 22 percent federal bracket saves $44 per month in federal tax versus the same contribution to a Roth. Across a year, $528. Across a career, that is real money.</p>
<p>The flip side: pre-tax means you owe tax later in retirement. Whether pre-tax or Roth wins depends on your current vs retirement bracket.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
