<script>
    let navItems = ['Home','Installation','Configuration','Guide']
</script>

<nav>
    {#each navItems as item}
        <a href="#">{item}</a>
    {/each}
</nav>