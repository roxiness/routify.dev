<script>

    import { mobileNavActive } from '../stores/mobilenavactive.js';
    import NavItems from './NavItems.svelte';

    let bodyElement = document.querySelector('body');
    let htmlElement = document.querySelector('html');

    function handleToggleClick(e) {
      mobileNavActive.update(mobileNavActive => !mobileNavActive);
    }

    if ($mobileNavActive) {
        bodyElement.classList.add('c-mobile-nav-active');
        htmlElement.classList.add('u-no-scroll');
    } else {
        bodyElement.classList.remove('c-mobile-nav-active');
        htmlElement.classList.remove('u-no-scroll');
    }

</script>

<style>
    .c-header {
        display: flex;
        justify-content: space-between;
    }
</style>

<header class="c-header">
    <h1>
        <a href="/" class="c-logo">
            Routify
            <!-- @todo Place SVG here -->
        </a>
    </h1>

    <nav role="navigation" class="c-navigation">
        <NavItems />
    </nav>

    <a href="#nav"
        class="c-navigation-toggle"
        class:c-navigation-toggle--active={$mobileNavActive}
        on:click|preventDefault={handleToggleClick}
    >
        <span class="c-navigation-toggle__label">Menu</span>
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line1"></rect>
            <rect fill="#000" width="12" height="2" x="11" y="19" class="c-navigation-toggle__line2"></rect>
            <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line3"></rect>
        </svg>
    </a>

</header>

<div class="c-navigation-mobile" class:c-navigation-mobile--active={$mobileNavActive}>
    <nav class="c-navigation-mobile__links" role="navigation">
        <NavItems />
    </nav>
</div>
