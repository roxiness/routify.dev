<script>
    let pageTitle = "Installation";
    import OpenGraph from '../Components/OpenGraph.svelte';

  import { url } from "@sveltech/routify";
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";

</script>

<OpenGraph {pageTitle} />

<div class="c-container-horizontal--narrow">
    <div class="c-container-vertical">
        <div class="c-content">
            <h1>Install</h1>
            <p>
              Aternatively to installing Routify, you can also clone the <a href="https://github.com/sveltech/routify-starter">Routify starter template</a>.
            </p>
            <pre><code>https://github.com/sveltech/routify-starter</code></pre>

            <div class="step">
              <h2>1. Install module</h2>
              <div class="card">
                <div class="pb-2">Run in project folder</div>
                <span class="code py-1">npm i -d @sveltech/routify@next</span>
              </div>
            </div>

            <div class="step">
              <h2>2. Choose a bundler</h2>
              <div class="card">
                <Tabs>
                  <div class="tablinks">
                    <TabsLink class="px-2 font-semibold">CLI</TabsLink>
                    <TabsLink class="px-2 font-semibold">Rollup</TabsLink>

                  </div>
                  <div class="tabpages">
                    <TabsPage>
                      <Prism language="javascript">
                        {`/** package.json **/
            ...
             "devDependencies": {
                "npm-run-all": "^4.1.5",
                ...
            },
            "scripts": {
              "dev": "run-p watch:routify watch:rollup",
              "watch:rollup": "rollup -c -w",
              "watch:routify": "routify",
              ...
            }
            `}
                      </Prism>
                    </TabsPage>
                    <TabsPage>
                      <Prism language="javascript">
                        {`/** rollup.config.js **/
            ...
            import {routify} from '@sveltech/routify'
            ...
              plugins: [
                routify({ /** options **/ }),
                ...
              ]`}
                      </Prism>
                    </TabsPage>
                  </div>
                </Tabs>
              </div>
            </div>

            <div class="step">
              <h2>3. Add router to your app</h2>
              <div class="card">
                <Prism language="html">
                  {`<!-- src/App.svelte -->
            <scrip`}{`t>
              import { Router } from "@sveltech/routify";
              import { routes } from "@sveltech/routify/tmp/routes";
            </script>

            <Router {routes} />
            `}
                </Prism>
              </div>
            </div>

            <div class="step">
              <h2>4. Enable SPA</h2>
              <p>
                If you're using history based navigation, make sure that your server
                redirects all requests to  your app's path. Usually "/index.html" or just "/".
              </p>
              <div class="card">
                <Tabs>
                  <div class="tablinks">
                    <TabsLink class="px-2 font-semibold">Sirv</TabsLink>
                    <TabsLink class="px-2 font-semibold">Apache</TabsLink>
                    <TabsLink class="px-2 font-semibold">Other</TabsLink>

                  </div>
                  <div class="tabpages">
                    <TabsPage>
                      <p>For Sirv, enable the single option.</p>
                      <Prism language="javascript">
                        {`/** package.json **/
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
                    {`RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]`}
                      </Prism>
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
        </div>
    </div>
</div>