
self.addEventListener('install', event => {
  self.skipWaiting();
  console.log('✅ SW: Instalado');
});

self.addEventListener('activate', event => {
  console.log('✅ SW: Ativo');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
