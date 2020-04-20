<script>
  import Component from '@/components/styleguide/Component.svelte';
  import Icon from '@/components/Icon.svelte';

  let icons = [
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'discord',
    'file',
    'folder',
    'github',
    'info',
    'resolve',
    'twitter',
    'url',
    'warning'
  ]
</script>

<h1 class="c-h2">Icons</h1>

<Component
  name="Icons"
  code={`<Icon name="icon-name" />`}
>
  <ul class="c-styleguide-icon-list">
    {#each icons as icon}
      <li class="c-styleguide-icon">
        <span class="c-styleguide-icon__wrap"><Icon name="{icon}" /></span>
        <span class="c-styleguide-icon__name">{icon}</span>
      </li>
    {/each}
  </ul>
</Component>

