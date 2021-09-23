<script>
    const features = [
        {
            title: '💰 Guards',
            content:
                'Auth guards are a essential part for a lot of apps, now they are baked in to Routify.',
        },
        {
            title: '💰 Preloads',
            content: '[jake add description]',
        },
        {
            title: '💰 Plugins',
            content: '[jake add description]',
        },
        {
            title: '💰 Meta Data',
            content: '[jake add description]',
        },
        {
            title: '💰 Code Spliting',
            content: '[jake add description]',
        },
        {
            title: '💰 Router in Router',
            content: '[jake add description]',
        },
    ];
</script>

<main>
    <img src="/r3-logo.svg" alt="Routify 3 Logo" class="logo" />

    <code class="install"> npx @roxi/routify@next create r3-app </code>

    <div class="features">
        {#each features as { title, content }}
            <card>
                <h3>{title}</h3>
                <p>{content}</p>
            </card>
        {/each}
    </div>
</main>

<style lang="scss">
    main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content max-content max-content;
        gap: 64px 0px;

        grid-template-areas:
            'logo'
            'install'
            'features';

        align-items: center;
        justify-items: center;

        width: 100%;

        padding: 64px 16px;

        .logo {
            grid-area: logo;
            padding: 16px 0px;
        }

        .install {
            grid-area: install;
            text-align: center;
        }

        .features {
            grid-area: features;

            display: flex;
            flex-flow: row wrap;

            align-items: stretch;
            justify-content: center;
            gap: 28px;

            max-width: 1600px;

            card {
                display: flex;
                flex-flow: column nowrap;
                gap: 16px;

                min-width: 300px;
                width: 33%;
                max-width: 400px;

                padding: 32px;
                border-radius: 16px;

                box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>
