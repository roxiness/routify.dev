<script>
  import Prism from "svelte-prism";
  import { meta } from "@sveltech/routify";
  meta.title = "URL parameters";
</script>
<!-- routify:options index=30 -->

<h1 class="c-h1">URL parameters</h1>
<div class="c-content">
  <p>
    Routify can access URL parameters by using parameterized files and folders.
  </p>

  <p>
    A file or folder is parameterized if it is wrapped in brackets.
  (ie.
    <code>[slug].svelte</code>
    or
    <code>[slug]/index.svelte</code>)
  </p>

  <br />
  <h3 class="c-h3">Local parameters</h3>

  <p>
    A parameterized file/folder can access its parameter with
    <Prism source="export let slug" />
  </p>
  <p>
    A Folder's parameter is passed to
    <code>[slug]/_layout.svelte</code>
  </p>

  <br />
  <h3 class="c-h3">Global parameters</h3>
  <p>
    To access all parameters from anywhere, use the
    <code>$params</code>
    helper.
  </p>

  <Prism>
    {`
        import { params } from '@sveltech/routify'
        $: slug = $params.slug
    `}
  </Prism>

  <br />
  <h3 class="c-h3">Synchronicity</h3>
  <p>
    Local parameters are directly synchronized with the address bar whereas
    global parameters are first propagated through the layout component chain.
    The propagation is to prevent race conditions between parameters and
    component state.
  </p>
</div>
