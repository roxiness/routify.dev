<!-- routify:options $index=30 -->
<script>
import Prism from 'svelte-prism'
</script>

<h1 class="c-h1">Pages</h1>


<p>  Creating pages is straight forward. You simply put the organize the files as you'd like them represented in the browser.</p>
<p>After creating a page it should be immediately available in your browser.</p>

<Prism language="none">
{`
  FILE                       ADDRESS
  src/pages/
  --index.svelte             /
  --contact.svelte           /contact
  --posts/
  ----index.svelte           /posts
  ----editor.svelte          /posts/editor
`}
</Prism>
