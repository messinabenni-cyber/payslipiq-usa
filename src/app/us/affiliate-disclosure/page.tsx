import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

const PAGE_URL = 'https://payslipiq.com/us/affiliate-disclosure';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'How PayslipIQ is funded and how we handle partner and affiliate links. Affiliate relationships never change tool results or editorial content. Educational only.',
  alternates: { canonical: PAGE_URL },
};

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us' },
  { name: 'Affiliate Disclosure', url: PAGE_URL },
];

export default function AffiliateDisclosurePage() {
  return (
    <>
      <ArticleSchema
        headline="Affiliate Disclosure"
        description="How PayslipIQ is funded and how we handle partner and affiliate links."
        url={PAGE_URL}
      />
      <BreadcrumbSchema items={BREADCRUMBS} />

      <main id="main" className="mx-auto max-w-3xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Affiliate Disclosure</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Last reviewed: 2026</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Affiliate Disclosure</h1>
          <p className="mt-4 text-lg text-slate-700">
            PayslipIQ is an independent, reader-focused educational resource. This page explains
            how PayslipIQ is funded and how it handles any partner or affiliate links, so you
            always know where our income comes from.
          </p>
        </header>

        <section className="prose prose-slate max-w-none">
          <h2>How PayslipIQ is funded</h2>
          <p>
            The free tools and guides on PayslipIQ are supported by two paid products: a one-time
            Premium Pay Stub Report and a low-cost monthly Paycheck Monitor. PayslipIQ does not run
            display-ad networks, does not sell or share user pay stub data, and does not generate
            leads for payday lenders or other high-cost finance products.
          </p>

          <h2>Affiliate and partner links</h2>
          <p>
            From time to time PayslipIQ may link to third-party services that are genuinely useful
            to American workers — for example tax-filing software, payroll software, or directories
            that help you find a CPA, enrolled agent, or bookkeeper. Some of those links may be
            affiliate or referral links. If you use one and later sign up or buy, PayslipIQ may earn
            a commission or referral fee. There is no extra cost to you, and the price you pay is
            the same as it would be without our link.
          </p>
          <p>
            Where a link is an affiliate or partner link, we aim to make that clear in context. If
            you ever see a recommendation and want to know whether a link is an affiliate link, you
            can ask us through the <Link href="/contact">contact page</Link>.
          </p>

          <h2>What affiliate income does not change</h2>
          <ul>
            <li>It does not change the numbers any PayslipIQ tool or calculator returns.</li>
            <li>It does not change the educational guidance in our pages.</li>
            <li>It does not buy a placement, a ranking, or a favourable write-up.</li>
            <li>We only consider partners we would be comfortable pointing a friend toward.</li>
          </ul>
          <p>
            PayslipIQ tools estimate federal, state, and FICA figures from published government
            sources and your own inputs. Those calculations are never influenced by whether a
            partner relationship exists.
          </p>

          <h2>Independence</h2>
          <p>
            PayslipIQ is not affiliated with the IRS, the Social Security Administration, the
            Department of Labor, any state tax agency, any employer, or any payroll provider.
            Partner relationships are commercial arrangements only and do not imply endorsement of
            PayslipIQ by those companies, or of those companies by any government body.
          </p>

          <h2>Educational use only</h2>
          <p>
            PayslipIQ provides educational estimates only. Nothing on the site, including any
            partner or affiliate content, is tax, legal, payroll, accounting, HR, employment, or
            financial advice. Always verify important matters with official sources or a qualified
            professional. See the full <Link href="/disclaimer">disclaimer</Link> and our{' '}
            <Link href="/us/about-the-team">editorial standards</Link>.
          </p>

          <h2>Questions</h2>
          <p>
            If you have a question about how PayslipIQ makes money or about a specific link, contact
            us through the <Link href="/contact">contact page</Link>. This disclosure is updated
            when our funding model or partner approach changes.
          </p>
        </section>
      </main>
    </>
  );
}
