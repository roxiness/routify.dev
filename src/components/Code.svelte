<script>
  import Prism from "svelte-prism";
  export let language;
  export let title;
</script>

<div>
  {#if title}
    <h5>{title}</h5>
  {/if}
  <Prism {language}>
    <slot />
  </Prism>
  <slot name="caption" />
</div>
