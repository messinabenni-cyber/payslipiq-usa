import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Methodology — How PayslipIQ Calculates US Paychecks",
  description: "Open methodology with specific IRS / SSA / state DOR sources. IRS Notice 2025-67 (2026 limits), Pub 15-T 2026, SS wage base $184,500, 11 jurisdictions of state worker contributions.",
  alternates: { canonical: "/methodology" },
};

const FAQS = [
  { q: "How often does PayslipIQ refresh tax tables?", a: "Federal tables annually each November/December as soon as the IRS publishes the next year's notice (e.g., Notice 2025-67 for 2026). State tables annually through January as each DOR publishes its 2026 withholding tables, plus within 30 days of any mid-year statutory change. Pay stub laws within 60 days of effective date." },
  { q: "Are PayslipIQ's calculators audited?", a: "Each calculator function is unit-tested against IRS Publication 15-T examples and state-published worksheets. We do not currently undergo external audit." },
  { q: "How do I report a content error?", a: "Email content@payslipiq.com with the URL, the input, the value we returned, and the source you believe is correct. We log corrections and post a dated public changelog entry." },
  { q: "Where do PayslipIQ's federal numbers come from?", a: "IRS Publication 15-T (2026), IRS Notice 2025-67 (2026 retirement and inflation adjustments), Topic 751 (FICA), SSA annual cost-of-living adjustment, and SECURE 2.0 Act §109 + §603 for catch-up rules." },
  { q: "Which states have explicit worker-contribution lines?", a: "Eleven jurisdictions are encoded directly into the calculator: California (SDI), New York (SDI + PFL), New Jersey (SDI + FLI), Massachusetts (PFML), Oregon (Paid Leave), Washington (PFML + WA Cares), Rhode Island (TDI), Colorado (FAMLI), Hawaii (TDI), Connecticut (PFML), District of Columbia (PFL). The remaining states have no employee-paid worker contribution." },
];

const RELATED = [
  { label: "Trust Center", href: "/trust" },
  { label: "AI Transparency", href: "/ai-transparency" },
  { label: "Disclaimers", href: "/disclaimer" },
  { label: "Accessibility", href: "/us/accessibility" },
];

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Trust", url: "/trust" },
  { name: "Methodology", url: "/methodology" },
];

export default function Page() {
  return (
    <RichArticle
      title="Methodology"
      url="/methodology"
      description="Open methodology with specific IRS / SSA / state DOR sources. IRS Notice 2025-67 (2026 limits), Pub 15-T 2026, SS wage base $184,500."
      intro={<>Where every number on PayslipIQ comes from, how often it is refreshed, and the editorial standards we hold ourselves to. Every calculation traces to a public US government source.</>}
      body={<><h2>2026 sources — specific notices and IDs</h2>
<ul>
<li><strong>Federal income tax withholding:</strong> <a href="https://www.irs.gov/pub/irs-pdf/p15t.pdf" target="_blank" rel="noopener noreferrer">IRS Publication 15-T (2026)</a>. Percentage-method tables. Honors filing status, multiple jobs (Step 2), dependents (Step 3), other income (4a), deductions (4b), extra withholding (4c).</li>
<li><strong>Social Security wage base 2026:</strong> $184,500. <a href="https://www.ssa.gov/oact/cola/cbb.html" target="_blank" rel="noopener noreferrer">SSA Cost-of-Living Adjustment</a>.</li>
<li><strong>Medicare:</strong> 1.45% on all wages. Additional 0.9% on wages above $200,000 single / $250,000 MFJ / $125,000 MFS. <a href="https://www.irs.gov/businesses/small-businesses-self-employed/additional-medicare-tax" target="_blank" rel="noopener noreferrer">IRC §3101(b)(2)</a>.</li>
<li><strong>401(k) limits 2026:</strong> $24,500 elective deferral, $8,000 age-50 catch-up, $11,250 SECURE 2.0 super catch-up (ages 60–63), Roth-mandatory catch-up for $150,000+ FICA-wage prior-year earners. <a href="https://www.irs.gov/pub/irs-drop/n-25-67.pdf" target="_blank" rel="noopener noreferrer">IRS Notice 2025-67</a>.</li>
<li><strong>Supplemental wages (bonuses, commissions):</strong> 22% flat federal up to $1,000,000/yr, 37% above. State supplemental rates from each state DOR.</li>
</ul>
<h2>State income tax</h2>
<p>Each state page links to its Department of Revenue. Coverage breakdown for 2026:</p>
<ul>
<li><strong>Progressive states:</strong> CA, CT, DE, GA (transitioning to flat), HI, IA, ID, KS, KY (transitioning), LA, ME, MD, MN, MO, MT, NE, NJ, NM, NY, NC (transitioning to flat), OH, OK, OR, RI, SC, VT, VA, WI, WV, DC.</li>
<li><strong>Flat-tax states 2026:</strong> AZ 2.5%, CO 4.40%, IL 4.95%, IN 3.05%, KY ~4.0%, MA 5%, MI 4.25%, NC 3.99%, PA 3.07%, UT 4.55%.</li>
<li><strong>No state income tax:</strong> AK, FL, NV, NH, SD, TN, TX, WA, WY.</li>
</ul>
<h2>State worker contributions (SDI / PFL / PFML / TDI / FAMLI / Cares) — 11 jurisdictions encoded</h2>
<table>
<thead><tr><th>Jurisdiction</th><th>Program</th><th>2026 employee rate</th><th>Cap</th></tr></thead>
<tbody>
<tr><td>California</td><td>SDI</td><td>1.3%</td><td>No cap (SB 951)</td></tr>
<tr><td>New York</td><td>SDI</td><td>$0.60/wk</td><td>$31.20/yr</td></tr>
<tr><td>New York</td><td>PFL</td><td>0.432%</td><td>$411.91/yr</td></tr>
<tr><td>New Jersey</td><td>SDI</td><td>0.23%</td><td>$393.53/yr</td></tr>
<tr><td>New Jersey</td><td>FLI</td><td>0.19%</td><td>$325.09/yr</td></tr>
<tr><td>Massachusetts</td><td>PFML</td><td>0.46%</td><td>$184,500 wage base</td></tr>
<tr><td>Oregon</td><td>Paid Leave</td><td>0.60%</td><td>$184,500 wage base</td></tr>
<tr><td>Washington</td><td>PFML</td><td>0.807%</td><td>$184,500 wage base</td></tr>
<tr><td>Washington</td><td>WA Cares</td><td>0.58%</td><td>No cap</td></tr>
<tr><td>Rhode Island</td><td>TDI</td><td>1.1%</td><td>$1,100/yr</td></tr>
<tr><td>Colorado</td><td>FAMLI</td><td>0.44%</td><td>$184,500 wage base</td></tr>
<tr><td>Hawaii</td><td>TDI</td><td>0.5%</td><td>$7.50/wk</td></tr>
<tr><td>Connecticut</td><td>PFML</td><td>0.5%</td><td>$184,500 wage base</td></tr>
<tr><td>DC</td><td>PFL</td><td>0.26%</td><td>Employer-paid; surfaced for transparency</td></tr>
</tbody>
</table>
<p>Each rate is taken from the agency-published 2026 schedule. Verify with the linked agency before relying on it.</p>
<h2>Local taxes (city / county)</h2>
<p>Encoded for: NYC (4 progressive brackets), Yonkers (16.75% surcharge on NY state liability), Philadelphia (3.75% resident / 3.44% non-resident), Detroit (2.4% / 1.2%), Ohio RITA and CCA cities, Indiana counties, Maryland counties. See <a href="/us/local-paycheck-taxes/">Local Paycheck Taxes</a>.</p>
<h2>Pre-tax vs post-tax</h2>
<p>Pre-tax 401(k), HSA, FSA, and Section 125 cafeteria-plan deductions reduce federal-taxable wages and most states&apos; state-taxable wages, but do <em>not</em> reduce FICA wages. Pre-tax dollars lower federal/state withholding but leave Social Security and Medicare untouched. Roth 401(k), Roth IRA, after-tax 401(k), garnishments, and post-tax benefit premiums come off net pay only.</p>
<h2>What we deliberately don&apos;t model</h2>
<ul>
<li>State and local quarterly estimated tax payments.</li>
<li>Multi-state nexus apportionment (we ask which state to apply).</li>
<li>Employer-specific payroll software rounding.</li>
<li>Mid-year W-4 amendments and look-back wage recalculations.</li>
<li>Wage garnishments below the federal CCPA limits.</li>
<li>FUTA / SUTA (employer-paid; not on the worker&apos;s pay stub).</li>
</ul>
<p>These are second-order effects. The PayslipIQ estimate is directional; for a binding figure, verify with your payroll team.</p>
<h2>How explanations are written</h2>
<p>Numeric calculations are <strong>rule-based code, never AI predictions</strong>. The flow is: input → validation → federal calculation → state calculation → FICA → state worker contributions → local tax → deductions netting → output. Each function is unit-testable against published examples.</p>
<p>The plain-English summary alongside each numeric answer is AI-generated under the constraints in <a href="/ai-transparency">AI Transparency</a>. Numbers themselves are never rewritten by AI.</p>
<h2>How content is updated</h2>
<table>
<thead><tr><th>Change type</th><th>Frequency</th></tr></thead>
<tbody>
<tr><td>Federal tax tables</td><td>Each November/December as soon as IRS publishes the next-year notice</td></tr>
<tr><td>State tax tables</td><td>January through Q1 as each DOR publishes; plus within 30 days of mid-year statutory change</td></tr>
<tr><td>Pay stub law changes</td><td>Within 60 days of statutory effective date</td></tr>
<tr><td>FAQ refreshes</td><td>Quarterly</td></tr>
<tr><td>AI prompt updates</td><td>Reviewed monthly, deployed as needed</td></tr>
</tbody>
</table>
<h2>Editorial standards</h2>
<ul>
<li>No advice. Education only.</li>
<li>No guaranteed outcomes.</li>
<li>Every claim has a verifiable source.</li>
<li>Every number has a date.</li>
<li>Every page has a disclaimer.</li>
<li>Every AI output has a verification reminder.</li>
</ul>
<h2>Reporting an error</h2>
<p>Email content@payslipiq.com with the URL, the input, the value we returned, and the source you believe is correct. We correct errors publicly with a dated changelog entry at <a href="/us/status/">/us/status</a>.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
