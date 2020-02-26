<script>
    import Usps from '../components/Usps.svelte';
    import Contributors from '../components/Contributors.svelte';
    import Contribute from '../components/Contribute.svelte';
    import Hero from '../components/Hero.svelte';
    let pageTitle = "Home";
    import OpenGraph from '../components/OpenGraph.svelte';
</script>

<OpenGraph {pageTitle} />

<main>
    <div class="c-container-vertical">
        <Hero />
    </div>
</main>

<div class="c-container-vertical">
    <Usps />
</div>

<div class="c-container-vertical">
    <Contributors />
</div>

<div class="c-container-vertical">
    <Contribute />
</div>


<!-- @todo add github widget -->
