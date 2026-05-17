import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticleSchema } from '@/components/ArticleSchema';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

const PAGE_URL = 'https://payslipiq.com/us/accessibility/';

export const metadata: Metadata = {
  title: 'Accessibility Statement — PayslipIQ',
  description:
    'PayslipIQ targets WCAG 2.1 Level AA. Keyboard navigation, ARIA labels, color contrast, alt text. Report accessibility issues to our contact address.',
  alternates: { canonical: PAGE_URL },
};

const BREADCRUMBS = [
  { name: 'PayslipIQ', url: 'https://payslipiq.com/' },
  { name: 'USA', url: 'https://payslipiq.com/us/' },
  { name: 'Accessibility', url: PAGE_URL },
];

export default function AccessibilityPage() {
  return (
    <>
      <ArticleSchema
        headline="Accessibility Statement"
        description="PayslipIQ targets WCAG 2.1 Level AA."
        url={PAGE_URL}
      />
      <BreadcrumbSchema items={BREADCRUMBS} />

      <main id="main" className="mx-auto max-w-3xl px-4 py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:underline">PayslipIQ</Link>
          <span className="mx-2">/</span>
          <Link href="/us/" className="hover:underline">USA</Link>
          <span className="mx-2">/</span>
          <span aria-current="page">Accessibility</span>
        </nav>

        <header className="mb-8">
          <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Last reviewed: 2026</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Accessibility Statement</h1>
          <p className="mt-4 text-lg text-slate-700">
            PayslipIQ targets <strong>WCAG 2.1 Level AA</strong>. We design and test for users who
            rely on keyboard navigation, screen readers, voice control, and high-contrast modes.
          </p>
        </header>

        <section className="prose prose-slate max-w-none">
          <h2>Standards we target</h2>
          <ul>
            <li>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA — the standard most US courts treat as the de-facto benchmark under Title III of the Americans with Disabilities Act (ADA).</li>
            <li>Section 508 of the Rehabilitation Act, where applicable to federal procurement.</li>
            <li>Keyboard-only navigation across every page.</li>
            <li>Screen reader compatibility (tested with VoiceOver on macOS/iOS and NVDA on Windows).</li>
          </ul>

          <h2>What we have built in</h2>
          <ul>
            <li>Skip-to-main-content link on every page.</li>
            <li>Semantic HTML (proper <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code> landmarks).</li>
            <li>Color contrast ratio of at least 4.5:1 for body text and 3:1 for large text.</li>
            <li>Visible keyboard focus indicators.</li>
            <li>Form fields with explicit labels and ARIA error messaging.</li>
            <li>Responsive layout that reflows at 200% zoom without horizontal scrolling.</li>
            <li>No automatically playing audio or video.</li>
            <li>Alt text on all informative images. Decorative images marked <code>aria-hidden</code>.</li>
            <li>Captions on any embedded video content.</li>
          </ul>

          <h2>Known limitations</h2>
          <p>
            We disclose what is not yet fully WCAG 2.1 AA compliant:
          </p>
          <ul>
            <li>Some PDF source documents we link to (IRS publications, state DOR forms) are hosted on third-party government sites and may not meet AA themselves. We cannot remediate third-party content.</li>
            <li>Complex interactive calculators have been tested with screen readers but may have edge cases. Report any issue and we will prioritize a fix.</li>
          </ul>

          <h2>Reporting an accessibility issue</h2>
          <p>
            If you encounter a barrier on PayslipIQ, please tell us. We aim to acknowledge accessibility reports within <strong>2 business days</strong> and provide a fix or workaround within <strong>10 business days</strong> for issues that block use.
          </p>
          <p>
            Email: see the <Link href="/contact">Contact</Link> page.
          </p>
          <p>
            Please include: the URL, the device and assistive technology you were using, what you were trying to do, and what failed. Screenshots or screen recordings help.
          </p>

          <h2>Continuous testing</h2>
          <p>
            We run automated accessibility checks (axe-core) on every deploy. We do periodic manual reviews with screen readers and keyboard-only navigation. We treat accessibility regressions as production-blocking.
          </p>

          <h2>Feedback drives improvement</h2>
          <p>
            This statement is updated when we ship significant accessibility changes. The current version reflects the state of the site as of <strong>2026</strong>.
          </p>
        </section>
      </main>
    </>
  );
}
