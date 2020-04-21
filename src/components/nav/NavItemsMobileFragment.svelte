<script>
  import Accordion from "@/components/Accordion.svelte";
  export let items;
  export let showMobileNav;
  $: indexableItems = items.filter(i => !i.isNonIndexable);

  function getHref(item) {
    // if link is an anchor, we need to prefix it with the parent path
    const prefix = item.path.match(/^#/) ? item.parent && item.parent.path : "";
    return prefix + item.path;
  }
</script>

{#each indexableItems as item}
  <li class="c-navigation-mobile__item ">
    {#if item.children && item.children.length && !item.meta['no-tree']}
      <Accordion title={item.title}>
        <ul>
          <svelte:self items={item.children} bind:showMobileNav />
        </ul>
      </Accordion>
    {:else}
      <a on:click={() => (showMobileNav = false)} href={getHref(item)}>
        {item.title}
      </a>
    {/if}
  </li>
{/each}
