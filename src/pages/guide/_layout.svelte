<script>
  import { url, isActive, route, context } from "@sveltech/routify";
  import LeftNavLayout from "@/components/LeftNavLayout.svelte";

  $: component = $context.component.parent.children.find(
    c => !c.isNonIndexable && $isActive(c.path)
  );
  $: prev = component && component.prevSibling;
  $: next = component && component.nextSibling;
</script>

<!-- routify:options $index=10 -->

<LeftNavLayout>

  <slot />
  {#if prev}
    <a href={$url(prev.path)}>{'<'} {prev.prettyName}</a>
  {/if}

  {#if next}
    <a href={$url(next.path)}>{next.prettyName} {`>`}</a>
  {/if}

</LeftNavLayout>
