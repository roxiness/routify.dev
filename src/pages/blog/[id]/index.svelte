<script>
  // @ts-check
  import Note from "../../../components/Note.svelte";
  import { fade } from "svelte/transition";
  export let id;
  import marked from "marked";
  import { fetcher } from "../_fetcher";
  import { ready } from "@sveltech/routify";

  let post = null;
  fetcher(`/posts/${id}`, res => (post = res)).then($ready);
</script>

{#if post}
  <div class="c-container-vertical">
    <div class="c-container-horizontal c-container-horizontal--narrow">
      <article class="c-blogpost">
        <header>
          <h1>{post.title}</h1>
          <p>Written by {post.author.displayName}</p>
        </header>
        <div class="c-content">
          {@html marked(post.content)}
        </div>

        <!-- <Note>
          You can comment on
          <a href={md.metadata.githubUrl}>Github</a>
          .
        </Note> -->
      </article>
    </div>
  </div>
{/if}
