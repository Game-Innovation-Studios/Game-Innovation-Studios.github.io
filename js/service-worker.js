importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

import {registerRoute} from 'workbox-routing';
import {NetworkFirst} from 'workbox-strategies';

registerRoute(
  ({request}) => request.destination === 'script',
  new NetworkFirst()
);

registerRoute(
  ({request}) => request.destination === 'style',
  new NetworkFirst()
);

self.addEventListener('fetch', (event) => {
  event.respondWith(
    console.log("Yes");
  );
});
