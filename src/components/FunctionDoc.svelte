<script>
  import Prism from "svelte-prism";
  export let name = "";
  export let params = [];
  $: paramNames = params.map(param => param.name);
</script>

<div class="function-doc">
  <h3>{name}({paramNames.join(', ')})</h3>
  <ul>
    {#each params as param}
      <li>
        <div>
          <span class="type">{`{${param.type}}`}</span>
          <span class="name">{param.name}</span>
          <span class="default-value">default value {param.default}</span>
        </div>
        <div class="param-description">{param.description}</div>
      </li>
    {/each}
  </ul>
  <div class="description">
    <slot />
  </div>
  <div class="note">
    <slot name="note" />
  </div>
  <div class="example">
    <Prism>
      <slot name="code" />
    </Prism>
  </div>
</div>
