<script>
  import Prism from "svelte-prism";
  import { getContext } from "svelte";
  export let name = "";
  export let params = [];
  export let type = "function";

  $: isFunction = type === "function";
  $: paramNames = params.map(param => param.name);

  $: hash = name
    .replace(/\$/, "")
    .split(/(?=[A-Z])/)
    .map(x => x.toLowerCase())
    .join("-");

  function addHashElement(node) {
    getContext("hashElements").set(hash, node);
  }
</script>

<style>
  .df {
    opacity: 0.6;
  }
  h2 code {
    font-weight: 700;
  }
</style>

<div class="c-function-doc">
  <div class="c-function-doc__header">
    <h3 class="c-function-doc__heading">
      <a id={hash} href="#{hash}" use:addHashElement>#</a>
      <code>
        {name}
        {#if isFunction}({paramNames.join(', ')}){/if}
      </code>
    </h3>
  </div>
  <div class="c-function-doc__content">
    <div class="c-content">
      <ul>
        {#each params as param}
          <li>
            {param.name}
            <ul>
              <li>
                type:
                <code>{`{${param.type}}`}</code>
                <span class="df">
                  (default value:
                  <code>{param.default}</code>
                  )
                </span>
              </li>
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

  </div>
</div>
