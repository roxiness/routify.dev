<script>

  import { tick, onMount } from "svelte";
  import { meta } from "@sveltech/routify";
  import {default as Prism, highlight} from "svelte-prism";
  import "prismjs/plugins/command-line/prism-command-line.js";
  import "prismjs/components/prism-shell-session";
  import "prismjs/components/prism-json";

  meta.title = "Basics";
</script>

<div class="c-content">
  <h1>Configuration</h1>
  <p>Routify can be configured with the following options.</p>
</div>

<table class="c-table c-table--styled">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Default value</th>
    <th>Flag</th>
  </tr>
  <tr>
    <td><strong>debug</strong></td>
    <td>boolean</td>
    <td>
      <code>false</code>
    </td>
    <td>-d</td>
  </tr>
  <tr class="c-table__row--alt">
    <td colspan="99">
      Show extra debug information
    </td>
  </tr>
  <tr>
    <td>pages</td>
    <td>string</td>
    <td>
      <code>./src/pages</code>
    </td>
    <td>-p</td>
  </tr>
  <tr class="c-table__row--alt">
    <td colspan="99">
      Path to pages.
    </td>
  </tr>
  <tr>
    <td>ignore</td>
    <td>array|string</td>
    <td>None</td>
    <td>
      <!--TODO -->
    </td>
  </tr>
  <tr class="c-table__row--alt">
    <td colspan="99">
      Files and dirs to be ignored. Interpreted as regular expression.
    </td>
  </tr>
  <tr>
    <td>unusedPropWarnings</td>
    <td>boolean</td>
    <td>
      <code>false</code>
    </td>
    <td>
      <!--TODO -->
    </td>
  </tr>
  <tr class="c-table__row--alt">
    <td colspan="99">
      Show warnings about unused props passed by filerouter.
    </td>
  </tr>
  <tr>
    <td>dynamicImports</td>
    <td>boolean</td>
    <td>
      <code>false</code>
    </td>
    <td>
      <!--TODO -->
    </td>
  </tr>
  <tr class="c-table__row--alt">
    <td colspan="99">
      Enable code splitting.
    </td>
  </tr>
  <tr>
    <td>singleBuild</td>
    <td>boolean</td>
    <td>
      <code>false</code>
    </td>
    <td>
      <!--TODO -->
    </td>
  </tr>
  <tr class="">
    <td colspan="99">
      Don't watch for file changes.
    </td>
  </tr>
</table>


<h2 class="c-h2">To use with CLI</h2>
<div style="display: table; table-layout: fixed; width: 100%">
  <Prism language="shell-session">
    {`
        $ npx @sveltech/routify --help
        Usage: cli [options] [command]

        Options:
        -d, --debug                    extra debugging
        -p, --pages <location>         path/to/pages (default: "src/pages")
        -i, --ignore <list>            Files and dirs. Can be string or array. Interpreted as regular expression (default: [])
        -u, --unused-prop-warnings     Show warnings about unused props passed by filerouter (default: true)
        -D, --dynamic-imports          Code splitting) (default: false)
        -b, --single-build             Don't watch for file changes (default: false)
        -s, --scroll [behavior]        Scroll behavior (default: "smooth")
        -e, --extensions <names>       Included file extensions (comma separated) (default: ["html","svelte","md"])
        -c, --child-process <command>  Run command when Routify is ready
        -h, --help                     output usage information

        Commands:
        init
        export [options]
  `}
  </Prism>
</div>

<h2 class="c-h2">CLI + Sirv example</h2>


<Prism language="json">
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
