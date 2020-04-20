<script>
  import Component from '@/components/styleguide/Component.svelte';
  import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
</script>

<h1 class="c-h2">Tabs</h1>

<Component
  name="Tabs"
  description="Tabs are using the `@sveltech/bricks` project."

  code={`
    <script>
        import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
    </script>

    <Tabs>
      <div class="c-tabs">
        <TabsLink>Page 1</TabsLink>
        <TabsLink>Page 2</TabsLink>
      </div>
      <div class="c-tabs-pages">
        <TabsPage>
          Page 1 content
        </TabsPage>
        <TabsPage>
          Page 2 content
        </TabsPage>
      </div>
    </Tabs>
    `}
>
  <Tabs>
    <div class="c-tabs">
      <TabsLink>Page 1</TabsLink>
      <TabsLink>Page 2</TabsLink>
    </div>
    <div class="c-tabs-pages">
      <TabsPage>
        Page 1 content
      </TabsPage>
      <TabsPage>
        Page 2 content
      </TabsPage>
    </div>
  </Tabs>  
</Component>
