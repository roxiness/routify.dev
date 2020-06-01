<script>
  import Sidebar from "@/components/Sidebar.svelte";
  import Footer from "@/components/Footer.svelte";
  import { metatags, page } from "@sveltech/routify";

  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  metatags.template("title", title => `${title ? ` ${title} - ` : ""}Routify`);
  $: metatags.title = capitalize($page.title);


  // Mobile nav

  import NavItemsMobile from '../components/nav/NavItemsMobile.svelte';

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

<!-- routify:options children=[
  {title: "Github", icon:"github", path: "https://github.com/sveltech/routify"},
  {title: "Discord", icon:"discord", path: "https://discord.gg/ntKJD5B"},
  {title: "Twitter", icon:"twitter", path: "https://twitter.com/routifyjs"}
] -->


<div class="c-header-mobile">
  <a href="/" class="c-header-mobile__logo">
    <img src="/images/logo.svg" alt="Routify">
  </a>
  
  <a href="#nav"
    class="c-navigation-toggle"
    class:c-navigation-toggle--active={showMobileNav}
    on:click|preventDefault={handleToggleClick}
  >
    <svg width="40" height="40" viewBox="0 0 40 40">
      <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line1"></rect>
      <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line2"></rect>
      <rect fill="#000" width="18" height="2" x="11" y="19" class="c-navigation-toggle__line3"></rect>
    </svg>
  </a>
</div>

<div class="c-navigation-mobile-holder" class:c-navigation-mobile-holder--active={showMobileNav}>
  <nav>
    <NavItemsMobile bind:showMobileNav />
  </nav>
</div>



<div class="c-main-layout">
  <div class="c-main-layout__sidebar">
     <Sidebar />
  </div>
  <div class="c-main-layout__content">
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</div>
