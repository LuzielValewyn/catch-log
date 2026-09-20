// Del's Catch Log: service worker.
// Purpose: let the app open without signal (for example on the boat) after it has been opened once with signal.
// - The page itself: network first (you always get the newest version online), cached copy when offline.
// - Scripts and fonts from other sites (Firebase, Leaflet, Google Fonts): cached after first use.
// - Data, login, weather, radar and map tiles are never cached here.

const CACHE = "catchlog-shell-v1";
const PAGE_KEY = new URL("./index.html", self.registration.scope).href;
const NEVER = /(firestore\.googleapis|identitytoolkit|securetoken|googleapis\.com\/identitytoolkit|open-meteo|rainviewer|tilecache|tile\.openstreetmap|gibs\.earthdata|accounts\.google|apis\.google|firebaseapp\.com\/__\/auth)/;
const LIBS = /(gstatic\.com|unpkg\.com|fonts\.googleapis\.com)/;

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (NEVER.test(url.href)) return;

  if (req.mode === "navigate" && url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await fetch(req);
        if (res && res.ok) cache.put(PAGE_KEY, res.clone());
        return res;
      } catch (e) {
        const cached = await cache.match(PAGE_KEY);
        if (cached) return cached;
        throw e;
      }
    })());
    return;
  }

  if (LIBS.test(url.host)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const refresh = fetch(req).then((res) => { if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone()); return res; }).catch(() => null);
      return cached || (await refresh) || Response.error();
    })());
  }
});
