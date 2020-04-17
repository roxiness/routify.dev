<script>
  import Prism from "svelte-prism";
  import Note from "@/components/Note.svelte";
  import { url } from "@sveltech/routify";

  const structure = [
    ['src/', 'Source files'],
    ['--pages/', 'Pages.'],
    ['statics/', 'Static files - images etc.'],
    ['--__index.html', 'Entry file.'],
    ['dist/', 'Distributables. This is where your files are output.'],
    ['script/', 'Scripts for deployments'],
  ]
</script>

<!-- routify:options index=10 -->
<div class="c-content">
  <div class="c-container-vertical--small">
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
  <div class="c-container-vertical--small">
    <strong>Build and deploy</strong>
    <Prism>
      {`
    npm run build
    npm run deploy:now
    `}
    </Prism>

    <p>
      <strong>Starter template structure</strong>
    </p>
    <table>
    <tr>
    <td>src/</td>
    <td>Source files</td>
    </tr>
    </table>
    <pre>
      {`
      pages/
    statics/
    dist/
    scripts/
    `}
    </pre>

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
