<script>
  import Prism from "svelte-prism";
  import Note from "@/components/Note.svelte";
  import { url } from "@roxi/routify";
</script>

<style>
  pre {
    font-family: monospace;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 6.4rem 0 1.2rem;
  }
</style>

<!-- routify:options index=50 -->
<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h1 class="c-h1">Configuration</h1>
    <p />
  </div>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2 class="c-h2">SSR</h2>
    <p>SSR is handled by the host and not Routify. To configure SSR see the table below.</p>
    <table>
      <tr>
        <td>Host</td>
        <td>File</td>
        <td>Field</td>
        <td>SPA only</td>
        <td>SPA and SSR</td>
      </tr>
      <tr>
        <td><strong>Vercel</strong></td>
        <td>scripts/now/now.json</td>
        <td><code>dest</code></td>
        <td><code>/__app.html</code></td>
        <td><code>/api/ssr.js</code></td>
      </tr>
      <tr>
        <td><strong>Netlify</strong></td>
        <td>scripts/netlify/netlify.toml</td>
        <td><code>to</code></td>
        <td><code>/__app.html</code></td>
        <td><code>/.netlify/functions/ssr</code></td>
      </tr>
      <tr>
      <td><strong>Spassr</strong></td>
      <td>refer to CLI. <code>npx spassr --help</code></td>
      </tr>
    </table>
  </div>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2 class="c-h2">Dynamic imports</h2>
    <p>
      To disable dynamic imports, set
      <code>useDynamicImports</code>
      to false in
      <code>rollup.config.js</code>
    </p>
  </div>
</div>

<div class="c-container-vertical c-container-vertical--small">
  <div class="c-content">
    <h2 class="c-h2">Static exports</h2>
    <p>
      To disable static exports, set
      <code>shouldPrerender</code>
      to false in
      <code>rollup.config.js</code>
    </p>
  </div>
</div>
