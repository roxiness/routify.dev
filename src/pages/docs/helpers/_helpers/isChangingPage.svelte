<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";
</script>

<FunctionDoc name="$isChangingPage" type="object">
  <p>Returns true if a page is loading. </p>

  <Code language="svelte">
    {`
      <!-- src/pages/_layout.svelte -->
      <sc`}{`ript>
        import { isChangingPage } from '@roxi/routify'
        import Spinner from '_spinner.svelte'
      </script>

      <slot />

      {#if $isChangingPage}
        <Spinner />
      {/if}
    `}

  </Code>

</FunctionDoc>
