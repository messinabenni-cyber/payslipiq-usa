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
    title: `${s.name} Pay Stub Checker (Free)`,
    description: `Upload a ${s.name} pay stub. PayslipIQ explains every line. Educational only.`,
    alternates: { canonical: `/us/${s.slug}/pay-stub-checker` },
  };
}

export default function Page({ params }: PageProps) {
  const s = getStateBySlug(params.state);
  if (!s) return notFound();
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <nav className="text-sm text-slate-500"><Link href="/" className="hover:text-slate-700">Home</Link> › <Link href={`/us/${s.slug}`} className="hover:text-slate-700">{s.name}</Link> › <span className="text-slate-700">Pay Stub Checker</span></nav>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{s.name} Pay Stub Checker</h1>
      <p className="mt-3 text-lg text-slate-700">Upload a {s.name} pay stub. PayslipIQ explains every line.</p>
      <div className="mt-4"><MasterDisclaimer variant="long" /></div>
      <p className="mt-6"><Link href="/us/pay-stub-checker" className="font-semibold text-blue-700">Use the AI Pay Stub Explainer →</Link></p>
    </main>
  );
}
