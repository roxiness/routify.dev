<script>
  // @ts-check
  // @ts-ignore
  import Note from "../../components/Note.svelte";
  import { fetcher } from "./_fetcher";
  import { url } from "@sveltech/routify";

  let posts = [];

  fetcher("/posts").then(result => (posts = result.items));
  $: console.log(posts);
</script>

<!-- routify:options $index=130 -->
<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">

    <h1 class="c-h1">Blog</h1>

    <ul class="c-blogpost-list">
      {#each posts as post}
        <li class="c-blogpost-list__item">
          <article class="c-blogpost">
            <header>
              <!-- @todo link to /blog/2020-04-06/a-start - so without the .md file name -->
              <h2>
                <a href={$url('../:id', { id: post.id })}>{post.title}</a>
              </h2>
              <p>Written by {post.author.displayName}</p>
              <!-- @todo substring to the first characters containing the date -->
            </header>
            {@html post.content}
          </article>
        </li>
      {/each}
    </ul>

    <Note>
      Want to stay up to date? Follow us on
      <a href="https://twitter.com/routifyjs">Twitter</a>
    </Note>
  </div>
</div>
