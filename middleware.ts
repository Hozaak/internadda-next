import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Define protected routes that require a login
  const protectedRoutes = [
    '/profile', 
    '/settings', 
    '/dashboard', 
    '/apply', 
    '/tests', 
    '/test/practice', 
    '/test/real', 
    '/result', 
    '/offer-letter'
  ];
  
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some(route => path.startsWith(route));

  // In a real app, you would check for a Supabase auth cookie here
  // For now, we simulate a check for a session
  const userToken = request.cookies.get('sb-access-token');

  if (isProtectedRoute && !userToken) {
    const loginUrl = new URL('/login', request.url);
    // Store the attempted URL so we can redirect back after login
    loginUrl.searchParams.set('redirect', path);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Ensure the middleware only runs on relevant paths
export const config = {
  matcher: [
    '/profile/:path*',
    '/settings/:path*',
    '/dashboard/:path*',
    '/apply/:path*',
    '/tests/:path*',
    '/test/:path*',
    '/result/:path*',
    '/offer-letter/:path*',
  ],
};
