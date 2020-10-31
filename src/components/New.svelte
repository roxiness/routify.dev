<script>
  import { formatRelative, formatDistance } from "date-fns";
  export let date;
  // three months
  const maxAge = 1000 * 60 * 60 * 24 * 30 * 3;
  $: isNew = Date.now() - Date.parse(date) < maxAge;
  $: title = date && formatRelative(new Date(date), new Date())
</script>

<style>
  span {
    position: absolute;
    background: #87a1e3;
    color: white;
    font-size: 10px;
    padding: 0 4px;
    border-radius: 4px;
    margin-left: 4px;
  }
</style>

{#if isNew}<span {title}> new</span>{/if}
