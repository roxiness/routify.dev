<script>
  let pageTitle = "Guide";
  import OpenGraph from "../../components/OpenGraph.svelte";
  import Prism from "svelte-prism";
</script>

<OpenGraph {pageTitle} />

<h1 class="c-h1">URL parameters</h1>
<p>A parameter is passed as a prop to its respective page or layout.</p>
<p>To access all parameters, use the "params" helper.</p>
<Prism>
  {`<!-- src/pages/users/[userId]/posts/[postId].svelte -->
<!-- URL: /users/jimbo/posts/123 -->
<script>
  import { params } from '@sveltech/routify'
  export let postId, userId

  console.log( postId ) /** '123' **/
  console.log( userId ) /** undefined **/
  console.log( $params ) /** {userId: 'jimbo', postId: '123'} **/
</script>`}
</Prism>

<p>
  In the example above
  <code>[userId]/_layout.svelte</code>
  can access
  <code>userId</code>
  and
  <code>[postId].svelte</code>
  can access
  <code>postId</code>.
</p>
