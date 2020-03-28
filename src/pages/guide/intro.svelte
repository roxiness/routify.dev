<script>
  const steps = [
    "Set up a project",
    "Create pages",
    "Create a layout",
    "Assign parameters",
    "Add a 404 fallback"
  ];
</script>

<!-- routify:options $index=5 -->

<h1 class="c-h1">Intro</h1>

<ol>
  {#each steps as step}
    <li>{step}</li>
  {/each}
</ol>
