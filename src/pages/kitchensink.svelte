<script>
  import Component from '@/components/styleguide/Component.svelte';
  import Button from '@/components/Button.svelte';
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  import ButtonToolbar from '@/components/ButtonToolbar.svelte';
  import Code from "@/components/Code.svelte";
  
  let colors = [
    {
      category: "Grays",
      items: [
        { name: "$g-gray-100", hex: "#DEE3EC" },
        { name: "$g-gray-200", hex: "#D1D7E2" },
        { name: "$g-gray-300", hex: "#B2BACC" },
        { name: "$g-gray-400", hex: "#8D97AA" },
        { name: "$g-gray-500", hex: "#636C7E" },
        { name: "$g-gray-600", hex: "#4C5567" },
        { name: "$g-gray-800", hex: "#1D2C48" },
      ]
    },
    {
      category: "Pinks",
      items: [
        { name: "g-pink-50", hex: "#FFF6FF" },
        { name: "g-pink-100", hex: "#FBE4FD" },
        { name: "g-pink-500", hex: "#BD239B" },
        { name: "g-pink-700", hex: "#BD239B" },
      ]
    },

    {
      category: "Blues",
      items: [
      { name: "g-blue-200", hex: "#B6C8F5" },
      { name: "g-blue-400", hex: "#87A1E3" },
      { name: "g-blue-500", hex: "#5979CC" },
      ]
    },
    {
      category: "Aqua",
      items: [
      { name: "g-aqua-100", hex: "#D7F7FF" },
      { name: "g-aqua-50", hex: "#0DA5CC" },
      ]
    },
  ]
  
  
</script>

  <!-- routify:options index=false -->
<h1 class="c-h1">Kitchen sink</h1>

<div class="c-content">
  <p>A listing of available components and styles.</p>
</div>


<Component name="Colors" description="The available colors in this project.">
  
  {#each colors as category}
    <h2 class="c-h3">{category.category}</h2>
    <ul class="c-styleguide-color-swatch-list">
      {#each category.items as item}
      <li class="c-styleguide-color-swatch" >
        <div class="c-styleguide-color-swatch__self" style="background: {item.hex}"></div>
        <span class="c-styleguide-color-swatch__line1">{item.name}<br></span>
        <span class="c-styleguide-color-swatch__line2">{item.hex}</span>
      </li>
      {/each}
    </ul>
  {/each}
  
</Component>


<Component name="Code" description="Code blocks. Make sure to wrap your code in curly braces with backticks.">
  <Code>{`function alert() { alert('hello world'); }`}</Code>
  <Code>{`* { color: red; }`}</Code>
  <Code>{`<html></html>`}</Code>
</Component>

<hr class="c-hr" />

<Component name="Tabs" description="Tabs">
  <Tabs>
    <div class="c-tabs">
      <TabsLink>Page 1</TabsLink>
      <TabsLink>Page 2</TabsLink>
    </div>
    <div class="c-tabs-pages">
      <TabsPage>
        Page 1 content
      </TabsPage>
      <TabsPage>
        Page 2 content
      </TabsPage>
    </div>
  </Tabs>  
</Component>

<hr class="c-hr" />

<Component name="Rich text" description="Rich text with simple base HTML tags.">
  <div class="c-content">
    <h1>Hello world</h1>
    <h2>Hello world</h2>
    <h3>Hello world</h3>
    <h4>Hello world</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small></p>
  </div>
</Component>

<hr class="c-hr" />


<h2 class="c-h2">Buttons</h2>

<Component name="Label only buttons" description="Buttons with just text.">
  <ButtonToolbar>
    <Button theme="primary">Label</Button>
    <Button theme="outline">Label</Button>
  </ButtonToolbar>
</Component>

<Component name="Icon + Text Buttons" description="Buttons with an icon and text.">
  <ButtonToolbar>
    <Button theme="primary" layout="icon-text" icon="chevron-left">Label</Button>
    <Button theme="primary" layout="text-icon" icon="chevron-right">Label</Button>

    <Button theme="outline" layout="icon-text" icon="chevron-left">Label</Button>
    <Button theme="outline" layout="text-icon" icon="chevron-right">Label</Button>
  </ButtonToolbar>
</Component>
