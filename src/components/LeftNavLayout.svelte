<script>
  import { isActive, url, context } from "@sveltech/routify";
  import { getContext } from "svelte";
  $: ({ component } = $context);
  $: list = component.parent.children.filter(child => child.isIndexable);

  const elements = getContext("hashElements");
  let currentId = false;
  let y = 0

  $: checkelements(y);
  function checkelements(y) {
    let smallest = false;

    elements.forEach(he => {
      const top = he.getBoundingClientRect().top;
      if (!smallest || (50 > top && top > smallest)) {
        smallest = top;
        currentId = `#${he.id}`;
      }
    });
  }
</script>

<svelte:window bind:scrollY={y} />

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
                  <li
                    class="c-sidebar-nav-child__item"
                    class:c-sidebar-nav-child__item--selected={$isActive(child.shortPath)}>
                    <a href={$url(child.shortPath)}>{child.prettyName}</a>
                  </li>
                {/each}
              {/if}
              {#if meta.links && $isActive(path)}
                {#each meta.links as link}
                  <li
                    class="c-sidebar-nav-child__item"
                    class:c-sidebar-nav-child__item--selected={link.href === currentId}>
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
