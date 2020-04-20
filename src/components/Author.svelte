<script>
  //update your profile in src/data.js if something is missing or incorrect
  import { contributors } from "@/data.js";
  import { page } from "@sveltech/routify";
  export let id = "";
  $: id = id || $page.meta.blogpost.author;
  $: contributor = contributors.find(c => c.github === id);
  $: name = contributor.realname || contributor.name;
</script>

<style>
  img {
    border-radius: 100%;
    width: 10rem;
    height: 10rem;
    margin-right: 1rem;
  }
  .author {
    display:flex ;
    align-items: center;
  }
  .name, p {
    margin: 0;
  }
</style>

<div class="author">
  <img src="/images/collaborators/{contributor.imgpath}.jpg" alt="" />
  <div>
    <h3 class="name">{name}</h3>
    <p>{contributor.description}</p>
    {#if contributor.github}
    <a href="https://github.com/{contributor.github}">Github</a>
    {/if}
    {#if contributor.twitter}
      <a href="https://twitter.com/{contributor.twitter}">Twitter</a>
    {/if}
  </div>
</div>
