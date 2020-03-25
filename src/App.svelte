<script>
  import { setContext } from "svelte";
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import { writable } from "svelte/store";

  const elements = new Map();
  let y = writable();
  setContext("hashLocation", { elements, y });


</script>

<!-- src/App.svelte -->
<Router {routes} />

<svelte:window bind:scrollY={$y} />
