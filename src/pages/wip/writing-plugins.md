# Writing plugins

IMPORTANT! Plugins currently rely on our internal API. While we don't expect the API logic to change, our internal middleware might.



```javascript
module.exports = function(middlewares, payload, options) {
  /** we want to run our plugin before the template for routes.js is created */
  const index = middlewares.findIndex(mw => mw.name === 'template')

  middlewares.splice(index, 0, {
        name: "my-plugin",
        middleware
  })
}


function middleware(payload) {
  // make changes to payload.tree
}
```
