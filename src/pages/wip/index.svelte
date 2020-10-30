<script>
  import { page, url } from "@roxi/routify";
</script>

<!-- routify:options index=false -->

{#each $page.parent.children as child}
  <div>
    <a href={$url(child.path)}>{child.title}</a>
  </div>
{/each}
