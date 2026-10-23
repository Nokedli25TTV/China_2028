const CACHE = 'china-2028-v10';
const ASSETS = [
  './',
  './index.html',
  './spot-descriptions.js',
  './trip-data.js',
  './budget-data.js',
  './budget.js',
  './manifest.webmanifest',
  './assets/app-icon.svg',
  './assets/china-journey-hero.webp',
  './city-photos.js',
  './assets/cities/hongkong-1.jpg',
  './assets/cities/hongkong-2.jpg',
  './assets/cities/macao-1.jpg',
  './assets/cities/macao-2.jpg',
  './assets/cities/guangzhou-1.jpg',
  './assets/cities/guangzhou-2.jpg',
  './assets/cities/shenzhen-1.jpg',
  './assets/cities/shenzhen-2.jpg',
  './assets/cities/sanghaj-1.jpg',
  './assets/cities/sanghaj-2.jpg',
  './assets/cities/nanjing-1.jpg',
  './assets/cities/nanjing-2.jpg',
  './assets/cities/xian-1.jpg',
  './assets/cities/xian-2.jpg',
  './assets/cities/peking-1.jpg',
  './assets/cities/peking-2.jpg',
  './assets/cities/chengdu-1.jpg',
  './assets/cities/chengdu-2.jpg',
  './assets/cities/furong-1.jpg',
  './assets/cities/furong-2.jpg',
  './assets/cities/chongqing-1.jpg',
  './assets/cities/chongqing-2.jpg',
  './assets/cities/szingapur-1.jpg',
  './assets/cities/szingapur-2.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put('./index.html', copy));
        return response;
      }).catch(() => caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
