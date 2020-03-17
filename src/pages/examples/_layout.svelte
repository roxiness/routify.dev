<script>
  import { url, isActive } from "@sveltech/routify";
  import LeftNavLayout from "../../components/LeftNavLayout.svelte";
  const links = [
    ["./auth", "Auth"],
    ["./login", "Login"],
    ["./guards", "Guards"]
  ];
</script>

<LeftNavLayout {links}>
  <slot />
</LeftNavLayout>
