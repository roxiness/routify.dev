<script>
  import { url, isActive } from "@sveltech/routify";
  import LeftNavLayout from "../../components/LeftNavLayout.svelte";
  const links = [
    ["./structure", "File structure"],
    ["./url-parameters", "URL parameters"],
    ["./props", "Props"],
    ["./metadata", "Metadata"],
    ["./decorators", "Decorators"],
    ["./transitions", "Transitions"]
  ];
</script>

<LeftNavLayout {links}>
  <slot />
</LeftNavLayout>
