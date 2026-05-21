/**
 * Reviewed-by stamp for E-E-A-T signal on YMYL (Your Money, Your Life) content.
 * Render at the top of any cluster page covering tax, payroll, withholding,
 * benefits, or anything that touches a worker's money decisions.
 *
 * The reviewer name is held in src/lib/editorialBoard.ts so it can be swapped
 * without touching every page.
 */
import { EDITORIAL_BOARD, LAST_REVIEWED } from '@/lib/editorialBoard';
import Link from 'next/link';

export interface ReviewedByProps {
  reviewerSlug?: keyof typeof EDITORIAL_BOARD;
  reviewedOn?: string;
  className?: string;
}

export function ReviewedBy({ reviewerSlug = 'lead-reviewer', reviewedOn = LAST_REVIEWED, className = '' }: ReviewedByProps) {
  const reviewer = EDITORIAL_BOARD[reviewerSlug] ?? EDITORIAL_BOARD['lead-reviewer'];
  return (
    <div className={'mt-4 flex items-center gap-3 text-[13px] text-slate-600 ' + className} aria-label="Editorial review">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 font-semibold ring-1 ring-slate-200">
        {reviewer.initials}
      </div>
      <div className="leading-tight">
        <div>
          Reviewed by{' '}
          <Link href={`/us/about-the-team/#${reviewer.slug}`} className="font-semibold text-slate-900 hover:underline">
            {reviewer.name}, {reviewer.credential}
          </Link>
        </div>
        <div className="text-[12px] text-slate-500">
          Last reviewed {reviewedOn} · <Link href="/us/about-the-team" className="hover:underline">Editorial standards</Link>
        </div>
      </div>
    </div>
  );
}
