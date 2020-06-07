<script>
  import Url from "./url.svelte";
  import IsActive from "./isActive.svelte";
  import Goto from "./goto.svelte";
  import Params from "./params.svelte";
  import Leftover from "./leftover.svelte";
  import Page from "./page.svelte";
  import Layout from "./layout.svelte";
  import BeforeUrlChange from "./beforeUrlChange.svelte";
  import AfterPageLoad from "./afterPageLoad.svelte";
  import IsChangingPage from "./isChangingPage.svelte";
  import GetConcestor from "./getConcestor.svelte";
  import GetDirection from "./getDirection.svelte";
  import Ready from "./ready.svelte";
  import Prefetch from "./prefetch.svelte";
  import Focus from "./focus.svelte";
  import Metatags from "./metatags.svelte";
  const helpers = [
    Url,
    IsActive,
    Goto,
    Params,
    Metatags,
    Page,
    Layout,
    Leftover,
    BeforeUrlChange,
    AfterPageLoad,
    IsChangingPage,
    Prefetch,
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

<div class="c-container-vertical c-container-vertical--small">

  {#each helpers as helper, index}
    {#if index}
      <hr class="c-hr c-hr--big" />
    {/if}
    <svelte:component this={helper} />
  {/each}

</div>
