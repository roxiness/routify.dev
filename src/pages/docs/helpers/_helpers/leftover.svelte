<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";


</script>

<FunctionDoc name="$leftover" type="object">
  <p>
    <code>$leftover</code> is the part of the URL that's unconsumed by Routify. Useful in wigets redirect. Often handled in <code>_fallback.svelte</code>.
  </p>
  <div slot="note" class="c-note">
    <p>
      <code>$leftover</code> is composed by subtracting the parent folder of the <code>_fallback.svelte</code> from the current URL.
    </p>

  </div>

  <Code language="svelte">
    {`
      <!-- http://myapp.com/docs/de/i18n/intro -->
      <!-- src/pages/docs/_fallback.svelte -->
      <script>
        import { leftover, goto } from '@sveltech/routify'

        /** $leftover would be "de/i18n/intro" **/
        const [language, ...fragments] = $leftover.split('/')

        /** After popping the language from the url we, piece it back together **/
        const path = fragments('/')

        /** $redirect to "en/i18n/intro" **/
        $goto(`+'`/docs/en/${path}`'+`)
      </script>
    `}
    <div slot="caption">
    Redirecting to the English page if the German page couldn't be found</div>
  </Code>


</FunctionDoc>
