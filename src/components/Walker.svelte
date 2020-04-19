<script>
  export let children
  import Icon from './Icon.svelte';
</script>


<style>

  :global(.c-file-tree .c-file-tree) {
    padding-left: 3.2rem;
  }

  :global(.c-file-tree li) {
    margin: 0.4rem 0;
  }

  .ff-icon-wrap {
    margin-right: 1.2rem;
  }

  .filename {
    width: 14rem;
  }

</style>

<ul class="c-file-tree">
  {#each children as file}
  <li>

    <div style="display: flex;">
      {#if file.type == "folder"}
        <span class="ff-icon-wrap"><Icon name="folder" /></span>
      {/if}
      {#if file.type == "file"}
        <span class="ff-icon-wrap"><Icon name="file" /></span>
      {/if}

      <span class="filename">{file.name}</span>

      {#if file.correspondingUrl}
        <span class="ff-icon-wrap"><Icon name="resolve" /></span>
        <span class="ff-icon-wrap"><Icon name="url" /></span>
        {file.correspondingUrl}
      {/if}
    </div>

    {#if file.children}
      <svelte:self children={file.children} />
    {/if}
  </li>
 {/each}
 </ul>
