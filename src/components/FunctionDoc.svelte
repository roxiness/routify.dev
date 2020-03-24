<script>
  export let name = "";
  export let params = [];
</script>
  
<style>
  .c-function-doc {
  }

  .c-function-doc__note {
    background: #FBE4FD;
    padding: 2.4rem;
  }
</style>

<div class="c-function-doc">
  <h3 class="c-h3">{name}</h3>
  <div class="c-content">
    <ul>
      {#each params as param}
        <li>
          <span class="type">{param.type}</span>
          <span class="param-description">{param.description}</span>
        </li>
      {/each}
    </ul>
  </div>
  <div class="c-content">
    <slot />
  </div>
  <div class="c-function-doc__note">
    <slot name="note" />
  </div>
</div>
