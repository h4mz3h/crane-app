// این فایل باعث می‌شود اندروید برنامه را به عنوان اپلیکیشن واقعی بشناسد
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // فعلاً هیچ چیزی را کش نمی‌کنیم تا تغییرات شما همیشه به‌روز باشد
  e.respondWith(fetch(e.request));
});
