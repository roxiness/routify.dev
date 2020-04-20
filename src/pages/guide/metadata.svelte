<script>
  import Prism from "svelte-prism";
  import Note from "@/components/Note.svelte";
</script>

<!-- routify:options index=40 -->
<div class="c-content">
  <div class="c-container-vertical--small">
    <h1 class="c-h1">Metadata and OpenGraph</h1>

    <p>
      Metatags and OG can be set with the
      <code>$metatags</code>
      helper.
    </p>
    <Prism>
      {`
        import { @metatags } from '@sveltech/Routify'
        $metatags.description = 'Routes for Svelte'
    `}
    </Prism>
    <p>Would render the following HTML</p>
    <Prism language="html">
      {`
        <meta name="description" content="Routes for Svelte">
    <meta property="og:description" content="Routes for Svelte">
    `}
    </Prism>
    <p>
      Tags without a colon, like
      <code>description</code>
      will render a metatag and an OG metatag with the same name/property. Tags
      with a colon like
      <code>twitter:card</code>
      will not generate OG data.
    </p>
  </div>
  <div class="c-container-vertical--small">
    <h3 class="c-h3">Templates</h3>
    <p>
      Templates can be set with
      <code>$metatags.template(property, callback)</code> ie.
      <code>$metatags.template("title", value => `My Site - ${`{value}`}`)</code>.
      If multiple layouts with templates are present, the layout nearest the root takes precedence.
    </p>
    <Note>
      Setting
      <code>$metatags.title = "Routify"</code>
      also generates
      <code>{`<title>Routify</title>`}</code>
    </Note>
  </div>
</div>

<!-- TODO this should probably be in docs instead -->
