<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";
  import { context } from "@sveltech/routify";
</script>

<FunctionDoc name="$context" type="object">
  <p>
    Use
    <code>$params</code>
    to access the current component context.
  </p>

  <Code language="svelte">
    {`
      <!-- /blog/[postId]/view.svelte -->
      <`}{`script>
        import { context } from '@sveltech/routify'
        console.log($context.component.name) /** /blog/:postId/view **/
      </script>
  `}
  </Code>

  <Note type="warning">
    <p>Components are undocumented and could change without notice. Use at own risk.</p>
  </Note>

</FunctionDoc>
