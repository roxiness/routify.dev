<script>
    let pageTitle = "Helpers";
    import OpenGraph from '../components/OpenGraph.svelte';

    import { url } from "@sveltech/routify";
    import Prism from "svelte-prism";
    import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";

</script>

<OpenGraph {pageTitle} />

<div class="c-container-horizontal--narrow">
    <div class="c-container-vertical--small">
        <h1 class="c-h1">{pageTitle}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>