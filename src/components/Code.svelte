<script context="module">
  import Prism from "svelte-prism";
  import Normalizer from "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
  const nw = new Normalizer({
    "remove-trailing": true,
    "remove-indent": true,
    "left-trim": true,
    "right-trim": true,
  });

  const transform = (code) => nw.normalize(code);
</script>

<script>
  export let language;
  export let title = "";
</script>

<div>
  {#if title}
    <h5>{title}</h5>
  {/if}
  <Prism {language} {transform}>
    <slot />
  </Prism>
  <slot name="caption" />
</div>
