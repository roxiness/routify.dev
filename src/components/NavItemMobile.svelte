<script>
    export let href;

    import { mobileNavActive } from '../stores/mobilenavactive.js';

    function handleNavigationClick(e) {
        mobileNavActive.update(mobileNavActive => false);
    }

</script>

<!-- c-navigation-mobile__item--active -->
<li class="c-navigation-mobile__item ">
    <a on:click="{handleNavigationClick}" href="{href}">
        <slot></slot>
    </a>
</li>