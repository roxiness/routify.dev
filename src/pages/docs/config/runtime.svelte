<script>
  import Code from "@/components/Code.svelte"
  import New from "../../../components/New.svelte";
  import { meta } from "@roxi/routify";

  meta.title = "Basics";

  const config = [
    [
      "queryHandler",
      "object",
      "shown in example",
      "Parses overloaded params to and from the URL query",
    ],
    [
      "urlTransform ",
      "object",
      "{ apply: x => x, remove: x => x }",
      "Transforms URL to internal/external",
      '2020-10-31T16:53:49.319Z'
    ],
    [
      'useHash',
      'boolean',
      'false',
      'Enable hash based navigation',
      '2020-10-31T16:53:49.319Z'
    ]
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

<!-- routify:options new="2020-10-31T16:53:49.319Z" -->
<h1 class="c-h1">Client configuration</h1>

<div class="c-content">
  Routify's client can be configured by passing options to the Router component.
</div>

<h3 class="c-h3">Example</h3>
<Code>
  {`
    <scri`}{`pt>
      import { Router } from '@roxi/routify'

      const config = {
        queryHandler: {
          parse: search => fromEntries(new URLSearchParams(search)),
          stringify: params => '?' + (new URLSearchParams(params)).toString()
        },
        urlTransform: {
          apply: url => \`/my-base\${url}\`, //external URL
          remove: url => url.replace('/my-base', ''), //internal URL
        },
        useHash: true
      }
    </script>

    <Router {config} />
    `}
</Code>

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
    {#each config as [name, type, value, text, date]}
      <tr>
        <td>{name}<New {date} /></td>
        <td>{type}</td>
        <td>{value}</td>
      </tr>
      <tr class="c-table__row--alt">
        <td colspan="99">{text}</td>
      </tr>
    {/each}
  </table>
</div>
