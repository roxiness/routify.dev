<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";

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

  <Code language="svelte" title="Promise example">
    {`
      <`}{`script>
        import { ready } from '@sveltech/routify'
          let data = {};

          fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => response.json())
            .then(json => {data = json})
            .then($ready)
        </script>

        <h1>{data.id} - {data.title}</h1>

    `}
  </Code>

  <br />
  <Code language="svelte" title="Await example">
    <div slot="title">test</div>
    {`
      <`}{`script>
        import { ready } from '@sveltech/routify'
        let data = {};
        getData()

        async function getData() {
          const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
          data = await res.json()
          $ready()
        }

      </script>

      <h1>{data.id} - {data.title}</h1>

    `}
  </Code>

  <Note type="warning">
    If
    <code>$ready</code>
    is present in your code, but never called, your app will never be considered
    loaded. This could cause issues like hanging SSR.
  </Note>

</FunctionDoc>
