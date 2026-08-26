import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';
import { DatasetSchema } from '@/components/DatasetSchema';

export const metadata: Metadata = {
  title: 'What Changed for Your 2026 Paycheck',
  description:
    '2026 paycheck and tax changes in plain English: new federal brackets, a higher standard deduction, the $184,500 Social Security wage base, and 2026 401(k), HSA, and FSA limits. Educational only.',
  alternates: { canonical: '/us/2026-tax-changes-summary' },
};

const FAQS = [
  {
    q: 'Why did my paycheck change in January 2026?',
    a: 'Two common reasons. First, the IRS inflation-adjusted the federal tax brackets and the standard deduction for 2026, which changes federal withholding. Second, your year-to-date Social Security wages reset to zero on January 1, so Social Security tax restarts if it had stopped late in 2025 after you hit the wage base.',
  },
  {
    q: 'What is the 2026 standard deduction?',
    a: 'For tax year 2026 the standard deduction is $16,100 for single filers, $32,200 for married filing jointly, and $24,150 for head of household, per IRS Rev. Proc. 2025-32. A larger standard deduction reduces taxable income, which can slightly lower federal withholding.',
  },
  {
    q: 'Did the Social Security tax change for 2026?',
    a: 'The rate did not change — it is still 6.2% for employees. The wage base did: for 2026 Social Security tax applies to the first $184,500 of wages, up from $176,100 in 2025. Higher earners pay Social Security tax on more of their pay before it stops for the year.',
  },
  {
    q: 'How much can I contribute to a 401(k) in 2026?',
    a: 'The 2026 employee elective deferral limit is $24,500, up from $23,500 in 2025. The age 50+ catch-up is $8,000, and the SECURE 2.0 catch-up for workers aged 60 to 63 is $11,250. These figures come from IRS Notice 2025-67.',
  },
];

const RELATED = [
  { label: 'Federal income tax withholding', href: '/us/federal-tax-withholding' },
  { label: 'FICA explained', href: '/us/fica-explained' },
  { label: '401(k) contribution limits', href: '/us/401k-contribution-limits' },
  { label: 'Why did my net pay change?', href: '/us/why-did-my-net-pay-change' },
  { label: 'Paycheck calculator', href: '/us/paycheck-calculator' },
];

const BREADCRUMBS = [
  { name: 'Home', url: '/' },
  { name: 'US', url: '/us/learn' },
  { name: '2026 Tax Changes', url: '/us/2026-tax-changes-summary' },
];

export default function Page() {
  return (
    <>
    <DatasetSchema url="/us/2026-tax-changes-summary" />
    <RichArticle
      title="What Changed for Your 2026 Paycheck"
      url="/us/2026-tax-changes-summary"
      description="2026 paycheck and tax changes in plain English: new federal brackets, a higher standard deduction, the $184,500 Social Security wage base, and 2026 401(k), HSA, and FSA limits. Educational only."
      intro={<>Each year the IRS and SSA adjust the numbers that drive your paycheck. Here is what changed for 2026, why your take-home may look different, and where to verify each figure.</>}
      directAnswer={<>For 2026, the IRS raised the federal tax brackets and the standard deduction for inflation ($16,100 single / $32,200 married filing jointly), the Social Security wage base rose to $184,500, and the 401(k) employee limit rose to $24,500. None of the tax rates changed — only the thresholds. Most paychecks see only a small change. Figures: IRS Rev. Proc. 2025-32 and IRS Notice 2025-67.</>}
      body={<><h2>Why your 2026 paycheck may look different</h2>
<p>The federal tax rates (10, 12, 22, 24, 32, 35, and 37 percent) did not change for 2026. What changed is the income thresholds those rates apply to, plus the standard deduction. The IRS adjusts these every year for inflation. The result is usually a small change in federal withholding, not a dramatic one.</p>

<h2>2026 federal income tax brackets (single filer)</h2>
<p>Marginal rates apply to taxable income — gross pay minus the standard deduction or itemized deductions.</p>
<table>
<thead><tr><th>Rate</th><th>2026 taxable income (single)</th></tr></thead>
<tbody>
<tr><td>10%</td><td>Up to $12,400</td></tr>
<tr><td>12%</td><td>$12,400 – $50,400</td></tr>
<tr><td>22%</td><td>$50,400 – $105,700</td></tr>
<tr><td>24%</td><td>$105,700 – $201,775</td></tr>
<tr><td>32%</td><td>$201,775 – $256,225</td></tr>
<tr><td>35%</td><td>$256,225 – $640,600</td></tr>
<tr><td>37%</td><td>Over $640,600</td></tr>
</tbody>
</table>
<p>Married-filing-jointly brackets are exactly double the single figures through the 35 percent rate. Source: IRS Rev. Proc. 2025-32.</p>

<h2>2026 standard deduction</h2>
<ul>
<li>Single: $16,100</li>
<li>Married filing jointly: $32,200</li>
<li>Married filing separately: $16,100</li>
<li>Head of household: $24,150</li>
</ul>
<p>A higher standard deduction means slightly less of your pay is taxable, which can modestly reduce federal withholding.</p>

<h2>Social Security and Medicare for 2026</h2>
<p>The Social Security tax rate stays at 6.2 percent for employees. The wage base — the cap on wages that Social Security tax applies to — rose to <strong>$184,500</strong> for 2026, up from $176,100 in 2025. Medicare stays at 1.45 percent on all wages, with the Additional Medicare Tax of 0.9 percent still applying to wages above $200,000 for single filers and $250,000 for married filing jointly.</p>

<h2>2026 retirement and benefit limits</h2>
<ul>
<li>401(k) employee elective deferral: $24,500 (up from $23,500 in 2025)</li>
<li>401(k) catch-up, age 50+: $8,000</li>
<li>401(k) SECURE 2.0 catch-up, ages 60–63: $11,250</li>
<li>HSA contribution limit: $4,400 self-only, $8,750 family</li>
<li>Health FSA salary reduction limit: $3,400</li>
</ul>
<p>Source: IRS Notice 2025-67 and IRS Rev. Proc. 2025-32.</p>

<h2>What this means for your paycheck</h2>
<p>If nothing else changed — same salary, same W-4, same benefits — most workers see only a small shift in take-home pay from the 2026 inflation adjustments. Bigger changes usually come from something specific to you: a raise, a new benefits election, a mid-year W-4 update, or Social Security tax restarting in January after you hit the wage base in late 2025.</p>
<p>To see your own numbers, run the <a href="/us/paycheck-calculator">paycheck calculator</a>. To understand a change between two specific checks, see <a href="/us/why-did-my-net-pay-change">why your net pay changed</a>.</p>

<h2>Verify these figures</h2>
<p>Always confirm current figures at the source: federal brackets and the standard deduction in IRS Rev. Proc. 2025-32, retirement limits in IRS Notice 2025-67, and the Social Security wage base at ssa.gov. PayslipIQ is independent and not affiliated with the IRS or SSA.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
    </>
  );
}
