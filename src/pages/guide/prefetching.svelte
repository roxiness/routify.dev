<script>
  import { meta, url } from "@sveltech/routify";
  import Note from "@/components/Note.svelte";
  import Code from "@/components/Code.svelte";
  meta.title = "Navigation";
</script>

<!-- routify:options index=60 -->
<!-- routify:options title="Prefetching - wip" -->

<div class="c-content">
  <div class="c-container-vertical c-container-vertical--small">
    <h1 class="c-h1">Prefetching (1.8 beta - wip)</h1>
    <p>
      Prefetching allows pages and their requested data to be cached in advance.
    </p>
    <p>
      More info here:
      <a href={$url('/wip/prefetch-and-cache')}>Prefetch and caching - draft</a>
    </p>

  </div>
  <div class="c-container-vertical c-container-vertical--small">
    <h3 class="c-h3">Prefetching with javascript</h3>

    <Code language="svelte">
      {`
    <s`}{`cript>
      import { prefetch } from '@sveltech/routify'
      prefetch('/some/path')
    </script>`}
    </Code>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <h3 class="c-h3">prefetch and cache for 24 hours</h3>

    <p>Option A</p>
    <Code language="javascript">
      {`
      prefetch('/some/path', { validFor: 60 * 24 })
    `}
    </Code>

    <br />
    <p>Option B</p>
    <Code language="svelte">
      {`        <a use:prefetch={{ validFor: 60 * 24 }}>Page with data</a>      `}
    </Code>

    <br />
    <p>Option C</p>
    <Code language="javascript">
      {`fetch('//myapi.com/data', {headers: { 'x-routify-valid-for': 60 * 24 }})`}
    </Code>
    <Note>
      Options set through request headers take precedence over prefetch options.
    </Note>

  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <h3 class="c-h3">Batch prefetching</h3>
    <p>Global prefetching</p>
    <Code language="svelte">
      {`
    <scrip`}{`t>
      import { prefetch } from '@sveltech/routify'
      import { routes } from '@sveltech/routify/tmp/routes'
      routes
        .map(route => route.api)
        .filter(node => node.meta.iWantTheseFetched) //optional filtering
        .forEach(node => prefetch(node.path))
    </scrip`}{`t>
    `}
    </Code>

    <br />
    <p>Prefetching URLs on a page</p>
    <Code language="svelte">
      {`
    <scrip`}{`t>
      import { layout } from '@sveltech/routify'

      $: nodes = $layout.children

      $: nodes
           .filter(node => node.meta.iWantTheseFetched) //optional filtering
           .forEach(node => prefetch(node.path))
    </scrip`}{`t>

    {#each nodes as node}
      <a href={node.path}>{node.title}</a>
    {/each}
    `}
    </Code>

  </div>
</div>
