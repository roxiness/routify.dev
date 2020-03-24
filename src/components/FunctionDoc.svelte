<script>
  import Prism from "svelte-prism";
  export let name = "";
  export let params = [];
  $: paramNames = params.map(param => param.name);
</script>

<style>
  .df {
    opacity: 0.6;
  }
  h3 code {
    font-weight: 700;
  }
</style>

<div class="c-function-doc">
  <div class="c-function-doc__header">
    <h3 class="c-h3">
      <a id="haslinkhere" href="#haslinkhere">#</a> <code>{name}({paramNames.join(', ')})</code>
    </h3>
  </div>
  <div class="c-function-doc__content">
    <div class="c-content">
      <ul>
      {#each params as param}
        <li>
          {param.name}
          <ul>
            <li>type: <code>{`{${param.type}}`}</code> <span class="df">(default value: <code>{param.default}</code>)</span></li>
            <li>{param.description}</li>
          </ul>
        </li>
      {/each}
    </ul>
    </div>
    <div class="c-content">
      <slot />
    </div>
    <div class="c-function-doc__note">
      <div class="c-content">
        <slot name="note" />
      </div>
    </div>
    <div class="example">
      <Prism>
        <slot name="code" />
      </Prism>
    </div>
  </div>
</div>
