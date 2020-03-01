<script>
    let pageTitle = "Props - Guide";
    import OpenGraph from '../../components/OpenGraph.svelte';
    import Prism from "svelte-prism";

</script>

<OpenGraph {pageTitle} />


<h1 class="c-h1">Props</h1>
<div class="c-content">
    <p>All pages can pass props to nested pages with the "scoped" prop.</p>

    <p>I.e. Any prop made available in <code>/docs/_layout.svelte</code> is available to all files nested in the <code>/docs/</code> folder and subfolders.</p>

    <!-- Another problem here where Svelte is literally parsing the code-->
    <Prism>{`
<!-- src/pages/_layout.svelte -->
<slot scoped={{user: 'jimbo', foo: 'bar'}} />
`}</Prism>

</div>