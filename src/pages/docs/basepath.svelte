<script>
  import Code from "@/components/Code.svelte";
</script>

<!-- routify:options index=50 -->
<div class="c-container-vertical--small">
  <div class="c-content">
    <h1 class="c-h1">Basepath</h1>

    <p>
      Basepaths can be set by importing the
      <code>basepath</code>
      helper. Basepaths must be strings but will be converted to a RegExp.
    </p>

    <Code language="svelte">
      {`
        <sc`}{`ript>
          import { Router, basepath } from "@sveltech/routify";
          import { routes } from "@sveltech/routify/tmp/routes";
          $basepath =  '/mybase'
        </scrip`}{`t>

        <!-- src/App.svelte -->
        <Router {routes} />
    `}
    </Code>

    <p>Using regular expressions allows for dynamic basepaths.</p>
    <code>$basepath = "/.."</code> would match <code>en</code>, <code>fr</code>, <code>de</code> etc.

    <p>When prerendering basepaths, make sure to specify each basepath to render</p>
    <code>routify export --basepath "en,fr,de"</code>

  </div>
</div>
