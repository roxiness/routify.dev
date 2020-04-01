<script>
  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";
  import { metatags, route } from "@sveltech/routify";
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
  metatags.template("title", title => `${title ? ` ${title} - ` : ""}Routify`);
  $: metatags.title = capitalize($route.prettyName)
</script>

<div class="c-container-horizontal">
  <Header />
  <slot />
  <Footer />
</div>
