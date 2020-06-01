<script>

  import { isActive, url, context, layout } from "@sveltech/routify";
  import Icon from '@/components/Icon.svelte';

  $: list = $layout.children;

  export let node = $layout;

</script>


<ul class="c-sidebar-nav">
  {#each node.children as node}
  <li
    class="c-sidebar-nav__item"
    class:c-sidebar-nav__item--selected={$isActive(node.path)}
  >
    <a href={$url(node.path)}>
      {node.title}
    </a>
    {#if node.children.length}
      <svelte:self {node} />
    {/if}
  </li>
  {/each}
</ul>

<!--  <ul class="c-sidebar-nav">
    {#each list as { path, title, children, meta }}
      <li
        class="c-sidebar-nav__item"
        class:c-sidebar-nav__item--selected={$isActive(path)}
        class:c-sidebar-nav__item--icon={meta.icon}
      >
        {#if meta.icon}
          <a href={path}>
              <Icon name={meta.icon} size="24" />
              {title}
          </a>
        {:else}
          <a href={$url(path)}>{title}</a>
        {/if}
        <ul class="c-sidebar-nav-child">
          {#if children && children.length && $isActive(path)}
            {#each children as child}
              {#if child.isMeta}
                <li
                  class="c-sidebar-nav-child__item"
                  class:c-sidebar-nav-child__item--selected={child.path === currentId}
                >
                  <a href={$url(child.path)}>{child.title}</a>
                </li>
              {:else}
                <li
                  class="c-sidebar-nav-child__item"
                  class:c-sidebar-nav-child__item--selected={$isActive(child.path)}
                >
                  <a href={$url(child.path)}>{child.title}</a>
                </li>
              {/if}
            {/each}
          {/if}
        </ul>
      </li>
    {/each}
  </ul> -->



