<script>
  import Prism from "svelte-prism";
  import { meta } from "@sveltech/routify";
  meta.title = "Props";
</script>
<!-- routify:options $index=40 -->

<h1 class="c-h1">Props</h1>
<div class="c-content">

    <p>Props can be passed by using the <code>scoped</code> prop.</p>
    <Prism language="html">{`<slot scoped={{user: 'jimbo'}} />`}</Prism>
    <br>
    <p>Props are available to all descendant layouts and pages.</p>

    <Prism>
        {`
            export let scoped
            $: {user} = scoped
        `}
    </Prism>

</div>
