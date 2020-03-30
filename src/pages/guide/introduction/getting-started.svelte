<script>
  import { url, meta } from "@sveltech/routify";
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  meta.title = "Getting started";
  import Note from "@/components/Note.svelte";
</script>

<!-- routify:options $index=10 -->

<div class="c-container-vertical--small">
  <div class="c-content">
    <h1 class="c-h1">Getting started</h1>
    <p>
      If you want to dive right in and get started in your own editor, look no more.
    </p>
    <a href={$url('../../installation')}>
      <span class="c-button c-button--primary">Install</span>
    </a>
  </div>
</div>

<div class="c-container-vertical--small">
  <div class="c-content">
    <p>
      If you'd prefer to get aquainted with Routify first, you can try one of
      the sandboxes below.
    </p>
  </div>

    <a class="c-button c-button--outline"
      href="https://codesandbox.io/s/github/sveltech/routify-example-tvshow/tree/6-navigation">
      TV shows example (recommended)
    </a>

    <a class="c-button c-button--outline"
      href="https://codesandbox.io/s/github/sveltech/routify-starter/tree/codesandbox">
      The starter template
    </a>
</div>
