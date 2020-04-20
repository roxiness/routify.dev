<script>
  import { url, isActive } from "@sveltech/routify";
  import LeftNavLayout from "@/components/nav/LeftNavLayout.svelte";
</script>

<!-- routify:options index=20 -->

<LeftNavLayout >
  <slot />
</LeftNavLayout>
