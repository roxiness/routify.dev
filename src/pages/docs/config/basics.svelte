<script>
  import { tick, onMount } from "svelte";
  import { meta } from "@sveltech/routify";
  import { default as Prism, highlight } from "svelte-prism";
  import "prismjs/plugins/command-line/prism-command-line.js";
  import "prismjs/components/prism-shell-session";
  import "prismjs/components/prism-json";

  meta.title = "Basics";

  const config = [
    ["debug", "boolean", "false", "Show extra debug information"],
    ["pages", "string", "./src/pages", "Path to pages folder"],
    ["ignore", "array|string", false, "Files and folders to be ignored."],
    ["dynamicImports", "boolean", "false", "Enable code splitting."],
    ["singleBuild", "boolean", "false", "Don't watch for file changes."],
    ["scroll", "boolean", "false", "Don't watch for file changes."],
    ["childProcess", "string", "false", "Run npm task when Routify is ready."],
  ];
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
  </tr>
  {#each config as [name, type, value, text]}
    <tr>
      <td style="font-weight:bold">{name}</td>
      <td>{type}</td>
      <td>{value}</td>
    </tr>
    <tr class="c-table__row--alt">
      <td colspan="99">{text}</td>
    </tr>
  {/each}
</table>

<h2 class="c-h2">To use with CLI</h2>
<div style="display: table; table-layout: fixed; width: 100%">
  <Prism language="shell-session">
    {`
        $ npx @sveltech/routify run --help
          Usage: cli [options] [command]

          Options:
            -d, --debug                    extra debugging
            -p, --pages <location>         path/to/pages (default: "src/pages")
            -i, --ignore <list>            Files and dirs. Can be string or array. Interpreted as regular expression (default: [])
            -D, --dynamic-imports          Code splitting) (default: false)
            -b, --single-build             Don't watch for file changes (default: false)
            -e, --extensions <names>       Included file extensions (comma separated) (default: ["html","svelte","md"])
            -c, --child-process <command>  Run npm task when Routify is ready
                --no-hash-scroll           Disable automatic scroll to hash
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
