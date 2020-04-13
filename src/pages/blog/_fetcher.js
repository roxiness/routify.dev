const api = 'AIzaSyDnR8LpwQN2RNCzPQ7qklVvmIhBks56uJs'
const blogId = '5405362097133643550'
const baseUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogId}`
const url = 'https://www.googleapis.com/blogger/v3/blogs/5405362097133643550/posts?key=AIzaSyDnR8LpwQN2RNCzPQ7qklVvmIhBks56uJs'

/** @param {string} path the part after https://www.googleapis.com/blogger/v3/blogs/:blog-id/ */
export async function fetcher(path) {
  return fetch(`${baseUrl}${path}?key=${api}`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
}
