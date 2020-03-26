<script>
  import Prism from "svelte-prism";
  import { meta } from "@sveltech/routify";
  import Note from "@/components/Note.svelte";
  meta.title = "Decorators";
</script>

<!-- routify:options $index=30 -->

<h1 class="c-h1">Decorators</h1>
<div class="c-content">
  <p>
    Decorators are components which can be individually wrapped around all
    descendant layouts and pages.
  </p>
  <p>Any component with a default slot can be a decorator.</p>
  <h3>Usage</h3>
  <Prism language="html">{`<slot decorator={MyDecorator} />`}</Prism>

  <h3>Example</h3>

  <Prism language="html">
    {`
    <!-- _FadeDecorator.svelte -->
    <`}{`script>
      import { fade } from "svelte/transition";
    </script>

    <div transition:fade>
      <slot />
    </div>
  `}
  </Prism>

  <Prism language="html">
    {`
      <!-- _layout.svelte -->
      <`}{`script>
        import FadeDecorator from "./_FadeDecorator.svelte";
      </script>

      <slot decorator={FadeDecorator} />
  `}
  </Prism>

  <Note>
    <p>Decorators can be changed/disabled recursively on any layout or page.</p>
  </Note>
</div>
