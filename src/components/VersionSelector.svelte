<script>
  let initial = 'https://v2.routify.dev'
  let selected = initial

  $: if(initial !== selected) window.location.href = selected
</script>

<style>
  select {
    margin:0  20px;
    padding: 8px;
    height: fit-content;
    color: #aaa;
    font-weight: bold;
    font-size: 1.2em;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
  }
</style>

<select bind:value={selected}>
  <option value="https://v1.routify.dev">1.x</option>
  <option value="https://v2.routify.dev">2.x</option>
  <option value="https://routify.dev">3.x</option>
</select>
