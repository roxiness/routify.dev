---
layout: default
---

## i18n basepaths

This example shows
- [how to add multiple basepaths to Routify](#adding-language-basepaths-to-routify)
- [how to manipulate Routify's `urlIndex.js` (for adding i18n to SSG)](#generating-i18n-urls-for-static-site-generation-optional)
- [how to import the new URLs list in Spank](#use-our-new-i18nurlsjs)




### Adding language basepaths to Routify

```html
<!-- src/App.svelte -->
<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";

  // accepted languages
  const langs = ["en", "de", "fr", "es"];

  // first url fragment.
  const fragment = location.pathname.split("/")[1];

  // if fragment is an accepted language, use it as a prefix.
  const lang = langs.includes(fragment) ? `/${fragment}` : "";

  const config = {
    urlTransform: {
      //add the language prefix for the browser
      apply: (url) => lang + url,
      //remove the language prefix for Routify
      remove: (url) => url.replace(lang, ""),
    },
  };
</script>

<Router {routes} {config} />
```

### Generating i18n URLs for static site generation (optional)

Routify provides a list of its routes in `urlIndex.json`.
For each route, we need to create an additional route for each language.
To do this we create a wrapper `i18n.urls.js`. For simplicity we put it in the project root.
```javascript
/** i18n.urls.js */
const urls = require('./.routify/urlIndex.json')
const langs = ['/en', '/de', '/fr', '/es']
// we map each url with an array of corresponding i18n urls.
// Notice flat() at the end - we don't want an array of arrays.
module.exports = urls.map(url => langs.map(lang => lang + url)).flat()
```

#### Use our new i18n.urls.js
Lastly, for static export we use [Spank](https://github.com/roxiness/spank), which is already included in the starter template.
```json
/** package.json */
{
  ...
  "spank": {
    "sitemap": "i18n.urls.js"
  }
}
```
Spank uses [configent](https://github.com/roxiness/configent#confident-configurations), so it can also be configured through CLI, environment, spank.config.js etc.
