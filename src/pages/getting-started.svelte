<script>
    let pageTitle = "Installation";
    import OpenGraph from '../components/OpenGraph.svelte';

    import { url } from "@sveltech/routify";

    import Prism from "svelte-prism";
    import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";

</script>

<OpenGraph {pageTitle} />

<div class="c-container-horizontal--narrow">
    <div class="c-container-vertical--small">
        <h1 class="c-h1">Getting started</h1>
        <p>
            This is a manual for the manual installation. Aternatively to installing Routify in your project manually, you can also clone the <a href="https://github.com/sveltech/routify-starter">Routify starter template</a>. View the starter template <a href="https://routify-starter.now.sh/">here</a>.
        </p>
    </div>

    <div class="c-container-vertical--small">
        <div class="c-content">
            <h2>1. Install module</h2>
            <p>Run in project folder</p>
            <Prism>
npm i -d @sveltech/routify@next
</Prism>
        </div>
    </div>

    <div class="c-container-vertical--small">
        <div class="c-content">
            <h2>2. Choose a bundler</h2>
        </div>
        <div class="card">
        <Tabs>
            <div class="c-tabs">
            <TabsLink>CLI</TabsLink>
            <TabsLink>Rollup</TabsLink>
            </div>
            <div class="c-tabs-pages">
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

    <div class="c-container-vertical--small">
        <div class="c-content">
            <h2>3. Add router to your app</h2>
        </div>
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

    <div class="c-container-vertical--small">
        <div class="c-content">
            <h2>4. Enable SPA</h2>
            <p>If you're using history based navigation, make sure that your server redirects all requests to  your app's path. Usually "/index.html" or just "/".</p>
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
