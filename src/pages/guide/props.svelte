<script>
    let pageTitle = "Props - Guide";
    import OpenGraph from '../../components/OpenGraph.svelte';
    import Prism from "svelte-prism";
</script>

<OpenGraph {pageTitle} />

<main class="c-sidebar-layout">
    <div class="c-sidebar-layout__side">
        <nav>
            <ul class="c-sidebar-nav">
                <li class="c-sidebar-nav__item"><a href="/guide/scheme-structure">Scheme/structure</a></li>
                <li class="c-sidebar-nav__item"><a href="/guide/url-parameters">URL parameters</a></li>
                <li class="c-sidebar-nav__item"><a href="/guide/metadata">Metadata</a></li>
                <li class="c-sidebar-nav__item c-sidebar-nav__item--selected"><a href="/guide/props">Props (scoped)</a></li>
                <li class="c-sidebar-nav__item"><a href="/guide/decorators">Decorators</a></li>
                <li class="c-sidebar-nav__item"><a href="/guide/transitions">Transitions</a></li>
            </ul>
        </nav>
    </div>
    <div class="c-sidebar-layout__main">
        <h1 class="c-h1">Props</h1>
        <p>All pages can pass props to nested pages with the "scoped" prop.</p>

        <p>I.e. Any prop made available in <code>/docs/_layout.svelte</code> is available to all files nested in the <code>/docs/</code> folder and subfolders.</p>
        
        <!-- Another problem here where Svelte is literally parsing the code-->
        <Prism>
            &lt;!-- src/pages/_layout.svelte --&gt;
&lt;slot scoped={{user: 'jimbo', foo: 'bar'}} /&gt;
        </Prism>

    </div>
</main>
