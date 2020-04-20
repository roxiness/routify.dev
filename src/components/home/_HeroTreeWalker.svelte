<script>
  import Icon from "@/components/Icon.svelte";
  export let children = [];
  export let level = 0;
  $: style = `padding-left: ${level * 3.2}rem`;
</script>

<style>
  .col {
    display: flex;
    padding: 0.2rem;
    white-space: nowrap;
  }

  .center {
    justify-content: center;
  }
  .path {
    margin-left: 1.2rem;
  }
</style>

{#each children as file}
  <div class="col" {style}>
    <Icon name={file.type} class="icon" />
    <span class="path">{file.name}</span>
  </div>
  <div class="col center" style="">
    {#if file.url}
      <Icon name="resolve" />
    {/if}
  </div>
  <div class="col">
    {#if file.url}
      <Icon name="url" />
      <span class="path">{file.url}</span>
    {/if}
  </div>
  <svelte:self level={level + 1} children={file.children} />
{/each}
