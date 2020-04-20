<script>
    let usps = [
        {
            headline: "Hit the ground running",
            text: "No need to configure a single route. Routes are generated from file."
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
            text: "If <code>/recipes/cupcakes</code> doesn't exist in your browser, it doesn't exist in your project. That's easy debugging."
        },
        {
            headline: "Resets",
            text: "Sometimes you don't want everything to be scoped. Maybe you don't want <code>/restaurants/burger-queen</code> to inherit any layout."
        },
        {
            headline: "And more...",
            text: "SSR, meta tags, code-splitting, real-time route generation... and more!."
        }
    ]
</script>

<ul class="c-usps">
    {#each usps as usp}
      <li class="c-usps__item c-content">
          <h3>{usp.headline}</h3>
          <p>{@html usp.text}</p>
      </li>
  {/each}
</ul>
