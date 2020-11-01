<script context="module">
  import PrismCmp, { globalConfig } from "svelte-prism";
  import Normalizer from "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
  const nw = new Normalizer({
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": true,
    "right-trim": true,
  });

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
