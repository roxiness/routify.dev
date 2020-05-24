<script>
  // @ts-check
  import "prismjs/plugins/command-line/prism-command-line.js";
  import "prismjs/components/prism-shell-session";
  import "prismjs/components/prism-json";
  import "prismjs/components/prism-javascript";
  import "prism-svelte";
  // @ts-ignore
  import { format, formatRelative, parseISO } from "date-fns";
  import Prism from "prismjs";
  import Title from "./Title.svelte"
  import Author from "./Author.svelte";


  setTimeout(() => {
    Prism.highlightAll();
  }, 0);
</script>

<div class="c-blogpost c-content">
  <Title />
  <slot />
  <Author />
</div>
