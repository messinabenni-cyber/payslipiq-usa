import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "Student First Job Paycheck Guide",
  description: "First paycheck for a student. W-4, FICA, exempt status, refunds. Educational only.",
  alternates: { canonical: "/us/student-job-paycheck-guide" },
};

const FAQS = [{"q": "Why is so much taken out of my first paycheck?", "a": "Federal income tax (per your W-4), FICA (7.65 percent combined), state tax where applicable, and any voluntary deductions you elected."}, {"q": "Should I claim \"exempt\" on my W-4?", "a": "Only if you owed zero federal income tax last year and expect zero this year. Read the W-4 instructions carefully."}, {"q": "Can I get FICA refunded?", "a": "Usually no. Narrow exceptions exist for student workers at the school they attend, and for non-resident alien students on F-1, M-1 or J-1 visas."}, {"q": "When do I file my first return?", "a": "If your income exceeds the IRS filing threshold or if you had federal tax withheld and want a refund. Filing season opens in late January."}];
const RELATED = [{"label": "W-4 guide", "href": "/us/w4-guide"}, {"label": "New job first paycheck", "href": "/us/new-job-first-paycheck-guide"}, {"label": "Hourly calculator", "href": "/us/hourly-worker-paycheck-calculator"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Student Job Guide", "url": "/us/student-job-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="Student First Job Paycheck Guide"
      url="/us/student-job-paycheck-guide"
      description="First paycheck for a student. W-4, FICA, exempt status, refunds. Educational only."
      intro={<>First paycheck. Smaller than the offer letter implied. Here is what came out and why.</>}
      body={<><h2>Why your first paycheck is smaller than expected</h2>
<p>Gross is what you earned. Net is what lands after federal income tax, FICA (7.65 percent combined), state tax (where applicable), local tax, and any voluntary deductions. For a student earning $15 per hour at 20 hours per week, federal withholding can be small (or zero with the right W-4) but FICA is always there.</p>
<h2>The W-4</h2>
<p>This tells your employer how much federal tax to withhold. As a student earning under the standard deduction, you may qualify to claim "exempt" on the W-4. Only if you owed zero federal tax last year and expect zero this year. Read the W-4 instructions.</p>
<h2>Are scholarships taxed?</h2>
<p>Scholarships used for qualified tuition and required fees are tax-free. Scholarships for room, board, or non-required expenses are taxable. This sits separate from your paycheck.</p>
<h2>Will I get a refund?</h2>
<p>If your annual income is below the standard deduction and federal tax was withheld, yes. FICA withholding is generally not refunded.</p>
<h2>Do I have to file?</h2>
<p>Depends on total income. Even if not required, file to claim withheld federal tax. Use IRS Free File if income is low.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
