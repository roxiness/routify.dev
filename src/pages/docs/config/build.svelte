<script>
  import { meta } from "@roxi/routify";
  meta.title = "Basics";

  const config = [
    ["debug", "boolean", "false", "Show extra debug information"],
    ["pages", "string", "./src/pages", "Path to pages folder"],
    ["ignore", "array|string", false, "Files and folders to be ignored. The expected input is a glob pattern."],
    ["dynamicImports", "boolean", "true", "Enable code splitting."],
    ["singleBuild", "boolean", "false", "Don't watch for file changes."],
    ["scroll", "boolean", "false", "Don't watch for file changes."],
    ["childProcess", "string", "false", "Run npm task when Routify is ready."],
    [
      "routifyDir",
      "string",
      "node_modules/@roxi/routify/tmp",
      "Output folder for routify temp files",
    ],
  ];
</script>

<style>
  tr:not(.c-table__row--alt) td:first-of-type {
    font-weight: bold;
  }
  tr.c-table__row--alt {
    font-style: italic;
  }
</style>

<h1 class="c-h1">Configuration</h1>

<div class="c-container-vertical">
  <div class="c-content">
    <h3>Options</h3>
  </div>

  <table class="c-table c-table--styled">
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default value</th>
    </tr>
    {#each config as [name, type, value, text]}
      <tr>
        <td>{name}</td>
        <td>{type}</td>
        <td>{value}</td>
      </tr>
      <tr class="c-table__row--alt">
        <td colspan="99">{text}</td>
      </tr>
    {/each}
  </table>
</div>

<div class="c-container-vertical">
  <div class="c-content">
    <h3>Config locations</h3>
    <p>
      Routify can be configured in the following locations, ordered by ascending
      precedence.
    </p>
  </div>
  <table class="c-table c-table--styled">
    <tr>
      <th>Location</th>
      <th>Example</th>
      <th>Case style</th>
    </tr>
    <tr>
      <td>package.json</td>
      <td>
        <code>"routify": {'{"routifyDir": ".routify"}'}</code>
      </td>
      <td>camelCase</td>
    </tr>
    <tr>
      <td>routify.config.js</td>
      <td>
        <code>{"module.exports = { routifyDir: '.routify'}"}</code>
      </td>
      <td>camelCase</td>
    </tr>
    <tr>
      <td>.env</td>
      <td>
        <code>ROUTIFY_DIR=.routify</code>
      </td>
      <td>SNAKE_CASE</td>
    </tr>
    <tr>
      <td>CLI</td>
      <td>
        <code>npx routify --routify-dir .routify</code>
      </td>
      <td>kebab-case</td>
    </tr>
  </table>
</div>

<div class="c-content">
  <h3>CLI Usage</h3>
  <p>
    For a list of CLI commands, run
    <code>npx @roxi/routify --help</code>
  </p>
</div>
