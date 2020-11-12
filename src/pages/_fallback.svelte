<script>
    import { url } from '@roxi/routify'
</script>

<style>

  .huge {
    font-size: 12rem;
  }

  .e404 {
    text-align: center;
    margin: 6.4rem 0 9.6rem;
  }

</style>

<div class="e404">
    <h1 class="huge c-h1">404</h1>
    <div class="big">Page not found.
    <!-- link to the parent folder of _fallback.svelte -->
    <a href={$url('./')}>Go back</a>
    </div>
</div>
