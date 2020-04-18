<script>
    import Icon from './Icon.svelte';

    // layouts: icon, label
    export let layout = "text";
    export let icon = null;

</script>

{#if layout == "icon"}
    <span class="c-button__icon-wrap"><Icon {name} size="20" /></span>
    <span class="u-hide-accessibility"><slot></slot></span>
{:else if layout == "floating"}
    <span class="c-button__icon-wrap"><Icon {name} size="32" /></span>
    <span class="u-hide-accessibility"><slot></slot></span>
{:else if layout == "icon-text"}
    <span class="c-button__icon-wrap"><Icon {name} size="20" /></span>
    <span class="c-button__label"><slot></slot></span>
{:else}
    <slot></slot>
{/if}