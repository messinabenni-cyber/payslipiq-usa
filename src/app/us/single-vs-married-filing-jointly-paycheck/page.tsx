import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Single vs Married Filing Jointly on Your Paycheck",
  description: "How filing status changes federal withholding. Single vs MFJ brackets, standard deduction, MFJ withholding tables. Educational only.",
  alternates: { canonical: "/us/single-vs-married-filing-jointly-paycheck" },
};

const FAQS = [{"q": "Should I use Step 2 of the W-4 after I get married?", "a": "If both spouses work, yes. Step 2 prevents under-withholding when two incomes combine into one MFJ tax return. The IRS Tax Withholding Estimator at irs.gov is the easiest way to dial it in."}, {"q": "What is the marriage penalty?", "a": "When two roughly equal high earners pay more federal tax filing MFJ than they would have as two singles. The penalty kicks in at upper brackets where MFJ thresholds are less than 2x single."}, {"q": "Should I file MFS?", "a": "Usually no. MFS disqualifies several credits and deductions. Specific reasons (e.g., separating liability, income-based student loan repayment) can justify it. Talk to a CPA."}];
const RELATED = [{"label": "W-4 guide", "href": "/us/w4-guide"}, {"label": "Federal withholding", "href": "/us/federal-tax-withholding"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Single vs MFJ", "url": "/us/single-vs-married-filing-jointly-paycheck"}];

export default function Page() {
  return (
    <RichArticle
      title="Single vs Married Filing Jointly on Your Paycheck"
      url="/us/single-vs-married-filing-jointly-paycheck"
      description="How filing status changes federal withholding. Single vs MFJ brackets, standard deduction, MFJ withholding tables. Educational only."
      intro={<>Marriage changes federal withholding because the tax brackets and standard deduction are different. Understanding the difference avoids over- or under-withholding when you tell payroll you got married (or divorced).</>}
      body={<><h2>Standard deduction comparison</h2>
<p>For 2026, the federal standard deduction is approximately $15,000 for single filers and $30,000 for married filing jointly. Verify current numbers at irs.gov.</p>
<h2>Tax brackets</h2>
<p>MFJ brackets are wider than single brackets at every level. So the same income that puts a single filer in the 24 percent bracket may keep an MFJ filer in the 12 percent bracket.</p>
<h2>What happens at the paycheck</h2>
<p>If you change your W-4 from single to MFJ, your employer's federal withholding drops because the wider brackets apply. If both spouses work, this can lead to under-withholding overall, which is why W-4 Step 2 (multiple jobs) exists. Use the IRS Tax Withholding Estimator after a marriage to recheck.</p>
<h2>The marriage bonus and penalty</h2>
<p>If one spouse earns most of the income, MFJ usually saves tax versus filing single (the marriage bonus). If both earn similar high incomes, MFJ can cost more than two single filings would have (the marriage penalty). The split point depends on income levels and the year's brackets.</p>
<h2>Married Filing Separately</h2>
<p>MFS is a third option. It uses brackets similar to single (sometimes worse) and disqualifies several deductions and credits. Rarely advantageous, but can make sense in specific cases (e.g., separating tax liabilities, income-based student loan repayment).</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
