import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "1099 Contractor vs W-2 Employee",
  description: "Pay and tax differences between a 1099 contractor and a W-2 employee. Self-employment tax, benefits, quarterly estimates. Educational only.",
  alternates: { canonical: "/us/contractor-vs-employee-paycheck-guide" },
};

const FAQS = [{"q": "Why do contractors pay more tax than employees?", "a": "Both halves of FICA. Employees pay 7.65 percent and the employer pays the matching 7.65 percent. Contractors pay the full 15.3 percent themselves, called self-employment tax."}, {"q": "Do contractors get pay stubs?", "a": "No. You get an invoice or direct payment. At year-end you receive Form 1099-NEC instead of a W-2."}, {"q": "How much should a contractor set aside for taxes?", "a": "A safe rule is 25 to 35 percent of gross, depending on income and state. Use Form 1040-ES to estimate."}, {"q": "Can I be both employee and contractor at the same time?", "a": "Yes. Many people are. You receive both a W-2 and a 1099. Combine on your return."}];
const RELATED = [{"label": "Gig worker guide", "href": "/us/gig-worker-paycheck-guide"}, {"label": "W-2 explained", "href": "/us/w2-explained"}, {"label": "FICA explained", "href": "/us/fica-explained"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "Contractor vs Employee", "url": "/us/contractor-vs-employee-paycheck-guide"}];

export default function Page() {
  return (
    <RichArticle
      title="1099 Contractor vs W-2 Employee"
      url="/us/contractor-vs-employee-paycheck-guide"
      description="Pay and tax differences between a 1099 contractor and a W-2 employee. Self-employment tax, benefits, quarterly estimates. Educational only."
      intro={<>Same work, different forms. A W-2 employee has tax withheld and benefits funded by the employer. A 1099 contractor handles all of that themselves. The cash difference is bigger than most people expect.</>}
      body={<><h2>The split</h2>
<p>W-2 employees see federal tax, FICA, state tax and benefits taken out of every paycheck. The employer pays the employer-side FICA (6.2 percent SS plus 1.45 percent Medicare) on top, and usually subsidizes health insurance, 401(k) match, paid time off, unemployment insurance and workers' comp.</p>
<p>1099 contractors are self-employed. Nothing is withheld from gross receipts. You owe income tax plus self-employment tax (12.4 percent SS plus 2.9 percent Medicare equals 15.3 percent combined) on net earnings. You pay quarterly via Form 1040-ES estimated taxes. No employer benefits.</p>
<h2>Self-employment tax in detail</h2>
<p>You pay both halves of FICA, capped on the Social Security half by the same wage base ($184,500 for 2026, verify current). Plus 0.9 percent Additional Medicare above $200k single. You can deduct half of SE tax above the line on your federal return.</p>
<h2>Retirement and benefits as a contractor</h2>
<p>SEP-IRA, Solo 401(k) and SIMPLE IRA give you higher contribution limits than employee 401(k). You can deduct self-employed health insurance premiums above the line. Track every business expense you can substantiate.</p>
<h2>Misclassification</h2>
<p>If your employer treats you as a contractor but the work pattern looks like an employee, you may be misclassified. The IRS tests behavioral, financial and relationship control. Form SS-8 starts an IRS determination.</p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
