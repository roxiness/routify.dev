<script>
    import NavItems from './nav/NavItems.svelte';
    import NavItemsMobile from './nav/NavItemsMobile.svelte';
    let showMobileNav = false
    let bodyElement = document.querySelector('body');
    let htmlElement = document.querySelector('html');

    function handleToggleClick(e) {
      showMobileNav = !showMobileNav
    }

    if (showMobileNav) {
        bodyElement.classList.add('c-mobile-nav-active');
        htmlElement.classList.add('u-no-scroll');
    } else {
        bodyElement.classList.remove('c-mobile-nav-active');
        htmlElement.classList.remove('u-no-scroll');
    }

</script>

<header class="c-header">
  <div class="c-container-horizontal">

    <a href="/" class="c-logo">
      <img src="/images/logo.svg" alt="Routify">
    </a>

    <nav class="c-navigation">
      <NavItems />
    </nav>

<!-- todo should be a button -->
    <div href="#nav"
      class="c-navigation-toggle"
      class:c-navigation-toggle--active={showMobileNav === !showMobileNav}
      on:click|preventDefault={handleToggleClick}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line1"></rect>
        <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line2"></rect>
        <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line3"></rect>
      </svg>
    </div>
  </div>
</header>

<div class="c-navigation-mobile-holder" class:c-navigation-mobile-holder--active={showMobileNav}>
  <nav>
    <NavItemsMobile bind:showMobileNav />
  </nav>
</div>
