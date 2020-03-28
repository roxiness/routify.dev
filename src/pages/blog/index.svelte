<!-- routify:options $index=130 -->

<script>
  import Note from '../../components/Note.svelte';
  
  let posts = [
    {
      title: "I am a post",
      author: "wolfr_2",
      text: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    },
    {
      title: "I am a post",
      author: "jakedk",
      text: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    },
    {
      title: "I am a post",
      author: "rixo",
      text: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    }
  ]
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