<script>
  import Walker from "./_HeroTreeWalker.svelte";
  const children = [
    {
      name: "pages",
      type: "folder",
      children: [
        { name: "_layout.svelte", type: "file" },
        {
          name: "blog",
          type: "folder",
          children: [
            { name: "index.svelte", type: "file", url: "/blog" },
            { name: "[post].svelte", type: "file", url: "/blog/my-post" }
          ]
        },
        { name: "about.svelte", type: "file", url: "/about" },
        { name: "index.svelte", type: "file", url: "/" },
      ]
    }
  ];
</script>

<style>
  .hero-tree-container {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
  }

  .c-hero__illustration {
    padding: 2.778% 3.473%;

  }
</style>

<div class="c-hero__illustration">
  <svg viewBox="0 0 420 238">
    <foreignObject width="100%" height="100%">
      <div class="hero-tree-container">
        <Walker {children} />
      </div>
    </foreignObject>
  </svg>
</div>

