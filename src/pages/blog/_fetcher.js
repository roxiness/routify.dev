
const api = 'AIzaSyDnR8LpwQN2RNCzPQ7qklVvmIhBks56uJs'
const blogId = '5405362097133643550'
const baseUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogId}`

const cache = {}

/** prefetch blog index */
fetcher('/posts')

/**
 * Sends data to callback
 * Each call with a callback will rehydrate the cache
 * Cached and rehydrated data will be sent to callback consecutively.
 *
 * @param {string} path the part after https://www.googleapis.com/blogger/v3/blogs/:blog-id/ */
/** @param {function=} callback */
export async function fetcher(path, callback) {
  if (cache[path] && callback) callback(cache[path])

  if (!cache[path] || callback) {
    const res = await fetch(`${baseUrl}${path}?key=${api}`, {
      headers: { 'Content-Type': 'application/json' }
    })

    cache[path] = await res.json()

    if (callback) callback(cache[path])
  }
}

