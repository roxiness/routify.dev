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
      type: "Bool",
      name: "strict",
      default: "true",
      description: 'Preserve "/index" at the end of an URL'
    }
  ];
</script>

<FunctionDoc name="$isActive" {params}>
  <p>
    <code>$isActive</code>
    Checks if the provided path is part of the current route.
  </p>

  <Code language="svelte">
    {`
      <!-- src/pages/_layout.svelte -->
      <`}{`script>
        import { isActive, url } from '@sveltech/routify'

        const links = [
          ['./index', 'Home'],
          ['./about', 'About'],
          ['./contact', 'Contact']
        ]
      </script>

      {#each links as [path, name]}}
        <a href={$url(path)} class:active={$isActive(path)}>
          {name}
        </a>
      {/each}
    `}
  </Code>
</FunctionDoc>
