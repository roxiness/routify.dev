<script>
  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";
  import { metatags, page } from "@sveltech/routify";
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
  metatags.template("title", title => `${title ? ` ${title} - ` : ""}Routify`);
  $: metatags.title = capitalize($page.title)

</script>

<!-- routify:options children=[{title: "Github", path: "https://github.com/sveltech/routify"}] -->

<div class="c-container-horizontal">
  <Header />
  <slot />
  <Footer />
</div>
