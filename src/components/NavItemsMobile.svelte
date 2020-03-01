<script>

    import { mobileNavActive } from '../stores/mobilenavactive.js';

    import Icon from './Icon.svelte';

    function handleNavigationClick(e) {
        mobileNavActive.update(mobileNavActive => false);
    }
    
</script>
    

<div class="c-navigation-mobile-holder c-navigation-mobile-holder--active">
    
    <nav role="navigation">
        <ul class="c-navigation-mobile">
            <li class="c-navigation-mobile__item c-navigation-mobile__item--active"><a on:click="{handleNavigationClick}" href="/">Home</a></li>
            <li class="c-navigation-mobile__item"><a on:click="{handleNavigationClick}" href="/getting-started">Getting started</a></li>
            <li class="c-navigation-mobile__item">
                <button class="c-navigation-mobile__section-header">
                    <span>Guide</span>
                    <Icon icon="chevron-down" />
                </button>
                <ul>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/guide/structure">File structure</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/guide/url-parameters">URL parameters</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/guide/metadata">Metadata</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/guide/structure">Props</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/guide/decorators">Decorators</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/guide/transitions">Transitions</a></li>
                </ul>
            </li>
            <li class="c-navigation-mobile__item">
                <button class="c-navigation-mobile__section-header">
                    <span>Helpers</span>
                    <Icon icon="chevron-down" />
                </button>
                <ul>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/helpers/auth">Auth</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/helpers/login">Login</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/helpers/guards">Guards</a></li>
                </ul>
            </li>
            <li class="c-navigation-mobile__item">
                <button class="c-navigation-mobile__section-header">
                    <span>Configuration</span>
                    <Icon icon="chevron-down" />
                </button>
                <ul>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/configuration/basics">Basics</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/configuration/code-splitting">Code splitting</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/configuration/pre-rendering">Pre-rendering</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/configuration/deployments">Deployments</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/configuration/ssr">SSR</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="/configuration/cache">Cache</a></li>
                </ul>
            </li>
            <li class="c-navigation-mobile__item">
                <button class="c-navigation-mobile__section-header">
                    <span>Examples</span>
                    <Icon icon="chevron-down" />
                </button>
                <ul>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="#">Example item 1</a></li>
                    <li class="c-navigation-mobile__item-child"><a on:click="{handleNavigationClick}" href="#">Example item 2</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</div>
