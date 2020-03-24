<script>
  import { url, meta } from "@sveltech/routify";
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  meta.title = "Getting Started";
</script>

<!-- routify:options $index=10 -->

<div class="c-container-horizontal--narrow">
  <div class="c-container-vertical--small">
    <h1 class="c-h1">Getting started</h1>
    <div class="c-content">
      <p>
        To create a new Routify project, open your console and type
        <code>npx @sveltech/routify init</code>
      </p>
      <p>
          If you wish to add Routify to an existing project, please refer to our
          <a href={$url('../../guide/install')}>install guide</a>
      </p>
    </div>
  </div>
</div>
