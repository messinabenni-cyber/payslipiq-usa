import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "What Does Social Security Mean on My Paycheck?",
  description: "Social Security tax (OASDI) on a US paycheck. 6.2 percent up to the annual wage base. Educational only.",
  alternates: { canonical: "/us/what-does-social-security-mean-on-paycheck" },
};

const FAQS = [{"q": "Why did my Social Security tax stop in November?", "a": "You hit the annual wage base. Social Security tax stops for the rest of the calendar year. It starts again January 1 when YTD resets."}, {"q": "Will I get those Social Security contributions back?", "a": "Not as a refund. They fund your future Social Security benefits. The amount of benefits you eventually receive depends on your highest 35 years of earnings (indexed)."}, {"q": "What if I have multiple employers and total wages exceed the wage base?", "a": "Each employer caps at the base separately. So you may overpay across multiple employers. You can claim the excess Social Security tax as a credit on your federal tax return."}];
const RELATED = [{"label": "FICA", "href": "/us/fica-explained"}, {"label": "Medicare", "href": "/us/medicare-tax"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Social Security on Paycheck", "url": "/us/what-does-social-security-mean-on-paycheck"}];

export default function Page() {
  return (
    <RichArticle
      title="What Does Social Security Mean on My Paycheck?"
      url="/us/what-does-social-security-mean-on-paycheck"
      description="Social Security tax (OASDI) on a US paycheck. 6.2 percent up to the annual wage base. Educational only."
      intro={<>The Social Security line on your pay stub funds Social Security retirement, disability and survivor benefits. 6.2 percent of wages up to an annual cap. Once you cross the cap, the tax stops for the rest of the year.</>}
      body={<><h2>The rate</h2>
<p>6.2 percent on wages up to the annual Social Security wage base. The base is set annually by the SSA and indexed to inflation. Once your year-to-date wages with all employers (yes, all combined for self-reporting purposes) exceed the base, Social Security tax stops for the rest of the calendar year.</p>
<h2>The wage base in practice</h2>
<p>For 2024 the wage base was $168,600. Verify the current year at ssa.gov. A high earner who hits the base in October sees Social Security tax stop in November and December, then start again January 1.</p>
<h2>Employer match</h2>
<p>Your employer pays an equal 6.2 percent on the employer side. So Social Security is funded by 12.4 percent total per worker, capped at the wage base each year.</p>
<h2>What it funds</h2>
<p>Old Age, Survivors and Disability Insurance (OASDI). Retirement benefits. Disability benefits for workers and certain dependents. Survivor benefits.</p>
<h2>How it shows on your stub</h2>
<p>Usually a line labeled SOC SEC, OASDI, or SS. The amount equals 6.2 percent of your paycheck wages, capped once you hit the base.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
