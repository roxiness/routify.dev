<script>
  export let type = "info";
  import Icon from './Icon.svelte';
  import IconInfo from './icons/info.svg';
  import IconWarning from './icons/warning.svg';
</script>


<div class="c-note c-note--{type}">
  <div class="c-note__icon">
    {#if type === "warning"}
      {@html IconWarning}
    {:else}
      {@html IconInfo}
    {/if}
  </div>
  <div class="c-note__text">
    <div class="c-content">
      <slot></slot>
    </div>
  </div>
</div>
