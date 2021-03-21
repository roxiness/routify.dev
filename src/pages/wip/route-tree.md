---
layout: default
---

<_crip_>
import { url, meta } from "@roxi/routify"
import Code from "@/components/Code.svelte";
import { Tabs, TabsLink, TabsPage } from "@sveltech/bricks";
import Note from "@/components/Note.svelte";
meta.title = "Route tree";
</_crip_>

# Route tree

Routify's layouts and pages are organized in a tree of **junction** (layout) and **page** nodes ([ClientNodeApi](#clientnodeapi) ).
These nodes can be used to generate navigation links in realtime as well
as inline layouts and pages.

## Accessing nodes

Nodes can be accessed with the following helpers

| Name      | Type                              | Description                          |
| --------- | --------------------------------- | ------------------------------------ |
| `$page`   | [ClientNodeApi](#clientnodeapi)   | returns the current page node.       |
| `$layout` | [ClientNodeApi](#clientnodeapi)   | returns the closest junction node.   |
| `$nodes`  | [ClientNodeApi[]](#clientnodeapi) | returns all page and junction nodes. |

### Accessing a specific node

<Tabs>
  <div class="c-tabs">
    <TabsLink>
      By name
    </TabsLink>
    <TabsLink>
      By path
    </TabsLink>
    <TabsLink>
      By parent
    </TabsLink>
  </div>
  <div class="c-tabs-pages">
    <TabsPage>
      <Code language="javascript">
        {`
          import { nodes } from '@roxi/routify'                    
          const postIndexNode = $nodes.find((node) => node.name === 'posts-index')
        `}
      </Code>
    </TabsPage>
    <TabsPage>
      <Code language="javascript">
        {`
          import { nodes } from '@roxi/routify'
          const postIndexNode = $nodes.find((node) => node.path === '/posts/index')
        `}
      </Code>
    </TabsPage>
    <TabsPage>
      <Code language="javascript">
      {`      
        import { layout } from '@roxi/routify'
        const childNodes = $layout.children
      `}
      </Code>
    </TabsPage>
  </div>
</Tabs>

## Inlining components

<Tabs>
  <div class="c-tabs">
    <TabsLink>
      Pages
    </TabsLink>
    <TabsLink>
      Layouts and pages
    </TabsLink>
  </div>
  <div class="c-tabs-pages">
    <TabsPage>
      <Code language="svelte">
        {`
          <_crip_>
            import { layout } from '@roxi/routify'
          </_crip_>
          
          {#each $layout.children as node}
            {#await node.component then component}
              <svelte:component this={component} />
            {/await}
          {/each}
        `}
      </Code>
    </TabsPage>
    <TabsPage>
      <Code language="svelte">
        {`
          <_crip_>
            import { layout } from '@roxi/routify'
          </_crip_>
          
          {#each $layout.children as node}
            {#await node.componentWithIndex then [LayoutCmp, IndexCmp]}
              <svelte:component this={LayoutCmp}>
                <svelte:component this={IndexCmp} />
              </svelte:component>
            {/await}
          {/each}
        `}
      </Code>
    </TabsPage>
  </div>
</Tabs>

## Navigation generation

<Tabs>
  <div class="c-tabs">
    <TabsLink>
      Flat
    </TabsLink>
    <TabsLink>
      Tree
    </TabsLink>
  </div>
  <div class="c-tabs-pages">
    <TabsPage>
      <Code language="svelte">
        {`
          <_crip_>
            import { layout, isActive, url } from '@roxi/routify'
          </_crip_>
          
          {#each $layout.children as node}
              <a 
                href={$url(path)} 
                class:active={$isActive(node.path)}
              >
                {title}
              </a>
          {/each}`}
      </Code>
    </TabsPage>

    <TabsPage>
      <Code language="svelte">
        {`
          <!-- _layout.svelte -->
          <_crip_>
            import { layout } from '@roxi/routify'
            import Nav from 'path/to/Nav.svelte'
          </_crip_>
 
          <Nav nodes={$layout.children}>
        `}
      </Code>

      <Code language="svelte">
        {`
          <!-- Nav.svelte -->
          <_crip_>
            import { isActive, url } from '@roxi/routify'
            export let nodes
          </_crip_>
 
          <div class="links">
            {#each $layout.children as node}
              <a
                href={$url(path)}
                class:active={$isActive(node.path)}
              >
                {title}
              </a>
              {#if node.children}
                <svelte:self nodes={node.children}>
              {/if}
            {/each}
          </links>
        `}
      </Code>
    </TabsPage>

  </div>
</Tabs>

## `ClientNodeApi`

| Property           | Type                         | Description                                                                                                                                |
| ------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| path               | `string`                     | The path, eg. `/posts/:slug`.                                                                                                              |
| title              | `string`                     | `meta.title` if present. If not a prettified path will be returned, eg. `/posts/about-me.svelte` becomes `about-me`.                       |
| parent             | `ClientNodeApi`              | The parent node.                                                                                                                           |
| children           | `ClientNodeApi[]`            | The child nodes.                                                                                                                           |
| next               | `ClientNodeApi`              | The next sibling node. _(`meta.index` determines the order, eg `<!-- routify:options index=5 -->`)_                                        |
| prev               | `ClientNodeApi`              | The previous sibling node.                                                                                                                 |
| component          | `Promise<SvelteComponent>`   | The `.svelte` file of the node.                                                                                                            |
| componentWithIndex | `Promise<SvelteComponent[]>` | Returns `[<layout component>, <page component>]` if current node is a layout. If current node is a page, `[<page component>]` is returned. |
| index              | `ClientNodeApi`              |
