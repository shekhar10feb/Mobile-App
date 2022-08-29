const staticMontyTea = "monty-tea-site-v1";

const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/js/app.js",
    "/photos/black_tea.JPG",
    "/photos/green_tea.jpg",
    "/photos/herbal_tea.webp",
    "/photos/Oolong_Tea.jpg",
    "/photos/Red_Tea.jpg",
    "/photos/yellowtea.jpg"
];

// Call install Event 
self.addEventListener("install", installEvent => {

    // Wait until promise is finished 
    installEvent.waitUntil(
        caches
        .open(staticMontyTea)
        .then(cache => {
            cache.addAll(assets)
        })
        .then(()=> self.skipWaiting())
    );
});

// Call activate Event 
self.addEventListener('activate', activateEvent => {

    // Remove unwanted cached assets 
    activateEvent.waitUntil(
        caches
        .keys()
        .then(staticMontyTeas => {
            return Promise.all(
                staticMontyTeas.map(cache => {
                    if(cache !== staticMontyTea) {
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

// Call fetch Event 
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        // caches
        // .match(fetchEvent.request)
        // .then(res => {
        //     return res || fetch(fetchEvent.request);
        // })
        fetch(fetchEvent.request)
           .catch(() => {
            caches.match(fetchEvent.request);
        })
    )
});

// // Ensure that the browser supports the service worker API 
// if("serviceWorker" in navigator) {

//     // Start registration function takes as argument 
//     window.addEventListener("load", function() {
//       navigator.serviceWorker

//         // The register function takes as argument 
//         // the file path to the worker's file 
//         .register("/serviceWorker.js")
//         .then(res => console.log("service worker registered"))
//         .catch(err => console.log("service worker not registered"))
//     })
// }