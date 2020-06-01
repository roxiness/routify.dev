<script>
  import { layout } from "@sveltech/routify";
  import Fragment from "@/components/nav/NavItemsMobileFragment.svelte";
  export let showMobileNav

  $: items = [
    {
      title: "Home",
      path: "/"
    },
    ...$layout.children,
  ];
</script>

<div class="c-navigation-mobile-holder c-navigation-mobile-holder--active">
  <nav role="navigation">
    <ul class="c-navigation-mobile">
      <Fragment bind:showMobileNav {items} />
    </ul>
  </nav>
</div>
