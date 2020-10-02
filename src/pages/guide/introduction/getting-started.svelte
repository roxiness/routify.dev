<script>
  import { url, meta } from "@sveltech/routify";
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  meta.title = "Getting started";
  import Note from "@/components/Note.svelte";
</script>

<!-- routify:options index=10 -->

<div class="c-content">
  <div class="c-container-vertical c-container-vertical--small">
    <h1 class="c-h1">Getting started</h1>
    <p>
      The easiest way to try Routify is to visit our
      <a
        href="https://codesandbox.io/s/github/sveltech/routify-example-tvshow/tree/6-navigation">
        TV Shows app
      </a>
      on Codesandbox. If you feel like playing with the code, you just click the
      fork button.
    </p>
    <p>
      The TV Shows app has a few steps
      <a
        href="https://github.com/roxiness/routify-example-tvshow/branches/active">
        (branches)
      </a>
      - each of which can be imported, using Codesandbox's "Import from Github"
      feature. In fact, any Routify project can be imported to Codesandbox.
    </p>

  </div>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
  <h3 class="h3">Installation</h3>
    <p>
      Installing Routify locally is straight forward. We strongly recommend
      creating a new project with our CLI. It comes with "batteries included" to
      help you put your app into production much faster.
    </p>
  </div>
    <a class="c-button c-button--primary" href={$url('../../installation')}>
      Install
    </a>
</div>
