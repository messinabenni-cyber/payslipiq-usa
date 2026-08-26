import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';
import { DefinedTermSetSchema } from '@/components/DefinedTermSetSchema';

const TERMS = [
  { term: 'W-2', definition: 'IRS Form W-2, Wage and Tax Statement — the form an employer sends each employee and the IRS by January 31, reporting annual wages and taxes withheld.' },
  { term: 'Box 1', definition: 'Wages, tips and other compensation: federal income tax wages, equal to gross pay minus pre-tax items such as 401(k), Section 125 health, FSA and traditional HSA.' },
  { term: 'Box 3', definition: 'Social Security wages: the portion of pay subject to Social Security tax, capped at the annual wage base and including pre-tax 401(k) contributions.' },
  { term: 'Box 5', definition: 'Medicare wages and tips: the portion of pay subject to Medicare tax, with no cap, including pre-tax 401(k) contributions.' },
  { term: 'Federal wages', definition: 'The taxable wage figure reported in Box 1 that the IRS uses to calculate federal income tax, after pre-tax deductions are removed from gross pay.' },
];

export const metadata: Metadata = {
  title: "How to Read a W-2 (Box-by-Box)",
  description: "What every W-2 box means. Box 1 wages, Box 2 federal tax, Box 3-6 FICA, Box 12 codes, state boxes. Educational only.",
  alternates: { canonical: "/us/w2-explained" },
};

const FAQS = [{"q": "Why is Box 1 less than my actual annual gross?", "a": "Pre-tax 401(k), traditional HSA, FSA, Section 125 health insurance all reduce Box 1. Your gross is on your last pay stub of the year. Box 1 is reduced by these pre-tax items."}, {"q": "What is code DD in Box 12?", "a": "The cost of employer-sponsored health insurance. Informational only. Not taxable. Not included in Box 1 wages."}, {"q": "I worked in two states. How is that on the W-2?", "a": "You may receive separate W-2s, or one W-2 with multiple state lines. Boxes 15-20 separate state-by-state wages and withholding."}, {"q": "When does my employer have to send my W-2?", "a": "By January 31 of the following year. If you have not received it by mid-February, contact payroll. If still unreceived by February 14, contact the IRS."}];
const RELATED = [{"label": "W-4 guide", "href": "/us/w4-guide"}, {"label": "Pay stub anatomy", "href": "/us/pay-stub-anatomy"}, {"label": "FICA", "href": "/us/fica-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "W-2 Explained", "url": "/us/w2-explained"}];

export default function Page() {
  return (
    <>
    <RichArticle
      title="How to Read a W-2 (Box-by-Box)"
      url="/us/w2-explained"
      description="What every W-2 box means. Box 1 wages, Box 2 federal tax, Box 3-6 FICA, Box 12 codes, state boxes. Educational only."
      intro={<>The W-2 is the form your employer sends you and the IRS each January reporting your annual wages and tax withholdings. The boxes confuse people because Box 1 wages do not match your gross. Here is each one decoded.</>}
      body={<><h2>The most-asked-about boxes</h2>
<h3>Box 1: Wages, tips, other compensation</h3>
<p>Federal income tax wages. This is gross minus pre-tax 401(k), pre-tax health insurance via Section 125, FSA, traditional HSA via cafeteria plan. So Box 1 is usually less than your total earnings.</p>
<h3>Box 2: Federal income tax withheld</h3>
<p>Total federal income tax your employer withheld during the year.</p>
<h3>Box 3: Social Security wages</h3>
<p>Wages subject to Social Security tax. Capped at the annual wage base. Includes pre-tax 401(k) (because 401(k) does NOT reduce FICA wages). Excludes Section 125 deductions.</p>
<h3>Box 4: Social Security tax withheld</h3>
<p>6.2 percent of Box 3.</p>
<h3>Box 5: Medicare wages</h3>
<p>Wages subject to Medicare tax. Uncapped. Includes pre-tax 401(k). Excludes Section 125.</p>
<h3>Box 6: Medicare tax withheld</h3>
<p>1.45 percent of Box 5, plus the 0.9 percent Additional Medicare on wages above $200k.</p>
<h3>Box 7: Social Security tips</h3>
<p>Tips subject to Social Security. Reported tips count.</p>
<h3>Box 8: Allocated tips</h3>
<p>Tip income allocated by your employer beyond what you reported, when their tip allocation rules apply.</p>
<h3>Box 10: Dependent care benefits</h3>
<p>Dependent Care FSA contributions and other dependent care employer benefits.</p>
<h3>Box 11: Nonqualified plans</h3>
<p>Distributions from non-qualified deferred compensation plans.</p>
<h3>Box 12: Coded items</h3>
<p>The most common codes:</p>
<ul>
<li>D: 401(k) elective deferral (pre-tax)</li>
<li>DD: Cost of employer-sponsored health insurance (informational only, not taxable)</li>
<li>W: HSA contributions through payroll</li>
<li>AA: Roth 401(k) elective deferral</li>
<li>BB: Roth 403(b) elective deferral</li>
<li>EE: Roth 457(b)</li>
<li>S: SIMPLE IRA contribution</li>
<li>L: Substantiated employee business expense reimbursement</li>
</ul>
<h3>Boxes 15-20: State and local tax info</h3>
<ul>
<li>15: State and employer state ID</li>
<li>16: State wages</li>
<li>17: State income tax withheld</li>
<li>18: Local wages</li>
<li>19: Local income tax withheld</li>
<li>20: Locality name</li>
</ul>
<h2>Why Box 1 differs from your year-end gross</h2>
<p>Pre-tax 401(k), traditional HSA, FSA, Section 125 health insurance all reduce Box 1. Your gross is on your last pay stub of the year. Box 1 is gross minus those deductions.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
    <DefinedTermSetSchema
      name="W-2 form terms"
      description="Plain-English definitions of the key boxes and wage figures on a US Form W-2."
      url="https://payslipiq.com/us/w2-explained"
      terms={TERMS}
    />
    </>
  );
}
