<script>
  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";
  import { metatags, page } from "@roxi/routify";
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
  metatags.template("title", title => `${title ? ` ${title} - ` : ""}Routify`);
  $: metatags.title = capitalize($page.title);
  $: metatags['twitter:image'] = 'https://routify.dev/images/touch-icons/routify-800.png'
  $: metatags['twitter:image:alt'] = 'Routify logo'
</script>

<!-- routify:options children=[
  {"title": "Github", "icon":"github", "path": "https://github.com/roxiness/routify"},
  {"title": "Discord", "icon":"discord", "path": "https://discord.gg/ntKJD5B"},
  {"title": "Twitter", "icon":"twitter", "path": "https://twitter.com/routifyjs"}
] -->

<banner>
  Routify 3 public <b>BETA</b> is here! <a href="https://v3.routify.dev">Check it out</a>
</banner>

<style>
  banner {
      width: 100%;
      display: block;

      padding: 12px;

      text-align: center;

      color: rgb(206, 47, 85);
      background-color: #facffa;
  }
</style>

<Header />
<main>
  <div class="c-container-horizontal">
    <slot />
  </div>
</main>
<Footer />
