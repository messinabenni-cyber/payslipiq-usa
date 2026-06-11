'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SEARCH_INDEX, type SearchEntry } from '@/lib/searchIndex';

/**
 * Client-side site search. Reads the initial query from ?q=, then filters the static
 * SEARCH_INDEX live as the user types. Case-insensitive match across title, description,
 * and keywords. No network calls — the index ships with the page.
 */
function matches(entry: SearchEntry, q: string): boolean {
  const haystack = [
    entry.title,
    entry.description,
    ...entry.keywords,
  ]
    .join(' ')
    .toLowerCase();
  // Match if every whitespace-separated token in the query appears somewhere.
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((token) => haystack.includes(token));
}

export function SiteSearch() {
  const params = useSearchParams();
  const initial = params.get('q') ?? '';
  const [query, setQuery] = useState(initial);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    return SEARCH_INDEX.filter((entry) => matches(entry, q));
  }, [query]);

  const trimmed = query.trim();

  return (
    <div className="mt-8">
      <label htmlFor="site-search" className="sr-only">
        Search PayslipIQ
      </label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search calculators, taxes, deductions, terms…"
        autoComplete="off"
        autoFocus
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      {trimmed === '' ? (
        <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
          Type a topic to search PayslipIQ — for example{' '}
          <button
            type="button"
            onClick={() => setQuery('fica')}
            className="text-blue-600 hover:underline"
          >
            FICA
          </button>
          ,{' '}
          <button
            type="button"
            onClick={() => setQuery('overtime')}
            className="text-blue-600 hover:underline"
          >
            overtime
          </button>
          , or{' '}
          <button
            type="button"
            onClick={() => setQuery('401k')}
            className="text-blue-600 hover:underline"
          >
            401(k)
          </button>
          .
        </p>
      ) : results.length === 0 ? (
        <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
          No pages matched “{trimmed}”. Try a broader term, or browse the{' '}
          <Link href="/us/learn" className="text-blue-600 hover:underline">
            learn library
          </Link>
          .
        </p>
      ) : (
        <>
          <p className="mt-6 text-[13px] uppercase tracking-[0.14em] font-semibold text-slate-500">
            {results.length} {results.length === 1 ? 'result' : 'results'}
          </p>
          <ul className="mt-4 grid gap-3">
            {results.map((entry) => (
              <li key={entry.url}>
                <Link
                  href={entry.url}
                  className="block rounded-lg border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm"
                >
                  <div className="font-semibold text-slate-900">{entry.title}</div>
                  <div className="mt-1 text-[15px] leading-relaxed text-slate-700">
                    {entry.description}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
