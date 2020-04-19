<script>
  import Walker from '@/components/Walker.svelte'
  let children = [
    {
      name: "pages",
      type: "folder",
      children: [
        {
          name: "_layout.svelte",
          type: "file"
        },
        {
          name: "blog",
          type: "folder",
          children: [
            {
              name: "index.svelte",
              type: "file",
              correspondingUrl: "/blog"
            },
            {
              name: "[post].svelte",
              type: "file",
              correspondingUrl: "/blog/my-post"
            }
          ]
        },
        {
          name: "about.svelte",
          type: "file",
          correspondingUrl: "/about"
        },
        {
          name: "_contact.svelte",
          type: "file",
          correspondingUrl: "/contact"
        }
      ]
    }
  ]
</script>

<style>
  .specific-btn-toolbar a:first-child {
    margin-right: 1.2rem;
  }
</style>

<div class="c-hero">
    <div class="c-hero__content">
        <h2 class="c-hero__title">Routes for Svelte, automated by your file structure.</h2>
        <p class="c-hero__para">Routify offers a great developer experience to build the routes for your Svelte app.</p>
        <div class="specific-btn-toolbar">
          <a href="/guide/introduction/getting-started" class="c-button c-button--primary c-button--large">Get started</a>
          <a href="https://github.com/sveltech/routify">
            <img alt="GitHub stars" src="https://badgen.net/github/stars/sveltech/routify">
          </a>
        </div>
    </div>
    <div class="c-hero__illustration">
      <Walker {children}></Walker>
    </div>
</div>

