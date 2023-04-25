const addResourcesToCache = async (resources) => {
    const cache = await caches.open('v1');
    await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
    event.waitUntil(
      addResourcesToCache([
        './',
        './index.html',
        './assets/style.css',
        './assets/scripts.js',
        './assets/maugallery.js',
        './assets/images/camera.png',
        './assets/images/instagram.png',
        './assets/images/nina.png'
      ])
    );
});


const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});