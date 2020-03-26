<script>
    export let icon;
    export let large = false;

    // Possible icon types
    import IconChevronUp from './icons/chevron-up.svg';
    import IconChevronDown from './icons/chevron-down.svg';
    import IconChevronLeft from './icons/chevron-left.svg';
    import IconChevronRight from './icons/chevron-right.svg';
    import IconInfo from './icons/info.svg';
    import IconWarning from './icons/warning.svg';

</script>

<style>
    .svg-icon {
        width: 1.6rem;
        height: 1.6rem;
    }

    .svg-icon--large {
        width: 2.4rem;
        height: 2.4rem;
    }

</style>

<div class="svg-icon" class:svg-icon--large={large}>
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
{#if icon == 'info'}
    {@html IconInfo}
{/if}
{#if icon == 'warning'}
    {@html IconWarning}
{/if}

</div>
