<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
        
        // Assets
	import artists from '$lib/assets/artists';
        import faviconSrc from '$lib/assets/img/logo/hypertrance-favicon.svg';

	// Components
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	// Styles
	import '$lib/styles/app.scss';

	import '@fontsource/montserrat';
	import { description, name, url } from '$src/lib/identity';


	onMount(() => {
		if (!browser) return;

		document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		window.addEventListener('scroll', () => {
			document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		});
	});
</script>

<svelte:head>
        <!-- <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link
                rel="icon"
                type="image/png"
                sizes="194x194"
                href="/assets/favicon/favicon-194x194.png"
        />
        <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/assets/favicon/android-chrome-192x192.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#272d3b" />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="nuphory" />
        <meta name="application-name" content="nuphory" />
        <meta name="msapplication-TileColor" content="#272d3b" />
        <meta name="msapplication-TileImage" content="/assets/favicon/mstile-144x144.png" /> 
        <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" /> -->
        <link rel="icon" type="image/png" sizes="16x16" href="{url}/assets/img/logo/hypertrance-favicon.svg" />
        <meta name="theme-color" content="#fffaf7" />

        <meta property="og:site_name" content={name} />

        <meta
                name="keywords"
                content="{name}, {name} music, music, house, trance, hypertrance, neoy2k, progressive house, {artists.map((artist) => artist.name).join(', ')}}"
        />
        <meta name="description" content={description} />

        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@{name}" />
        <meta name="twitter:creator" content="@{name}" />
</svelte:head>

<Header />
<slot />
<Footer />

<style lang="scss">
	body {
	}
</style>
