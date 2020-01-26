<script>
    import { isActive, url } from '@sveltech/routify'

    import { mobileNavActive } from '../stores/mobilenavactive.js';

    let navItems = [];
    $: navItems = [
      ['/', 'Home'],
      ['/installation', 'Installation'],
      ['/configuration', 'Configuration'],
      ['/guide', 'Guide'],
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
                    <!-- @todo place github icon here-->
                    Github
                {:else}
                    {name}
                {/if}
            </a>
        </li>
    {/each}
</ul>
