<script>
  // Possible icon types
  import * as icons from "./icons";
  export let name = "";
  export let size = null;

  const acceptedSizes = [null, "16", "18", "20", "24"];

  $: if (!acceptedSizes.includes(size))
    console.error("size must be in", JSON.stringify(acceptedSizes));

  $: sizeClass = size ? `o-svg-icon--size-${size}` : "";
  $: _class = $$props.class || "";
  $: icon = icons[toCamel(`-icon-${name}`)];

  const toCamel = s => s.replace(/(\-\w)/g, m => m[1].toUpperCase());
</script>

<div class="o-svg-icon {sizeClass} {_class}">
  {@html icon}
</div>
