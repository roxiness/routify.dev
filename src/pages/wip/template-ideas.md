---
layout: default
---

hardwired
  navigation
  nollup



template plugins

- [ ] spassr (dev SSR)
- [ ] spank (SSG)
- [ ] vercel (prod SSR)
- [ ] stadex (static index)

template boilerplate
- [ ] auth+admin+login simplified
- [ ] blog

please pick examples
- [ ] markdown
- [ ] auth
- [ ] navigation



### spassr

package.json

```json
  {
    "scripts": {
      "dev:spassr": "spassr"
    },
    "dependencies": {
      "spassr": "latest"
    },
    "spassr": {
      "ssr": true,
      "assetsDir": ["dist", "assets"],
      "script": "dist/build/main.js",
      "ssrOptions": {
        "inlineDynamicImports": true
      }
    }
  }
```

### spank

package.json

```json
  {
    "scripts": {
      "build": "... && spank"
    },
    "dependencies": {
      "spank": "latest"
    },
    "spank": { }
  }
```

### Vercel

vercel.json
```json
{
  "version": 2,
  "functions": {
    "api/vercel-ssr/index.js": {
      "includeFiles": "dist/**"
    }
  },
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/.*",
      "dest": "/api/vercel-ssr/index.js"
    }
  ]
}
```

api/vercel-ssr/build.js
```
  file content
```
api/vercel-ssr/index.js
```
  file content
```
api/vercel-ssr/package.json
```json
{
  "scripts": {
    "vercel-build": "node ./build.js"
  },
  "devDependencies": {
    "rollup": "^2.28.2"
  }
}
```
