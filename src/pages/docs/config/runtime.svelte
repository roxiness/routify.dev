<script>
  import { tick, onMount } from "svelte";
  import { meta } from "@roxi/routify";
  import { default as Prism, highlight } from "svelte-prism";
  import "prismjs/plugins/command-line/prism-command-line.js";
  import "prismjs/components/prism-shell-session";
  import "prismjs/components/prism-json";

  meta.title = "Basics";

  const config = [
    ["queryHandler", "object", "shown in example", "Parses overloaded params to and from the URL query"]
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

<h1 class="c-h1">Client configuration</h1>

<div class="c-content">
  Routify's client can be configured by passing options to the Router component.
</div>

<h3 class="c-h3">Example</h3>
<Prism>
  {`
    <scri`}{`pt>
      import { Router } from '@roxi/routify'

      const config = {
        queryHandler: {
          parse: search => fromEntries(new URLSearchParams(search)),
          stringify: params => '?' + (new URLSearchParams(params)).toString()
        }
      }
    </script>

    <Router {config} />
    `}
</Prism>

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

