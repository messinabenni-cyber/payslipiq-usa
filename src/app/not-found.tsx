import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found | PayslipIQ',
  description: 'The page you were looking for does not exist on PayslipIQ. Try one of the popular pages below.',
  robots: { index: false, follow: false }
};

const POPULAR = [
  { href: '/us/pay-stub-checker', title: 'Pay Stub Checker', desc: 'Upload a stub, get a plain-English breakdown.' },
  { href: '/us/paycheck-calculator', title: 'Paycheck Calculator', desc: 'Estimate take-home pay from gross.' },
  { href: '/us/state-tax', title: 'State Tax Index', desc: 'Pick your state.' },
  { href: '/us/why-is-my-paycheck-lower', title: 'Why is my paycheck lower?', desc: 'Common reasons your net pay dropped.' },
  { href: '/us/fica-explained', title: 'FICA explained', desc: 'Social Security, Medicare, Additional Medicare.' },
  { href: '/us/find-a-cpa', title: 'Find a CPA', desc: 'When to talk to a credentialed professional.' }
];

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-[12px] uppercase tracking-[0.14em] font-semibold text-blue-600">Error 404</div>
      <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">We could not find that page.</h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-700">
        The link may be old, the page may have moved, or there may be a typo in the URL. Try one of the popular pages below or jump to the homepage.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/us" className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Go to homepage
        </Link>
        <Link href="/us/pay-stub-checker" className="inline-flex items-center justify-center bg-white text-slate-900 px-5 py-3 rounded-lg font-semibold ring-1 ring-slate-300 hover:bg-slate-50">
          Check a Pay Stub
        </Link>
      </div>

      <section className="mt-14">
        <h2 className="text-xl font-semibold text-slate-900">Popular pages</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {POPULAR.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300">
                <div className="font-semibold text-slate-900">{p.title}</div>
                <div className="mt-1 text-sm text-slate-600">{p.desc}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 text-sm text-slate-500">
        Found a broken link on PayslipIQ? Email{' '}
        <a href="mailto:hello@payslipiq.com" className="text-blue-600 hover:underline">hello@payslipiq.com</a>{' '}
        and we will fix it.
      </p>
    </main>
  );
}
