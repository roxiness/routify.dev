<script>
  import Code from "@/components/Code.svelte"
  import { meta } from "@roxi/routify";
  meta.title = "Props";
</script>
<!-- routify:options index=40 -->

<h1 class="c-h1">Props</h1>
<div class="c-content">

    <p>Props can be passed by using the <code>scoped</code> prop.</p>
    <Code language="html">{`<slot scoped={{user: 'jimbo'}} />`}</Code>
    <br>
    <p>Props are available to all descendant layouts and pages.</p>

    <Code>
        {`
            export let scoped
            $: {user} = scoped
        `}
    </Code>

</div>
