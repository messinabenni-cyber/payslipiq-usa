import React from 'react';
import {
  ORG_ID,
  WEBSITE_ID,
  EDITORIAL_TEAM_ID,
  editorialTeamNode,
  ENTITY,
  type EntityKey,
  ld,
} from '@/lib/schema';

interface Props {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  /** Primary payroll concept this article is about — grounds it to Wikidata. */
  about?: EntityKey;
  /** Secondary payroll concepts mentioned. */
  mentions?: EntityKey[];
  /** Set false to suppress the reviewedBy editorial-team signal (default true for YMYL). */
  reviewed?: boolean;
}

function entityThing(key: EntityKey) {
  const e = ENTITY[key];
  return { '@type': 'Thing', name: e.name, sameAs: [e.wikidata, e.wikipedia] };
}

/**
 * Article JSON-LD wired into the site-wide entity graph by @id.
 *  - publisher / author / reviewedBy reference the canonical Organization + editorial-team nodes
 *    (defined once site-wide) instead of re-declaring an anonymous Organization on every page.
 *  - reviewedBy = the in-house editorial team (honest; no fabricated CPA) — the strongest YMYL
 *    E-E-A-T signal Google references for finance content.
 *  - about / mentions ground the article to verified Wikidata entities for AI disambiguation.
 */
export function ArticleSchema({
  headline,
  description,
  url,
  datePublished = '2026-05-08',
  dateModified = '2026-05-21',
  image,
  about,
  mentions,
  reviewed = true,
}: Props) {
  const imageUrl =
    image ?? `https://payslipiq.com/api/og?title=${encodeURIComponent(headline)}&eyebrow=PayslipIQ%20USA`;
  const article: Record<string, unknown> = {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    image: [imageUrl],
    datePublished,
    dateModified,
    inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    author: { '@id': reviewed ? EDITORIAL_TEAM_ID : ORG_ID },
    mainEntityOfPage: url,
    ...(about ? { about: entityThing(about) } : {}),
    ...(mentions && mentions.length ? { mentions: mentions.map(entityThing) } : {}),
    ...(reviewed ? { reviewedBy: { '@id': EDITORIAL_TEAM_ID }, lastReviewed: dateModified } : {}),
  };
  const graph = {
    '@context': 'https://schema.org',
    '@graph': reviewed ? [article, editorialTeamNode()] : [article],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld(graph) }} />;
}
