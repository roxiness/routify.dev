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
      { name: "g-blue-600", hex: "#3F5EAA" },
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

