<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";

  const params = [
    {
      type: "Function(event, route):boolean",
      name: "callback",
      description: "Function to be called before the URL is changed."
    }
  ];
</script>

<!-- routify:options index=800 -->

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
      import { beforeUrlChange } from "@roxi/routify"
      $beforeUrlChange((event, route) => {
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
