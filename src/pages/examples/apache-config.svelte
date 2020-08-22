<script>
  import { meta } from "@sveltech/routify";
  meta.title = "Deployments";
  import Prism from "svelte-prism";
</script>

<!-- routify:options index=200  -->

<div class="c-content">

    <h2>Deploying on Apache server</h2>

    <Prism>{`
      RewriteEngine On

      RewriteCond %{REQUEST_FILENAME}.html -f
      RewriteRule !.*\.html$ %{REQUEST_FILENAME}.html [L]

      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteRule . __app.html

      <Files "*.js">
          ForceType text/javascript
      </Files>
      `}</Prism>

</div>
