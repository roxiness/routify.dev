<script>
  import { page, url } from "@sveltech/routify";
</script>

<!-- routify:options index=false -->

{#each $page.parent.children as child}
  <div>
    <a href={$url(child.path)}>{child.title}</a>
  </div>
{/each}
