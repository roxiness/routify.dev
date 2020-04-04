<script>
  import { url, isActive, route, context } from "@sveltech/routify";
  import LeftNavLayout from "@/components/LeftNavLayout.svelte";
  import Icon from "@/components/Icon.svelte";

  let next;
  let prev;
  function findSiblings(component, traversing) {
    if (!traversing) next = prev = false;
    if (component && component.layout !== $context.component) {
      prev = prev || component.prevSibling;
      next = next || component.nextSibling;
      if (component.parent) findSiblings(component.parent, true);
    }
  }
  $: findSiblings($route);
</script>

<!-- routify:options index=10 -->

<LeftNavLayout>
  

  <slot />
  <div class="c-pagination">
  {#if prev}
    <a class="c-button c-button--outline" href={$url(prev.path)}>
      
      <Icon icon="chevron-left" />
      
      Previous: {prev.prettyName}
    </a>
  {/if}

  {#if next}
    <a class="c-button c-button--outline" href={$url(next.path)}>
      Next: {next.prettyName}
      <Icon icon="chevron-right" />
    </a>
  {/if}
  </div>

</LeftNavLayout>
