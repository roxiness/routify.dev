<script>
  import { url, isActive } from "@sveltech/routify";
  const links = [
    ["./structure", "File structure"],
    ["./url-parameters", "URL parameters"],
    ["./metadata", "Metadata"],
    ["./props", "Props"],
    ["./decorators", "Decorators"],
    ["./transitions", "Transitions"]
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