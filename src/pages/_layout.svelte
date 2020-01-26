<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<div class="c-container">
    <Header />
    <slot />
    <Footer />
</div>