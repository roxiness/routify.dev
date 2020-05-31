<script>
  import Note from "@/components/Note.svelte";
  import Prism from "svelte-prism";

  import { meta } from "@sveltech/routify";
  meta.title = "Deployments";
</script>

<div class="c-content">

  <h1>Deployments</h1>

  <p>The Routify starter template provides a way to easily deploy your project to Vercel or Netlify.</p>

  <h2>Vercel (Now)</h2>
  <p>Build your project:</p>
  <Prism>{`
    npm run build
    npm run deploy:now
  `}</Prism>

  <p>You will have to install Vercel's CLI:</p>
  
  <Prism language="shell-session">{`
    npm install vercel -g
    # While we transition, please use now
    npm install now -g
  `}</Prism>
  
  <Note>
    Note that Vercel is the new name for Now. In the current version of Routify's starter, things are still named after the old name "Now".
  </Note>

  <h2>Netlify</h2>
  <p><em>Instructions to be added.</em></p>

  <h2>Apache server</h2>

  <p>Deploy the contents of the `dist` folder. We've had success with the following <code>.htaccess</code> configuration:</p>

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