<script>
  import NavItems from "./nav/NavItems.svelte";
  import NavItemsMobile from "./nav/NavItemsMobile.svelte";
  import VersionSelector from "./VersionSelector.svelte";
  import SearchBox from "./SearchBox.svelte";

  let showMobileNav = false;
  let bodyElement = document.querySelector("body");
  let htmlElement = document.querySelector("html");

  function handleToggleClick(e) {
    showMobileNav = !showMobileNav;
  }
</script>

<svelte:head>
  {#if showMobileNav}
    <style>
      html {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head>

<header class="c-header">
  <div class="c-container-horizontal">
    <div style="display: flex; align-items: center;">
      <a href="/" class="c-logo">
        <img src="/images/logo.svg" alt="Routify" />
      </a>
      <VersionSelector />
    </div>
    <div>
      <SearchBox />
    </div>

    <nav class="c-navigation">
      <NavItems />
    </nav>

    <!-- @todo should be a button for accessibility reasons -->
    <button
      class="c-navigation-toggle"
      class:c-navigation-toggle--active={showMobileNav}
      on:click|preventDefault={handleToggleClick}>
      <svg width="40" height="40" viewBox="0 0 40 40">
        <rect
          fill="#000"
          width="18"
          height="2"
          x="11"
          y="19"
          class="c-navigation-toggle__line1" />
        <rect
          fill="#000"
          width="18"
          height="2"
          x="11"
          y="19"
          class="c-navigation-toggle__line2" />
        <rect
          fill="#000"
          width="18"
          height="2"
          x="11"
          y="19"
          class="c-navigation-toggle__line3" />
      </svg>
      <span class="u-sr-only">Toggle navigation</span>
    </button>
  </div>
</header>

<div
  class="c-navigation-mobile-holder"
  class:c-navigation-mobile-holder--active={showMobileNav}>
  <nav>
    <NavItemsMobile bind:showMobileNav />
  </nav>
</div>
