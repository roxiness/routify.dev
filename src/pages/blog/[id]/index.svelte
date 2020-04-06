<script>
  import Note from '../../../components/Note.svelte';
  import post from '../posts.js';
  let postDetail = post[0];
</script>

<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">
    <article class="c-blogpost">
      <header>
        <h1>{postDetail.title}</h1>
        <p>Written by @{postDetail.author}</p>
      </header>
      <div class="c-content">
        {@html postDetail.text}
      </div>
      
      <Note>You can comment on <a href="{postDetail.githubUrl}">Github</a>.</Note>
    </article>
  </div>
</div>

