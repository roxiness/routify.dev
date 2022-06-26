<script>
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";
  import { meta } from "@roxi/routify";
  meta.title = "URL parameters";
</script>

<!-- routify:options index=30 -->

<h1 class="c-h1">URL parameters</h1>
<div class="c-content">
  <p>
    Routify can access URL parameters by using parameterized files and folders.
  </p>

  <p>
    A file or folder is parameterized if it is wrapped in brackets. (ie.
    <code>[slug].svelte</code>
    or
    <code>[slug]/index.svelte</code>)
  </p>

  <br />
  <h3 class="c-h3">Local parameters</h3>

  <p>
    A parameterized file/folder can access its parameter with
    <Code>export let slug</Code>
  </p>
  <p>
    A Folder's parameter is passed to
    <code>[slug]/_layout.svelte</code>
  </p>

  <br />
  <h3 class="c-h3">Global parameters</h3>
  <p>
    To access all parameters, including query parameters, from any component use
    the
    <code>$params</code>
    helper. The `$params` helper can be called from a page, layout, or component
    nested within the page without having to pass the property down.
  </p>

  <Code>
    {`
        import { params } from '@roxi/routify'
        $: slug = $params.slug
    `}
  </Code>

  <br />
  <h3 class="c-h3">Synchronicity</h3>
  <p>
    Local parameters are directly synchronized with the address bar whereas
    global parameters are first propagated through the layout component chain.
    The propagation is to prevent race conditions between parameters and
    component state.
  </p>

  <Note>
    Accessing local parameters in markup can be trigers to call to the component before navigating to its ancestors. See <a href="https://github.com/roxiness/routify/issues/380" target="_blank">#380</a>
  </Note>

</div>
