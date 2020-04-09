<script>
  import { isActive, url, layout } from "@sveltech/routify";
</script>
<ul>
  {#each $layout.children as {path, title}}
    <li class:c-navigation__item--selected={$isActive(path)}>
      {#if title == 'Github'}
        <a href={path} class="c-navigation__github-link">
          <img
            class="c-navigation__github-logo"
            src="/images/github.svg"
            alt="Github logo" />
        </a>
      {:else}
        <a href={$url(path)}>{title}</a>
      {/if}
    </li>
  {/each}
</ul>
