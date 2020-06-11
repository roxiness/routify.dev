<script>
  import { setContext } from "svelte";
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import { writable } from "svelte/store";

  setContext("hashElements", new Map());

  self.addEventListener("app-loaded", async () => {
    setTimeout(() => routes.forEach(route => route.api.preload()), 3000);
  });
</script>

<!-- src/App.svelte -->
<Router {routes} />
