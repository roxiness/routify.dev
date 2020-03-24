<script>
    import Prism from "svelte-prism";
    import { meta } from "@sveltech/routify";
    meta.title = "Metadata";
</script>

<!-- routify:options $index=40 -->

<h1 class="c-h1">Metadata</h1>
<div class="c-content">

    <p>Metadata allows custom data to be added to a route.</p>
    <p>To add metadata, insert a comment with <code>routify:options</code></p>

    <Prism language="html">{`<!-- routify:options index=1 -->`}    </Prism>

    <p>The metadata can then be accessed through <code>$route.meta</code></p>
    <Prism>
        {`
            import { route } from @sveltech/routify
            const { meta } = $route
        `}
    </Prism>
</div>
