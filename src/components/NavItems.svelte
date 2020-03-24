<script>
  import { isActive, url, context } from "@sveltech/routify";
  $: ({ component } = $context);

  $: list = component.parent.children
    .filter(child => child.isIndexable)
    .map(child => (child.index ? child.index : child))
  $: list.push({
    prettyName: "Github",
    shortPath: "https://github.com/sveltech/routify"
  });

</script>

<ul>
  {#each list as {shortPath, prettyName}}
    <li class:c-navigation__item--selected={$isActive(shortPath)}>
      {#if prettyName == 'Github'}
        <a href={shortPath} class="c-navigation__github-link">
          <img
            class="c-navigation__github-logo"
            src="/images/github.svg"
            alt="Github logo" />
        </a>
      {:else}
        <a href={$url(shortPath)}>{prettyName}</a>
      {/if}
    </li>
  {/each}
</ul>
