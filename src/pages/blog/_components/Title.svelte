<script>
  // @ts-check
  // @ts-ignore
  import { format, formatRelative, parseISO } from "date-fns";
  import { url, page } from "@sveltech/routify";
  export let node = $page;
  const { path, meta } = node;
  const isCurrentPage = $page === node;
</script>

<header>
  <h2>
    {#if isCurrentPage}
      {meta.frontmatter.title}
    {:else}
      <a href={$url(path)}>{meta.frontmatter.title}</a>
    {/if}
  </h2>
  <p>
    Written by {meta.frontmatter.author}
    <span class="published">
      {formatRelative(parseISO(meta.frontmatter.published), new Date())}
    </span>
  </p>
</header>
