<script>
    import ButtonInnerLayout from './ButtonInnerLayout.svelte';

    export let href = false;

    export let theme = null;

    export let icon = null;
    export let layout = "text";

</script>

{#if href}
    <a
        href="{href}"
        class="c-button"
        class:c-button--primary={theme=="primary"}
        class:c-button--outline={theme=="outline"||!theme}
    >
        <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
   </a>
{:else}
    <button
        type="button"
        class="c-button"
        class:c-button--primary={theme=="primary"}
        class:c-button--outline={theme=="outline"||!theme}
        on:submit|preventDefault on:click
    >
        <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
    </button>
{/if}