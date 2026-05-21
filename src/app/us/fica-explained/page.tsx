import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "FICA on Your Paycheck (Social Security + Medicare)",
  description: "FICA is a federal payroll tax: 6.2% Social Security up to the wage base, 1.45% Medicare on all wages, plus 0.9% Additional Medicare for high earners.",
  alternates: { canonical: "/us/fica-explained" },
};

const FAQS = [{"q": "What does FICA stand for?", "a": "Federal Insurance Contributions Act. It is the federal payroll tax funding Social Security and Medicare."}, {"q": "Is FICA the same as federal income tax?", "a": "No. FICA funds Social Security and Medicare. Federal income tax goes to the general US Treasury. Both come out of your paycheck but they are separate taxes with different rules."}, {"q": "Why did Social Security tax stop in November?", "a": "You hit the annual wage base. Once year-to-date wages exceed the cap, Social Security tax stops for the rest of the year. It resets to zero on January 1."}, {"q": "What is the Additional Medicare Tax?", "a": "An extra 0.9 percent Medicare tax on wages above $200,000 single or $250,000 married filing jointly. Employee-only, no employer match."}, {"q": "Do 401(k) contributions reduce FICA?", "a": "No. Pre-tax 401(k) reduces federal income tax wages and most state income tax wages, but not FICA wages."}, {"q": "Can I get FICA back?", "a": "Generally no. Narrow exceptions exist for some student workers and for certain non-resident alien students on F-1, M-1 or J-1 visas. Most US workers cannot recover FICA."}];
const RELATED = [{"label": "Social Security tax", "href": "/us/social-security-tax"}, {"label": "Medicare tax", "href": "/us/medicare-tax"}, {"label": "Additional Medicare Tax", "href": "/us/additional-medicare-tax"}, {"label": "Federal withholding", "href": "/us/federal-tax-withholding"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "FICA Explained", "url": "/us/fica-explained"}];

export default function Page() {
  return (
    <RichArticle
      title="FICA on Your Paycheck (Social Security + Medicare)"
      url="/us/fica-explained"
      description="FICA is a federal payroll tax: 6.2 percent Social Security up to the wage base, 1.45 percent Medicare on all wages, plus 0.9 percent Additional Medicare for high earners. Educational only."
      intro={<>Two letters that make up the largest deduction line on most American pay stubs. FICA funds Social Security and Medicare. Here is exactly what each piece does and why your stub looks the way it does.</>}
      directAnswer={<>FICA is the federal payroll tax that funds Social Security and Medicare. It is 6.2% for Social Security on wages up to the 2026 wage base of $184,500, plus 1.45% for Medicare on all wages, plus an extra 0.9% Additional Medicare Tax on wages above $200,000 (single) or $250,000 (married filing jointly). Your employer matches the 6.2% and 1.45%, but not the 0.9%.</>}
      body={<><h2>What FICA stands for</h2>
<p>Federal Insurance Contributions Act. The 1935 law that created the federal payroll tax funding two big retirement and health programs. The acronym shows up on most pay stubs either as a single FICA line or as two separate lines: Social Security and Medicare.</p>
<h2>The two halves</h2>
<h3>Social Security (OASDI)</h3>
<p>6.2 percent of wages, capped each calendar year at the Social Security wage base. The 2026 wage base is $184,500 (up from $176,100 in 2025 and $168,600 in 2024). The base is set annually by the SSA and indexed to inflation. Once your year-to-date wages cross the base, Social Security tax stops for the rest of the year. It resets January 1.</p>
<p>Funds: retirement benefits, disability benefits, survivor benefits. Old Age, Survivors, and Disability Insurance (OASDI).</p>
<h3>Medicare (HI)</h3>
<p>1.45 percent on all wages, no cap. Plus an Additional Medicare Tax of 0.9 percent on wages above $200,000 single or $250,000 married filing jointly. The 0.9 percent is employee-only, no employer match.</p>
<p>Funds: Medicare Part A (hospital insurance) for people 65+, certain disabled workers, and end-stage renal disease patients.</p>
<h2>Employer match</h2>
<p>Your employer matches 6.2 percent Social Security and 1.45 percent Medicare on the employer side. They do not match the 0.9 percent Additional Medicare Tax. Total combined FICA per worker is 12.4 percent SS plus 2.9 percent Medicare, plus 0.9 percent above the threshold.</p>
<h2>Self-employment FICA</h2>
<p>1099 contractors pay both halves themselves: 12.4 percent Social Security plus 2.9 percent Medicare plus 0.9 percent above thresholds. Called self-employment tax. Half is deductible above the line on your federal return.</p>
<h2>What does and does not reduce FICA wages</h2>
<p>Section 125 cafeteria plan deductions (most pre-tax health insurance, FSA, traditional HSA via payroll) reduce FICA wages.</p>
<p>Pre-tax 401(k) contributions do NOT reduce FICA wages, even though they reduce federal income tax wages.</p>
<h2>What you see on your pay stub</h2>
<p>Common labels: FICA, OASDI, SOC SEC, MED, MEDICARE, FED MED. Combined or split. Either way, the math is the same.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
