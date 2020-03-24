<script>
  import { url, isActive } from "@sveltech/routify";
  import LeftNavLayout from "@/components/LeftNavLayout.svelte";
  const links = [
    ["./basics", "Basics"],
    ["./code-splitting", "Code-splitting"],
    ["./prerendering", "Prerendering"],
    ["./deployments", "Deployments"],
    ["./ssr", "SSR"],
    ["./cache", "Cache"]
  ];
</script>

<LeftNavLayout {links}>
  <slot />
</LeftNavLayout>
