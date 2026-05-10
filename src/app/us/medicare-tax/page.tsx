import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

import { ReviewedBy } from '@/components/ReviewedBy';
export const metadata: Metadata = {
  title: "Medicare Tax Explained",
  description: "Medicare tax: 1.45 percent on all wages, no cap. Plus 0.9 percent Additional Medicare for high earners. Funds Medicare Part A. Educational only.",
  alternates: { canonical: "/us/medicare-tax" },
};

const FAQS = [{"q": "What is the Medicare tax rate?", "a": "1.45 percent on all wages, no cap. The 0.9 percent Additional Medicare Tax applies to wages above $200,000 single or $250,000 married filing jointly."}, {"q": "Does my employer match Medicare?", "a": "Yes, 1.45 percent on the base. The 0.9 percent Additional Medicare is employee-only, no employer match."}, {"q": "Does 401(k) reduce Medicare?", "a": "No. Pre-tax 401(k) reduces federal income tax wages, not Medicare wages."}, {"q": "I have multiple jobs and crossed $200k. Will withholding be right?", "a": "Employers withhold the Additional Medicare based on wages with that employer alone. With multiple jobs, your combined wages may trigger the surcharge before either employer recognizes it. You may owe additional at filing or have over-withheld. Use Form 8959 at filing time."}];
const RELATED = [{"label": "FICA", "href": "/us/fica-explained"}, {"label": "Additional Medicare Tax", "href": "/us/additional-medicare-tax"}, {"label": "Social Security tax", "href": "/us/social-security-tax"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Medicare Tax", "url": "/us/medicare-tax"}];

export default function Page() {
  return (
    <RichArticle
      title="Medicare Tax Explained"
      url="/us/medicare-tax"
      description="Medicare tax: 1.45 percent on all wages, no cap. Plus 0.9 percent Additional Medicare for high earners. Funds Medicare Part A. Educational only."
      intro={<>The Medicare line on your pay stub funds the federal Medicare program. Two pieces: a 1.45 percent base on every dollar with no cap, plus a 0.9 percent surcharge once your wages cross the threshold.</>}
      body={<><h2>Base Medicare tax</h2>
<p>1.45 percent on all wages. No wage base cap. Your employer matches 1.45 percent on the employer side. Total per-worker cost is 2.9 percent.</p>
<h2>Additional Medicare Tax</h2>
<p>0.9 percent on wages above $200,000 single or $250,000 married filing jointly. Employee-only, no employer match. Employers withhold the Additional Medicare once your wages with that employer exceed $200,000 in a calendar year, regardless of filing status. If you have multiple jobs and total wages exceed the threshold, you may owe more (or less) at filing time.</p>
<h2>What it funds</h2>
<p>Medicare Part A (hospital insurance) for people 65+, certain disabled workers, and end-stage renal disease patients. Medicare Parts B and D are funded primarily through premiums, not the payroll tax.</p>
<h2>What does and does not reduce Medicare wages</h2>
<p>Section 125 cafeteria plan deductions (pre-tax health insurance, FSA via payroll, HSA via payroll under cafeteria plan) reduce Medicare wages.</p>
<p>Pre-tax 401(k) contributions do NOT reduce Medicare wages.</p>
<h2>Self-employment</h2>
<p>1099 contractors pay 2.9 percent self-employment Medicare on all net earnings (no cap). Plus 0.9 percent above the thresholds. Half of the 2.9 percent is deductible above the line.</p>
<h2>How it shows on your stub</h2>
<p>MED, MEDICARE, FED MED, FICA-MED. The Additional Medicare Tax appears as a separate line if applicable.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
