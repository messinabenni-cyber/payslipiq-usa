import React from 'react';

interface Props {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export function ArticleSchema({ headline, description, url, datePublished = '2026-05-08', dateModified = '2026-05-21', image }: Props) {
  // Article rich results recommend an image. Default to a stable 1200x630 OG
  // image so every page using this component satisfies the recommendation.
  const imageUrl = image ?? `https://payslipiq.com/api/og?title=${encodeURIComponent(headline)}&eyebrow=PayslipIQ%20USA`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: [imageUrl],
    datePublished,
    dateModified,
    inLanguage: 'en-US',
    author: {
      '@type': 'Organization',
      name: 'PayslipIQ',
      url: 'https://payslipiq.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PayslipIQ',
      url: 'https://payslipiq.com/',
      logo: { '@type': 'ImageObject', url: 'https://payslipiq.com/icon-512.png' },
    },
    mainEntityOfPage: url,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
