import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const FOREIGN = ['/uk', '/ie', '/ca', '/au', '/countries', '/global'] as const;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (FOREIGN.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    url.search = '';
    return NextResponse.redirect(url, 308);
  }
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-pathname', pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
