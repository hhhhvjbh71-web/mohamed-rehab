// ============================================================
//  sw.js  —  Service Worker مع دعم PWA والملاكمة الأوفلاين
// ============================================================

const CACHE_VERSION = 'lesson-manager-v16-pwa-subpath-fix';

const APP_SHELL = [
  './',
  './index.html',
  './student-report.html',
  './style.css',
  './app.js',
  './firebase-app-compat.js',
  './firebase-firestore-compat.js',
  './data.js',
  './booking-groups.js',
  './archive_functions.js',
  './transfer-student.js',
  './receive-exams.js',
  './code-generator.js',
  './grade-mapping.js',
  './manifest.webmanifest',
  './app-icon-192.png',
  './app-icon-512.png',
  './app-icon-maskable-512.png',
  './apple-touch-icon.png'
];

// ─── Install: تحميل كافة عناصر الـ App Shell ───
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return Promise.all(
        APP_SHELL.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[SW] Failed to cache:', url, err);
            return null;
          })
        )
      );
    })
  );
});

// ─── Activate: تنظيف الـ Caches القديمة ───
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// ─── Fetch: التوجيه الذكي وخدمة الصفحات أوفلاين ───
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // 1. طلبات التنقل بين الصفحات (HTML Navigation)
  if (request.mode === 'navigate' || (request.headers.get('accept') && request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match('./index.html').then((cached) => {
          if (cached) return cached;
          return caches.match('index.html').then((c2) => c2 || caches.match('./'));
        });
      })
    );
    return;
  }

  // 2. طلبات الموارد الثابتة (JS, CSS, Images, Manifest)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.ok && url.origin === self.location.origin) {
          const clone = networkResponse.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
        }
        return networkResponse;
      }).catch(() => {
        if (request.destination === 'image') {
          return caches.match('./app-icon-192.png');
        }
      });
    })
  );
});

// ─── Message Handling ───
self.addEventListener('message', (event) => {
  if (!event.data) return;
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data.type === 'FORCE_CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k)))).then(() => self.skipWaiting())
    );
  }
});
