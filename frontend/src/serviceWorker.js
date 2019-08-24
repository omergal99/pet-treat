// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);


export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }
  }

  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    if (isLocalhost) {
      // This is running on localhost. Let's check if a service worker still exists or not.
      checkValidServiceWorker(swUrl, config);

      // Add some additional logging to localhost, pointing developers to the
      // service worker/PWA documentation.
      navigator.serviceWorker.ready.then(() => {
        // console.log(
        //   'This web app is being served cache-first by a service ' +
        //   'worker. To learn more, visit https://bit.ly/CRA-PWA'
        // );
      });
    } else {
      // Is not localhost. Just register service worker
      registerValidSW(swUrl, config);
    }
  });
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = async () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');
              console.log('Content is cached for offline use22.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

// var CACHE_NAME = 'my-site-cache-v1';
// var urlsToCache = [
//   '/',
//   '/forbidden-food',
//   './serviceWorker/forbidden-food',
//   './serviceWorker/',
//   './serviceWorker/index.js',
//   './serviceWorker/app.js'
// ];

// async function saveSubscription(subscription) {
//   const SERVER_URL = "http://localhost:3000/save-subscription";
//   const response = await fetch(SERVER_URL, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(subscription)
//   });
//   return response.json();
// };

// function urlB64ToUint8Array(base64String) {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");
//   const rawData = atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// };

// /* eslint-disable-next-line no-restricted-globals */
// self.addEventListener('install', async event => {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => {
//       alert('addEventListener install');
//       console.log('Opened cache');
//       return cache.addAll(urlsToCache);
//     })
//   );
//   const applicationServerKey = urlB64ToUint8Array(
//     "BHaWtColOLuUSXSfNcqASqQ7QCKQvcBH9N9KBUgoXN4ihfrLaY_7vWPQ9TjKYyghAdAE-H34S4mbwH-jPu_hyaM"
//   );
//   const options = { applicationServerKey, userVisibleOnly: true };
// /* eslint-disable-next-line no-restricted-globals */
//   const subscription = await self.registration.pushManager.subscribe(options);
//   console.log(subscription);
//   saveSubscription(subscription).then((response) => {
//     console.log(response);
//   })
// });

// /* eslint-disable-next-line no-restricted-globals */
// self.addEventListener('activate', event => {
//   console.log('Finally active. Ready to start serving content!');
//   // var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

//   // event.waitUntil(
//   //   caches.keys().then((cacheNames) => {
//   //     return Promise.all(
//   //       cacheNames.map((cacheName) => {
//   //         if (cacheWhitelist.indexOf(cacheName) === -1) {
//   //           return caches.delete(cacheName);
//   //         }
//   //       })
//   //     );
//   //   })
//   // );
// });

// /* eslint-disable-next-line no-restricted-globals */
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function (response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       }
//       )
//   );
// });

// /* eslint-disable-next-line no-restricted-globals */
// self.addEventListener('push', event => {
//   console.log(event.data.json())
//   console.log(event)
//   var title = 'Yay a message.';
//   var body = 'We have received a push message.';
//   var icon = '/images/smiley.svg';
//   var tag = 'simple-push-example-tag';
//   event.waitUntil(
//     /* eslint-disable-next-line no-restricted-globals */
//     self.registration.showNotification(title, {
//       body: body,
//       icon: icon,
//       tag: tag
//     })
//   );
// });