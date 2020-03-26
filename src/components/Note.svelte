<script>
  export let type;
  import Icon from './Icon.svelte';
</script>


<div class="c-note c-note--{type}">
  {#if type === "warning"}
    <Icon large icon="warning" />
  {:else}
    <Icon large icon="info" />
  {/if}
  <p><slot></slot></p>
</div>
