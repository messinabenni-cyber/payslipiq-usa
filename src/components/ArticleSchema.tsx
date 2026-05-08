import React from 'react';

interface Props {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function ArticleSchema({ headline, description, url, datePublished = '2026-05-08', dateModified = '2026-05-08' }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified,
    inLanguage: 'en-US',
    author: { '@type': 'Organization', name: 'PayslipIQ' },
    publisher: {
      '@type': 'Organization',
      name: "PayslipIQ",
      logo: { '@type': 'ImageObject', url: 'https://payslipiq.com/icon-512.png' },
    },
    mainEntityOfPage: url,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
