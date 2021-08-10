<script context="module">
  import PrismCmp, { globalConfig } from "svelte-prism";
  import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
  import Prism from "prismjs";

  const nw = Prism.plugins.NormalizeWhitespace;

  globalConfig.transform = (code) => nw.normalize(code);
</script>

<script>
  export let language;
  export let title = "";
</script>

<div>
  {#if title}
    <h5>{title}</h5>
  {/if}
  <PrismCmp {language}>
    <slot />
  </PrismCmp>
  <slot name="caption" />
</div>
