<script>
  import { url, isActive, route, layout, page } from "@roxi/routify";
  import LeftNavLayout from "@/components/nav/LeftNavLayout.svelte";

  let next, prev;
  function findSiblings(node, traversing) {
    if (!traversing) next = prev = false; //reset
    if (node !== $layout.parent) {
      prev = prev || node.prev;
      next = next || node.next;
      if (node.parent) findSiblings(node.parent, true);
    }
  }
  $: findSiblings($page);
</script>

<!-- routify:options index=false -->

<LeftNavLayout>
  <slot />
</LeftNavLayout>
