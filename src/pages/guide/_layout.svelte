<script>
  import { url, isActive } from "@sveltech/routify";
  import LeftNavLayout from "@/components/LeftNavLayout.svelte";
  const links = [
    ["./structure", "File structure"],
    ["./parameters", "Parameters"],
    ["./props", "Props"],
    ["./metadata", "Metadata"],
    ["./decorators", "Decorators"],
    ["./transitions", "Transitions"]
  ];
</script>

<!-- routify:options $index=10 -->

<LeftNavLayout {links}>
  <slot />
</LeftNavLayout>
