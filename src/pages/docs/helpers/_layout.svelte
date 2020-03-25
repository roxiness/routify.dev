<!-- routify:options $index=10 -->
<!-- routify:options links=[
  {name: "url", href:"#url"},
  {name: "isActive", href:"#is-active"},
  {name: "goto", href:"#goto"},
  {name: "params", href:"#params"},
  {name: "context", href:"#context"},
  {name: "leftover", href:"#leftover"},
  {name: "beforeUrlChange", href:"#before-url-change"},
  {name: "ready", href:"#ready"},
  {name: "getConcestor", href:"#getConcestor"},
  {name: "getDirection", href:"#getDirection"}
] -->

<div data-routify="scroll-lock">
  <slot />
</div>
