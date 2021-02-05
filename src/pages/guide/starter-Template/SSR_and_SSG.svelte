<script>
  import Code from "@/components/Code.svelte";
  import Note from "@/components/Note.svelte";
  import { ready } from "@roxi/routify";
</script>

<!-- routify:options index=20 -->
<!-- routify:options title="SSR & SSG" -->
<div class="c-content">
  <div class="c-container-vertical c-container-vertical--small">
    <h1 class="c-h1">SSR & SSG</h1>

    <p>
      Routify's Starter template comes with both SSR and SSG enabled by default.
      SSR is handled by
      <a href="https://github.com/roxiness/tossr">tossr</a>
      and SSG is handled by
      <a href="https://github.com/roxiness/spank">spank</a>
      . For easy configuration, both use
      <a href="https://github.com/roxiness/configent">configent</a>.
    </p>
    <p>
      To understand what it's all about, let's look at how requests are handled
      by the server:
    </p>

    <ul>
      <li>
        <p>
          <strong>SPA (Single Page Application) - </strong>
          the server sends a HTML template and a Javascript bundle. The SPA is
          then built in the client's browser.
        </p>
      </li>
      <li>
        <p>
          <strong>SSR (Server Side Rendering)* - </strong>
          the server prerenders the corresponding HTML and sends it to the
          client.
        </p>
      </li>
      <li>
        <p>
          <strong>SSG (Static Site Generation)* - </strong>
          the server sends the corresponding pregenerated HTML file to the
          client.
        </p>
      </li>
    </ul>
    <!-- sorry @wolfr >.< -->
    <p style="font-style: italic; font-weight: bold; font-size: 0.8em">
      * Along with the static HTML, your SPA is bundled and sent to the client.
      Once the SPA is received, it handles all subsequent navigation. From this
      point, the server only serves assets.
    </p>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <strong>SSR vs SSG</strong>
    <ul>
      <li>SSR handles dynamic content as HTML is rendered in realtime.</li>
      <li>SSG is faster as all HTML is prerendered.</li>
    </ul>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <strong>Benefits vs SPA only</strong>
    <ul>
      <li>
        The first visit shows a rendered page without having to wait for
        javascript to load.
      </li>
      <li>Better SEO - search engines can crawl your page.</li>
      <li>
        External references to your site become rich objects when using Open
        Graph.
      </li>
    </ul>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <strong>Highlights</strong>
    <ul>
      <li>Serverless.</li>
      <li>Optional and enabled by default.</li>
      <li>
        SSR and SPA use the same code. No complicated boilerplate required.
      </li>
      <li>The code isn't limited to a Node environment.</li>
      <li>No tight coupling with arbitrary framework paradigms.</li>
      <li>Painless async handling with <code>$ready</code>.</li>
      <li>Easy build & deployments.</li>
    </ul>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <strong>Limitations</strong>
    <ul>
      <li>
        Requires a host with functions support (Now, Netlify, etc.) or a server.
      </li>
      <li>
        Browser environment is headless, occasional consideration may be
        required.
      </li>
    </ul>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <strong id="disabling">Disabling</strong>
    <p>
      While SPA, PWA, SSR, SSG, Dynamic imports etc. all happily coexist, there
      can be times where you want to disable one or more features.
    </p>
    <ul>
      <li>
        <p><strong>SSG - </strong>can be disabled by removing <code>build:static</code> from <code>package.json</code></p>
      </li>
      <li>
        <p>
          <strong>SSR (Vercel) - </strong>can be disabled by setting <code>routes.dest</code> to <code>"/__app.html"</code> in <code>vercel.json</code>
        </p>
      </li>
      <li>
        <p>
          <strong>SSR (Netlify) - </strong>can be disabled by setting <code>redirect.to</code> to <code>"/__app.html"</code> in <code>netlify.toml</code>
        </p>
      </li>
    </ul>
  </div>
</div>
