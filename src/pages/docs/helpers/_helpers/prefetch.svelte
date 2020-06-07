<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";

  const params = [
    {
      type: "String | HTMLElement",
      name: "path",
      description:
        "Path to preload. If HTMLElement is used, href attribute is used.",
    },
    {
      type: "PrefetchObject",
      name: "options",
      description: "Parsed by the url helper.",
    },
  ];

  const types = [
    {
      name: "PrefetchObject",
      properties: {
        validFor: {
          type: "number",
          description:
            "Seconds the response is considered fresh and preferred over a new request",
        },
        timeout: {
          type: "number",
          description: "Miliseconds to leave a hanging prefetch",
        },
        gracePeriod: {
          type: "number",
          description: `Miliseconds to wait before closing a succesful prefetch.
            This time allows async resources like images to load`,
        },
      },
    },
  ];
</script>

<FunctionDoc name="prefetch" {params} {types} tags="1.8 beta,wip">
  <p>Prefetch pages and cache their external requests.</p>
  <Code language="svelte">
    {`
      <`}{`script>
        import { prefetch } from '@sveltech/routify'
        prefetch('/some/path')
      </script>
  `}
    <div slot="caption">Prefetching with Javascript</div>
  </Code>
  <br>
  <Code language="svelte">
    {`
      <a href="/some/path" use:prefetch >go</a>
  `}
  <div slot="caption">Prefetching a link</div>
  </Code>
  <Note>
    For redirects, use the alias
    <code>$redirect</code>
    . This will omit the redirecting page from browser history.
  </Note>
</FunctionDoc>
