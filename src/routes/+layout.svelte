<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Components
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	// Styles
	import '$lib/styles/app.scss';

	import '@fontsource/montserrat';

	onMount(() => {
		if (!browser) return;

		document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		window.addEventListener('scroll', () => {
			document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		});
	});
</script>

<Header />
<slot />
<Footer />

<style lang="scss">
	body {
	}
</style>
