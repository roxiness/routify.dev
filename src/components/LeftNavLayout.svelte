<script>
  import { isActive, url, context, layout } from "@sveltech/routify";
  import { getContext } from "svelte";
  $: ({ component } = $context);
  $: list = $layout.children;

  const elements = getContext("hashElements");
  let currentId = false;
  let y = 0;
  let navEl;

  $: handleScroll(y);
  function handleScroll(y) {
    if (navEl)
      navEl.style["max-height"] = `calc(100vh - ${
        navEl.getBoundingClientRect().top
      }px)`;

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
    <nav bind:this={navEl}>
      <ul class="c-sidebar-nav">
        {#each list as { path, title, children, meta }}
          <li
            class="c-sidebar-nav__item "
            class:c-sidebar-nav__item--selected={$isActive(path)}>
            <a href={$url(path)}>{title}</a>
            <ul class="c-sidebar-nav-child">
              {#if children && children.length && $isActive(path)}
                {#each children as child}
                  {#if child.isMeta}
                    <li
                      class="c-sidebar-nav-child__item"
                      class:c-sidebar-nav-child__item--selected={child.path === currentId}>
                      <a href={$url(child.path)}>{child.title}</a>
                    </li>
                  {:else}
                    <li
                      class="c-sidebar-nav-child__item"
                      class:c-sidebar-nav-child__item--selected={$isActive(child.path)}>
                      <a href={$url(child.path)}>{child.title}</a>
                    </li>
                  {/if}
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
