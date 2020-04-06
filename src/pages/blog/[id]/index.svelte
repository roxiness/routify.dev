<script>
  import Note from '../../../components/Note.svelte';
  import md from '../_posts/2020-04-06-a-start.md';

</script>

<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">
    <article class="c-blogpost">
      <header>
        <h1>{md.metadata.title}</h1>
        <p>Written by @{md.metadata.author}</p>
      </header>
      <div class="c-content">
        {md.metadata.html}
      </div>
      
      <Note>You can comment on <a href="{md.metdata.githubUrl}">Github</a>.</Note>
    </article>
  </div>
</div>

