---
layout: default
---

# Roxi - draft

### Config
Configs are kept in the `_roxi/config.js`.

```javascript
/** _roxi/config.js */
export {
  rollupPlugins: pluginsFunction|array
  svelte: svelteFunction
}
```

```javascript
pluginsFunction(plugins => {
  plugins.push(myPlugin)
  return plugins
})
```

```javascript
svelteFunction(svelteConfig => {
  svelteConfig.preProcessor: myPreprocessor
  return svelteConfig
})
```

