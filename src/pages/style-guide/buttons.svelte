<script>
  import Component from '@/components/styleguide/Component.svelte';
  import ButtonToolbar from '@/components/ButtonToolbar.svelte';
  import Button from '@/components/Button.svelte';
</script>
  
<h1 class="c-h2">Buttons</h1>

<Component name="Label only buttons" description="Buttons with just text.">
  <ButtonToolbar>
    <Button theme="primary">Label</Button>
    <Button theme="outline">Label</Button>
  </ButtonToolbar>
</Component>

<Component
  name="Icon + Text buttons"
  description="Buttons with an icon and text."
  code={`
    <script>
    import ButtonToolbar from '@/components/ButtonToolbar.svelte';
    import Button from '@/components/Button.svelte';
</script>
      
<ButtonToolbar>
  <Button theme="primary" layout="icon-text" icon="chevron-left">Label</Button>
  <Button theme="primary" layout="text-icon" icon="chevron-right">Label</Button>

  <Button theme="outline" layout="icon-text" icon="chevron-left">Label</Button>
  <Button theme="outline" layout="text-icon" icon="chevron-right">Label</Button>
</ButtonToolbar>
`}
>  
  <ButtonToolbar>
    <Button theme="primary" layout="icon-text" icon="chevron-left">Label</Button>
    <Button theme="primary" layout="text-icon" icon="chevron-right">Label</Button>

    <Button theme="outline" layout="icon-text" icon="chevron-left">Label</Button>
    <Button theme="outline" layout="text-icon" icon="chevron-right">Label</Button>
  </ButtonToolbar>
</Component>
