<script>
  export let url =
    "https://codesandbox.io/embed/github/sveltech/routify-guide-example/tree/2-pages";
  export let options = {
    module: "/src/pages/index.svelte,/src/pages/contact.svelte,"
  };
  let defaultOptions = {
    fontsize: 14,
    theme: "dark"
  };
  $: combinedOptions = { ...defaultOptions, ...options };
  $: optionsStr = Object.entries(combinedOptions)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  $: src = `${url}?${optionsStr}`;
</script>


<div>
  <iframe
    {src}
    style="width:100%; height:500px; border:0; border-radius: 4px;
    overflow:hidden;"
    title="svelte-app"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope;
    payment; ambient-light-sensor; encrypted-media; usb"
    sandbox="allow-modals allow-forms allow-popups allow-scripts
    allow-same-origin" />
</div>
