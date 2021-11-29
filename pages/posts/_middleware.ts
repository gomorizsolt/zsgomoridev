import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';
import { setViews } from 'lib/views';

export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const [, slug] = req.nextUrl.pathname.split('/posts/');

  event.waitUntil(
    (async () => {
      try {
        await setViews(slug);
      } catch (error) {
        console.error(`Error while incrementing views at slug ${slug}: `, error);
      }
    })()
  );

  return NextResponse.next();
}
