<script>
  // Possible icon types
  import * as icons from './icons'
  export let name = "";

  $: icon = icons[toCamel(`-icon-${name}`)];
  const toCamel = s => s.replace(/(\-\w)/g, m => m[1].toUpperCase());
</script>

<style>
  .svg-icon {
    width: 1.6rem;
    height: 1.6rem;
  }
</style>

<div class="svg-icon">
  {@html icon}
</div>
