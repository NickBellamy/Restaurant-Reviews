// Current version of the cache
const cacheVersion = 'v1';

// List of resources to cache
const contentToCache = [
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/sw_check.js',
    'index.html',
    'restaurant.html'
];

// Create and populate cache on serviceworker install
self.addEventListener('install', event => {
    event.waitUntil(
        caches
        .open(cacheVersion)
        .then(cache => cache.addAll(contentToCache))
    );
});

// Serve assets from the cache first, falling back to network if not cached
self.addEventListener('fetch', event => {
    event.respondWith(
        caches
            .match(event.request)
            .then(response => (response ? response : fetch(event.request)))
    );
});

// Remove old caches upon activation of new cache
self.addEventListener('activate', event => {
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(cacheName => cacheName != cacheVersion)
                        .map(cacheName => caches.delete(cacheName))
                );
            })
    );
});
