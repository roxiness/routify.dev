<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";

  const params = [
    {
      type: "Layout | Page",
      name: "path1",
      description: "First Page/Layout"
    },
    {
      type: "Layout | Page",
      name: "path2",
      description: "Second Page/Layout."
    }
  ];
</script>

<FunctionDoc name="$getDirection" {params}>
  <p>
    Takes two components and returns returns the difference between their siblings ancestors <code>meta.$index</code>.
  </p>
  <Code language="svelte">
    {`
      <`}{`script>
        import { route } from '@sveltech/routify'
        $: lastRoute = $route.last
        $: direction = $getDirection($route, lastRoute)
      </script>
    `}
  </Code>

</FunctionDoc>
