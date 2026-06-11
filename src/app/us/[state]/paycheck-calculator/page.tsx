import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { STATES, getStateBySlug } from '@/lib/states';
import { PaycheckCalculator } from '@/components/PaycheckCalculator';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';
import { SchemaGraph } from '@/components/SchemaGraph';
import { SoftwareApplicationLd } from '@/components/ToolSchemas';

interface PageProps { params: { state: string }; }

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const s = getStateBySlug(params.state);
  if (!s) return { title: 'State not found', robots: { index: false, follow: false } };
  return {
    title: `${s.name} Paycheck Calculator (2026)`,
    description: `Estimate ${s.name} take-home pay. Federal tax, FICA, ${s.name} state tax explained. Educational only.`,
    alternates: { canonical: `/us/${s.slug}/paycheck-calculator` },
  };
}

export default function Page({ params }: PageProps) {
  const s = getStateBySlug(params.state);
  if (!s) return notFound();
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <SchemaGraph
        type="WebPage"
        url={`/us/${s.slug}/paycheck-calculator`}
        name={`${s.name} Paycheck Calculator (2026)`}
        description={`Estimate ${s.name} take-home pay. Federal tax, FICA, and ${s.name} state tax in one place. Educational only.`}
        about="withholding"
        mentions={['fica', 'incomeTax']}
        reviewed
        dateModified="2026-06-11"
        breadcrumbs={[
          { name: 'Home', url: '/us' },
          { name: s.name, url: `/us/${s.slug}` },
          { name: 'Paycheck Calculator', url: `/us/${s.slug}/paycheck-calculator` },
        ]}
      />
      <SoftwareApplicationLd
        url={`https://payslipiq.com/us/${s.slug}/paycheck-calculator`}
        name={`${s.name} Paycheck Calculator`}
        description={`Estimate ${s.name} take-home pay from gross — federal income tax, FICA, and ${s.name} state tax. Educational only.`}
      />
      <nav className="text-sm text-slate-500"><Link href="/" className="hover:text-slate-700">Home</Link> › <Link href={`/us/${s.slug}`} className="hover:text-slate-700">{s.name}</Link> › <span className="text-slate-700">Paycheck Calculator</span></nav>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{s.name} Paycheck Calculator</h1>
      <p className="mt-3 text-lg text-slate-700">Estimate take-home pay for {s.name}: federal income tax, FICA, and {s.name} state tax in one place.</p>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <div className="mt-8"><PaycheckCalculator defaultStateSlug={s.slug} /></div>
      <section className="mt-12 prose prose-slate max-w-none">
        <h2>About {s.name} payroll</h2>
        <p>This calculator pre-selects {s.name}. {s.category === 'no-income-tax' ? `${s.name} has no state income tax, so your paycheck only has federal tax and FICA.` : s.category === 'flat' ? `${s.name} uses a flat state income tax. Verify the current rate with ${s.taxAuthority}.` : `${s.name} uses progressive brackets. Verify with ${s.taxAuthority}.`}</p>
        <p>For full state context including {s.hasLocalTax ? 'local taxes,' : ''} {s.hasSDI ? 'SDI,' : ''} {s.hasPFL ? 'PFL,' : ''} and overtime rules, see the <Link href={`/us/${s.slug}`}>{s.name} guide</Link>.</p>
      </section>
      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm font-semibold text-slate-900">Related {s.name} pages</p>
        <ul className="mt-2 grid grid-cols-1 gap-1 text-sm text-blue-700 sm:grid-cols-2">
          <li><Link href={`/us/${s.slug}`}>{s.name} paycheck guide →</Link></li>
          <li><Link href={`/us/${s.slug}/pay-stub-checker`}>{s.name} pay stub checker →</Link></li>
          <li><Link href={`/us/${s.slug}/state-tax`}>{s.name} state income tax →</Link></li>
          <li><Link href={`/us/${s.slug}/overtime-pay`}>{s.name} overtime rules →</Link></li>
          <li><Link href={`/us/${s.slug}/pay-stub-laws`}>{s.name} pay stub laws →</Link></li>
          <li><Link href="/us/paycheck-calculator">All-states paycheck calculator →</Link></li>
        </ul>
      </section>
    </main>
  );
}
