<script>
    let pageTitle = "Helpers - Guards";
    import OpenGraph from '../../components/OpenGraph.svelte';
</script>

<OpenGraph {pageTitle} />

<main class="c-sidebar-layout">
    <div class="c-sidebar-layout__side">
        <nav>
            <ul class="c-sidebar-nav">
                <li class="c-sidebar-nav__item"><a href="/helpers/auth">Auth</a></li>
                <li class="c-sidebar-nav__item"><a href="/helpers/login">Login</a></li>
                <li class="c-sidebar-nav__item c-sidebar-nav__item--selected"><a href="/helpers/guards">Guards</a></li>
            </ul>
        </nav>
    </div>
    <div class="c-sidebar-layout__main">
        <div class="c-content">
            <h1 class="c-h1">{pageTitle}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
</main>

