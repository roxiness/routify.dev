<script>
  import { isActive, url, layout } from "@sveltech/routify";
  import Icon from './Icon.svelte';
</script>
<ul>
  {#each $layout.children as {path, title, meta}}
    <li class:c-navigation__item--selected={$isActive(path)}>
      {#if meta.icon}
      <!-- todo change c-navigation__github-link to a generic class? -->
        <a href={path} class="c-navigation__github-link">
            <Icon name={meta.icon} />
        </a>
      {:else}
        <a href={$url(path)}>{title}</a>
      {/if}
    </li>
  {/each}
</ul>
