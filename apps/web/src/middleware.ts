import { NextResponse, type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.headers.get('user-agent'));
  // console.log(request.headers.get("x-forwared-for")); // get IP address of user
  return NextResponse.next();
}

// TODO: Need to handle this carefully
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - manifest.webmanifest (manifest file)
     */
    '/((?!api|public|_next/static|_next/image|favicon.ico|manifest.webmanifest).*)'
  ]
};
