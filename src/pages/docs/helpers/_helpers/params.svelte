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
  <br />
  <p>
    By default, the query handler uses the native URLSearchParams function. For
    more advanced usage, you can create your own
    <code>queryHandler</code>
    . The queryHandler is an object with a <code>parse</code> and a <code>stringify</code> method.
  </p>
  <Code language="svelte">
    {`
    <`}{`script>
      ...
      import { parse, stringify } from 'qs'
      const queryHandler = { parse, stringify }
    </script>

    <Router config={{queryHandler}} ... />
  `}
  </Code>

</FunctionDoc>
