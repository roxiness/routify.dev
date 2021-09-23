<script>
    import { Router } from '@roxi/routify';
    import routes from '../.routify/routes.default';
</script>

<Router {routes} />

<style global>
    body {
        border-top: solid 4px var(--theme);
    }
</style>
