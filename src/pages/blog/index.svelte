<!-- routify:options $index=130 -->

<script>
  import Note from '../../components/Note.svelte';
  
  // @todo how can we import everything from _posts automatically?
  import md from './_posts/2020-04-06-a-start.md';
  import md2 from './_posts/2020-04-10-post-2.md';
  const posts = [md, md2]

</script>

<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">

    <h1 class="c-h1">Blog</h1>

    <ul class="c-blogpost-list">
      {#each posts as post}
      <li class="c-blogpost-list__item">
        <article class="c-blogpost">
          <header>
            <!-- @todo link to /blog/2020-04-06/a-start - so without the .md file name -->
            <h2><a href="/blog/{post.filename}">{post.metadata.title}</a></h2>
            <p>Written by {post.metadata.author}</p>
            <!-- @todo substring to the first characters containing the date -->
            <p>{post.filename}</p>
          </header>
          {@html post.html}
        </article>
      </li>
      {/each}
    </ul>

    <Note>
      Want to stay up to date? Follow us on <a href="https://twitter.com/routifyjs">Twitter</a>
    </Note>
  </div>
</div>