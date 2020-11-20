<script>
  const swUpdated = localStorage.getItem("serviceWorkerUpdated");
  localStorage.removeItem("serviceWorkerUpdated");
  let showPopup = swUpdated
  let secondsLeft = 5

  if(showPopup){
    const interval = setInterval(()=>{
      secondsLeft--
      if(!secondsLeft){
        clearInterval(interval)
        showPopup = false
      }
    }, 1000)
  }

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
      wb.addEventListener("redundant", () => {
        localStorage.setItem("serviceWorkerUpdated", true);
        location.reload()
      });
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

{#if showPopup}
  <div class="c-content">
    <h3>App has been updated
      <button class="c-button c-button--primary" on:click={()=>(showPopup = false)}>close</button>
    </h3>
    <p>Popup will close in {secondsLeft} seconds</p>
  </div>
{/if}
