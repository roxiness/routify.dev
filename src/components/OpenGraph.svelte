<script>
    export let pageTitle;

    let pageUrl = window.location.href;

    let pathName;

    // Attempt to derive title from our URL when it is not defined
    // @todo better support for URLs consisting of multiple words and levels
    if (!pageTitle) {
        pathName = window.location.pathname;

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        pageTitle = capitalizeFirstLetter(pathName.replace(/\//g, ''));
    }

</script>

<svelte:head>
    <title>{pageTitle} – Routify</title>
    <meta name="twitter:title" content="{pageTitle} - Routify" />
    <meta property="og:title" content="{pageTitle} - Routify" />
    <meta property="og:url" content="{pageUrl}" />
</svelte:head>

