<script>
  import { url, isActive } from "@sveltech/routify";
  import LeftNavLayout from "@/components/LeftNavLayout.svelte";
</script>

<!-- routify:options $index=20 -->

<LeftNavLayout >
  <slot />
</LeftNavLayout>
