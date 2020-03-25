<script>
  import FunctionDoc from "@/components/FunctionDoc.svelte";

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
    Checks if a given path is part of the current route.
  </p>

  <div slot="code">
    {`
<!-- src/pages/_layout.svelte -->
<`}{`script>
  import { isActive, url } from '@sveltech/routify'

  const links = [
    ['./index', 'Home'],
    ['./about', 'About'],
    ['./contact', 'Contact']
  ]
</}{script>

{#each links as [path, name]}}
  <a href={$url(path)} class:active={$isActive(path)}>{name}</a>
{/each}
  `}
  </div>

</FunctionDoc>

