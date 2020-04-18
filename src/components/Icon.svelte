<script>
  // Possible icon types
  import * as icons from './icons'
  export let name = "";
  export let size;

  $: icon = icons[toCamel(`-icon-${name}`)];
  const toCamel = s => s.replace(/(\-\w)/g, m => m[1].toUpperCase());
</script>

<div
    class="o-svg-icon"
    class:o-svg-icon--size-24="{size == '24'}"
    class:o-svg-icon--size-16="{size == '16'}"
  >
  {@html icon}
</div>