<script>
  import Prism from "svelte-prism";
  import { getContext } from "svelte";
  export let name = "";
  export let tags = "";
  export let params = [];
  export let types = [];
  export let type = "function";

  $: isFunction = type === "function";
  $: paramNames = params.map((param) => param.name);

  $: hash = name
    .replace(/\$/, "")
    .split(/(?=[A-Z])/)
    .map((x) => x.toLowerCase())
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
  .tag {
    font-size: 12px;
    background: #d7f7ff;
    padding: 6px 12px;
    margin-right: 6px;
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
      {#if tags}
        {#each tags.split(',') as tag}
          <span class="tag">{tag}</span>
        {/each}
      {/if}
    </h3>
  </div>
  <div class="c-function-doc__content">
    <div class="c-content">
      <ul>
        {#each params as param}
          <li>
            <strong>{param.name}</strong>
            <div>
              type:
              <code>{`{${param.type}}`}</code>
              {#if param.default}
                <span class="df">
                  (default value:
                  <code>{param.default}</code>
                  )
                </span>
              {/if}
            </div>
            <div>{param.description}</div>

          </li>
        {/each}
      </ul>
      {#if types.length}
        <hr style="margin-top: 0; padding-top: 0" />
        <div>
          {#each types as type}
            <div>
              <div class="object-type">
                <code class="object-type__title">{type.name}</code>
                <ul>
                  {#each Object.entries(type.properties) as [name, prop]}
                    <li>
                      <span>{name}</span>
                      <code>{prop.type}</code>
                      <span>{prop.description}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
    <div class="c-content">
      <slot />
    </div>

  </div>
</div>
