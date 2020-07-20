<script>
import { meta, url } from '@sveltech/routify'
import Tree from '@/components/home/_HeroTree.svelte'
import Note from '@/components/Note.svelte'

meta.title = 'Structure'
</script>
<!-- routify:options index=20 -->
<!-- todo too much spacing? -->

<div class="c-content">
  <div class="c-container-vertical c-container-vertical--small">
    <h1 class="c-h1">Scheme/structure</h1>

    <h3>File to URL mapping</h3>
    <p>In Routify, files in <code>src/pages</code> correspond to URLs.</p>

    <div style="max-width:400px; padding-bottom: 2em">
      <Tree />
    </div>
    <code>index.svelte</code> files corresponds to both <code>/</code> and <code>/index</code>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <h3>Parameters</h3>
    <p><code>src/pages/admin/[business].svelte</code> corresponds to <code>/admin/:business</code>, where :business is a parameter.</p>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <h3>Excluding files</h3>
    <p>Files and directories prefixed with underscore will <strong>not</strong> be picked up by Routify. (except for <code>_layout.svelte</code> and <code>_reset.svelte</code>)</p>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <h3>Layouts and resets</h3>
    <p>Layout files are named <code>_layout.svelte</code> and apply to all adjacent and nested Svelte files. A file can have multiple layouts if multiple layouts are recursively present in parent folders.</p>
    <p>Reset files are named <code>_reset.svelte</code>. They function like layout files, but do not inherit the parent scope (layouts, props, etc.).</p>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <h3>404 and fallbacks</h3>
    <p>404s can be caught with <code>_fallback.svelte</code>. The first <code>_fallback.svelte</code> that's found while traversing back through parent folders will be used.</p>
    <p>Fallback inherits layout. In certain cases, the style <code>position:fixed</code> is useful for a fullscreen fallback.</p>
  </div>

  <div class="c-container-vertical c-container-vertical--small">
    <Note>
      <p>By default Routify watches <code>.svelte</code>, <code>.html</code> and <code>.md</code> files. This can be changed in the <a href={$url('/docs/config')}>config</a>.</p>
      <p>Please note that Routify doesn't parse markdown files.</p>
    </Note>

  </div>
</div>
