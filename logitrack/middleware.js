import { NextResponse } from "next/server";


export function middleware(request) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/en/landing", request.url));
  }

  return NextResponse.next();
}