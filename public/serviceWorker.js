console.log("service worker from public folder");

const cacheData = "App-V1";

this.addEventListener("install", (event) => {
  console.log("[Service Worker] Install");
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheData);
      console.log("[Service Worker] Caching all: app shell and content");
      await cache.addAll([
        "/static/js/bundle.js",
        "/static/js/manifest.json",
        "/users",
        "index.html",
        "/",
      ]);
    })()
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const r = await caches.match(event.request);
      console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(event.request);
      const cache = await caches.open(cacheData);
      console.log(
        `[Service Worker] Caching new resource: ${event.request.url}`
      );
      cache.put(event.request, response.clone());
      return response;
    })()
  );
});
