<script>
  import { components } from "@roxi/routify";

  const layout = $components.find(
    (node) => node.path === "/docs/helpers/items"
  );
</script>

<!-- routify:options index=false -->
<div data-routify="scroll-lock">
  <h1 class="c-h1">Helpers</h1>
  {#each layout.children as node, index}
    {#await node.component then component}
      {#if index}
        <hr class="c-hr c-hr--big" />
      {/if}
      <svelte:component this={component} />
    {/await}
  {/each}
  <div data-routify="scroll-lock" />
</div>
