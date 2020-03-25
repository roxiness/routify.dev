<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
</script>

<FunctionDoc name="$params" type="object">
  <p>
    Use
    <code>$params</code>
    to access parameters from the URL.
  </p>

  <Code language="svelte">
    {`
      <!-- /user/:userId/posts/:postId -->
      <`}{`script>
        import { params } from '@sveltech/routify'
        console.log($params) /** {userId: 123, postId: 456} **/
      </script>
  `}
  </Code>

</FunctionDoc>
