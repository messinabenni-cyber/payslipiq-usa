import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { FAQSchema } from '@/components/FAQSchema';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { ReviewedBy } from '@/components/ReviewedBy';

const PAGE_URL = 'https://payslipiq.com/us/state-worker-contributions/';

export const metadata: Metadata = {
  title: 'State Worker Contributions 2026 — SDI, PFL, PFML, FAMLI, TDI (All 11 States)',
  description:
    'Verified 2026 employee-paid state worker contribution rates: CA SDI, NY SDI+PFL, NJ SDI+FLI, MA PFML, OR Paid Leave, WA PFML+Cares, RI TDI, CO FAMLI, HI TDI, CT PFML, DC PFL.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'State Worker Contributions 2026 — All 11 States',
    description: 'Verified 2026 SDI / PFL / PFML / FAMLI / TDI rates across every US state with an employee-paid program.',
    url: PAGE_URL,
    type: 'website',
  },
};

interface ContribRow {
  state: string;
  abbr: string;
  programs: Array<{ name: string; rate: string; cap?: string; note?: string }>;
  source: string;
}

const ROWS: ContribRow[] = [
  {
    state: 'California',
    abbr: 'CA',
    programs: [{ name: 'CA SDI', rate: '1.3%', cap: 'No wage cap (SB 951)', note: 'Funds short-term disability + CA PFL (no separate PFL line)' }],
    source: 'https://edd.ca.gov/en/payroll_taxes/rates_and_withholding/',
  },
  {
    state: 'Colorado',
    abbr: 'CO',
    programs: [{ name: 'CO FAMLI', rate: '0.44%', cap: '$184,500', note: 'Employee share of 0.88% total (50/50 employer split for 10+ employees)' }],
    source: 'https://famli.colorado.gov/',
  },
  {
    state: 'Connecticut',
    abbr: 'CT',
    programs: [{ name: 'CT PFML', rate: '0.5%', cap: '$184,500', note: 'CT Paid Leave Authority 2026' }],
    source: 'https://ctpaidleave.org/',
  },
  {
    state: 'District of Columbia',
    abbr: 'DC',
    programs: [{ name: 'DC PFL', rate: '0.26%', note: 'Typically employer-paid; listed where employer passes through' }],
    source: 'https://does.dc.gov/page/dc-paid-family-leave',
  },
  {
    state: 'Hawaii',
    abbr: 'HI',
    programs: [{ name: 'HI TDI', rate: '0.5%', cap: '$7.50/week ($390/year)', note: 'HI DLIR 2026; capped at $7.50/week' }],
    source: 'https://labor.hawaii.gov/dcd/',
  },
  {
    state: 'Massachusetts',
    abbr: 'MA',
    programs: [{ name: 'MA PFML', rate: '0.46%', cap: '$184,500', note: 'Employee share for employers with 25+ employees (0.28% medical + 0.18% family)' }],
    source: 'https://www.mass.gov/info-details/paid-family-and-medical-leave-employer-contribution-rates-and-calculator',
  },
  {
    state: 'New Jersey',
    abbr: 'NJ',
    programs: [
      { name: 'NJ SDI', rate: '0.23%', cap: '$393.53/year', note: 'NJ DOL 2026' },
      { name: 'NJ FLI', rate: '0.19%', cap: '$325.09/year', note: 'NJ DOL 2026' },
    ],
    source: 'https://www.nj.gov/labor/lwdhome/press/2025/20251229_newbenefitrates2026.shtml',
  },
  {
    state: 'New York',
    abbr: 'NY',
    programs: [
      { name: 'NY SDI', rate: '0.5%', cap: '$0.60/week ($31.20/year)', note: 'NY DBL — statutory cap, unchanged' },
      { name: 'NY PFL', rate: '0.432%', cap: '$411.91/year', note: 'NY PFL 2026' },
    ],
    source: 'https://paidfamilyleave.ny.gov/2026',
  },
  {
    state: 'Oregon',
    abbr: 'OR',
    programs: [{ name: 'OR Paid Leave', rate: '0.6%', cap: '$184,500', note: 'Employee share 60% of 1.0% total' }],
    source: 'https://paidleave.oregon.gov/',
  },
  {
    state: 'Rhode Island',
    abbr: 'RI',
    programs: [{ name: 'RI TDI', rate: '1.1%', cap: '$1,100/year', note: 'RI DLT 2026; wage base $100,000' }],
    source: 'https://dlt.ri.gov/',
  },
  {
    state: 'Washington',
    abbr: 'WA',
    programs: [
      { name: 'WA PFML', rate: '~0.807%', cap: '$184,500', note: 'Employee share ~71.43% of 1.13% premium (employers 50+)' },
      { name: 'WA Cares', rate: '0.58%', cap: 'No cap', note: 'Long-term care; opt-out window closed' },
    ],
    source: 'https://paidleave.wa.gov/',
  },
];

const FAQS = [
  { q: 'What is a state worker contribution?', a: 'A payroll deduction funding a state-specific benefit program: short-term disability (SDI/TDI), paid family leave (PFL), paid family and medical leave (PFML/FAMLI), or long-term care (WA Cares). 11 US jurisdictions currently have an employee-paid program; others either have no such program (most states) or fund it entirely from employer payroll taxes.' },
  { q: 'Which states have NO worker contribution programs?', a: 'Most states. Notable absences: TX, FL, IL, OH, GA, AZ, NV, NC, IN, TN, MO, WI, AL, KY, OK, AR, IA, NM, KS, NE, ID, UT, MT, ND, SD, WY, AK, NH, ME, SC, MS, LA, VT, VA, WV, MN (PFML starts 2026). If your state is not on this page, you should not see SDI / PFL / PFML / FAMLI / TDI lines on your paycheck.' },
  { q: 'Why do these vary so much in size?', a: 'Different program designs. Hawaii TDI is capped at $7.50/week (small flat amount). California SDI is 1.3% with no cap (can be hundreds per paycheck for high earners). NY PFL is rate-based with an annual dollar cap ($411.91). Rhode Island TDI is the largest at 1.1% capped at $1,100/year. Read the table carefully for your state.' },
  { q: 'How are these calculated by the PayslipIQ Paycheck Calculator?', a: 'When you select a state with an employee-paid program in the PayslipIQ Paycheck Calculator, the relevant line(s) render automatically using the verified 2026 rates from this page. Each contribution is subtracted from your take-home pay (it is real money out of your pocket every paycheck, not just a notional figure).' },
  { q: 'When does Minnesota PFML start?', a: 'Minnesota signed a PFML program into law that begins employee contributions in 2026. Exact employee rate small (around 0.4% combined employer + employee). PayslipIQ will add MN to this table once the final 2026 employee rate publishes.' },
];

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'State Worker Contributions', url: PAGE_URL },
];

export default function StateWorkerContributionsPage() {
  return (
    <>
      <ArticleSchema headline="State Worker Contributions 2026 — All 11 States" description="Verified 2026 employee-paid state worker contribution rates across every US state with a program." url={PAGE_URL} />
      <BreadcrumbSchema items={BREADCRUMBS} />
      <FAQSchema items={FAQS} />

      <main id="main" className="mx-auto max-w-4xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">State Worker Contributions</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">USA · STATE WORKER CONTRIBUTIONS · 2026 · Educational only</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">State worker contributions 2026</h1>
          <p className="mt-4 text-lg text-slate-700">
            Employee-paid state benefit programs: SDI (State Disability Insurance), PFL (Paid Family
            Leave), PFML (Paid Family and Medical Leave), FAMLI (Family and Medical Leave Insurance),
            TDI (Temporary Disability Insurance), and WA Cares (long-term care).
            <strong> 11 jurisdictions</strong> currently have a program. Primary-sourced rates, verified
            2026-05-16.
          </p>
        </header>

        <ReviewedBy />

        <section className="mt-8 grid gap-4">
          {ROWS.map((r) => (
            <article key={r.abbr} id={r.abbr.toLowerCase()} className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="flex items-baseline gap-3">
                <h2 className="text-xl font-semibold text-slate-900">{r.state}</h2>
                <span className="text-[12px] font-mono text-slate-500">{r.abbr}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {r.programs.map((p) => (
                  <li key={p.name} className="grid sm:grid-cols-[120px,90px,1fr] gap-2 sm:gap-3 text-[14px]">
                    <span className="font-semibold text-slate-900">{p.name}</span>
                    <span className="text-blue-700 font-mono">{p.rate}</span>
                    <span className="text-slate-600">
                      {p.cap && <span className="font-medium">{p.cap}.</span>}{' '}
                      {p.note}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-[12px] text-slate-500">
                Source:{' '}
                <a href={r.source} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                  {r.source.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]}
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Common questions</h2>
          <dl className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-1 text-slate-700">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/us/paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">US Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Federal + FICA + state + state worker contribs.</div>
            </Link>
            <Link href="/us/gross-to-net-paycheck-calculator/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Gross to Net Paycheck Calculator</div>
              <div className="text-sm text-slate-500">Convert any gross to take-home, all 50 states.</div>
            </Link>
            <Link href="/us/cities/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">US City Paycheck Calculators</div>
              <div className="text-sm text-slate-500">22+ cities with local-tax breakdown.</div>
            </Link>
            <Link href="/us/maryland-counties/" className="block rounded-md border border-slate-200 p-4 hover:border-slate-400">
              <div className="font-medium">Maryland County Rates</div>
              <div className="text-sm text-slate-500">All 24 MD counties + Baltimore City piggyback.</div>
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <MasterDisclaimer variant="long" />
        </section>
      </main>
    </>
  );
}
