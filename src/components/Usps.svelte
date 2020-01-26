<script>
    let usps = [
        {
            headline: "Hit the ground running",
            text: "No need to configure a single route."
        },
        {
            headline: "Scoped everything",
            text: "Layouts, helpers, props, fallbacks, you name it. It's all scoped and context-aware."
        },
        {
            headline: "Page transitions",
            text: "Route-level page transitions for that native app feel."
        },
        {
            headline: "Single source of truth",
            text: "If /recipes/cupcakes doesn't exist in your browser, it doesn't exist in your project. That's easy debugging."
        },
        {
            headline: "Resets",
            text: "Sometimes you don't want everything to be scoped. Maybe you don't want /restaurants/burger-queen to inherit any layout."
        },
        {
            headline: "And more...",
            text: "PWA ready, Code-splitting, Realtime route generation."
        }
    ]
</script>

<style>

    .c-usps {
        display: flex;
        flex-wrap: wrap;
    }

    .c-usps__item {
        flex: 1 0 33%;
    }

</style>
<ul class="c-usps">
    {#each usps as usp}
      <li class="c-usps__item">
          <h3>{usp.headline}</h3>
          <p>{usp.text}</p>
      </li>
  {/each}
</ul>
