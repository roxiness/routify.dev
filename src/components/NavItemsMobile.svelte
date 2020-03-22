<script>
    import Accordion from './Accordion.svelte';
    import NavItemMobile from './NavItemMobile.svelte';

</script>

<div class="c-navigation-mobile-holder c-navigation-mobile-holder--active">
    
    <nav role="navigation">
        <ul class="c-navigation-mobile">
            <NavItemMobile href="/">Home</NavItemMobile>
            <NavItemMobile href="/getting-started">Getting started</NavItemMobile>
            <li class="c-navigation-mobile__item">
                <Accordion title="Guide">
                    <ul>
                        <NavItemMobile href="/guide/structure">File structure</NavItemMobile>
                        <NavItemMobile href="/guide/url-parameters">URL parameters</NavItemMobile>
                        <NavItemMobile href="/guide/metadata">Metadata</NavItemMobile>
                        <NavItemMobile href="/guide/structure">Props</NavItemMobile>
                        <NavItemMobile href="/guide/decorators">Decorators</NavItemMobile>
                        <NavItemMobile href="/guide/transitions">Transitions</NavItemMobile>
                    </ul>
                </Accordion>
            </li>
            <li class="c-navigation-mobile__item">
                <Accordion title="Helpers">
                    <ul>
                    
                        <NavItemMobile href="/helpers/auth">Auth</NavItemMobile>
                        <NavItemMobile href="/helpers/login">Login</NavItemMobile>
                        <NavItemMobile href="/helpers/guards">Guards</NavItemMobile>
                    </ul>
                </Accordion>
            </li>
            <li class="c-navigation-mobile__item">
                <Accordion title="Configuration">
                    <ul>
                        <NavItemMobile href="/configuration/basics">Basics</NavItemMobile>
                        <NavItemMobile href="/configuration/code-splitting">Code splitting</NavItemMobile>
                        <NavItemMobile href="/configuration/pre-rendering">Pre-rendering</NavItemMobile>
                        <NavItemMobile href="/configuration/deployments">Deployments</NavItemMobile>
                        <NavItemMobile href="/configuration/ssr">SSR</NavItemMobile>
                        <NavItemMobile href="/configuration/cache">Cache</NavItemMobile>
                    </ul>
                </Accordion>
            </li>
            <li class="c-navigation-mobile__item">
                <Accordion title="Examples">
                    <ul>
                        <NavItemMobile href="/">Example item 1</NavItemMobile>
                        <NavItemMobile href="/">Example item 2</NavItemMobile>
                    </ul>
                </Accordion>
            </li>
        </ul>
    </nav>
</div>
