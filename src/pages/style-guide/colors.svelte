<script>
  import Component from '@/components/styleguide/Component.svelte';
  
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

<h1 class="c-h2">Colors</h1>

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
