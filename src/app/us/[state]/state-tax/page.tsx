import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { STATES, getStateBySlug } from '@/lib/states';
import { MasterDisclaimer } from '@/components/MasterDisclaimer';

interface PageProps { params: { state: string }; }

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const s = getStateBySlug(params.state);
  if (!s) return { title: 'State not found' };
  return {
    title: `${s.name} State Income Tax (2026)`,
    description: `${s.name} state income tax explained: rates, brackets, structure. Sourced from ${s.taxAuthority}. Educational only.`,
    alternates: { canonical: `/us/${s.slug}/state-tax` },
  };
}

export default function Page({ params }: PageProps) {
  const s = getStateBySlug(params.state);
  if (!s) return notFound();
  const structureLine = s.category === 'no-income-tax'
    ? `${s.name} levies no state income tax on wages.`
    : s.category === 'flat'
    ? `${s.name} uses a flat state income tax rate. Verify the current rate with ${s.taxAuthority}.`
    : `${s.name} uses progressive tax brackets. Verify with ${s.taxAuthority}.`;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <nav className="text-sm text-slate-500"><Link href="/" className="hover:text-slate-700">Home</Link> › <Link href={`/us/${s.slug}`} className="hover:text-slate-700">{s.name}</Link> › <span className="text-slate-700">State Tax</span></nav>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{s.name} State Income Tax</h1>
      <article className="mt-6 prose prose-slate max-w-none">
        <p>{structureLine}</p>
        <h2>Authoritative source</h2>
        <p>The <a href={s.taxAuthorityUrl} target="_blank" rel="noopener noreferrer">{s.taxAuthority}</a> publishes current rates, brackets, withholding tables, and tax forms.</p>
        {s.hasLocalTax ? <p><strong>Local taxes:</strong> {s.name} has cities or counties that levy local income tax in addition to state.</p> : null}
        {s.hasSDI ? <p><strong>SDI:</strong> {s.name} has employee-paid State Disability Insurance premiums.</p> : null}
        {s.hasPFL ? <p><strong>PFL:</strong> {s.name} has a Paid Family Leave program with employee-paid premiums.</p> : null}
      </article>
      <div className="mt-10"><MasterDisclaimer variant="long" /></div>
    </main>
  );
}
