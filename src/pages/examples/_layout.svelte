<script>
  import { url, isActive } from "@roxi/routify";
  import LeftNavLayout from "@/components/nav/LeftNavLayout.svelte";
  const links = [
    ["./auth", "Auth"],
    ["./login", "Login"],
    ["./guards", "Guards"]
  ];
</script>

<!-- routify:options index=40 -->

<LeftNavLayout {links}>
  <slot />
</LeftNavLayout>
