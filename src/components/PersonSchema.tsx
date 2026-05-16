import React from 'react';

/**
 * Person JSON-LD for named reviewer pages (CPA / EA / JD).
 * Renders <script type="application/ld+json"> with a Schema.org Person + credential.
 * Drop on /us/reviewers/[slug]/ pages once the editorial board is populated with named humans.
 *
 * 2026-05-16 audit: ships in v3 alongside FinancialProductSchema + DefinedTermSetSchema.
 */

interface Props {
  fullName: string;
  url: string;
  credentials: string[];          // ['CPA'], ['EA'], ['JD'], or combinations
  licenceState?: string;
  licenceNumber?: string;
  linkedIn?: string;
  bio: string;
  expertise: string[];
  photoUrl?: string;              // absolute URL preferred (https://payslipiq.com/reviewers/{slug}.webp)
}

export function PersonSchema({ fullName, url, credentials, licenceState, licenceNumber, linkedIn, bio, expertise, photoUrl }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: fullName,
    url,
    description: bio,
    image: photoUrl,
    sameAs: linkedIn ? [linkedIn] : undefined,
    jobTitle: credentials.join(', '),
    knowsAbout: expertise,
    worksFor: { '@type': 'Organization', name: 'PayslipIQ', url: 'https://payslipiq.com/' },
    hasCredential: credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: c,
      recognizedBy: { '@type': 'Organization', name: licenceState ? `${licenceState} licensing authority` : 'United States' },
      identifier: licenceNumber ? `${licenceState ?? ''} ${c} #${licenceNumber}` : undefined,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
