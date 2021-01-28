<!-- routify:options index=40 -->
<div class="c-content">
  <div class="c-container-vertical c-container-vertical--small">
    <h1 class="c-h1">Overview</h1>
    <p>Deployments to Vercel and Netlify include all the features listed in the overview.</p>
    <p>To configure or disable a feature, please refer to the respective feature page.</p>
  </div>
  <div class="c-container-vertical c-container-vertical--small">
    <h3 class="c-h3">Netlify</h3>
    <ul>
      <li>
        <strong>Github connection</strong>
        (recommended)
        <p>To connect your repository, please refer Netlify's documentation.</p>
      </li>
      <li>
        <strong>Command line</strong>
        <p>
          To deploy directly from the command line, run
          <code>netlify</code>
          from the project folder.
        </p>
      </li>
      <li>
        <strong>Github actions</strong>
        <p>
          Please refer to Google for information on how to setup Github actions
          for Netlify.
        </p>
      </li>
    </ul>
  </div>
  <div class="c-container-vertical c-container-vertical--small">
    <h3 class="c-h3">Vercel</h3>
    <ul>
      <li>
        <strong>Github connection</strong>
        (recommended)
        <p>
          Make sure
          <code>OUTPUT DIRECTORY</code>
          is set to
          <code>dist</code>
          on the settings page. To connect your repository, please refer
          Vercel's documentation.
        </p>
      </li>
      <li>
        <strong>Command line</strong>
        <p>
          To deploy directly from the command line, run
          <code>vercel</code>
          from the project folder.
        </p>
      </li>
      <li>
        <strong>Github actions</strong>
        <p>
          Please refer to Google for information on how to setup Github actions
          for Vercel.
        </p>
      </li>
    </ul>
  </div>
  <div class="c-container-vertical c-container-vertical--small">
    <h3 class="c-h3">Custom</h3>
    <p>
      It's possible to host Routify on your own server. We recommend
      <a href="https://github.com/roxiness/spassr">spassr</a>
      which can serve your app as both SPA and SSR.
    </p>
  </div>
</div>

<!-- TODO the options look too much like steps which  -->
