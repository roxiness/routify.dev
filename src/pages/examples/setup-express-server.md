---
layout: default
---

<script>
    import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
</script>

# Express example

#### 1. install express and ssr
```
npm i express tossr
```

#### 2. Create `server.js`

<Tabs>
  <div class="c-tabs">
    <TabsLink>Minimal</TabsLink>
    <TabsLink>Basic with SSR and custom endpoint</TabsLink>

  </div>
  <div class="c-tabs-pages">
    <TabsPage>

      ```javascript
      const express = require('express')
      const app = express()

      const PORT = 5000
      const TEMPLATE = 'dist/__app.html'

      // serve assets, if they exist
      app.use(express.static('dist'))

      // otherwise serve Routify
      app.get('*', async (req, res) => {
        res.sendFile(TEMPLATE, { root: __dirname })
      })

      // start server
      app.listen(PORT)
      console.log('serving on port', PORT)

```

    </TabsPage>
    <TabsPage>

      ```javascript
      const { tossr } = require('tossr')
      const express = require('express')
      const app = express()

      const TEMPLATE = 'dist/__app.html'
      const SCRIPT = 'dist/build/bundle.js'
      const PORT = 5000

      // serve some custom endpoints
      app.get('/hello', async (req, res) => {
        res.send('hello')
      })

      // else serve assets, if they exist
      app.use(express.static('dist'))

      // else serve Routify
      app.get('*', async (req, res) => {
        const html = await tossr(TEMPLATE, SCRIPT, req.url)
        res.send(html)
      })

      // start server
      app.listen(PORT)
      console.log('serving on port', PORT)
```
    </TabsPage>
  </div>
</Tabs>





#### 3. Run server
```
node server
```

---

