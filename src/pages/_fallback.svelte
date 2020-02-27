<script>
    import { url } from '@sveltech/routify'
</script>

<style>

  .huge {
    font-size: 12rem;
  }

  .e404 {
    text-align: center;
  }

</style>

<div class="e404">
    <h1 class="huge c-h1">404</h1>
    <div class="big">Page not found.
    <!-- link to the parent folder of _fallback.svelte -->
    <a href={$url('../')}>Go back</a>
    </div>
</div>
