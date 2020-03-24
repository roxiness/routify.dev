<script>
  import { isActive, url, context } from "@sveltech/routify";
  $: ({ component } = $context);
  $: list = component.parent.children.filter(child => child.isIndexable);
</script>

<main class="c-sidebar-layout">
  <div class="c-sidebar-layout__side">
    <nav>
      <ul class="c-sidebar-nav">
        {#each list as { path, prettyName, children, meta }}
          <li
            class="c-sidebar-nav__item "
            class:c-sidebar-nav__item--selected={$isActive(path)}>
            <a href={$url(path)}>{prettyName}</a>

            <ul class="c-sidebar-nav-child">
              {#if children && children.length && $isActive(path)}
                {#each children.filter(c => c.isIndexable) as child}
                  <li class="c-sidebar-nav-child__item">
                    <a href={$url(child.shortPath)}>{child.prettyName}</a>
                  </li>
                {/each}
              {/if}
              {#if meta.links && $isActive(path)}
                {#each meta.links as link}
                <li class="c-sidebar-nav-child__item">
                    <a href={link.href}>{link.name}</a>
                  </li>
                {/each}
              {/if}
            </ul>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  <div class="c-sidebar-layout__main">
    <slot />
  </div>
</main>
