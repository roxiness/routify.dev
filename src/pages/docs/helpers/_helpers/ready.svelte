<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";

  const params = [];
</script>

<FunctionDoc name="$ready" {params}>
  <p>
    Call
    <code>$ready()</code>
    to let Routify know that your app is ready to be rendered. This is mainly
    used for server side rendering (SSR) where you want the server to wait for
    async data. If
    <code>$ready</code>
    is not present in your component, it will be rendered synchronously
    (instantly).
  </p>

  <!-- todo: make this note a warning -->
  <div slot="note" class="c-note warning">
    <p>
      If
      <code>$ready</code>
      is present in your code, but never called, your app will never be
      considered loaded. This could cause issues like hanging SSR.
    </p>
  </div>

  <Code language="svelte">
    {`
      <`}{`script>
        import { ready } from '@sveltech/routify'
        let data = {};

        async function getData() {
          const res = await fetch('//api.github.com/repos/sveltech/routify');
          data = await res.json()
          $ready()
        }

        getData()
      </script>

      <h1>{data.name}</h1>
    `}
  </Code>

</FunctionDoc>
