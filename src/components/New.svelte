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
    display: inline-block;
    background: #87A1E3;
    color: #FFF;
    font-size: 1.1rem;
    top: -.1rem;
    position: relative;
    padding: .1rem .6rem;
    border-radius: .4rem;
    margin-left: .4rem;
  }
</style>

{#if isNew}<span {title}>New</span>{/if}
