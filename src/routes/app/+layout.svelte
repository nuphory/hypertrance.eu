<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Assets
	import artists from '$lib/metadata/artist';

	// Components
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	// import Header from '$lib/components/Header.svelte';

	// Styles
	import '$lib/styles/app.scss';
        import '@splidejs/svelte-splide/css';

	import '@fontsource/montserrat';
	import '@fontsource/inter/400.css';
	import { description, name } from '$lib/identity';

	onMount(() => {
		if (!browser) return;

		document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		window.addEventListener('scroll', () => {
			document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		});
	});
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-touch-icon.png" />
	<link rel="manifest" href="/assets/img/favicon/site.webmanifest" />
	<link rel="mask-icon" href="/assets/img/favicon/safari-pinned-tab.svg" color="#000000" />
	<link rel="shortcut" href="/assets/img/favicon/favicon.ico" />
	<meta name="apple-mobile-web-app-title" content="hypertrance" />
	<meta name="application-name" content="hypertrance" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="msapplication-config" content="/assets/img/favicon/browserconfig.xml" />
	<meta name="theme-color" content="#ffffff" />
	<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon.svg" />

	<meta property="og:site_name" content={name} />

	<meta
		name="keywords"
		content="
			{name}, {name} music, music, house, trance, hypertrance, neoy2k, progressive house,
			{Array.from(artists)
			.map((artist) => {
				return artist.name;
			})
			.join(', ')}
		"
	/>
	<meta name="description" content={description} />

	<meta property="og:description" content={description} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@{name}" />
	<meta name="twitter:creator" content="@{name}" />
</svelte:head>

<Header />
<slot />
<AudioPlayer />
<Footer />
