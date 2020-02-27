<script>
    let pageTitle = "Guide";
    import OpenGraph from '../../components/OpenGraph.svelte';
    import Prism from "svelte-prism";
</script>

<OpenGraph {pageTitle} />

<main class="c-sidebar-layout">
    <div class="c-sidebar-layout__side">
        <nav>
            <ul class="c-sidebar-nav">
                <li class="c-sidebar-nav__item"><a href="/guide/scheme-structure">Scheme/structure</a></li>
                <li class="c-sidebar-nav__item c-sidebar-nav__item--selected"><a href="/guide/url-parameters">URL parameters</a></li>
                <li class="c-sidebar-nav__item"><a href="/guide/metadata">Metadata</a></li>
                <li class="c-sidebar-nav__item"><a href="/guide/props">Props (scoped)</a></li>
                <li class="c-sidebar-nav__item"><a href="/guide/decorators">Decorators</a></li>
                <li class="c-sidebar-nav__item"><a href="/guide/transitions">Transitions</a></li>
            </ul>
        </nav>
    </div>
    <div class="c-sidebar-layout__main">
        <h1 class="c-h1">URL parameters</h1>
        <p>Parameters are passed as props to their respective pages/layouts.</p>
        <p>To access all parameters, use the "params" helper.</p>
        <Prism>
          <!-- src/pages/users/[userId]/posts/[postId].svelte -->
          <!-- URL: /users/jimbo/posts/123 -->
          Code here, @jakob I was unable to render this code without a compile error
          code from https://routify.now.sh/docs/parameters
        </Prism>
    </div>
</main>
