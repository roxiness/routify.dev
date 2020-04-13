<script>
  import Prism from "svelte-prism";
  import Note from "@/components/Note.svelte";
  import { url } from "@sveltech/routify";
</script>

<!-- routify:options index=10 -->
<div class="c-content">
  <div class="c-container-vertical--small">
    <h1 class="c-h1">Overview</h1>

    <p>
      Going from development to production can be daunting, but with Routify you
      can have your project up and running with a couple of commands.
    </p>
  </div>
  <div class="c-container-vertical--small">
    <strong>Build and deploy</strong>
    <Prism>
      {`
    npm run build
    npm run deploy:now
    `}
    </Prism>

    <p>
      This is a great way to get started, but in the long run a CI approach
      might be better suited and we recommend having a look at the
      <a href={$url('../deployment')}>deployment section.</a>
    </p>

    <p>
      To tweak your build or find out what's included, have a look at the
      <a href={$url('../build')}>Build section.</a>
    </p>

  </div>
</div>
