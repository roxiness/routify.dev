<script>
    import Usps from '../components/Usps.svelte';
    import Contributors from '../components/Contributors.svelte';
</script>

<style>
    .c-hero {
        padding: 9.6rem 0;
    }
</style>

<main>
  <div class="c-hero">
    <div class="c-hero__content">
      <h2>Routes for Svelte, automated by your file structure.</h2>
      <p>Routify offers a great developer experience to build the routes for your Svelte app.</p>
      <p><a href="#" class="c-button c-button--primary c-button--large">Get started</a></p>
    </div>
    <div class="c-hero__illustration">

    </div>
  </div>
</main>

<Usps />

<h3>Contributors</h3>

<Contributors />

<p>Want to help? Use Routify, file issues, pick up issues. Let’s make the best router for Svelte 3!</p>

<p>Give us a star on Github:</p>

<!-- @todo add github widget -->