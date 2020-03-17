<script>
    import { isActive, url } from '@sveltech/routify'

    let navItems = [];
    $: navItems = [
      ['/index', 'Home'],
      ['/getting-started', 'Getting started'],
      ['/guide/structure', 'Guide'],
      ['/helpers', 'Helpers'],
      ['/configuration/basics', 'Configuration'],
      ['/examples/auth', 'Examples'],
      ['https://github.com/sveltech/routify', 'Github']
    ].map(([url, name]) => {
      return {
        name,
        url: $url(url),
        active: $isActive(url)
      }
    });

</script>

<ul>
    {#each navItems as {name, url, active}}
        <li class:c-navigation__item--selected={active}>
            <a href="{url}">
                {#if name == "Github"}
                    <img class="c-navigation__github-logo" src="/images/github.svg" alt="Github logo">
                {:else}
                    {name}
                {/if}
            </a>
        </li>
    {/each}
</ul>
