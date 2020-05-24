<script>
  import Prism from "prismjs";
  import Help from "@/components/HelpRequest.svelte";
  import "prismjs/plugins/command-line/prism-command-line.js";
  import "prismjs/components/prism-shell-session";
  import "prismjs/components/prism-json";
  import "prismjs/components/prism-javascript";
</script>

<div class="c-blogpost-layout">
  <slot />
  <Help />
</div>

<!-- routify:options index=50 -->
<!-- routify:options no-tree=true -->
