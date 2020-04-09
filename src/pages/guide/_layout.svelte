<script>
  import { url, isActive, route, layout, page } from "@sveltech/routify";
  import LeftNavLayout from "@/components/LeftNavLayout.svelte";
  import Icon from "@/components/Icon.svelte";

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

<!-- routify:options index=10 -->

<LeftNavLayout>

  <slot />
  <div class="c-pagination">
    {#if prev}
      <a class="c-button c-button--outline" href={$url(prev.path)}>

        <Icon icon="chevron-left" />
        Previous: {prev.title}
      </a>
    {/if}

    {#if next}
      <a class="c-button c-button--outline" href={$url(next.path)}>
        Next: {next.title}
        <Icon icon="chevron-right" />
      </a>
    {/if}
  </div>

</LeftNavLayout>
