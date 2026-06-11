import React from 'react';
import { pageGraph, ld } from '@/lib/schema';

type PageGraphInput = Parameters<typeof pageGraph>[0];

/**
 * Renders a single per-page @graph (WebPage/Article + BreadcrumbList + entity grounding +
 * YMYL author/reviewer), wired by @id to the site-wide Organization + WebSite from SiteSchema.
 *
 * Use on pages that are NOT already wrapped by RichArticle — primarily the dynamic [state]/*
 * templates, which previously emitted zero structured data across ~200 indexable URLs.
 *
 * Example:
 *   <SchemaGraph url={`/us/${slug}/state-tax`} name="California State Income Tax"
 *     description="..." about="incomeTax" reviewed
 *     breadcrumbs={[{name:'Home',url:'/us'},{name:'California',url:'/us/california'},{name:'State Tax',url:'/us/california/state-tax'}]} />
 */
export function SchemaGraph(props: PageGraphInput) {
  const graph = pageGraph(props);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: ld(graph) }}
    />
  );
}
