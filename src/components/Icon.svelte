<script>
    export let icon;

    // Possible icon types
    import IconChevronUp from './icons/chevron-up.svg';
    import IconChevronDown from './icons/chevron-down.svg';
    import IconChevronLeft from './icons/chevron-left.svg';
    import IconChevronRight from './icons/chevron-right.svg';

</script>

<style>
    .svg-icon {
        width: 1.6rem;
        height: 1.6rem;
    }

</style>

<div class="svg-icon">
{#if icon == 'chevron-left'}
    {@html IconChevronLeft}
{/if}
{#if icon == 'chevron-right'}
    {@html IconChevronRight}
{/if}
{#if icon == 'chevron-down'}
    {@html IconChevronDown}
{/if}
{#if icon == 'chevron-up'}
    {@html IconChevronUp}
{/if}

</div>