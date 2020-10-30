<script>
  //update your profile in src/data.js if something is missing or incorrect
  import { contributors } from "@/data.js";
  import { page } from "@roxi/routify";
  import Icon from "@/components/Icon.svelte";
  export let id = "";
  $: id = id || $page.meta.frontmatter.author;
  $: contributor = contributors.find(c => c.github === id);
  $: name = contributor.realname || contributor.name;
</script>


<div class="c-blogpost-author">
  <img class="c-blogpost-author__img" src="/images/collaborators/{contributor.imgpath}.jpg" alt="" />
  <div>
    <h3 class="c-blogpost-author__name">{name}</h3>
    <p>{contributor.description}</p>
    <ul class="c-horizontal-list c-horizontal-list--bordered c-horizontal-list--icons">
      {#if contributor.github}
        <li>
          <a href="https://github.com/{contributor.github}">
            <Icon name="github" size="20" />
            Github
          </a>
        </li>
      {/if}
      {#if contributor.twitter}
        <li>
          <a href="https://twitter.com/{contributor.twitter}">
            <Icon name="twitter" size="20" />
            Twitter
          </a>
        </li>
      {/if}
    </ul>
  </div>
</div>
