<script>
  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";
  import { metatags, page } from "@sveltech/routify";
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  metatags.template("title", title => `${title ? ` ${title} - ` : ""}Routify`);
  $: metatags.title = capitalize($page.title);
</script>

<style>
  .c-container-horizontal {
    display: flex;
    flex-direction: column;
    /* 4px for purple top bar */
    min-height: calc(100vh - 0.4rem);
  }
  main {
    flex: 1;
  }
</style>

<!-- routify:options children=[
  {title: "Github", icon:"github", path: "https://github.com/sveltech/routify"},
  {title: "Discord", icon:"discord", path: "https://discord.gg/ntKJD5B"},
  {title: "Twitter", icon:"twitter", path: "https://twitter.com/routifyjs"}
] -->
<div class="c-container-horizontal">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
