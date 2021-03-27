<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  const params = [
    {
      type: "Function(page):void",
      name: "callback",
      description: "Function to be called after page is loaded.",
    },
  ];
</script>

<!-- routify:options index=900 -->

<FunctionDoc name="$afterPageLoad" {params}>
  <p>
    Called after a page has been loaded
  </p>

  <Code language="svelte">
    {`
      <`}{`script>
      import { afterPageLoad } from "@roxi/routify"
      $afterPageLoad(page => {
        console.log('loaded ' + page.title)
      })
      </script>
    `}
  </Code>

</FunctionDoc>
