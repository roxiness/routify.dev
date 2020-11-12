<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";
</script>

<FunctionDoc name="$page" type="object">
  <p>
    Returns the node of the current page
  </p>

  <Code language="svelte">
    {`
      <!-- src/pages/_layout.svelte -->
      <script>
        import { page, metatags } from '@roxi/routify'
        $: metatags.title = $page.title
      </script>
    `}
  </Code>

</FunctionDoc>
