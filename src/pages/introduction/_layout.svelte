<script>
  import { url, isActive } from "@sveltech/routify";
  import LeftNavLayout from "@/components/LeftNavLayout.svelte";
</script>

<!-- routify:options $index=5 -->

<LeftNavLayout >
  <slot />
</LeftNavLayout>
