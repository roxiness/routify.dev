<script>
  import { url, isActive, route, layout, page } from "@sveltech/routify";
  import LeftNavLayout from "@/components/nav/LeftNavLayout.svelte";
  import Icon from "@/components/Icon.svelte";

  let next, prev;

  $: if ($page) next = prev = false; //reset
  $: findSiblings($page); //update buttons on page change

  function findSiblings(node) {
    prev = prev || node.prev;
    next = next || node.next;
    // make sure we have a parent and that we're not travelling past our layout
    if (node.parent && node !== $layout) findSiblings(node.parent);
  }
</script>

<!-- routify:options index=10 -->

<LeftNavLayout>
  <slot />

  <div class="c-pagination">
    <!-- @todo we should change these to use the Button component, but I had a problem doing that -Wolfr -->
    {#if prev}
      <a class="c-button c-button--outline" href={$url(prev.path)}>
        <span class="c-button__icon-wrap">
          <Icon name="chevron-left" size="20" />
        </span>
        <span class="c-button__label">Previous: {prev.title}</span>
      </a>
    {/if}

    {#if next}
      <a class="c-button c-button--outline" href={$url(next.path)}>
        <span class="c-button__label">Next: {next.title}</span>
        <span class="c-button__icon-wrap">
          <Icon name="chevron-right" size="20" />
        </span>
      </a>
    {/if}
  </div>
</LeftNavLayout>
