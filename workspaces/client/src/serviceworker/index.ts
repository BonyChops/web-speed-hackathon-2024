/// <reference types="@types/serviceworker" />
import PQueue from 'p-queue';

import { jitter } from './jitter';
import { transformJpegXLToBmp } from './transformJpegXLToBmp';
import { zstdFetch as fetch } from './zstdFetch';

const queue = new PQueue({
});

self.addEventListener('install', (ev: ExtendableEvent) => {
  ev.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (ev: ExtendableEvent) => {
  ev.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (ev: FetchEvent) => {
  ev.respondWith(
    queue.add(() => onFetch(ev.request), {
      throwOnTimeout: true,
    }),
  );
});

async function onFetch(request: Request): Promise<Response> {

  const res = await fetch(request);

  if (res.headers.get('Content-Type') === 'image/jxl') {
    return transformJpegXLToBmp(res);
  } else {
    return res;
  }
}
