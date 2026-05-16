import React from 'react';

/**
 * DefinedTermSet JSON-LD for the pay stub glossary.
 * Schema.org's DefinedTermSet + DefinedTerm gives crawlers and AI search engines a
 * structured glossary they can quote into AI Overviews / Perplexity citations.
 *
 * Drop on /us/glossary/ and /us/pay-stub-glossary/.
 *
 * 2026-05-16 audit: ships in v3.
 */

interface Props {
  name: string;
  description: string;
  url: string;
  terms: Array<{ term: string; definition: string }>;
}

export function DefinedTermSetSchema({ name, description, url, terms }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name,
    description,
    url,
    inLanguage: 'en-US',
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      inDefinedTermSet: url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
