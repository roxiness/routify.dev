<script>
  import Component from '@/components/styleguide/Component.svelte';
  import Button from '@/components/Button.svelte';
  import ButtonToolbar from '@/components/ButtonToolbar.svelte';
</script>
  
  
<h1 class="c-h1">Kitchen sink</h1>

<div class="c-content">
  <p>A listing of available components.</p>
</div>

<h2 class="c-h2">Buttons</h2>

<Component name="Text Buttons">
  <ButtonToolbar>
    <Button theme="primary">Label</Button>
    <Button theme="outline">Label</Button>
  </ButtonToolbar>
</Component>

<Component name="Icon + Text Buttons">
  <ButtonToolbar>
    <Button theme="primary" layout="icon-text" icon="chevron-left">Label</Button>
    <Button theme="primary" layout="text-icon" icon="chevron-right">Label</Button>

    <Button theme="outline" layout="icon-text" icon="chevron-left">Label</Button>
    <Button theme="outline" layout="text-icon" icon="chevron-right">Label</Button>
  </ButtonToolbar>
</Component>
