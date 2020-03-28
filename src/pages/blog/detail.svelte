<script>
  import Note from '../../components/Note.svelte';

  // @todo make the post title the page <title>

  let post = 
    {
      title: "I am a post",
      author: "wolfr_2",
      text: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    }

</script>

<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">
    <article class="c-blogpost">
      <header>
        <h1>{post.title}</h1>
        <p>Written by @{post.author}</p>
      </header>
      {@html post.text}
    </article>
  </div>
</div>