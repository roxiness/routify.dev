<script>
  import { page } from "@sveltech/routify";
</script>

<div class="c-help-request">
  <hr class="c-hr" />
  <div class="u-text-muted">
    <p class="c-p">
      Writing good documentation that is up-to-date is difficult. If you notice a mistake, help us out.
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
