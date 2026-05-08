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
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/uk', '/uk/:path*',
    '/ie', '/ie/:path*',
    '/ca', '/ca/:path*',
    '/au', '/au/:path*',
    '/countries', '/countries/:path*',
    '/global', '/global/:path*',
  ],
};
