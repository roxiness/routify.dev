---
layout: default
---

<script>
  import { url, meta } from "@roxi/routify"
  import Code from "@/components/Code.svelte";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  import Note from "@/components/Note.svelte";
  meta.title = "Installation";
  
  /**
   *  this isn't strictly needed, but my vscode's autoformat prefixes
   *  `$url` in markdown with a backslash: `\$url`
   */
  $: link = $url
</script>

<!-- routify:options index=20 -->

# Install to existing project

<p>
  This is a guide for installing Routify in an existing project. If you
  wish to create a new project instead, please refer to our
  <a href={link("/guide/introduction/getting-started")} >getting started guide</a>.
</p>

<Note>
  <p>
    We recommend using the Starter Template for the full functionality of
    Routify. If starting a new project isn't an option, we refer to our
    <a href="https://github.com/roxiness/routify-starter">Starter Template</a>
    for the implementation of features like SSR, prerendering, and deployments.
  </p>
</Note>

### 1. Install module

Run in project folder
<Code> npm i -D @roxi/routify npm-run-all </Code>

### 2. Update package.json

Run Routify alongside your original dev script. We're using `Rollup` in the example, but you can use any bundler.

<Code language="javascript">
  {`
    /** package.json **/
    ...
    "scripts": {
        "dev": "run-p dev:*",
        "dev:rollup": "rollup -c -w",
        "dev:routify": "routify",
        "build": "routify -b && rollup -c",
        ...
    }
  `}
</Code>

`routify -b` is shorthand for `routify --single-build`. Single-build doesn't watch for file changes and produces a leaner `routes.js` file.

### 3. Add router to your app

<Code language="html">
  {`
    <!-- src/App.svelte -->
    <scrip`}{`t>
      import { Router } from "@roxi/routify";
      import { routes } from "../.routify/routes";
    </script>

    <Router {routes} />`}</Code>

---

# Important

### SPA forwarding

Unless you're using hash based navigation, your server needs to forward all 404 to your HTML template.

<div class="card">
    <Tabs>
      <div class="c-tabs">
        <TabsLink>Sirv</TabsLink>
        <TabsLink>Apache</TabsLink>
        <TabsLink>Nginx</TabsLink>
        <TabsLink>Other</TabsLink>
      </div>
      <div class="c-tabs-pages">
        <TabsPage>
          <p>For Sirv, enable the single option.</p>
          <Code language="javascript">
            {`
              /** package.json **/
              ...
              "scripts": {
                  "start": "sirv public --single"
                  ...
              }
            `}
          </Code>
        </TabsPage>
        <TabsPage>
          <Code>
            {`
              RewriteEngine On
              RewriteBase /
              RewriteRule ^index\.html$ - [L]
              RewriteCond %{REQUEST_FILENAME} !-f
              RewriteCond %{REQUEST_FILENAME} !-d
              RewriteRule . /index.html [L]
            `}
          </Code>
        </TabsPage>
        <TabsPage>
          <Code>
            {`
              server {
                listen 80;
                root /usr/share/nginx/html;
                gzip on;
                gzip_types text/css application/javascript application/json image/svg+xml;
                gzip_comp_level 9;
                etag on;
                location / {
                  try_files $uri $uri/ /index.html;
                }
              }
            `}
          </Code>
          <a
            href="https://gist.github.com/johngrimes/3a833e23a7db998594c38871e7d3c38e"
            >source</a
          >
        </TabsPage>
        <TabsPage>
          <p>
            For other servers, consult the documentation on how to redirect all
            requests. This is also known as URL-rewrites.
          </p>
        </TabsPage>
      </div>
    </Tabs>
  </div>

### Dynamic imports

Routify uses `dynamic imports` aka `code splitting` by default. If your bundler doesn't support `dynamic imports`, you can either

- A) disable `dynamic imports` in routify by setting `dynamicImports` to `false`. See [Config](/docs/config/build).
- B) enable `dynamic imports` for your bundler. (see Rollup example below)

<Tabs>
  <div class="c-tabs">
    <TabsLink>Rollup</TabsLink>
    <TabsLink>HTML Template</TabsLink>
  </div>
  <div class="c-tabs-pages">
    <TabsPage>
      <Code language="javascript">
        {`
          /* rollup.config.js */
          ...
          output: {
            "format": "esm",
            "dir": "dist/build"
            ...
          },
          ...
        `}
    </Code>
    </TabsPage>
    <TabsPage>
      <p>
        Ensure that your script is loaded with type "module" in your HTML template.
      </p>
      <Code language="html">
        {`
          /* index.html */
          ...
          <script type="module" src='/build/main.js'></script>
          ...
        `}
      </Code>
    </TabsPage>
  </div>
</Tabs>
