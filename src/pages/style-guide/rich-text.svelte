<script>
  import Component from '@/components/styleguide/Component.svelte';
</script>

<h1 class="c-h2">Rich text</h1>

<Component
  name="Rich text"
  description="Rich text with simple base HTML tags.

Wrap your content with a `c-content` div.
  "
  code={`<div class="c-content"><!-- Simple HTML here... --></div>
  `}
>
  <div class="c-content">
    <h1>Hello world</h1>
    <h2>Hello world</h2>
    <h3>Hello world</h3>
    <h4>Hello world</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small></p>
  </div>
</Component>
