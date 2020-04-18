<script>
    import marked from "marked";
    import Code from "@/components/Code.svelte";  

    export let name;
    export let description="";
    export let code;

</script>
<div class="c-styleguide__component">
    <h2 class="c-h3">{name}</h2>
    <div class="c-content">
      {@html marked(description)}
    </div>
    <div class="c-styleguide__component-inner">
        <slot></slot>
    </div>
</div>

{#if code}
  <Code>{code}</Code>
{/if}