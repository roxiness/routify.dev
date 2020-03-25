<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";

  const params = [
    {
      type: "Function",
      name: "callback",
      description: "Function to be called before URL is changed."
    }
  ];
</script>

<FunctionDoc name="$beforeUrlChange" {params}>
  <p>
    <code>$beforeUrlChange</code>
    intercepts navigation in your app. If the provided callback returns
    <code>false</code>
    navigation is stopped.
  </p>

  <Code language="svelte">
    {`
      <`}{`script>
      import { beforeUrlChange } from "@sveltech/routify"
      $beforeUrlChange((event, store) => {
        if(formIsDirty){
          alert('Please save your changes before leaving.')
          return false
        }
        else return true
      })
      </script>
    `}
  </Code>

</FunctionDoc>
