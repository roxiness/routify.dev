<script>
  let initial = 'http://routify.dev'
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
  }
</style>

<select bind:value={selected}>
  <option value="http://v1.routify.dev">1.x</option>
  <option value="http://routify.dev">2.x</option>
</select>
