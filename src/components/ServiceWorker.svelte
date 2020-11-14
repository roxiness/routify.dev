<script>
  let hasUpdate = false;
  if ("serviceWorker" in navigator) {
    import("workbox-window").then(async ({ Workbox }) => {
      const wb = new Workbox("/sw.js");
      const registration = await wb.register();
      wb.addEventListener("installed", () =>
        console.log("installed service worker")
      );
      wb.addEventListener("externalinstalled", () =>
        console.log("installed service worker")
      );
      wb.addEventListener("redundant", () => (hasUpdate = true));
    });
  }
</script>

<style>
  div {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fafafa;
    border-top: 1px solid #ccc;
    padding: 32px;
    text-align: center;
  }
  button {
    cursor: pointer;
  }
</style>

{#if hasUpdate}
  <div class="c-content">
    <h3>App has been updated</h3>
    <button
      class="c-button c-button--primary"
      on:click={() => location.reload()}>Reload</button>
  </div>
{/if}
