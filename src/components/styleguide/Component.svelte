<script>
    import marked from "marked";
    import Code from "@/components/Code.svelte";  

    export let name;
    export let description="";
    export let code = false;

    let showCode = false;

    function toggleCode() {
      showCode = !showCode
    }
</script>
<div class="c-styleguide__component">
    <h2 class="c-h3">{name}</h2>
    <div class="c-content">
      {@html marked(description)}
    </div>
    <div class="c-styleguide-component__inner">
        <slot></slot>
    </div>
</div>

{#if code}
  <button class="c-button c-button--outline c-button--small" on:click="{toggleCode}">Show implementation</button>
{/if}

{#if showCode}
  <Code>{code}</Code>
{/if}