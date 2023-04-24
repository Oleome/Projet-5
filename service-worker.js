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

  