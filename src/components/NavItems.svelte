<script>
    import { isActive, url } from '@sveltech/routify'

    import { mobileNavActive } from '../stores/mobilenavactive.js';

    let navItems = [];
    $: navItems = [
      ['/index', 'Home'],
      ['/getting-started', 'Getting started'],
      ['/guide/scheme-structure', 'Guide'],
      ['/helpers/auth', 'Helpers'],
      ['/configuration/basics', 'Configuration'],
      ['/examples', 'Examples'],
      ['https://github.com/sveltech/routify', 'Github']
    ].map(([url, name]) => {
      return {
        name,
        url: $url(url),
        active: $isActive(url)
      }
    });

    function handleNavigationClick(e) {
        mobileNavActive.update(mobileNavActive => false);
    }
</script>

<ul>
    {#each navItems as {name, url, active}}
        <li class:c-navigation__item--selected={active}>
            <a href="{url}" on:click="{handleNavigationClick}">
                {#if name == "Github"}
                    <img class="c-navigation__github-logo" src="/images/github.svg" alt="Github logo">
                {:else}
                    {name}
                {/if}
            </a>
        </li>
    {/each}
</ul>
