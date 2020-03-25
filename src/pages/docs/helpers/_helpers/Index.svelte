<script>
  import Url from "./url.svelte";
  import IsActive from "./isActive.svelte";
  import Goto from "./goto.svelte";
  import Params from "./params.svelte";
  import Leftover from "./leftover.svelte";
  import BeforeUrlChange from "./beforeUrlChange.svelte";
  import GetConcestor from "./getConcestor.svelte";
  import GetDirection from "./getDirection.svelte";
  import Ready from "./ready.svelte";
  import Context from "./context.svelte";
  import Focus from "./focus.svelte";
  const helpers = [
    Url,
    IsActive,
    Goto,
    Params,
    Context,
    Leftover,
    BeforeUrlChange,
    Focus,
    Ready,
    GetConcestor,
    GetDirection
  ];
</script>


<!-- routify:options links={
    url:'#url',
    goto: '#goto',
    params: '#params',
    isActive: '#is-active'
} -->

<div class="c-container-vertical--small">

  {#each helpers as helper, index}
    {#if index}
      <hr class="c-hr c-hr--big" />
    {/if}
    <svelte:component this={helper} />
  {/each}

</div>
