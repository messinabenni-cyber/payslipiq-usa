import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { STATES, getStateBySlug } from '@/lib/states';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

interface PageProps {
  params: { state: string };
}

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const s = getStateBySlug(params.state);
  if (!s) return { title: 'State not found' };
  return {
    title: `${s.name} Paycheck Guide (2026)`,
    description: `Understand a ${s.name} paycheck: federal tax, FICA, ${s.name} state tax, deductions, overtime. Plain-English. Educational only.`,
    alternates: { canonical: `/us/${s.slug}` },
  };
}

export default function Page({ params }: PageProps) {
  const s = getStateBySlug(params.state);
  if (!s) return notFound();

  const stateTaxLine =
    s.category === 'no-income-tax'
      ? `${s.name} has no state income tax. Your paycheck only has federal tax (income tax + FICA) and any local taxes that apply.`
      : s.category === 'flat'
      ? `${s.name} uses a flat state income tax. Everyone pays the same percentage on taxable wages, regardless of income level.`
      : `${s.name} uses progressive tax brackets — your withholding rate depends on your taxable wages, with higher portions of pay taxed at higher rates.`;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <nav className="text-sm text-slate-500"><Link href="/" className="hover:text-slate-700">Home</Link> › <Link href="/us/learn" className="hover:text-slate-700">US</Link> › <span className="text-slate-700">{s.name}</span></nav>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{s.name} Paycheck Guide</h1>
      <p className="mt-3 text-lg text-slate-700">{stateTaxLine}</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link href={`/us/${s.slug}/paycheck-calculator`} className="rounded-lg border border-slate-200 bg-white p-6 hover:border-blue-300">
          <h2 className="text-lg font-semibold text-slate-900">{s.name} Paycheck Calculator →</h2>
          <p className="mt-1 text-sm text-slate-600">Estimate take-home pay for {s.name} workers.</p>
        </Link>
        <Link href={`/us/${s.slug}/state-tax`} className="rounded-lg border border-slate-200 bg-white p-6 hover:border-blue-300">
          <h2 className="text-lg font-semibold text-slate-900">{s.name} State Tax →</h2>
          <p className="mt-1 text-sm text-slate-600">{s.name} tax structure, rates, and brackets.</p>
        </Link>
        <Link href={`/us/${s.slug}/overtime-pay`} className="rounded-lg border border-slate-200 bg-white p-6 hover:border-blue-300">
          <h2 className="text-lg font-semibold text-slate-900">{s.name} Overtime Pay →</h2>
          <p className="mt-1 text-sm text-slate-600">{s.dailyOvertime ? `${s.name} has stricter daily-overtime rules than federal FLSA.` : `${s.name} follows federal FLSA overtime rules.`}</p>
        </Link>
        <Link href={`/us/${s.slug}/pay-stub-laws`} className="rounded-lg border border-slate-200 bg-white p-6 hover:border-blue-300">
          <h2 className="text-lg font-semibold text-slate-900">{s.name} Pay Stub Laws →</h2>
          <p className="mt-1 text-sm text-slate-600">Whether and how {s.name} requires employers to provide pay stubs.</p>
        </Link>
      </div>

      <section className="mt-12 prose prose-slate max-w-none">
        <h2>Why {s.name} paychecks look the way they do</h2>
        <p>Every {s.name} worker pays federal income tax (withheld per IRS Publication 15-T using your W-4) and FICA — Social Security at 6.2% up to the annual wage base, plus Medicare at 1.45%, plus the Additional Medicare Tax of 0.9% on wages above $200,000 single / $250,000 married filing jointly.</p>
        {s.category === 'no-income-tax' ? (
          <p>{s.name} levies no state income tax — making the math simpler than progressive-bracket states.</p>
        ) : s.category === 'flat' ? (
          <p>{s.name}&apos;s state income tax is a single flat rate. Verify the current rate with the {s.taxAuthority}.</p>
        ) : (
          <p>{s.name} uses progressive tax brackets. Verify current brackets with the {s.taxAuthority}.</p>
        )}
        {s.hasLocalTax ? <p><strong>Local taxes:</strong> {s.name} has cities or counties that levy local income tax in addition to state.</p> : null}
        {s.hasSDI ? <p><strong>State Disability Insurance:</strong> {s.name} has employee-paid SDI premiums.</p> : null}
        {s.hasPFL ? <p><strong>Paid Family Leave:</strong> {s.name} has a Paid Family Leave program with employee-paid premiums.</p> : null}
        {s.dailyOvertime ? <p><strong>Daily overtime:</strong> {s.name} has stricter daily-overtime rules than federal FLSA. See the overtime page above.</p> : null}

        <h2>Authoritative sources</h2>
        <ul>
          <li><a href={s.taxAuthorityUrl} target="_blank" rel="noopener noreferrer">{s.taxAuthority} ({s.taxAuthorityUrl})</a></li>
          <li><a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS — federal income tax</a></li>
          <li><a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">US Department of Labor — Wage and Hour Division</a></li>
        </ul>
      </section>

      <div className="mt-12">
        <MasterDisclaimer variant="long" />
      </div>
    </main>
  );
}
