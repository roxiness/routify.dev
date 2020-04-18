<script>
    import ButtonInnerLayout from './ButtonInnerLayout.svelte';

    export let href = false;

    export let theme = "tertiary";

    export let icon = null;
    export let layout = "text";

</script>


{#if href}
    <a
        href="{href}"
        class="c-button c-button--{layout} c-button--{theme}"
    >
        <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
   </a>
{:else}
    <button
        type="button"
        class="c-button c-button--{layout} c-button--{theme}"
        on:submit|preventDefault on:click
    >
        <ButtonInnerLayout {icon} {layout}><slot></slot></ButtonInnerLayout>
    </button>
{/if}