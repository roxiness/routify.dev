<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";
  import Code from "@/components/Code.svelte";

  const params = [
    {
      type: "String",
      name: "path",
      default: "./",
      description: "Absolute, relative or named path.",
    },
    {
      type: "Object",
      name: "params",
      default: "{}",
      description: "Parameters to be parsed to the URL.",
    },
    {
      type: "Bool",
      name: "strict",
      default: "false",
      description: 'strict preserves "/index" at the end of a URL. Set to false to match all descendant paths.'
    },
  ];
</script>

<!-- routify:options index=100 -->

<FunctionDoc name="$isActive" {params}>
  <p>
    <code>$isActive</code>
    Checks if the provided path is part of the current route.
  </p>

  <Code language="svelte">
    {`
      <!-- src/pages/_layout.svelte -->
      <`}{`script>
        import { isActive, url } from '@roxi/routify'

        const links = [
          ['./index', 'Home'],
          ['./about', 'About'],
          ['./contact', 'Contact']
        ]
      </script>

      {#each links as [path, name]}
        <a href={$url(path)} class:active={$isActive(path)}>
          {name}
        </a>
      {/each}
    `}
  </Code>
</FunctionDoc>
