/**
 * PressStrip - "As featured in" trust strip for the homepage hero footer.
 * Logos hidden until real press hits land. Component currently renders a quiet
 * trust-line variant pointing at the editorial review page.
 *
 * When real press logos exist, replace the inner content with a row of SVG /
 * grayscale logos and keep the same wrapper.
 */
import Link from 'next/link';

export function PressStrip() {
  return (
    <section aria-label="Editorial trust" className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-[13px] text-slate-600">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-emerald-600" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5 9-9" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span><strong className="text-slate-900">Reviewed</strong> by named editors on every page.</span>
          <Link href="/us/about-the-team/" className="text-blue-600 hover:underline ml-2">See the team</Link>
        </div>
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-emerald-600" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 6 1-4.5 4 1 6L12 16l-5.5 3 1-6L3 9l6-1z" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span><strong className="text-slate-900">USA-only</strong>, all 50 states + DC, hand-written narratives.</span>
        </div>
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-emerald-600" stroke="currentColor" strokeWidth="2"><path d="M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4 9-4M12 11v10" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span><strong className="text-slate-900">Privacy-first</strong>, no ads, no data sold.</span>
        </div>
      </div>
    </section>
  );
}
