<script>
    let pageTitle = "URL parameters";
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
        <div class="c-content">
            <p>Parameters are passed as props to their respective pages/layouts.</p>
            <p>To access all parameters, use the "params" helper.</p>
        </div>
        <Prism language="svelte">
{`<!-- src/pages/users/[userId/posts/[postId].svelte -->
<!-- URL: /users/jimbo/posts/123 -->
<scr`}{`ipt>
  import { params } from '@sveltech/routify'
  export let postId, userId

  console.log( postId ) /** '123' **/
  console.log( userId ) /** undefined **/
  console.log( $params ) /** {userId: 'jimbo', postId: '123'} **/
</script>
`}
        </Prism>
    </div>
</main>


