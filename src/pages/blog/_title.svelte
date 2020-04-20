<!--
  Temporary header component till we can get proper markdown layouts working.
 -->

<script>
  // @ts-check
  // @ts-ignore
  import { format, formatRelative, parseISO } from "date-fns";
  import { url, page } from "@sveltech/routify";
  export let node;
  const { path, meta } = node;
  const isCurrentPage = $page === node;
</script>

<header>
  <h2>
    {#if isCurrentPage}
      {meta.blogpost.title}
    {:else}
      <a href={$url(path)}>{meta.blogpost.title}</a>
    {/if}
  </h2>
  <p>
    Written by {meta.blogpost.author}
    <span class="published">
      {formatRelative(parseISO(meta.blogpost.published), new Date())}
    </span>
  </p>
</header>
