<script>
  import Code from "@/components/Code.svelte"
</script>

<!-- routify:options index=40 -->
<!-- routify:options title="HTML Metatags" -->

<div class="c-content">
  <div class="c-container-vertical c-container-vertical--small">
    <h1 class="c-h1">HTML Metatags and OpenGraph</h1>

    <p>
      HTML metatags and OG can be set with the
      <code>metatags</code>
      helper.
    </p>

    <p>

    </p>

    <Code>
      {`
        import { metatags } from '@roxi/routify'
        metatags.description = 'Routes for Svelte'
    `}
    </Code>
    <p>Would render the following HTML:</p>
    <Code language="html">
      {`
        <meta name="description" content="Routes for Svelte">
    <meta property="og:description" content="Routes for Svelte">
    `}
    </Code>
    <p>
      Tags without a colon, like
      <code>description</code>
      will render a metatag and an OG metatag with the same name/property. Tags
      with a colon like
      <code>twitter:card</code>
      will not generate OG data.
    </p>
  </div>
  <div class="c-container-vertical c-container-vertical--small">
    <h3 class="c-h3">Title</h3>
    <p>
      Setting
      <code>metatags.title = "Routify"</code>
      also generates
      <code>{`<title>Routify</title>`}</code>
    </p>
    <Code>
      {`
        import { metatags } from '@roxi/routify'
        metatags.title = 'Routify'
    `}
    </Code>
    <p>Would render the following HTML:</p>
    <Code language="html">
      {`
      <title>Routify</title>
    <meta name="title" content="Routes for Svelte">
    <meta property="og:title" content="Routes for Svelte">
    `}
    </Code>
  </div>
  <div class="c-container-vertical c-container-vertical--small">
    <h3 class="c-h3">Non-OpenGraph Metadata</h3>
    <p>
      You can set any kind of tag you want. For example, a <code>twitter:card</code> metatag can be created by doing the following
    </p>
    <Code>
      {`
        import { metatags } from '@roxi/routify'
        metatags['twitter:card'] = 'summary_large_image'
    `}
    </Code>
    <p>Would render the following HTML:</p>
    <Code language="html">
      {`
        <meta name="twitter:card" content="summary_large_image">
    `}
    </Code>
  </div>
  <div class="c-container-vertical c-container-vertical--small">
    <h3 class="c-h3">Templates</h3>
    <p>
      Templates can be set with
      <code>metatags.template(property, callback)</code> ie.
      <code>metatags.template("title", value => `My Site - ${`{value}`}`)</code>.
      If multiple layouts with templates are present, the layout nearest the root takes precedence.
    </p>
  </div>
</div>

<!-- TODO this should probably be in docs instead -->
