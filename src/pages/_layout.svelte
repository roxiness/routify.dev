<script>
  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";
  import { metatags, page } from "@roxi/routify";
  import ServiceWorker from '../components/ServiceWorker.svelte'
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
<Header />
<main>
  <div class="c-container-horizontal">
    <slot />
  </div>
</main>
<Footer />
<ServiceWorker />
