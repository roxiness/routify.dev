<script>
  import { setContext } from "svelte";
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import { writable } from "svelte/store";

  setContext("hashElements", new Map());

  self.addEventListener("app-loaded", async () => {
    routes.forEach(route => {
      route.component();
      route.layouts.forEach(layout => layout.component());
    });
  });
</script>

<!-- src/App.svelte -->
<Router {routes} />
