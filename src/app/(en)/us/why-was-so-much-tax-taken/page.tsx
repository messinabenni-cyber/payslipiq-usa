import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Why Was So Much Tax Taken From My Paycheck?",
  description: "Reasons your paycheck has more tax than you expected. Federal withholding, FICA, state tax, supplemental rate. Educational only.",
  alternates: { canonical: "/us/why-was-so-much-tax-taken" },
};

const FAQS = [{"q": "Is 22 percent the tax rate on bonuses?", "a": "No, that is the withholding rate. Your actual tax depends on your total annual income. If your effective rate is below 22 percent, the over-withholding comes back as a refund."}, {"q": "How do I lower my withholding?", "a": "Update your W-4 with your employer. Reduce dependents claimed in Step 3 to lower withholding (or increase to raise it). Adjust Step 4(c) extra withholding. Use the IRS Tax Withholding Estimator at irs.gov."}, {"q": "Does 401(k) reduce my FICA?", "a": "No. Pre-tax 401(k) reduces federal income tax wages and most state income tax wages, but not FICA wages."}];
const RELATED = [{"label": "Federal withholding", "href": "/us/federal-tax-withholding"}, {"label": "FICA explained", "href": "/us/fica-explained"}, {"label": "W-4 guide", "href": "/us/w4-guide"}, {"label": "Bonus tax", "href": "/us/bonus-tax-paycheck"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Why Was So Much Tax Taken", "url": "/us/why-was-so-much-tax-taken"}];

export default function Page() {
  return (
    <RichArticle
      title="Why Was So Much Tax Taken From My Paycheck?"
      url="/us/why-was-so-much-tax-taken"
      description="Reasons your paycheck has more tax than you expected. Federal withholding, FICA, state tax, supplemental rate. Educational only."
      intro={<>You looked at your pay stub and the deductions feel huge. Here are the usual culprits, ranked from most to least common.</>}
      body={<><h2>Reason 1: federal income tax withholding</h2>
<p>Your employer calculates federal withholding from your W-4 using IRS Publication 15-T. If you marked a higher filing status, claimed no dependents, or wrote in extra withholding on Step 4(c), your federal tax line gets bigger. Run the IRS Tax Withholding Estimator to see if your settings match your actual situation.</p>
<h2>Reason 2: FICA</h2>
<p>6.2 percent Social Security plus 1.45 percent Medicare equals 7.65 percent off the top of every dollar (no deduction reduces FICA wages except a Section 125 cafeteria plan). For someone earning $200,000, FICA is roughly $15,300 per year.</p>
<h2>Reason 3: state income tax</h2>
<p>If you live or work in a state with income tax, state withholding stacks on top of federal. California, New York, New Jersey, Oregon, Hawaii, Minnesota use progressive brackets. Pennsylvania, Illinois, North Carolina use a flat rate. Nine states have no state income tax at all.</p>
<h2>Reason 4: local tax</h2>
<p>NYC residents pay NYC income tax. Yonkers residents pay a Yonkers surcharge. Philadelphia residents pay city wage tax (non-residents working in Philly pay a slightly lower rate). Detroit, several Ohio cities, KCMO, St. Louis and others charge local tax.</p>
<h2>Reason 5: supplemental wage withholding</h2>
<p>If your paycheck included a bonus, commission, or back pay, that portion was likely withheld at the federal supplemental rate (22 percent up to $1M; 37 percent above). FICA also applies. The 22 percent is withholding, not your actual tax rate, your real bill is settled when you file.</p>
<h2>Reason 6: pre-tax deductions</h2>
<p>401(k), HSA and Section 125 health insurance reduce taxable wages. If you upped your 401(k) contribution mid-year, your federal tax withholding fell, but your net might also have fallen because the 401(k) deduction itself comes off your check.</p>
<h2>What to do</h2>
<p>Run the <a href="/us/paycheck-calculator">paycheck calculator</a> with your gross, state and filing status. Compare the estimated federal tax to what is actually being withheld. If they differ wildly, check your W-4 with the IRS estimator.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
