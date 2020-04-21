<script>
  import Accordion from "@/components/Accordion.svelte";
  export let items;
  export let showMobileNav;
  $: indexableItems = items.filter(i => !i.isNonIndexable);

  function getHref(item) {
    return item.parent && item.parent.path + item.path
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
