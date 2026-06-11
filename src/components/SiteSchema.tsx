import React from 'react';
import { organizationNode, websiteNode, ld } from '@/lib/schema';

/**
 * Site-wide entity graph: Organization + WebSite, emitted on EVERY page via the root layout.
 *
 * Before this, Organization/WebSite JSON-LD lived only on `/`, so ~1,300 indexable URLs had no
 * publisher entity for Google's Knowledge Graph or AI engines to resolve. Mounting this in the
 * root layout grounds the publisher entity on every URL, with stable @id anchors that per-page
 * graphs reference. One node, defined once, referenced everywhere — the recommended pattern.
 */
export function SiteSchema() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organizationNode(), websiteNode()],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: ld(graph) }}
    />
  );
}
