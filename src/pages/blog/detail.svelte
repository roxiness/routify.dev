<script>
  import Note from '../../components/Note.svelte';

  let post = 
    {
      title: "Welcome to the Routify blog",
      author: "wolfr_2",
      text: "<p>Welcome to the first post. We're starting to build out the blog functionality, so this first post is more like a test.</p><p>Real content is coming soon.</p>",
      githubUrl: "https://github.com/sveltech/routify-site-2020/issues/86"
    }

</script>

<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">
    <article class="c-blogpost">
      <header>
        <h1>{post.title}</h1>
        <p>Written by @{post.author}</p>
      </header>
      <div class="c-content">
        {@html post.text}
      </div>
      
      <Note>
          You can comment on <a href="#">Github</a>.
        </Note>
    </article>
  </div>
</div>

