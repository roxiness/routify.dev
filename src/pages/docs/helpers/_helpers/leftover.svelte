<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";
</script>

<FunctionDoc name="$leftover" type="object">
  <p>
    <code>$leftover</code> is the part of the URL that's unconsumed by Routify. Useful in widgets redirect. Often handled in <code>_fallback.svelte</code>.
  </p>

  <Code language="svelte">
    {`
      <!-- http://myapp.com/docs/de/i18n/intro -->
      <!-- src/pages/docs/_fallback.svelte -->
      <script>
        import { leftover, goto } from '@sveltech/routify'

        /** $leftover would be "de/i18n/intro" **/
        const [language, ...fragments] = $leftover.split('/')

        /** After popping the language from the url we, piece it back together **/
        const path = fragments.join('/')

        /** $redirect to "en/i18n/intro" **/
        $goto(`+'`/docs/en/${path}`'+`)
      </script>
    `}
    <div slot="caption">
    Redirecting to the English page if the German page couldn't be found</div>
  </Code>

  <Note type="info">
    <code>$leftover</code> is composed by subtracting the parent folder of the <code>_fallback.svelte</code> from the current URL.
  </Note>

</FunctionDoc>
