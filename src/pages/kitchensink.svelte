<script>
  import Component from '@/components/styleguide/Component.svelte';
  import Button from '@/components/Button.svelte';
  import Stack from '@/components/Stack.svelte';
</script>

  <!-- routify:options index=false -->
<h1 class="c-h1">Kitchen sink</h1>

<div class="c-content">
  <p>A listing of available components.</p>
</div>

<h2 class="c-h2">Buttons</h2>

<Component name="Text Buttons">
  <Stack horizontal space="2">
    <Button theme="primary">Label</Button>
    <Button theme="outline">Label</Button>
  </Stack>
</Component>

<Component name="Icon + Text Buttons">
  <Stack space="2">
    <Button theme="primary" layout="icon-text" icon="chevron-right">Label</Button>
    <Button theme="outline" layout="icon-text" icon="chevron-right">Label</Button>
  </Stack>
</Component>
