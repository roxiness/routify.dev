<script>
  import { url, meta } from "@sveltech/routify";
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  meta.title = "What is Routify";
  import Note from "@/components/Note.svelte";
</script>

<!-- routify:options $index=10 -->

<h1 class="c-h1">Getting started</h1>
<div class="c-content">

  <p>
    To create your first Routify app, simply run
    <code>npx @sveltech/routfiy init</code>
    in an empty folder.
  </p>
  <p>
    This will install the Routify starter template, in which you'll find an
    example folder (
    <code>src/pages/examples</code>
    ). You can experiment with these examples or just keep them as references.
  </p>
  <p>
    When you're ready to get started on your app, simple delete the contents of
    <code>src/pages/index.svelte</code>
    and start writing your own content. You will still be able to access the
    examples on
    <code>http://localhost:5000/examples</code>
    .
  </p>

  <p>
    When you don't need the examples anymore you can simply delete the examples
    folder.
  </p>

  <Note>
    We recommend reading
    <a href={$url('../structure')}>structure</a>
    and
    <a href={$url('../parameters')}>parameters</a>
    before creating your first app.
  </Note>

  <p>
    To get further aquainted with Routify we recommend out
    <a href={$url('../../guide')}>Guide</a>
    and
    <a href={$url('../../docs')}>Docs</a>
  </p>
</div>
