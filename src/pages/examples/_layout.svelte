<script>
  import { url, isActive } from "@sveltech/routify";
  import LeftNavLayout from "@/components/LeftNavLayout.svelte";
  const links = [
    ["./auth", "Auth"],
    ["./login", "Login"],
    ["./guards", "Guards"]
  ];
</script>

<!-- routify:options $index=40 -->

<LeftNavLayout {links}>
  <slot />
</LeftNavLayout>
