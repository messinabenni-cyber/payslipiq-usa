import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "California State Disability Insurance (SDI)",
  description: "California SDI is an employee-paid payroll deduction. Funds short-term disability and Paid Family Leave. Educational only.",
  alternates: { canonical: "/us/california-sdi" },
};

const FAQS = [{"q": "Is California SDI capped?", "a": "The wage cap was removed in 2024. The percentage now applies to every dollar of California wages. Verify the current rate with the California EDD."}, {"q": "What does CA SDI fund?", "a": "California Disability Insurance (short-term disability) and Paid Family Leave. Both benefits are funded entirely by employee SDI contributions."}, {"q": "Is CA SDI the same as PFL?", "a": "PFL is funded by SDI. They are two benefit programs sharing one payroll deduction."}];
const RELATED = [{"label": "California paycheck calculator", "href": "/us/california/paycheck-calculator"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "California SDI", "url": "/us/california-sdi"}];

export default function Page() {
  return (
    <RichArticle
      title="California State Disability Insurance (SDI)"
      url="/us/california-sdi"
      description="California SDI is an employee-paid payroll deduction. Funds short-term disability and Paid Family Leave. Educational only."
      intro={<>Every California paycheck has a small SDI line. State Disability Insurance funds short-term disability benefits and Paid Family Leave. The wage cap was removed in recent years, so high earners now see the deduction on every dollar.</>}
      body={<><h2>What SDI funds</h2>
<p>California State Disability Insurance covers two programs:</p>
<ul>
<li><strong>Disability Insurance (DI):</strong> short-term wage replacement for non-work-related illness, injury, or pregnancy.</li>
<li><strong>Paid Family Leave (PFL):</strong> wage replacement for time off to bond with a new child or care for a seriously ill family member.</li>
</ul>
<h2>The rate</h2>
<p>Employee contribution percentage is set annually by the California EDD. The 2024 rate was 1.1 percent of wages with no cap (the wage cap was removed in 2024). Verify the current year at edd.ca.gov.</p>
<h2>Cap removal</h2>
<p>Before 2024, SDI applied only up to an annual wage base. Starting 2024, the cap was removed. High earners now see SDI on every dollar of California wages.</p>
<h2>Benefit amount</h2>
<p>Roughly 60 to 70 percent of weekly wages, capped at a state-set maximum. Specific replacement rate depends on income tier.</p>
<h2>Stub label</h2>
<p>Common labels: CA SDI, SDI, CA-DIS.</p>
<h2>Authoritative source</h2>
<p><a href="https://edd.ca.gov" target="_blank" rel="noopener noreferrer">California Employment Development Department (EDD)</a></p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
