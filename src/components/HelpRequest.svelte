<script>
  import { page } from "@sveltech/routify";
</script>

<div class="c-help-request">
  <hr class="c-hr" />
  <div class="u-text-muted">
    <p class="c-p">
      These files are WIP and may be chock-full of errors and bad English. Only
      you can save us!
    </p>
    <ul class="c-horizontal-list c-horizontal-list--bordered">
      <li>
        <a
          href="https://github.com/sveltech/routify-site-2020/tree/master/src/pages{$page.path}.{$page.__file.ext}">
          Open a PR for this file
        </a>
      </li>
      <li>
        <a href="https://discord.gg/ntKJD5B">
          Join us on Discord and share
          <strike>jokes</strike>
          notes.
        </a>
      </li>
      <li>
        <a href="https://github.com/sveltech/routify-site-2020/issues">
          Create an issue here
        </a>
      </li>
    </ul>
  </div>
</div>
