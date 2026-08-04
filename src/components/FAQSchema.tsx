import React from 'react';

export interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  items: FAQItem[];
  title?: string;
  /**
   * When false, emits ONLY the JSON-LD FAQPage schema (no visible section).
   * Use visible={false} on pages that render their own FAQ markup, otherwise
   * the questions appear twice on the page.
   */
  visible?: boolean;
}

/**
 * Renders a visible FAQ section AND emits JSON-LD FAQPage schema.
 * Use on every explainer/state/calculator page that has questions.
 * Pass visible={false} if the page already renders its own FAQ section.
 */
export function FAQSchema({ items, title = 'Frequently asked questions', visible = true }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  if (!visible) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }

  return (
    <section className="mt-12 border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
      <dl className="mt-6 space-y-6">
        {items.map((item, i) => (
          <div key={i}>
            <dt className="text-base font-semibold text-slate-900">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</dd>
          </div>
        ))}
      </dl>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
