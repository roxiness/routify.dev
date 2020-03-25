<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";

  const params = [
    {
      type: "HTMLElement",
      name: "element",
      description: "Focuses the element"
    }
  ];
</script>

<FunctionDoc name="$focus" {params}>
  <p>
    Focuses an element. If multiple focuses are called at once, the one closest to the root takes precedence.
  </p>
  <Code language="svelte">
    {`
      <`}{`script>
        import { focus } from '@sveltech/routify'
      </script>

      <h1 use:focus>Look at me</h1>
    `}
  </Code>

</FunctionDoc>
