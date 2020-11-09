<script>
  import Prism from "svelte-prism";
  import { meta } from "@roxi/routify";
  import New from "../../components/New.svelte";
  meta.title = "Metadata";

  const reservedNames = [
    [
      "title",
      "string",
      "pages",
      "Sets the name accessed through <code>$page.title</code>.",
    ],
    [
      "index",
      "number",
      "pages | layouts",
      "By default nodes are sorted by index, then the filename.",
    ],
    [
      "bundle",
      "boolean",
      "layouts",
      "Bundles everything in the current folder into one .js file.",
    ],
    [
      "preload",
      "boolean <br/>| string",
      "pages | layouts",
      `<div><code>true:</code> Include the component in the main .js bundle.</div>\n
      <div><code>'proximity':</code> Preload the page when it's referenced in an active url helper.</div>`,
      "2020-10-31T16:53:49.319Z",
    ],
    [
      "param-is-page",
      "boolean",
      "pages | layouts",
      "For dynamic pages/layouts. Recreates component if its parameter changes.",
      "2020-08-31T16:53:49.319Z",
    ],
    [
      "query-params-is-page",
      "boolean",
      "pages | layouts",
      "For all pages/layouts. Recreates component if query parameters change.",
      "2020-08-31T16:53:49.319Z",
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

<!-- routify:options index=40 -->
<!-- routify:options new="2020-10-31T16:53:49.319Z" -->

<div class="c-content c-container-vertical">
  <h1>Metadata</h1>

  <p>
    Metadata refers to Routify's internal data and can be used to add custom
    data to any route. This data can then be accessed without loading the
    component.
  </p>
  <p>To add metadata, insert a comment with <code>routify:options</code></p>

  <Prism language="html">{`<!-- routify:opt`}{`ions index=1 -->`}</Prism>

  <p>
    The metadata can then be accessed through
    <code>$route</code>,
    <code>$layout</code>
    and
    <code>$page</code>
  </p>
  <Prism language="javascript">
    {`
            import { route, layout, page } from @roxi/routify

            $route.meta //meta from the current page
            $page.meta //meta from the current page
            $layout.meta //meta from the closest layout
        `}
  </Prism>
</div>

<div class="c-content c-container-vertical">
  <h3>Reserved names</h3>
  <table class="c-table c-table--styled">
    <tr>
      <th>name</th>
      <th>type</th>
      <th>target</th>
    </tr>
    {#each reservedNames as [name, type, target, text, date]}
      <tr>
        <td style="font-weight: bold">
          {name}
          <New {date} />
        </td>
        <td>
          {@html type}
        </td>
        <td>
          {@html target}
        </td>
      </tr>
      <tr class="c-table__row--alt">
        <td colspan="99">
          {@html text}
        </td>
      </tr>
    {/each}
  </table>
</div>

<div class="c-content c-container-vertical">
  <h3>Example</h3>
  <p>
    Using a custom
    <code>published</code>
    prop to filter nodes and a custom
    <code>tags</code>
    prop to display tags.
  </p>

  <Prism language="html">
    {`
      <!-- _outify:option_ tags=['recipes', 'cupcakes'] -->
      <!-- _outify:option_ published=true -->
      `}
  </Prism>

  <Prism language="svelte">
    {`
          <_crip_>
            import { layout } from @roxi/routify
          </_crip_>

          {#each $layout.parent.children.filter(c => c.published) as node}
             <div class="card">
               <h3>{node.title}</h3>
               <h5>{node.meta['tags'].join(', ')}</h5>
               <a href={$url(node.path)}>Goto</a>
             </div>
          {/each}
        `}
  </Prism>
</div>

<div class="c-content">
  <h3>Realworld example</h3>
  <a
    href="https://github.com/roxiness/routify-site-2020/blob/master/src/pages/blog/index.svelte">
    Routify blog index
  </a>
</div>
