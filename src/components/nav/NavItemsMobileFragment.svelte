<script>
  import Accordion from "@/components/Accordion.svelte";
  export let items;
  export let showMobileNav;
  $: indexableItems = items.filter(i => !i.isNonIndexable);
</script>

{#each indexableItems as item}
  <li class="c-navigation-mobile__item ">
    {#if item.children && item.children.length}
      <Accordion title={item.title}>
        <ul>
          {#if item.children}
            <svelte:self items={item.children} bind:showMobileNav />
          {/if}
          {#if item.meta && item.meta.links}
            {#each item.meta.links as item}
              <li class="c-navigation-mobile__item ">
                <a on:click={() => (showMobileNav = false)} href="{item.href}">
                  {item.title}
                </a>
              </li>
            {/each}
          {/if}
        </ul>
      </Accordion>
    {:else}
      <a on:click={() => (showMobileNav = false)} href="{item.path}">
        {item.title}
      </a>
    {/if}
  </li>
{/each}
