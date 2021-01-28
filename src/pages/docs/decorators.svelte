<script>
  import Code from "@/components/Code.svelte";
  import { meta } from "@roxi/routify";
  import Note from "@/components/Note.svelte";
  meta.title = "Decorators";
</script>

<!-- routify:options index=30 -->

<h1 class="c-h1">Decorators</h1>
<div class="c-content">
  <p>
    Decorators are components that are automatically wrapped around each
    descendant's layout and page individually.
  </p>
  <p>Any component with a default slot can be a decorator.</p>
  <h3>Usage</h3>
  <Code language="html">{`<slot decorator={ MyDecorator } />`}</Code>

  <h3>Example</h3>

  <Code language="html">
    {`
    <!-- _FadeDecorator.svelte -->
    <`}{`script>
      import { fade } from "svelte/transition";
    </script>

    <div transition:fade>
      <slot />
    </div>
  `}
  </Code>

  <Code language="html">
    {`
      <!-- _layout.svelte -->
      <`}{`script>
        import FadeDecorator from "./_FadeDecorator.svelte";
      </script>

      <slot decorator={ FadeDecorator } />
  `}
  </Code>

  <Note>
    <p>Decorators can be changed/disabled recursively on any layout or page.</p>
  </Note>
</div>
