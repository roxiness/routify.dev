<script>
  import Title from "./Title.svelte"
  import Author from "./Author.svelte";
</script>

<div class="c-blogpost c-content">
  <Title />
  <slot />
  <Author />
</div>
