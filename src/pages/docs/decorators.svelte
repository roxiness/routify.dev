<script>
  import Prism from "svelte-prism";
  import { meta } from "@sveltech/routify";
  meta.title = "Decorators";
</script>

<!-- routify:options $index=30 -->


<h1 class="c-h1">Decorators</h1>
<div class="c-content">
  <p>
    Decorators are components which can be individually wrapped around all
    descendant layouts and pages.
  </p>
  <p>Any component with a default slot can be a decorator.</p>
  <h3>Usage</h3>
  <Prism language="html">{`<slot decorator={MyDecorator} />`}</Prism>
  <p>Decorators can be changed/disabled recursively on any layout or page.</p>
</div>
