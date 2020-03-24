<script>
    import Usps from '@/components/Usps.svelte';
    import Contributors from '@/components/Contributors.svelte';
    import Contribute from '@/components/Contribute.svelte';
    import Hero from '@/components/Hero.svelte';
</script>
<!-- routify:options $index=false -->
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
