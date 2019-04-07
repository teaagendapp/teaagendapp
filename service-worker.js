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