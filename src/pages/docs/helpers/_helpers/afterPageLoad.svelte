<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import {afterPageLoad} from '@roxi/routify'
  $afterPageLoad(event => {
    console.log(event)
  })
  const params = [
    {
      type: "Function(page):void",
      name: "callback",
      description: "Function to be called before URL is changed.",
    },
  ];
</script>

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
