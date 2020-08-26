<script>
  import Prism from "svelte-prism";
  import { meta } from "@sveltech/routify";
  meta.title = "Metadata";
</script>

<!-- routify:options index=40 -->

<div class="c-content c-container-vertical">
  <h1>Metadata</h1>

  <p>
    Metadata refers to Routify's internal data and can be used to add custom
    data to any route. This data can then be accessed without loading the
    component.
  </p>
  <p>
    To add metadata, insert a comment with
    <code>routify:options</code>
  </p>

  <Prism language="html">{`<!-- routify:opt`}{`ions index=1 -->`}</Prism>

  <p>
    The metadata can then be accessed through
    <code>$route</code>
    ,
    <code>$layout</code>
    and
    <code>$page</code>
  </p>
  <Prism language="javascript">
    {`
            import { route, layout, page } from @sveltech/routify

            $route.meta //meta from the current page
            $page.meta //meta from the current page
            $layout.meta //meta from the closest layout
        `}
  </Prism>
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
            import { layout } from @sveltech/routify
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
