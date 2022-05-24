<script>
    import Usps from '@/components/home/Usps.svelte';
    import Contributors from '@/components/home/Contributors.svelte';
    import Contribute from '@/components/home/Contribute.svelte';
    import Hero  from '@/components/home/Hero.svelte';
    import Sponsors from '@/components/home/Sponsors.svelte';
</script>
<!-- routify:options index=false -->
<!-- routify:options title="Home" -->
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

<div class="c-container-vertical">
    <Sponsors />
</div>
