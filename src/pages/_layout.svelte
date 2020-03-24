<script>
  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";
  import { meta, route } from "@sveltech/routify";
  meta.template('title', title => `${title ? ` ${title} - ` : ""}Routify`);

</script>

<div class="c-container-horizontal">
  <Header />
  <slot />
  <Footer />
</div>
