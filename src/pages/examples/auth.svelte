<script>
  import Prism from "svelte-prism";
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
  import { meta } from "@sveltech/routify";
  meta.title = "Auth";
</script>

<div class="c-content">
  <h1 class="c-h1">Helpers - Auth</h1>
  <p>
    With Routify, you don't need any router included functions to authenticate
    users and protect your app.
  </p>
  <p>
    Since everything in Routify is scoped, protecting a layout, automatically
    protects all nested components recursively.
  </p>
</div>

<div class="c-container-vertical--small">
  <div class="c-content">
    <h2>Authentication guards</h2>
    <p>
      Users should generally be authenticated in the root layout.
    </p>
    <Tabs>
      <div class="c-tabs">
        <TabsLink>Minimal</TabsLink>
        <TabsLink>Basic</TabsLink>
        <TabsLink>Store</TabsLink>

      </div>
      <div class="c-tabs-pages">
        <TabsPage>
          <Prism language="svelte">
            {`
              <!-- src/pages/_layout.svelte -->
              <scr`}{`ipt>
                import { authenticate } from 'my-auth-service'
              </script>

              <!-- Wait with rendering the app till the user/guest is verified.
              This prevents small UI glitches and premature authorization checks. -->
              {#await authenticate()}
              {:then}
                <slot />
              {/await}
            `}
          </Prism>
        </TabsPage>
        <TabsPage>
          <Prism language="svelte">
            {`
              <!-- src/pages/_layout.svelte -->
              <scr`}{`ipt>
                import { authenticate } from 'my-auth-service'
              </script>

              <!-- Wait with rendering the app till the user/guest is verified.
              This prevents small UI glitches and premature authorization checks. -->
              {#await authenticate()}

              <!-- Show a waiting message/page/animation here -->
              Verifying user...

              <!-- Pass the user to all nested pages in the project -->
              {:then user}
                <slot scoped={{user}} />
              {/await}
            `}
          </Prism>
        </TabsPage>
        <TabsPage>
          <Prism language="svelte">
            {`
              <!-- src/pages/_layout.svelte -->
              <scr`}{`ipt>
                import { user } from '../store'
              </script>

              {#if user}
                <slot />
              {/if}
            `}
          </Prism>
        </TabsPage>
      </div>
    </Tabs>
  </div>
</div>

<div class="c-container-vertical--small">
  <div class="c-content">
    <h2>Authorization Guards</h2>
    <p>
      Guards should be implemented in the component or module which they
      protect.
    </p>

    <Tabs>
      <div class="c-tabs">
        <TabsLink>Scoped</TabsLink>
        <TabsLink>Async (redirect)</TabsLink>
        <TabsLink>Global guard</TabsLink>
        <TabsLink>Global guard (redirect)</TabsLink>

      </div>
      <div class="c-tabs-pages">
        <TabsPage>
          <Prism language="svelte">
            {`
              <!-- src/pages/admin/_layout.svelte -->
              <scr`}{`ipt>
                export let scoped
              </script>

              {#if scoped.user.isAdmin}
                <slot />
              {/if}
              `}
          </Prism>
        </TabsPage>
        <TabsPage>
          <Prism language="svelte">
            {`
                <!-- src/pages/admin/_layout.svelte -->
                <scr`}{`ipt>
                  import { goto, routifyContext } from '@sveltech/routify'
                  import { authorize } from 'my-auth-service'
                </script>

                {#await authenticate()}
                  Checking permissions...
                {:then}
                  <slot />
                {:catch}
                  {$goto('/login')}
                {/await}
            `}
          </Prism>

        </TabsPage>
        <!-- Global guard -->
        <TabsPage>
          <Prism language="svelte">
            {`
                <!-- src/pages/_layout.svelte -->
                <scr`}{`ipt>
                  import { goto } from '@sveltech/routify'
                  import { authenticate } from 'my-auth-service'
                  import Login from '../components/Login.svelte'

                  let user = false
                  let sessionVerified = false

                  authenticate().then((res)=>{
                    sessionVerified = true
                    user = res
                  })
                </script>


                {#if user}
                  <slot scoped={{user}} />
                  <!-- wait in case there's a session that we need to verify -->
                {:else if sessionVerified}
                  <!-- User is a guest. Show a login widget instead of the current page. -->
                  <Login let:user={user}>
                {/if}
            `}
          </Prism>

        </TabsPage>
        <!-- Global guard (redirect) -->
        <TabsPage>
          <Prism language="svelte">
            {`
                <!-- src/pages/_layout.svelte -->
                <scr`}{`ipt>
                  import { goto, routifyContext } from '@sveltech/routify'
                  import { authorize } from 'my-auth-service'

                  /** show if the current page is "/login" **/
                  let show = $routifyContext.component.path === '/login'

                  /** else only show if user is authorized. Otherwise, redirect to login. **/
                  if(!show)
                    authorize()
                    .then( ()=>{ show = true } )
                    .catch( ()=> $goto('/login') )
                </script>

                {#if show}
                  <slot />
                {/if}
`}
          </Prism>

        </TabsPage>
      </div>
    </Tabs>
  </div>
</div>
<div class="c-container-vertical--small">
  <div class="c-content">
    <h3>Realtime guards</h3>
    <p>
      For realtime guards, simply replace
      <code>{'{#await <promise>}'}</code>
      with
      <code>{'{#if <reactive condition>}'}</code>
    </p>

  </div>
</div>
