<script>
  import { meta } from "@roxi/routify";
  meta.title = "Deployments";
  import Code from "@/components/Code.svelte";
</script>

<!-- routify:options index=200  -->

<div class="c-content">
  <h2>Deploying on Apache server</h2>

  <Code
    >{`
      RewriteEngine On

      RewriteCond %{REQUEST_FILENAME}.html -f
      RewriteRule !.*\.html$ %{REQUEST_FILENAME}.html [L]

      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteRule . index.html

      <Files "*.js">
          ForceType text/javascript
      </Files>
      `}</Code
  >
</div>
