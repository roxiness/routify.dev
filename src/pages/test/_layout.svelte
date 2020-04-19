<script>
  // import { default as Prism, highlight } from "svelte-prism";
  // import {ready} from '@sveltech/routify'
  import Prism  from "prismjs";
  import "prismjs/plugins/command-line/prism-command-line.js";
  import "prismjs/components/prism-shell-session";
  import "prismjs/components/prism-json";
  import "prismjs/components/prism-javascript";

  // console.log(Prism)
  setTimeout(() => {
    Prism.highlightAll()
    // $ready()
  }, 0);
</script>

<div class="c-container-vertical">
  <div class="c-container-horizontal c-container-horizontal--narrow">
    <div class="c-content">
      <slot />
      <span />
    </div>
  </div>
</div>
