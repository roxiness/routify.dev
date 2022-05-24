<script>
  import { routes } from "../.routify/routes"
  import { Router } from "@roxi/routify"
  import { setContext } from "svelte"

  setContext("hashElements", new Map());
</script>

<!-- src/App.svelte -->
<Router {routes} />
