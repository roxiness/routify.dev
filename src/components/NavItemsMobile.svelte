<script>
  import Accordion from "./Accordion.svelte";
  import { isActive, url, context } from "@sveltech/routify";
  import Fragment from "./NavItemsMobileFragment.svelte";
  export let showMobileNav

  $: ({ component } = $context);

  $: items = [
    {
      prettyName: "Home",
      shortPath: "/"
    },
    ...component.parent.children,
    {
      prettyName: "Github",
      shortPath: "https://github.com/sveltech/routify"
    }
  ];
</script>

<div class="c-navigation-mobile-holder c-navigation-mobile-holder--active">

  <nav role="navigation">
    <ul class="c-navigation-mobile">
      <Fragment bind:showMobileNav {items} />
    </ul>
  </nav>
</div>
