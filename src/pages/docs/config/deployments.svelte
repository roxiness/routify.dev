<script>
  import { meta } from "@sveltech/routify";
  meta.title = "Deployments";
  import Prism from "svelte-prism";
</script>

<div class="c-content">
    <h1>Deployments</h1>

    <h2>Now</h2>
    <p><em>Instructions to be added.</em></p>

    <h2>Netlify</h2>
    <p><em>Instructions to be added.</em></p>

    <h2>Apache server</h2>
    <p>Deploy the contents of the `dist` folder. We've had success with the following `.htaccess` configuration:</p>
    
    <script>
      import Prism from "svelte-prism";
    </script>

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