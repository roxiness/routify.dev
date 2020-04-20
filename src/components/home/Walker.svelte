<script>
  export let children
  import Icon from './Icon.svelte';
</script>

<ul class="c-file-tree">
  {#each children as file}
  <li>
    <div class="u-flex">
      <span class="c-file-tree__icon-wrap"><Icon name={file.type} /></span>
      <span class="c-file-tree__filename">{file.name}</span>
      {#if file.correspondingUrl}
        <span class="c-file-tree__icon-wrap"><Icon name="resolve" /></span>
        <span class="c-file-tree__icon-wrap"><Icon name="url" /></span>
        {file.correspondingUrl}
      {/if}
    </div>
    {#if file.children}
      <svelte:self children={file.children} />
    {/if}
  </li>
 {/each}
 </ul>
