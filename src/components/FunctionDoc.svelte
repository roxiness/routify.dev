<script>
  export let name = "";
  export let params = [];
</script>

<div class="function-doc">
  <h3>{name}</h3>
  <ul>
    {#each params as param}
      <li>
        <span class="type">{param.type}</span>
        <span class="param-description">{param.description}</span>
      </li>
    {/each}
  </ul>
  <div class="description">
    <slot />
  </div>
  <div class="note">
    <slot name="note" />
  </div>
</div>
