<script>
  import Prism from "svelte-prism";
  import Note from "@/components/Note.svelte";
  import { url } from "@sveltech/routify";

  const structure = [
    [".", ""],
    ["├─ src/", "Source. This is for all your handcrafted code."],
    ["│  └─ pages/", "Layouts and pages."],
    ["├─ static/", "Files that don't change. Images, CSS, etc."],
    ["│  └─ __index.html", "Entry file. Edit to your needs."],
    ["├─ dist/", "Distributables. This is where your built files are output."],
    ["└─ script/", "Scripts for deployments"]
  ];
</script>

<style>
  pre {
    font-family: monospace;
    font-size: 18px;
    font-weight: bold;
    margin: 0 64px 0 12px;
  }
</style>

<!-- routify:options index=10 -->
<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h1 class="c-h1">Overview</h1>

    <p>
      Going from development to production can be quite a task. To help overcome
      those tasks, we've created a starter template which should help you go
      from prototyping to deployment in 5.3 seconds.
    </p>
    <p>The starter template features the following - all are optional.</p>
    <ul>
      <li>Dynamic Imports</li>
      <li>Prerendering</li>
      <li>SSR</li>
      <li>Quick deployments</li>
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
<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h3 class="c-h3">Build and deploy</h3>
    <Prism>
      {`
    npm run build
    npm run deploy:now
    `}
    </Prism>

    <p>
      This is a great way to get started, but in the long run a CI approach
      might be better suited and we recommend having a look at the
      <a href={$url('../deployment')}>deployment section.</a>
    </p>

    <p>
      To tweak your build or find out what's included, have a look at the
      <a href={$url('../build')}>Build section.</a>
    </p>

  </div>
</div>
