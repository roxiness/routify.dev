<script>
  import Prism from "svelte-prism";
  import { meta } from "@sveltech/routify";
  meta.title = "Transitions";
</script>
<!-- routify:options $index=30 -->


<h1 class="c-h1">Transitions</h1>
<div class="c-container-vertical--small">
  <div class="c-content">
    <h3>TabsTransition</h3>
    <p>
      The transition can be seen here
      <a
        href="https://example.routify.dev/example/transitions/tabs/feed/"
        target="_blank">
        Example
      </a>
      (
      <a
        href="https://github.com/sveltech/routify/blob/master/runtime/decorators/TabsTransition.svelte">
        source
      </a>
      ).
    </p>

    <p>Zooms in when traversing towards the leaves</p>
    <p>Zooms out when traversing towards the root</p>
    <p>Slides left if the current index is smaller than the previous</p>
    <p>Slides right if the current index is bigger than the previous</p>
    <h5>Usage</h5>
    <Prism language="svelte">
      {`
        <script>
          import { TabsTransition } from "@sveltech/routify/decorators"
          const width = writable();
        <${''}/script>

        <div bind:offsetWidth={$width}>
          <slot decorator={TabsTransition} scoped={{ width }} />
        </div>
      `}
    </Prism>
  </div>
</div>
<div class="c-container-vertical--small">
  <div class="c-content">
    <h3>BaseTransition</h3>
    <p>Template for creating your own decorations.</p>
    <Prism language="svelte">
      {`
        <script>
          import { BaseTransition } from "@sveltech/routify/decorators"
          import { fade } from 'svelte/transition'

          const configs = [
            {
                condition: (meta)=>true,
                transition: fade,
                /** inParams: {},  optional **/
                /** outParams: {}  optional **/
            }
          ]
        <${''}/script>

        <BaseTransition {configs}>
          <slot />
        </BaseTransition>
    `}
    </Prism>

    <p>
      <code>BaseTransition</code>
      uses the first transition it finds where the condition is true.
    </p>
    <p>
      The meta object passed to the condition function is reactive and contains:
    </p>
    <ul>
      <li>
        <strong>toAncestor</strong>
        - bool
      </li>
      <li>
        <strong>toDescendant</strong>
        - bool
      </li>
      <li>
        <strong>toHigherIndex</strong>
        - bool
      </li>
      <li>
        <strong>toLowerIndex</strong>
        -bool
      </li>
      <li>
        <strong>routes</strong>
        : [newRoute, oldRoute] - array
      </li>
      <li>
        <strong>ancestors</strong>
        : [ancestor, oldAncestor] - array (concestors)
      </li>
    </ul>
  </div>
</div>
