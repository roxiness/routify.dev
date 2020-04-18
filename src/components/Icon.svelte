<script>
  // Possible icon types
  import * as icons from './icons'
  export let name = "";
  export let size;

  $: icon = icons[toCamel(`-icon-${name}`)];
  const toCamel = s => s.replace(/(\-\w)/g, m => m[1].toUpperCase());
</script>

{#if size == "24" }
  <div class="o-svg-icon o-svg-icon--size-24">
    {@html icon}
  </div>
{:else}
  <div class="o-svg-icon">
    {@html icon}
  </div>
{/if}