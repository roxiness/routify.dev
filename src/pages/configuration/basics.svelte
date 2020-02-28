<script>
    let pageTitle = "Configuration - Basics";
    import OpenGraph from '../../components/OpenGraph.svelte';
    import Prism from "svelte-prism";
</script>

<OpenGraph {pageTitle} />

<main class="c-sidebar-layout">
    <div class="c-sidebar-layout__side">
        <nav>
            <ul class="c-sidebar-nav">
                <li class="c-sidebar-nav__item c-sidebar-nav__item--selected"><a href="/configuration/basics">Basics</a></li>
                <li class="c-sidebar-nav__item"><a href="/configuration/code-splitting">Code-splitting</a></li>
                <li class="c-sidebar-nav__item"><a href="/configuration/prerendering">Prerendering</a></li>
                <li class="c-sidebar-nav__item"><a href="/configuration/deployments">Deployments</a></li>
                <li class="c-sidebar-nav__item"><a href="/configuration/ssr">SSR</a></li>
                <li class="c-sidebar-nav__item"><a href="/configuration/cache">Cache</a></li>
            </ul>
        </nav>
    </div>
    <div class="c-sidebar-layout__main">
        <div class="c-content">
            <h1>Configuration</h1>
            <p>Routify can be configured with the following options.</p>
        </div>

        <table class="c-table c-table--styled">
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default value</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>debug</td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Show extra debug information</td>
            </tr>
            <tr>
                <td>pages</td>
                <td>string</td>
                <td><code>./src/pages</code></td>
                <td>Path to pages.</td>
            </tr>
            <tr>
                <td>ignore</td>
                <td>array|string</td>
                <td>None</td>
                <td>Files and dirs to be ignored. Interpreted as regular expression.</td>
            </tr>
            <tr>
                <td>unusedPropWarnings</td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Show warnings about unused props passed by filerouter.</td>
            </tr>
            <tr>
                <td>dynamicImports</td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Enable code splitting.</td>
            </tr>
            <tr>
                <td>singleBuild</td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Don't watch for file changes.</td>
            </tr>
        </table>
        
        <!-- @todo prism needs to syntax highlight bash -->
        <h2 class="c-h2">To use with CLI</h2>
        <Prism>$ npx routify --help
Usage: cli [options] [command]

Options:
  -d, --debug                 extra debugging
  -p, --pages <location>      path/to/pages (default: "./src/pages")
  -i, --ignore <list>         Files and dirs. Can be string or array. Interpreted as regular expression (default: [])
  -u, --unused-prop-warnings  Show warnings about unused props passed by filerouter (default: true)
  -D, --dynamic-imports       Code splitting) (default: false)
  -b, --single-build          Don't watch for file changes (default: false)
  -s, --scroll [behavior]     Scroll behavior (default: false)
  -e, --extensions <names>    Comma separated extensions (default: ["html","svelte"])
  -h, --help                  output usage information

Commands:
  init
  export [options]
          </Prism>

            <h2 class="c-h2">CLI + Sirv example</h2>

<Prism>
  {`/** package.json **/
...
"scripts": {
  "debug:routify": "routify -du --pages ./src/path/to/pages",
  "start:routify": "routify --pages ./src/path/to/pages",
  "dev:start": "run-p debug:routify start:sirv autobuild",
  ...
}  
`}
</Prism>
    </div>
</main>
