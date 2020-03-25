<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";

  const params = [
    {
      type: "String",
      name: "path",
      default: "./",
      description: "Parsed by the url helper."
    },
    {
      type: "Object",
      name: "params",
      default: "{}",
      description: "Parsed by the url helper."
    },
    {
      type: "Boolean",
      name: "static",
      default: "false",
      description: "Render URL without redirecting."
    },
    {
      type: "Boolean",
      name: "shallow",
      default: "false",
      description: "Use the layouts of the goto's parent instead of the target."
    }
  ];
</script>

<FunctionDoc name="$goto" {params}>
  <p>
    Use <code>$goto</code>
    to navigate programatically.
  </p>

  <Code language="svelte">
    {`
      <!-- src/pages/redirect.svelte -->
      <`}{`script>
        import { goto } from '@sveltech/routify'
        $goto('../redirect/me')
      </script>
  `}
  </Code>

</FunctionDoc>
