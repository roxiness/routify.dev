<script>
  import { url, focus, meta } from "@sveltech/routify";
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  meta.title = "Installation";
</script>

<!-- routify:options $index=false -->

<div class="c-container-vertical--small">
  <h1 class="c-h1" use:focus>Install in existing project</h1>
  <p>
    This is a guide for installing Routify in an existing project. If you wish
    to create a new project instead. Please refer to our
    <a href={$url('../../getting-started')}>getting started guide</a>

  </p>
</div>

<div class="c-container-vertical--small">
  <div class="c-content">
    <h2>1. Install module</h2>
    <p>Run in project folder</p>
    <Prism>npm i -D @sveltech/routify</Prism>
  </div>
</div>

<div class="c-container-vertical--small">
  <div class="c-content">
    <h2>2. Update package.json</h2>
  </div>
  <Prism language="javascript">
    {`
      /** package.json **/
      ...
      "scripts": {
          "dev": "routify -c my-server",
          "my-server": "rollup -c -w",
          ...
      }
    `}
  </Prism>
  <p>
    <code>routify -c</code>
    is shorthand for
    <code>routify --childprocess</code>
    . If you do not wish to launch your server as a child process, you can use
    an npm task runner like
    <code>npm-run-all</code>
  </p>
</div>

<div class="c-container-vertical--small">
  <div class="c-content">
    <h2>3. Add router to your app</h2>
  </div>
  <div class="card">
    <Prism language="html">
      {`
        <!-- src/App.svelte -->
        <scrip`}{`t>
          import { Router } from "@sveltech/routify";
          import { routes } from "@sveltech/routify/tmp/routes";
        </script>

        <Router {routes} />
      `}
    </Prism>
  </div>
</div>

<div class="c-container-vertical--small">
  <div class="c-content">
    <h2>4. Enable SPA</h2>
    <p>
      If you're using history based navigation, make sure that your server
      redirects all requests to your app's path. Usually "/index.html" or just
      "/".
    </p>
  </div>

  <div class="card">
    <Tabs>
      <div class="c-tabs">
        <TabsLink>Sirv</TabsLink>
        <TabsLink>Apache</TabsLink>
        <TabsLink>Other</TabsLink>

      </div>
      <div class="c-tabs-pages">
        <TabsPage>
          <p>For Sirv, enable the single option.</p>
          <Prism language="javascript">
            {`
              /** package.json **/
              ...
              "scripts": {
                  "start": "sirv public --single"
                  ...
              }
            `}
          </Prism>
        </TabsPage>
        <TabsPage>
          <Prism>
            {`
              RewriteEngine On
              RewriteBase /
              RewriteRule ^index\.html$ - [L]
              RewriteCond %{REQUEST_FILENAME} !-f
              RewriteCond %{REQUEST_FILENAME} !-d
              RewriteRule . /index.html [L]
            `}
          </Prism>
        </TabsPage>
        <TabsPage>
          <p>
            For other servers, consult the documentation on how to redirect
            all requests. This is also known as URL-rewrites.
          </p>
        </TabsPage>
      </div>
    </Tabs>
  </div>
</div>
