<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	// Assets
	import { description, name } from '$src/lib/assets/identity';
	import artists from '$src/lib/legacy/metadata/artist';
	// Components
	import Footer from '../lib/components/layout/Footer.svelte';

	// Styles
	import '$lib/styles/app.scss';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-touch-icon.png" />
	<link rel="manifest" href="/assets/img/favicon/site.webmanifest" />
	<link rel="mask-icon" href="/assets/img/favicon/safari-pinned-tab.svg" color="#000000" />
	<!-- <link rel="shortcut" href="/assets/img/favicon/favicon.ico" /> -->
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

{#if ready}
	<div in:fade={{ duration: 500 }}>
		<slot />
		<Footer />
	</div>
{/if}
<!-- <AudioPlayer class="sticky bottom-0"/> -->
