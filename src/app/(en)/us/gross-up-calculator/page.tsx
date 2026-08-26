import type { Metadata } from 'next';
import Link from 'next/link';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { FAQSchema } from '@/components/FAQSchema';
import { ReviewedBy } from '@/components/ReviewedBy';
import { SchemaGraph } from '@/components/SchemaGraph';
import { SoftwareApplicationLd } from '@/components/ToolSchemas';
import { GrossUpCalculator } from '@/components/GrossUpCalculator';

const PAGE_PATH = '/us/gross-up-calculator';
const PAGE_URL = `https://payslipiq.com${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'Gross-Up Calculator (Net-to-Gross, 2026)',
  description:
    'Free 2026 gross-up calculator. Enter a desired take-home and solve for the gross pay needed after federal tax, FICA, and state withholding. Educational estimate.',
  alternates: { canonical: PAGE_PATH },
};

const FAQS = [
  {
    q: 'What is a gross-up?',
    a: 'A gross-up is the reverse of a normal paycheck calculation. Instead of starting with a gross amount and subtracting taxes to find the net, you start with the net (take-home) you want a worker to keep and solve for the larger gross that, after federal income tax withholding, Social Security, Medicare, and any state tax, leaves exactly that net. Employers commonly gross up relocation payments, sign-on bonuses, or fringe benefits so the recipient is not out of pocket for the tax.',
  },
  {
    q: 'How does this net-to-gross calculator find the answer?',
    a: 'It uses a numeric solver. Because net pay rises smoothly as gross rises, the tool tries gross values and narrows in (a binary search) until the resulting take-home matches your target within a fraction of a cent. The tax math behind each trial uses the IRS Publication 15-T 2026 percentage method for federal withholding, the 2026 FICA rates, and your state rate if you pick one. The result is an estimate, not a payroll instruction.',
  },
  {
    q: 'Why is the required gross so much higher than my target net?',
    a: 'Every extra dollar of gross is itself taxed, so to deliver one more dollar of take-home the employer has to add more than a dollar of gross. The higher your marginal bracket and state rate, the larger that gap. This is normal and expected; the calculator simply quantifies it for your inputs.',
  },
  {
    q: 'Can I rely on this for actual payroll?',
    a: 'No. This is educational only and not tax, payroll, accounting, or financial advice. It does not model W-4 dependents, multiple jobs, extra withholding, year-to-date wages, local taxes (NYC, Yonkers, PA EIT, Ohio RITA, MD county), pre-tax benefits, or state worker contributions. For a real gross-up, confirm the figure with your payroll provider or a qualified CPA.',
  },
];

const SOURCES = [
  { name: 'IRS Publication 15-T (Federal Income Tax Withholding Methods, 2026)', url: 'https://www.irs.gov/publications/p15t' },
  { name: 'IRS Topic 751 (Social Security and Medicare Withholding Rates)', url: 'https://www.irs.gov/taxtopics/tc751' },
  { name: 'SSA Contribution and Benefit Base 2026', url: 'https://www.ssa.gov/oact/cola/cbb.html' },
  { name: 'IRS Additional Medicare Tax Q&A', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/questions-and-answers-for-the-additional-medicare-tax' },
];

const RELATED_TOOLS = [
  { href: '/us/gross-to-net-paycheck-calculator', title: 'Gross to Net Calculator', blurb: 'Start from a gross paycheck and see the estimated take-home.' },
  { href: '/us/bonus-tax-paycheck', title: 'Bonus Tax Calculator', blurb: 'Why bonuses look heavily taxed (22% supplemental rate), both methods.' },
  { href: '/us/paycheck-calculator', title: 'Paycheck Calculator', blurb: 'Start from an annual salary and project per-period pay.' },
];

export default function Page() {
  return (
    <main className="piq-container py-10 max-w-3xl">
      <SchemaGraph
        url={PAGE_PATH}
        name="Gross-Up Calculator (Net-to-Gross, 2026)"
        description="Enter a desired take-home and solve for the gross pay required after federal tax, FICA, and state withholding. Educational estimate, 2026 figures."
        type="WebPage"
        about="withholding"
        mentions={['fica', 'incomeTax']}
        reviewed
        breadcrumbs={[
          { name: 'Home', url: '/us' },
          { name: 'Gross-Up Calculator', url: PAGE_PATH },
        ]}
      />
      <SoftwareApplicationLd
        url={PAGE_URL}
        name="PayslipIQ Gross-Up Calculator (Net-to-Gross)"
        description="Solve for the gross pay needed to deliver a target take-home amount after federal income tax, FICA, and state withholding. 2026 tables."
      />
      <FAQSchema items={FAQS} />

      <div className="text-[12px] uppercase tracking-[0.14em] text-accent font-semibold">Calculator</div>
      <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
        Net-to-gross, solved.
      </h1>
      <p className="mt-5 text-[17px] text-ink/80 leading-relaxed">
        Tell the calculator the take-home you want a worker to keep, and it solves for the gross pay needed
        so the net lands on target after federal income tax, Social Security, Medicare, and state tax.
      </p>

      <ReviewedBy />

      {/* Direct-answer block, optimized for AI Overviews / Perplexity / ChatGPT */}
      <section className="mt-8 rounded-md border border-line bg-white p-5 direct-answer">
        <h2 className="text-xl font-semibold mb-2">In short</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          A gross-up calculator works backwards from a desired net (take-home) to the gross pay required to
          deliver it. Because every extra dollar of gross is itself taxed, the gross is always larger than the
          net you want, the gap widening with your tax bracket and state rate. PayslipIQ solves this by trying
          gross values until the after-tax net matches your target, using the IRS Pub. 15-T 2026 percentage
          method, the 2026 FICA rates, and the SSA 2026 wage base ($184,500). Results are estimates only, your
          real gross-up depends on W-4 details, local taxes, and employer-specific settings.
        </p>
      </section>

      {/* Tool warning */}
      <aside className="mt-6 border-l-4 border-amber-300 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900 rounded" role="note">
        <strong className="font-semibold">Important:</strong> Estimates only. A real gross-up can differ once W-4 details,
        year-to-date wages, pre-tax benefits, and local taxes are applied. Verify the figure with your payroll team or a
        qualified professional before relying on it.
      </aside>

      {/* The interactive calculator */}
      <GrossUpCalculator />

      {/* Worked example */}
      <section className="mt-10 bg-white border border-line rounded-md p-5">
        <h2 className="text-xl font-semibold tracking-tight mb-2">Worked example, $5,000 take-home in California</h2>
        <p className="text-[15px] text-ink/85 leading-relaxed">
          Suppose an employer wants a relocating worker to keep <strong>$5,000</strong> net on a biweekly check,
          single filer, in California. The calculator raises the gross until the after-tax net hits $5,000.
        </p>
        <p className="text-[15px] text-ink/85 leading-relaxed mt-2">
          At that income the worker faces roughly 22% federal withholding, 6.2% Social Security, 1.45% Medicare,
          and about 6.6% California tax, so the solved gross lands well above $5,000, and the difference is the
          gross-up the employer absorbs. The same target net in Texas (no state income tax) needs a smaller gross,
          because there is no state line to cover.
        </p>
        <p className="text-xs text-ink/55 mt-3">
          The worked example uses the same IRS Pub. 15-T 2026 percentage method the calculator above runs. Real-world
          payroll can differ slightly because W-4 dependents, multiple jobs, extra withholding, and local taxes are not
          modelled here. Use the calculator above for your own numbers.
        </p>
      </section>

      {/* FAQ (visible; JSON-LD emitted by FAQSchema above) */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Gross-up, common questions</h2>
        <dl className="mt-5 grid gap-5">
          {FAQS.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-ink">{f.q}</dt>
              <dd className="mt-1 text-[15px] text-ink/80 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Related tools */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">Related calculators and guides</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px]">
          {RELATED_TOOLS.map((t) => (
            <Link key={t.href} href={t.href} className="block border border-line bg-white rounded-md p-4 hover:border-accent">
              <div className="font-semibold">{t.title}</div>
              <div className="text-ink/70 mt-1">{t.blurb}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Official sources */}
      <section className="mt-10 border border-line rounded-md bg-white p-4">
        <h2 className="text-base font-semibold mb-2">Official sources</h2>
        <ul className="text-[14px] space-y-1">
          {SOURCES.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="nofollow noopener" className="text-accent hover:underline">{s.name}</a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[12.5px] text-ink/55">PayslipIQ is independent of the IRS, SSA, Department of Labor, every state revenue and labor agency, and every payroll provider. Source links are informational, not endorsement.</p>
      </section>

      {/* Master disclaimer */}
      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
