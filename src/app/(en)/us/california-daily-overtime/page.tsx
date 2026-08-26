import type { Metadata } from 'next';
import { RichArticle } from '@/components/RichArticle';

export const metadata: Metadata = {
  title: "California Daily Overtime Rules",
  description: "California overtime: 1.5x over 8/day, 2x over 12/day, 7th-day rules. Stricter than federal FLSA. Educational only.",
  alternates: { canonical: "/us/california-daily-overtime" },
};

const FAQS = [{"q": "Does California have daily overtime?", "a": "Yes. 1.5x over 8 hours per day, 2x over 12 hours per day, plus the 7th-consecutive-day rules."}, {"q": "Can my California employer make me work 12+ hour days at straight time?", "a": "Only if you are exempt from FLSA. Non-exempt workers earn 1.5x for hours 9-12 and 2x for hours 13+, regardless of weekly total."}, {"q": "What is the 7th-day rule?", "a": "If you work 7 consecutive days in a workweek, the first 8 hours of the 7th day are at 1.5x and any hours over 8 on that day are at 2x."}];
const RELATED = [{"label": "California paycheck calculator", "href": "/us/california/paycheck-calculator"}, {"label": "Overtime explained", "href": "/us/overtime-paycheck"}];
const BREADCRUMBS = [{"name": "Home", "url": "/"}, {"name": "US", "url": "/us/learn"}, {"name": "California Daily Overtime", "url": "/us/california-daily-overtime"}];

export default function Page() {
  return (
    <RichArticle
      title="California Daily Overtime Rules"
      url="/us/california-daily-overtime"
      description="California overtime: 1.5x over 8/day, 2x over 12/day, 7th-day rules. Stricter than federal FLSA. Educational only."
      intro={<>California overtime law is stricter than federal FLSA in three ways. Daily threshold of 8 hours, daily double-time at 12, and special rules for the seventh consecutive workday. Here is the structure.</>}
      body={<><h2>Federal FLSA baseline</h2>
<p>1.5x the regular rate for hours over 40 in a workweek.</p>
<h2>California Labor Code overlay</h2>
<ul>
<li>1.5x for hours over 8 in a single workday.</li>
<li>2x for hours over 12 in a single workday.</li>
<li>1.5x for the first 8 hours on the 7th consecutive workday in a workweek.</li>
<li>2x for hours over 8 on that 7th consecutive workday.</li>
</ul>
<h2>Worked example</h2>
<p>A non-exempt CA worker who works 12 hours Monday gets 8 hours regular plus 4 hours at 1.5x. If they work 14 hours, that is 8 hours regular, 4 at 1.5x, and 2 at 2x.</p>
<h2>Alternative workweek schedules</h2>
<p>CA permits alternative workweek schedules (e.g., four 10-hour days) under specific procedures including a two-thirds employee vote. Outside that, the standard daily-OT thresholds apply.</p>
<h2>Salaried non-exempt</h2>
<p>Salaried non-exempt CA workers also earn daily overtime. The hourly equivalent is calculated from salary times 12 divided by 52 divided by 40.</p>
<h2>Authoritative source</h2>
<p><a href="https://www.dir.ca.gov/dlse/" target="_blank" rel="noopener noreferrer">California Labor Commissioner (DLSE)</a></p></>}
      faqs={FAQS}
      related={RELATED}
      breadcrumbs={BREADCRUMBS}
    />
  );
}
