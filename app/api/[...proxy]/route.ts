import type { NextRequest } from "next/server";

const apiServer = "http://localhost:3001/";

async function proxy(
  req: NextRequest,
  ctx: { params: Promise<{ proxy: string[] }> }
) {
  const paramPromise = await ctx.params;
  let url = `${apiServer}${paramPromise.proxy.join("/")}`;
  console.log("@url", url);
  const search = req.nextUrl.searchParams.toString();
  if (search) {
    url += `?${search}`;
  }
  const headers = new Headers();
  req.headers.forEach((v, k) => {
    headers.append(k, v);
  });

  console.log("@req.body", req.body);

  const res = await fetch(url, {
    method: req.method,
    headers,
    ...(req.body && { body: JSON.stringify(await req.json()) }),
  });
  console.log("@", res);
  return res;
}

export { proxy as DELETE, proxy as GET, proxy as POST, proxy as PUT };
