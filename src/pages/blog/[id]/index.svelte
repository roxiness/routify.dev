<script>
  import Note from "../../../components/Note.svelte";
  import md from "../_posts/2020-04-06-a-start.md";
  export let id;

  import { fetcher } from "../_fetcher";

  let post = null;
  fetcher("/posts/" + id).then(result => (post = result));
</script>

{#if post}
  <div class="c-container-vertical">
    <div class="c-container-horizontal c-container-horizontal--narrow">
      <article class="c-blogpost">
        <header>
          <h1>{post.title}</h1>
          <p>Written by @{post.author.displayName}</p>
        </header>
        <div class="c-content">{post.content}</div>

        <!-- <Note>
          You can comment on
          <a href={md.metadata.githubUrl}>Github</a>
          .
        </Note> -->
      </article>
    </div>
  </div>
{/if}
