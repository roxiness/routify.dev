<script>
  const structure = [
    [".", ""],
    ["├─ src/", "Source. This is for all your handcrafted code."],
    ["│  ├─ serviceworker.svelte    ", "Registers serviceworker, handles popups etc."],
    ["│  ├─ sw.js", "Serviceworker config."],
    ["│  └─ pages/", "Layouts and pages."],
    ["├─ assets/", "Files that don't change. Images, CSS, etc."],
    ["│  └─ __app.html", "Entry file. Edit to your needs."],
    ["├─ dist/", "Distributables. This is where your built files are output."],
    ["└─ api/", "Vercel and Netlify live here."]
  ];
</script>

<style>
  pre {
    font-family: monospace;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 6.4rem 0 1.2rem;
  }
</style>

<!-- routify:options index=10 -->
<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h1 class="c-h1">Overview</h1>

    <p>
      Going from development to production can be quite a task. To help overcome
      those tasks, we've created a <a href="https://github.com/roxiness/routify-starter" target="_blank" rel="noreferrer noopener">starter template</a> that should help you go
      from prototyping to deployment in 5.3 seconds.
    </p>
    <p>The starter template includes the following features - all are optional.</p>
    <ul>
      <li>Dynamic Imports</li>
      <li>SSR (Server Side Rendering)</li>
      <li>SSG (Static Site Generation)</li>
      <li>PWA (Progressive Web App)</li>
      <li>Offline availability</li>
      <li>Automatic deployments</li>
    </ul>
  </div>
</div>
<div>
  <div class="c-container-vertical c-container-vertical--small">
    <div class="c-content">
      <h3 class="c-h3">Starter template structure</h3>
    </div>
    <table class="">
      {#each structure as [path, text]}
        <tr>
          <td>
            <pre>{path}</pre>
          </td>
          <td>{text}</td>
        </tr>
      {/each}
    </table>
  </div>
</div>

