import React from 'react';
import Link from 'next/link';
import { MasterDisclaimer } from './MasterDisclaimer';
import { ArticleSchema } from './ArticleSchema';
import { BreadcrumbSchema } from './BreadcrumbSchema';
import { FAQSchema, type FAQItem } from './FAQSchema';

export interface RelatedLink { label: string; href: string; }

interface Props {
  title: string;
  url: string;
  description: string;
  intro?: React.ReactNode;
  body: React.ReactNode;
  faqs?: FAQItem[];
  related?: RelatedLink[];
  breadcrumbs?: Array<{ name: string; url: string }>;
}

/**
 * Standard wrapper for explainer/topic pages. Emits Article + FAQ + Breadcrumb schemas,
 * renders intro, body, FAQ (visible + JSON-LD), related-links footer, and master disclaimer.
 */
export function RichArticle({
  title,
  url,
  description,
  intro,
  body,
  faqs,
  related,
  breadcrumbs,
}: Props) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <ArticleSchema headline={title} description={description} url={`https://payslipiq.com${url}`} />
      {breadcrumbs && breadcrumbs.length > 0 ? <BreadcrumbSchema items={breadcrumbs} /> : null}

      {breadcrumbs && breadcrumbs.length > 0 ? (
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          {breadcrumbs.map((c, i) => (
            <span key={i}>
              {i > 0 ? ' › ' : ''}
              {i < breadcrumbs.length - 1 ? (
                <Link href={c.url} className="hover:text-slate-700">{c.name}</Link>
              ) : (
                <span className="text-slate-700">{c.name}</span>
              )}
            </span>
          ))}
        </nav>
      ) : null}

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{title}</h1>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-slate-700">{intro}</p> : null}

      <div className="mt-6">
        <MasterDisclaimer variant="long" />
      </div>

      <article className="mt-8 prose prose-slate max-w-none prose-headings:text-slate-900 prose-h2:mt-10 prose-h3:mt-6 prose-a:text-blue-700 hover:prose-a:text-blue-800">
        {body}
      </article>

      {faqs && faqs.length > 0 ? <FAQSchema items={faqs} /> : null}

      {related && related.length > 0 ? (
        <section className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-sm font-semibold text-slate-900">Related</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="text-blue-700 hover:text-blue-800">
                  {r.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
