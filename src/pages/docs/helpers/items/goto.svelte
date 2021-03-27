<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";

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

<!-- routify:options index=200 -->

<FunctionDoc name="$goto" {params}>
  <p>
    Navigate programatically.
  </p>

  <Code language="svelte">
    {`
      <`}{`script>
        import { goto } from '@roxi/routify'
        $goto('../go/here')
      </script>
  `}
  </Code>
  <Note>
    For redirects, use the alias <code>$redirect</code>. This will omit the redirecting page from the browser history.
  </Note>
</FunctionDoc>
