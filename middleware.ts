import { NextResponse, type NextRequest } from "next/server";
const protectedRoutes = ["/curriculum"];
const publicRoutes = ["/news", "/schedule", "/teachers"];
export default async function middleware(req: NextRequest) {
  const { cookies } = await import("next/headers");
  const path = req.nextUrl.pathname;
  const cookie = (await cookies()).getAll();
  const accessToken = cookie.find((c) => c.name === "accessToken");

  if ((path === "/signin" || path === "/signup") && accessToken) {
    return NextResponse.redirect(new URL("/not-found", req.url));
  }
  const isProtected = protectedRoutes.includes(path);
  if (isProtected) {
    const accessToken = cookie.find((c) => c.name === "accessToken");
    console.log(accessToken);
    if (accessToken) return NextResponse.next();
    else return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}
