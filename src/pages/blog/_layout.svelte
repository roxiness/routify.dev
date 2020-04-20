<script>
  import { isActive } from "@sveltech/routify";
  import Prism from "prismjs";
  import Help from "@/components/HelpRequest.svelte";
  import "prismjs/plugins/command-line/prism-command-line.js";
  import "prismjs/components/prism-shell-session";
  import "prismjs/components/prism-json";
  import "prismjs/components/prism-javascript";

  setTimeout(() => {
    Prism.highlightAll();
    // $ready()
  }, 0);

  $: useMarkdown = !$isActive("./index");
  $: _class = !$isActive("./index") ? "c-blogpost c-content" : "";
</script>

<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">
    <div class={_class}>
      <slot />
    </div>
    <Help />
  </div>
</div>
<!-- routify:options index=50 -->
