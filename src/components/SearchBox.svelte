<script>
  import { client } from "poindexter/runtime";
  import Icon from "./Icon.svelte";
  let query = "";
  let results = [];
  if (routify.inBrowser) client.init()
  $: if (query) (results = client.index.search(query));
  const removeFocus = (el) => {document.activeElement.blur()}
</script>

<style>
  :focus {
    outline: none;
    background: #fff6ff;
  }
  .results {
    background: white;
    position: absolute;
    z-index: 1;
    padding: 0;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    display: none;
  }
  .search:focus-within .results {
    display: block;
  }
  input {
    border: 1px solid #aaa;
    border-radius: 8px;
    font-size: 1.2em;
    padding: 8px;
    color: #555;
  }
  input:focus {
    border-color: #333;
    background: inherit;
  }
  a {
    text-decoration: none;
    color: #1d2c48;
    padding: 1.2rem 32px;
    display: block;
  }
  li {
    max-width: 480px;
    border-bottom: #eee 1px solid;
  }
  li:first-child a {
    padding-top: calc(1.2rem + 16px);
  }
  a:hover {
    background: #fff6ff;
  }
  small {
    padding-left: 8px;
    color: #aaa;
  }
  .title {
    display: inline-block;
    font-weight: bold;
  }
  .summary {
    color: #555;
    font-size: 0.9em;
  }
  .more {
    user-select: none;
    padding: 16px 32px;
  }
  * :global(.o-svg-icon) {
    display: inline;
    position: relative;
    top: 4px;
    right: 36px;
  }
</style>

<div class="search">
  <div>
    <input type="text" bind:value={query} />
    <Icon name="search" />
  </div>
  {#if query}
    <div class="results" tabindex="0">
      <ul>
        {#each results.slice(0, 8) as result}
          <li>
            <a href="/{result.path}" on:click={removeFocus}>
              <span
                class="title">{result.title.replace(/ - Routify$/, '')}</span>
              <small> {result.path.split('/').slice(0, -1).join(' / ')} </small>
              <div class="summary">{result.text.slice(0, 100)}...</div>
            </a>
          </li>
        {:else}
          <li class="more">no results</li>
        {/each}
        {#if results.length > 8}
          <li class="more">{results.length - 8} more results</li>
        {/if}
      </ul>
    </div>
  {/if}
</div>
