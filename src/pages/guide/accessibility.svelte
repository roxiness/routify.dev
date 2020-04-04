<script>
  import { meta } from "@sveltech/routify";
  import Note from "@/components/Note.svelte";
  import Prism from "svelte-prism";
  meta.title = "Navigation";
</script>

<!-- routify:options index=50 -->
<!-- routify:options name="Accessibility" -->

<h1 class="c-h1">Accessibility</h1>

<Note type="alternate">This page is a work in progress.</Note>

<div class="c-content">

  <h2>Focus helper (<code>use:focus</code>)</h2>

  <p>Use the focus helper to set focus to an item.</p>

  <h2>Opting out of removing focus on route change</h2>

  <!-- Text to be added about how to implement this -->

  <p>By default, Routify removes the focus on route change. If you want to opt out of this behavior...</p>

  <!-- Text to be added -->

  <h2>New page announcer</h2>

  <p>In an SPA, it might be unclear to a screenreader user where they are. The site changes, but an actual page change (like in a traditional website) does not occur. To counter this, you can announce a page change:</p>

  <Prism language="html">
    {`<div
  id="svelte-announcer"
  class="u-hide-accessibility"
  aria-live="assertive"
  aria-atomic="true">Navigated to: {pageTitle}
</div>
      `}
</Prism>
  <p>In this code, <code>pageTitle</code> would refer to a dynamic variable that contains the new page title. Since Svelte is reactive, and aria-live reacts to a changed DOM, whenever a page changes, the content of this div is being read out.

</div>