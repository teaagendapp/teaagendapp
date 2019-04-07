importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

console.log('Hello from service-worker.js');
if (workbox) {
	console.log(`Yay! Workbox is loaded 🎉`);  
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
workbox.routing.registerRoute(
	new RegExp('.*\.js'),
	new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);