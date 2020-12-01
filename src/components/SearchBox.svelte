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

  .search-input {
    position: relative;
    margin-right: 2.4rem;
  }

  .results {
    background: #FFF;
    position: absolute;
    z-index: 1;
    padding: 0;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    border-radius: .3rem;
    display: none;
    max-height: 85vh;
    overflow: auto;
  }

  @media (min-width: 700px) {
    .results {
      min-width: 48rem;
    }
  }

  .search:focus-within .results {
    display: block;
  }

  input {
    border: .1rem solid #AAA;
    border-radius: .4rem;
    font-size: 1.6rem;
    padding: .8rem 3.6rem .8rem .8rem;
    color: #555;
  }

  input:focus {
    outline: none;
    border-color: #BE46B7;
    box-shadow: 0 0 0 .2rem #FFE4FF;
    background: #FFF6FF;
  }

  a {
    text-decoration: none;
    color: #1D2C48;
    padding: 1.6rem 2.4rem;
    display: block;
  }

  a:hover {
    background: #fff6ff;
  }

  li {
    border-bottom: .1rem solid #EEE;
  }

  li:first-child a {
    padding-top: calc(1.2rem + 1.6rem);
  }

  small {
    padding-left: .8rem;
    font-size: 1.4rem;
    color: #AAA;
  }

  .title {
    display: inline-block;
    font-weight: 600;
    font-size: 1.6rem;
  }

  .summary {
    color: #555;
    font-size: 1.3rem;
  }

  .more {
    user-select: none;
    padding: 1.6rem 3.2rem;
  }

  /* Icon */
  .search-input :global(.o-svg-icon) {
    display: inline;
    position: absolute;
    opacity: 0.5;
    right: 2.6rem;
    top: .1rem;
    width: 1.4rem;
    height: 1.4rem;
  }

  @media (min-width: 700px) {
    .search-input :global(.o-svg-icon) {
      width: 2rem;
      height: 2rem;
      right: 1.2rem;
      top: .6rem;
    }
  }
  .search-input:focus + :global(.o-svg-icon) {
    opacity: 1;
  }

</style>

<div class="search">
  <div class="search-input">
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
          <li class="more">No results</li>
        {/each}
        {#if results.length > 8}
          <li class="more">{results.length - 8} more results</li>
        {/if}
      </ul>
    </div>
  {/if}
</div>
