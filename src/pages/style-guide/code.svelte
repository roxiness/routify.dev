<script>
  import Component from '@/components/styleguide/Component.svelte';
  import Code from "@/components/Code.svelte";  
</script>

<h1 class="c-h2">Code blocks</h1>

<Component name="Code blocks" description="Make sure to wrap your code in curly braces with backticks.">
  <Code>{`function alert() { alert('hello world'); }`}</Code>
  <Code>{`* { color: red; }`}</Code>
  <Code>{`<html></html>`}</Code>
</Component>
