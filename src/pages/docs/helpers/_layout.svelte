<!-- routify:options index=10 -->
<!-- routify:options children=[
  {title: "url", path:"#url"},
  {title: "isActive", path:"#is-active"},
  {title: "goto", path:"#goto"},
  {title: "params", path:"#params"},
  {title: "metatags", path:"#metatags"},
  {title: "leftover", path:"#leftover"},
  {title: "beforeUrlChange", path:"#before-url-change"},
  {title: "afterPageLoad", path:"#after-page-load"},
  {title: "focus", path:"#focus"},
  {title: "ready", path:"#ready"},
  {title: "getConcestor", path:"#get-concestor"},
  {title: "getDirection", path:"#get-direction"}
] -->

<div data-routify="scroll-lock">
  <h1 class="c-h1">Helpers</h1>
  <slot />
</div>
