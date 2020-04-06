<!-- routify:options $index=130 -->

<script>
  import Note from '../../components/Note.svelte';
  import posts from './posts.js';
  
  import md from './_posts/2020-04-06-a-start.md';
  import md2 from './_posts/2020-04-10-post-2.md';

  console.log( `${md.html}` );
  console.log( `${md.metadata.title}` );
  console.log( `${md.metadata.author}` );
  console.log( `${md2.html}` );
  console.log( `${md2.metadata.title}` );
  console.log( `${md2.metadata.author}` );

</script>

<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">

    <h1 class="c-h1">Blog</h1>

    <ul class="c-blogpost-list">
      {#each posts as post}
      <li class="c-blogpost-list__item">
        <article class="c-blogpost">
          <header>
            <h2><a href="/blog/detail">{post.title}</a></h2>
            <p>Written by @{post.author}</p>
          </header>
          {@html post.text}
        </article>
      </li>
      {/each}
    </ul>

    <Note>
      Want to stay up to date? Follow us on <a href="https://twitter.com/routifyjs">Twitter</a>
    </Note>
  </div>
</div>