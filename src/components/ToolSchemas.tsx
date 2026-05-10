/* eslint-disable react/no-danger */
import React from 'react';

type Step = { name: string; text: string };

interface SoftwareApplicationProps {
  url: string;
  name: string;
  description: string;
  category?: string;
}

export function SoftwareApplicationLd({
  url,
  name,
  description,
  category = 'FinanceApplication'
}: SoftwareApplicationProps) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    operatingSystem: 'Web',
    applicationCategory: category,
    url,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description,
    isAccessibleForFree: true
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

interface HowToProps {
  name: string;
  description: string;
  steps: Step[];
}

export function HowToLd({ name, description, steps }: HowToProps) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
