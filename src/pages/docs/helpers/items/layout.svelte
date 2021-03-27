<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";
</script>

<!-- routify:options index=600 -->

<FunctionDoc name="$layout" type="object">
  <p>
    Returns the node of the current component
  </p>

  <Code language="svelte">
    {`
      <!-- src/pages/_layout.svelte -->
      <script>
        import { layout } from '@roxi/routify'
      </script>

      {#each $layout.children as node}
        <a href="{node.path}">{node.title}</a>
      {/each}
    `}
  </Code>

</FunctionDoc>
