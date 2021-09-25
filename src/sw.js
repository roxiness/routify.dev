import { setDefaultHandler, setCatchHandler } from 'workbox-routing'
import { precacheAndRoute, matchPrecache } from 'workbox-precaching'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { skipWaiting, clientsClaim } from 'workbox-core'

const entrypointUrl = '__app.html'
const fallbackImage = '404.svg'
const files = self.__WB_MANIFEST

skipWaiting()
clientsClaim()

precacheAndRoute(files)

setDefaultHandler(new StaleWhileRevalidate())

setCatchHandler(async ({ event }) => {
  switch (event.request.destination) {
    case 'document':
      return await matchPrecache(entrypointUrl)
    case 'image':
      return await matchPrecache(fallbackImage)
    default:
      return Response.error();
  }
})
