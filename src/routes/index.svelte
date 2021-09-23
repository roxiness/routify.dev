<script>
    const features = [
        {
            title: '💰 Guards',
            tags: ['new'],
            description:
                'Want to protect your <code>/admin</code> module or <code>/internal</code> page? With guards you can create your own logic to protect your content.',
        },
        {
            title: '💰 Preloads',
            tags: ['new'],
            description:
                'Run your own logic before the page is loaded. A great place to fetch data.',
        },
        {
            title: '💰 Plugins',
            tags: ['rewritten'],
            description:
                'Enhance Routify with premade plugins or create your own.',
        },
        {
            title: '💰 Meta Data',
            tags: ['new', 'rewritten'],
            description:
                'Metadata lets you add your own data to pages and modules at buildtime. This data can be accessed at any time without even having to load the page.',
        },
        {
            title: '💰 Bundling',
            tags: ['rewritten', 'simplified'],
            description:
                'Each page in Routify is a dynamically imported file. With bundling you can bundle branches of your route tree and avoid request waterfalls. You can even bundle the root tree and skip dynamic imports all together.',
        },
        {
            title: '💰 Router instances',
            tags: ['new'],
            description:
                "Need a widget with its own navigation or multiple panes with independent routes? Just add an extra Router, it's free!",
        },
        {
            title: '💰 File based routes',
            description:
                'Routes are mapped to your filesystem. This keeps things easy to reason about. Should you need to color outside the lines, you can always modify the route tree at build or runtime.',
        },
    ];
</script>

<main>
    <img src="/r3-logo.svg" alt="Routify 3 Logo" class="logo" />

    <code class="install"> npx @roxi/routify@next create my-r3-app </code>

    <div class="features">
        {#each features as { title, description, tags }}
            <card>
                {#if (tags || []).length}
                    <div class="tags">
                        {#each tags as tag}
                            <span class="tag">
                                {tag}
                            </span>
                        {/each}
                    </div>
                {/if}

                <h3>{title}</h3>
                <p>{@html description}</p>
            </card>
        {/each}
    </div>
</main>

<style lang="scss">
    main {
        line-height: 1.6rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content max-content max-content;
        gap: 56px 0px;

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
        }

        .install {
            grid-area: install;
            text-align: center;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            padding: 4px 8px;
            gap: 8px;

            .tag {
                display: inline-flex;

                color: #ce2f55;
                background-color: #facffa;

                padding: 2px 12px;
                border-radius: 32px;

                font-size: 0.7rem;
                text-transform: uppercase;
            }
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
                gap: 22px;

                min-width: 300px;
                width: 33%;
                max-width: 400px;

                padding: 42px 32px;
                border-radius: 16px;

                box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.1);
            }
        }
    }
</style>
