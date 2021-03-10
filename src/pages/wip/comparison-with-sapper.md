---
layout: default
---

# Comparison with Sapper

Sapper is a brilliant backend framework with a router and a view layer. It does what it was designed to do and it does it perfectly.

Routify is a frontend router with an optional starter template. The starter template provides features like SSR and 1-click deployments.

While they share the same file mapping convention, they approach most challenges differently.


---

## SSR
SSR compiles javascript to HTML, which can be served directly to the client or saved to a local HTML file (static export). Since it is not possible for a server to know which async calls to wait for, it doesn't wait for any. Sapper and Routify both provide ways to handle this.

Sapper uses Svelte's built in SSR, which is faster, but restricted to node code/libraries. Routify uses JSDOM.

#### Example client call
```html
<script>
  let article

  fetch('example.com')
    .then(res => res.json())
    .then(res => (article = res.html))
</script>
```

The above call works on the client, but during SSR the page would be rendered before the async call was resolved. In other words, the article would be missing.

#### SSR handling in Routify

In Routify this can be handled with a single addition:
1. Call `$ready()` at the end of the async call.
```html
<script>
  import { ready } from '@roxi/routify'
  let article

  fetch('example.com')
    .then(res => res.json())
    .then(res => (article = res.html))
    .then($ready)
</script>
```

#### SSR handling in Sapper

For Sapper you have four requirements:
1. Replace browser functions with node compatible functions, like `this.fetch`.
2. Run the async code inside a `preload` function.
3. Run the preload function in a separate script with context set to module.
4. Return the fetched data to the primary script.

```html
<script context="module">
	export function preload(page, session) {
      const promise = this.fetch(`blog/${slug}.json`)
        .then(res => res.json())
        .then(res => res.article)
      return { article: promise };
	}
</script>
<script>
	export let article;
</script>
```



---


## Parameters and Queries
Routify's parameters are inspired by Sapper, hence both use the `[param].svelte` convention. There are however a few differences in capability and implementation.

### Reactive parameters
Routify's parameters are reactive. Sappers aren't. (TODO - Is this correct?)

### Multiple parameters
Sapper allows multiple parameters in a single bracket: `blog/[...slug].svelte`. Routify doesn't.

### Overloading parameters
Routify allows overloading parameters:
```javascript
$url('/blog/:slug', {slug: 'first-post', theme: 'dark', page: 2})
// /blog/first-post?theme=dark&page2
```

## Accessing parameters
#### Routify uses `$params` to access parameters.
```javascript
import { params } from '@roxi/routify'

$: console.log($params) // { slug: "first-post", theme: "dark", page: "2"}
```

#### Sapper uses `preload` to access parameters.
```html
<script context="module">
  export async function preload({params, query}, session) {
    return {...params, ...query}
  }
</script>
<script>
  export let slug
  export let theme
  export let page
</script>
```


---


## Hosting and deployment

Not requing a Node backend allows Routify to be "one-click" deployed to free tier services like Vercel and Netlify - while still providing features like static exports and SSR.

Sapper has static exports, which lets your export your app as HTML files, which can then be deployed to the same services.

---

## Prefetching

Sapper uses `<a rel=prefetch ...` data for prefetching unvisited pages. Pages are prefetched on hover.

Routify uses the `prefetch` helper which can be used programmatically or added to a link: `<a use:prefetch ...`. Routify by default prefetches when the `prefetch` is called. Routify's prefetch also caches assets like images.

---

## Unique Routify features
### SPA

Routify builds SPAs. SSR is handled by servers/serverless functions.


### Metadata

Routify allows files to contain metadata:
```html
<!-- routify:options my-meta-data="Hello world" -->
```

Metadata allows custom or Routify specific data to be attached to a page. This data is available without having to load the page and can be used for built-in/custom logic.

### Tree/nodes and link generation

Routify provides access to nodes, which can be used to access metadata and/or generating links:
```html
<script>
  import { layout } from '@roxi/routify'
</script>

{#each $layout.children as node}
  <a href={node.path} >{node.title}</a>
{/each}
```

### Bundle management

Routify let's you bundle individual folders recursively to reduce request waterfalls.
```html
<!-- _outify:option_ bundle=true -->
```


### Decorators

Routify provides decorators, which are components that wrap around every descendending node:
```html
<script>
  import MyDecorator from './_MyDecorator.svelte'
</script>

<slot decorator={MyDecorator} />
```
Every descending layout or page will be wrapped in `MyDecorator`.

---

## Unique Sapper features

### Backend & server routes

Sapper comes bundled with its own backend.

### rel=external

Sapper requires `rel=external` on outgoing links.

### Tests

Sapper comes bundled with Cypress for tests.
