<script>
  import Code from "@/components/Code.svelte";
  const options = {
    fontsize: 14,
    theme: "dark",
    module: "/src/pages/_layout.svelte,/src/pages/_nav.svelte"
  };
  const str = Object.entries(options)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
</script>

<div class="c-container-vertical">
  <div class="c-content">
    <h1>Generated Navigation</h1>
    <p>
      Navigation can be generated automatically by traversing the node tree or
      using the next/prev methods. A node is a page, a fallback or a folder
      (layout).
    </p>
  </div>

</div>
<div class="c-container-vertical--small">
  <div class="c-content">
    <h2>Navbar/sitemap</h2>
    <Code language="svelte">
      {`
      <scr`}{`ipt>
        import { layout, url } from "@sveltech/routify";
      </script>

      {#each $layout.children as node}
        <a href={$url(node.path)} > {node.title} </a>
        <!-- uncomment for recursive links <svelte:self {node} /> -->
      {/each}`}
    </Code>
  </div>
</div>

<div class="c-container-vertical--small">
  <div class="c-content">
    <h3>Interactive example</h3>
    <p>Click burger menu to navigate files.</p>
    <iframe
      src="https://codesandbox.io/embed/github/sveltech/example-generated-navigation/tree/master/?{str}"
      style="width:100%; height:500px; border:0; border-radius: 4px;
      overflow:hidden;"
      title="svelte-app"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media;
      geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
      sandbox="allow-forms allow-modals allow-popups allow-presentation
      allow-same-origin allow-scripts" />
  </div>
</div>


<div class="c-container-vertical--small">
  <div class="c-content">
    <h2>Next and previous links</h2>
    <p>Remember to check if next and prev routes exists.</p>
    <Code language="svelte">
      {`
      <scr`}{`ipt>
        import { page, url } from "@sveltech/routify";
      </script>

      <a href={$url($page.next)}>{$page.next.title}</a>
      <a href={$url($page.prev)}>{$page.prev.title}</a>
      `}
    </Code>
    For recursive <code>next</code> and <code>prev</code>, have a look at <a href="https://github.com/roxiness/routify-site-2020/blob/master/src/pages/guide/_layout.svelte">routify.dev's implementation.</a>

  </div>
</div>
