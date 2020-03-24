<script>
  import { url, isActive } from "@sveltech/routify";
  import LeftNavLayout from "@/components/LeftNavLayout.svelte";
  const links = [
    ["./url", "url"],
    ["./goto", "goto"],
    ["./params", "params"],
    ["./is-active", "isActive"],
    ["./leftover", "leftover"],
    ["./meta", "meta"],
    ["./focus", "focus"],
    ["./before-url-change", "beforeUrlChange"],
    ["./get-concestor", "getConcestor"],
    ["./get-direction", "getDirection"],
  ];
</script>

<LeftNavLayout {links}>
  <slot />
</LeftNavLayout>
