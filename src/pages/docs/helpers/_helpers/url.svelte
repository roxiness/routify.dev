<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";

  const params = [
    {
      type: "String",
      name: "path",
      default: "./",
      description: "Absolute, relative or named path."
    },
    {
      type: "Object",
      name: "params",
      default: "{}",
      description: "Parameters to be parsed to the URL."
    },
    {
      type: "Bool",
      name: "strict",
      default: "false",
      description: 'Preserve "/index" at the end of an URL'
    }
  ];
</script>
  
<FunctionDoc name="$url" {params}>
  <p>
    <code>$url</code>
    resolves paths relative to the page/layout file in which it is used. This
    ensures consistent URLs which are unaffected by the current browser address
    (unlike normal relative URLs).
  </p>
  <div slot="note" class="c-note">
    <p>
      If used in a component outside of a layout or page, the url will be
      relative to the layout or page which imports the component.
    </p>

  </div>
  <div slot="note" class="c-note">
    <p>
      A named path is a path that doesn't start with
      <code>.</code>
      or
      <code>/</code>
      .
    </p>
    <p>
      To name a page, add the name meta tag:
      <code>{`<!-- routify:options $name="blog" -->`}</code>
    </p>
  </div>

  <Code language="svelte">
    {`
      <!-- src/pages/recipes/cakes/cupcakes.svelte -->
      <`}{`script>
        import { url } from '@sveltech/routify'
      </script>

      <!-- relative -->
      <a href={$url('../../ingredients/sugar')}>Info about sugar</a>

      <!-- absolute -->
      <a href={$url('/ingredients/sugar')}>Info about sugar</a>

      <!-- named -->
      <a href={$url('sugar')}>Info about sugar</a>

      <!-- params -->
      <a href={$url('/users/:id', {id: '123'})}>Info author</a>
    `}
  </Code>


</FunctionDoc>
