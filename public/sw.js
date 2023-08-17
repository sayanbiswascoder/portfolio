let cacheData = "appV1"

this.addEventListener("install", (event)=> {
  event.waitUntil(
    caches.open(cacheData).then((cache)=> {
      cache.addAll([
        '/',
        '/static/js/bundle.js',
        '/manifest.json',
        '/static/media/me.4ff76b9198dbede145f6.png',
        '/static/media/me-about.9ef3808cc4647304303a.jpg',
        'http://localhost:3000/static/media/logo.d44f897ec2320dfe306eebb5ecef776d.svg',
        '/favicon.ico',
        '/logo192.png'
      ])
    })
  )
})

this.addEventListener("fetch", (event)=> {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result)=> {
        if (result) {
          return result;
        }
      })
    )
  }
})