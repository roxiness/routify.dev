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

<header class="c-header">

    <a href="/" class="c-logo">
        <img src="/images/logo.svg" alt="Routify">
    </a>

    <nav role="navigation" class="c-navigation">
        <NavItems />
    </nav>

    <a href="#nav"
        class="c-navigation-toggle"
        class:c-navigation-toggle--active={$mobileNavActive}
        on:click|preventDefault={handleToggleClick}
    >
        <a class="c-navigation__github-logo" href="https://github.com/sveltech/routify"><img src="/images/github.svg" alt="Github logo"></a>
        <svg width="40" height="40" viewBox="0 0 40 40">
            <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line1"></rect>
            <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line2"></rect>
            <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line3"></rect>
        </svg>
    </a>

</header>

<div class="c-navigation-mobile" class:c-navigation-mobile--active={$mobileNavActive}>
    <nav class="c-navigation-mobile__links" role="navigation">
        <NavItems />
    </nav>
</div>
