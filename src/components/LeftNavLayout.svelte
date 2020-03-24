<script>
  import { isActive, url, context } from "@sveltech/routify";
  $: ({ component } = $context);
  $: list = component.parent.children.filter(child => child.isIndexable);
</script>

<main class="c-sidebar-layout">
  <div class="c-sidebar-layout__side">
    <nav>
      <ul class="c-sidebar-nav">
        {#each list as { path, prettyName, children }}
          <li
            class="c-sidebar-nav__item "
            class:c-sidebar-nav__item--selected={$isActive(path)}>
            <a href={$url(path)}>{prettyName}</a>
            {#if children && children.length && $isActive(path)}
              <ul class="c-sidebar-nav-child">
                {#each children.filter(c => c.isIndexable) as child}
                  <li class="c-sidebar-nav-child__item">
                    <a href={$url(child.shortPath)}>{child.prettyName}</a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  <div class="c-sidebar-layout__main">
    <slot />
  </div>
</main>
