<script>
    export let navOpen = false;
    export let title = 'Default';
    import Icon from './Icon.svelte';
    
    function handleClick() {
        navOpen = !navOpen
    }
</script>

<button class="c-navigation-mobile__section-header" on:click="{handleClick}">
    <span>{title}</span>
    {#if navOpen}
        <Icon icon="chevron-up" />
    {:else}
        <Icon icon="chevron-down" />
    {/if}
</button>

{#if navOpen}
<slot></slot>
{/if}
