<script>
  import Prism from "svelte-prism";
  export let name = "";
  export let params = [];
  $: paramNames = params.map(param => param.name);
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
  <h3 class="c-h3">{name}({paramNames.join(', ')})</h3>
  <div class="c-content">
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
  </div>
  <div class="c-content">
    <slot />
  </div>
  <div class="c-function-doc__note">
    <slot name="note" />
  </div>
  <div class="example">
    <Prism>
      <slot name="code" />
    </Prism>
  </div>
</div>
