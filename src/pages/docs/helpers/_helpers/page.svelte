<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";

  const params = [
    {
      type: "String",
      name: "path",
      default: "/index",
      description: "Route path",
    },
    {
      type: "String",
      name: "title",
      description: "Returns meta title if present or a prettified path",
    },
    {
      type: "Object",
      name: "meta",
      default: `
      {
      ...
      preload: Boolean,
      prerender: Boolean,
      recursive: Boolean
      }`,
      description: "metadata (anything from <!-- routify:options ... -->",
    },
    {
      type: "Object",
      name: "parent",
      description: "Object of parent node",
    },
    {
      type: "Array",
      name: "children",
      description: "Array of child nodes",
    },
    {
      type: "Object",
      name: "next",
      description:
        "next child (index determines the order, eg. <!-- routify:options index=123 -->)",
    },
    {
      type: "Object",
      name: "prev",
      description: "previous child e.g opposite of prev",
    },
    {
      type: "Promise",
      name: "component",
      description: "component promise of the .svelte file.",
    },
    {
      type: "Promise",
      name: "componentWithIndex",
      description:
        "returns the [layout-node.component, page-node.component] if current file is a layout or [page-node-component] if file is a page",
    },
    {
      type: "Object",
      name: "index",
      description: "returns the index node if current file is a layout",
    },
  ];
</script>

<FunctionDoc name="$page" {params}>
  <Code language="svelte">
    {`
      <!-- src/pages/_layout.svelte -->
      <script>
        import { page, metatags } from '@roxi/routify'
        // sets meta title and og tile to page tile by default if no settings are sepcified this will be a prettified file name as title about-us.svelte as about us
        $: metatags.title = $page.title
        const links = [
          ['/index', 'Home'],
          ['/about/index', 'About'],
          ['/contact/index', 'Contact']
        ]
        //get active page
        let activePage= links.find(item=> $isActive(item[0]))


      </script>
    `}
  </Code>
</FunctionDoc>
