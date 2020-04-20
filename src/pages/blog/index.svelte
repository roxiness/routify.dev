<script>
  // @ts-check
  // @ts-ignore
  import Note from "@/components/Note.svelte";
  import Button from '@/components/Button.svelte';

  import { url, layout } from "@sveltech/routify";
  import { format, formatRelative, parseISO } from "date-fns";
  import marked from 'marked'

  const posts = $layout.parent.children
    .filter(c => c.meta["blogpost"])
    .sort((a, b) =>
      b.meta["blogpost"].published.localeCompare(a.meta["blogpost"].published)
    );
</script>

<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">

    <h1 class="c-h1">Blog</h1>

    <ul class="c-blogpost-list">
      {#each posts as { path, title, meta }}
        <li class="c-blogpost-list__item">
          <article class="c-blogpost">
            <header>
              <h2>
                <a href={$url(path)}>{meta.blogpost.title}</a>
              </h2>
              <p>
                Written by {meta.blogpost.author}
                <span class="published">
                  {formatRelative(parseISO(meta.blogpost.published), new Date())}
                </span>
              </p>
            </header>
            <div class="c-content">{@html marked(meta.blogpost.summary)}</div>
            
            <Button href="{$url(path)}">Read more</Button>

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
