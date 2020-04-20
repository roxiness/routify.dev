<script>
  // @ts-check
  // @ts-ignore
  import Note from "@/components/Note.svelte";
  import Button from '@/components/Button.svelte';
  import Title from './_title.svelte'

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
      {#each posts as node}
        <li class="c-blogpost-list__item">
          <article class="c-blogpost">
            <Title {node} />
            <div class="c-content">{@html marked(node.meta.blogpost.summary)}</div>

            <Button href="{$url(node.path)}">Read more</Button>

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
