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

<FunctionDoc name="$getConcestor" {params}>
  <p>
    Takes two components and returns their closest shared layout and their
    sibling ancestors.
  </p>
  <div slot="note" class="c-note">
    <p>
      <code>$getConcestor</code>
      is used by
      <code>$getDirection</code>
      to determine the direction when navigating.
    </p>

  </div>
  <Code language="svelte">
    {`
      <`}{`script>
        import { route } from '@sveltech/routify'
        $: lastRoute = $route.last
        $: ([concestor, ancestor, oldAncestor] = $getConcestor($route, lastRoute))
        $: direction = ancestor.meta.$index - oldAncestor.meta.$index
      </script>
    `}
  </Code>

</FunctionDoc>
