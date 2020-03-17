<script>
  import { url, isActive } from "@sveltech/routify";
  const links = [
    ["./basics", "Basics"],
    ["./code-splitting", "Code-splitting"],
    ["./prerendering", "Prerendering"],
    ["./deployments", "Deployments"],
    ["./ssr", "SSR"],
    ["./cache", "Cache"]
  ];
</script>

<main class="c-sidebar-layout">
  <div class="c-sidebar-layout__side">
    <nav>
      <ul class="c-sidebar-nav">
        {#each links as [path, name]}
          <li
            class="c-sidebar-nav__item "
            class:c-sidebar-nav__item--selected={$isActive(path)}>
            <a href={$url(path)}>{name}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  <div class="c-sidebar-layout__main">
    <slot />
  </div>
</main>
