<script>
  import { meta } from "@sveltech/routify";
  import Prism from "svelte-prism";
  import Note from "@/components/Note.svelte";
  meta.title = "Layouts";
</script>

<!-- routify:options index=40 -->
<h1 class="c-h1">Layouts</h1>
<p>
  Layouts are components which are wrapped around pages located in their respective
  folders and subfolders.
</p>

<p>A typical layout can look like this.</p>
<Prism language="svelte">
  {`
  <!-- _layout.svelte -->

  <slot>
    <!-- pages in this folder and subfolders
     will be rendered here -->
  </slot>
  <p>Copyright my website 2020</p>
`}
</Prism>
<Note>
  <p>
    Layouts are recursive, so whenever a page is displayed all layouts from all
    its parent folders are applied.
  </p>
</Note>
<Note type="warning">
  <p>
    Layouts must always have a <code>{`<slot>`}</code> tag.
  </p>
</Note>
