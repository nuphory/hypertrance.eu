<script lang="ts">
        // Imports

        // Components
        import Footer from "$lib/components/Footer.svelte";
        import Header from "$lib/components/Header.svelte";

        // Styles
        import "$lib/styles/app.scss";
        
        import '@fontsource/playfair-display-sc/';
</script>

<Header />
<slot />
<Footer />