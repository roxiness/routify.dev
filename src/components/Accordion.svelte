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
    <div data-nav-open={navOpen}>
        <Icon name="chevron-down" />
    </div>
</button>

{#if navOpen}
<slot></slot>
{/if}

<style>
    :global(div[data-nav-open] svg) {
        display: block;
        transition: transform 100ms ease;
    }
    :global(div[data-nav-open="false"] svg) {
        transform: rotate3d(0, 0, 0, 0deg);
    }

    :global(div[data-nav-open="true"] svg) {
        transform: rotate3d(0, 0, -1, -180deg);
    }
</style>
