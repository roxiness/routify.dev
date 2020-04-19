<script>
  import Icon from "./Icon.svelte";
  export let children;
  export let level = 0;
  $: indent = level * 3.2;
</script>

<style>
  .flex {
    display: inline-flex;
  }
  td {
    padding: 0.4rem 0;
    /* margin: 0.4rem 0; */
  }
  .c-file-tree .c-file-tree {
    padding-left: 3.2rem;
  }
  .c-file-tree__icon-wrap {
    margin-right: 1.2rem;
  }
  .c-file-tree__icon-wrap.arrow {
    margin-left: 1.2rem;
  }
</style>

{#each children as file}
  <tr>
    <td style="padding-left: {indent}rem">
      <div class="flex">
        <span class="c-file-tree__icon-wrap">
          <Icon name={file.type} />
        </span>
        <span class="c-file-tree__filename">{file.name}</span>
      </div>
    </td>
    <td style="width:100%; text-align: center">
      <div class="flex">
        {#if file.correspondingUrl}
          <span class="c-file-tree__icon-wrap arrow">
            <Icon name="resolve" />
          </span>
        {/if}
      </div>
    </td>
    <td>
      <div class="flex" style="align-items: right; white-space: nowrap;">
        {#if file.correspondingUrl}
          <span class="c-file-tree__icon-wrap">
            <Icon name="url" />
          </span>
          {file.correspondingUrl}
        {/if}
      </div>
    </td>

  </tr>
  {#if file.children}
    <svelte:self children={file.children} level={level + 1} />
  {/if}
{/each}
