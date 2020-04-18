<script>
  import { isActive, url, layout } from "@sveltech/routify";
  import Icon from './Icon.svelte';
  
</script>
<ul>
  {#each $layout.children as {path, title, meta}}
    <li class:c-navigation__item--selected={$isActive(path)}>
      {#if meta.icon}
        <a href={path}>
            <Icon name={meta.icon} size="24" />
            <span class="u-sr-only">{title}</span>
        </a>
      {:else}
        <a href={$url(path)}>{title}</a>
      {/if}
    </li>
  {/each}
</ul>
