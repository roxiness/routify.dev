<script>
  import HeroTree from "./_HeroTree.svelte";
</script>

<style>
  .specific-btn-toolbar a:first-child {
    margin-right: 1.2rem;
  }
</style>

<div class="c-hero">
  <div class="c-hero__content">
    <h2 class="c-hero__title">Routes for Svelte, automated by your file structure.</h2>
    <p class="c-hero__para">Routify offers a great developer experience to build the routes for your Svelte app.</p>
    <div class="specific-btn-toolbar">
      <a
        href="/guide/introduction/getting-started"
        class="c-button c-button--primary c-button--large"
        style=" font-size: 14pt; background: rgb(204, 50, 170); background-size:cover; box-shadow:inset 0 0 0 2000px
        rgba(233, 56, 194, 1);">
        Get started
      </a>
      <a href="https://github.com/sveltech/routify">
        <img alt="GitHub stars" src="https://badgen.net/github/stars/sveltech/routify" />
      </a>
    </div>
  </div>
  <div class="c-hero__illustration">
    <svg viewBox="0 0 420 242">
      <foreignObject width="100%" height="100%">
        <HeroTree />
      </foreignObject>
    </svg>
  </div>
</div>
