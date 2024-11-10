import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
const protectedRoutes = ["/curriculum"];
const publicRoutes = ["/news", "/schedule", "/teachers"];
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const cookie = (await cookies()).getAll();
  console.log(cookie);
  const isProtected = protectedRoutes.includes(path);
  // const isPublic = publicRoutes.includes(path);
  const url = req.nextUrl.clone();
  url.pathname = "/not-found";
  if (isProtected) return NextResponse.redirect(url);
  return NextResponse.next();
}
