importScripts("/precache-manifest.d80a4935ee6c885ddef9517def87ecc8.js", "/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.6.3"});
workbox.core.setCacheNameDetails({
    prefix: 'mercedess',
    suffix: 'hotel',
    precache: 'main-cache',
})

workbox.skipWaiting()
workbox.clientsClaim()
workbox.routing.registerNavigationRoute('/index.html')

self.addEventListener('activate',e => {
    e.waitUntil(async () => {
        if(self.registeration.navigationPreload){
            await self.registeration.navigationPreload.enable()
        }
    })
})


workbox.routing.registerRoute(
    new RegExp(/https:\/\/fonts.googleapis.com\/css\?family\=.*/),
    workbox.strategies.cacheFirst({
        Plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0,200]
            })
        ],
        cacheName: 'Google-Fonts'
    })
)

