<script>
    export let icon;

    // Possible icon types
    import IconChevronUp from './icons/chevron-up.svg';
    import IconChevronDown from './icons/chevron-down.svg';
    import IconChevronLeft from './icons/chevron-left.svg';
    import IconChevronRight from './icons/chevron-right.svg';
    import IconInfo from './icons/info.svg';
    import IconWarning from './icons/warning.svg';

    import IconDiscord from './icons/discord.svg';
    import IconTwitter from './icons/twitter.svg';
    import IconGithub from './icons/github.svg';

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
{#if icon == 'info'}
    {@html IconInfo}
{/if}
{#if icon == 'warning'}
    {@html IconWarning}
{/if}
{#if icon == 'discord'}
    {@html IconDiscord}
{/if}
{#if icon == 'twitter'}
    {@html IconTwitter}
{/if}
{#if icon == 'github'}
    {@html IconGithub}
{/if}

</div>
