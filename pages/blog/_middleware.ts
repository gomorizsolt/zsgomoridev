import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { setViews } from "lib/views";

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const [, slug] = req.nextUrl.pathname.split("/posts/");

  // allow us to run asynchronous code after the rest of the function has completed
  event.waitUntil(
    (async () => {
      try {
        await setViews(slug);
      } catch (error) {
        console.error(`Error while incrementing views for ${slug}: `, error);
      }
    })()
  );

  return NextResponse.next();
}
