<script>
  import { url, meta } from "@roxi/routify";

  import Code from "@/components/Code.svelte";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  import Note from "@/components/Note.svelte";
  meta.title = "Installation";
</script>

<!-- routify:options index=20 -->

<div class="c-container-vertical c-container-vertical--small">
  <h1 class="c-h1">Install to existing project</h1>
  <div class="c-content">
    <p>
      This is a guide for installing Routify in an existing project that. If you
      wish to create a new project instead. Please refer to our
      <a href={$url("/guide/introduction/getting-started")}
        >getting started guide</a
      >.
    </p>
  </div>
</div>

<Note>
  <p>
    This guide uses Rollup, other bundlers such as webpack are possible but
    aren't featured in this guide.
  </p>
</Note>

<Note>
  <p>
    We recommend using the Starter Template for the full functionality of
    Routify. If starting a new project isn't an option, we refer to our
    <a href="https://github.com/roxiness/routify-starter">Starter Template</a>
    for the implementation of features like SSR, prerendering, and deployments.
  </p>
</Note>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2>1. Install module</h2>
    <p>Run in project folder</p>
    <Code>npm i -D @roxi/routify</Code>
  </div>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2>2. Update package.json</h2>
  </div>
  <Code language="javascript">
    {`
      /** package.json **/
      ...
      "scripts": {
          "dev": "routify -c my-server",
          "my-server": "rollup -c -w",
          "build": "routify -b && rollup -c",
          ...
      }
    `}
  </Code>
  <p>
    <code>routify -c</code>
    is shorthand for
    <code>routify --childprocess</code>
    . If you do not wish to launch your server as a child process, you can use an
    npm task runner like
    <code>npm-run-all</code>
  </p>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2>3. Add router to your app</h2>
  </div>
  <div class="card">
    <Code language="html">
      {`
        <!-- src/App.svelte -->
        <scrip`}{`t>
          import { Router } from "@roxi/routify";
          import { routes } from "../.routify/routes";
        </script>

        <Router {routes} />
      `}
    </Code>
  </div>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2>4. Disable if dynamic imports if needed</h2>
    <p>
      If your server doesn't support dynamic imports, you need to disable them
      in Routify.
    </p>
  </div>
  <div class="card">
    <Code language="javascript">
      {`
        /** package.json **/
        ...
        "routify" : {
          "dynamicImports": false
        }
      `}
    </Code>
  </div>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2>5. Update Rollup config</h2>
    <p>If you already have a rollup config you may need to do the following</p>
  </div>
  <div class="card">
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
  </div>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2>6. Update the script tag</h2>
    <p>
      Ensure that your script is loaded with type "module" in your entrypoint HTML file.
    </p>
  </div>
  <div class="card">
    <Code language="html">
      {`
        /* index.html */
        ...
        <script type="module" src='/build/main.js'></script>
        ...
      `}
    </Code>
  </div>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2>7. Enable SPA</h2>
    <p>
      Make sure that your server redirects all 404s to your app's path. Usually
      "/index.html" or just "/".
    </p>
  </div>

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
</div>
