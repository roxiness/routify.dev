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
        <span class="c-button__icon-wrap"><Icon name="chevron-left" size="20"/></span>
        <span class="c-button__label">Previous: {prev.title}</span>
      </a>
    {/if}

    {#if next}
      <a class="c-button c-button--outline" href={$url(next.path)}>
        <span  class="c-button__label">Next: {next.title}</span>
        <span class="c-button__icon-wrap">
          <Icon name="chevron-right" size="20" />
        </span>
      </a>
    {/if}
  </div>

</LeftNavLayout>
