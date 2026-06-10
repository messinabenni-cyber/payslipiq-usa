import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';
import { PayNumbers2026 } from '@/components/PayNumbers2026';

import { ReviewedBy } from '@/components/ReviewedBy';
export const metadata: Metadata = {
  title: "Social Security Tax (OASDI) Explained",
  description: "Social Security tax: 6.2 percent of wages up to the annual wage base. Funds OASDI. Stops once you cross the cap. Educational only.",
  alternates: { canonical: "/us/social-security-tax" },
};

const FAQS = [{"q": "Why did my Social Security tax stop in November?", "a": "You hit the annual wage base. Tax stops for the rest of the calendar year and resets January 1."}, {"q": "Will I get my Social Security contributions back?", "a": "Not as a refund. They fund your future Social Security benefits. The amount you eventually receive depends on your highest 35 years of earnings, indexed."}, {"q": "What if my multi-employer wages exceed the cap?", "a": "You may overpay Social Security. Claim the excess as a refundable credit on your federal return."}, {"q": "How does the Social Security wage base change each year?", "a": "SSA indexes it to national average wages. The new base is published each fall for the next calendar year."}];
const RELATED = [{"label": "FICA", "href": "/us/fica-explained"}, {"label": "Medicare tax", "href": "/us/medicare-tax"}, {"label": "Self-employment tax", "href": "/us/contractor-vs-employee-paycheck-guide"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Social Security Tax", "url": "/us/social-security-tax"}];

export default function Page() {
  return (
    <RichArticle
      title="Social Security Tax (OASDI) Explained"
      url="/us/social-security-tax"
      description="Social Security tax: 6.2 percent of wages up to the annual wage base. Funds OASDI. Stops once you cross the cap. Educational only."
      intro={<>The Social Security line on your pay stub funds Old Age, Survivors and Disability Insurance. 6.2 percent of wages, capped each year at the wage base. Once you cross the cap, the tax stops until January.</>}
      body={<><h2>The rate and the cap</h2>
<p>6.2 percent on wages up to the annual Social Security wage base. The 2024 wage base was $168,600. SSA publishes the new base each fall, indexed to wage growth. Once your year-to-date wages cross the base, Social Security tax stops for the rest of the calendar year.</p>
<h2>Employer match</h2>
<p>Your employer pays an equal 6.2 percent on the employer side. So Social Security is funded by 12.4 percent total per worker, capped at the wage base.</p>
<h2>What it funds</h2>
<p>Old Age, Survivors and Disability Insurance (OASDI). Retirement benefits at 62+ (full at full retirement age, currently 67 for those born 1960+). Disability benefits for workers and dependents. Survivor benefits for spouses and minor children.</p>
<h2>Multi-employer overpayment</h2>
<p>Each employer caps Social Security tax at the wage base separately. If you have multiple employers and total wages exceed the base, you may overpay Social Security. Claim the excess as a refundable credit on your federal tax return.</p>
<h2>Self-employment</h2>
<p>1099 contractors pay both halves: 12.4 percent on net earnings up to the wage base. Half is deductible above the line.</p>
<h2>Future benefit calculation</h2>
<p>Your benefit at retirement is calculated from your highest 35 years of earnings (indexed). The Social Security Administration sends an annual statement showing your earnings record and projected benefits.</p>
<h2>Common pay stub labels</h2>
<p>SOC SEC, OASDI, SS, FICA-SS. The amount equals 6.2 percent of paycheck wages, capped once you hit the annual base.</p><div className="not-prose mt-8"><PayNumbers2026 variant="compact" /></div></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
