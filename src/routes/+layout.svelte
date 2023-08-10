<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	// Components
	import Footer from '../lib/components/layout/Footer.svelte';

	// Styles
	import '$lib/styles/app.scss';
	import { browser } from '$app/environment';

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

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@hypertranceRT" />
	<meta name="twitter:creator" content="@hypertranceRT" />
</svelte:head>

{#if browser}
	{#if ready}
		<!-- content here -->
		<div in:fade={{ duration: 500 }}>
			<slot />
			<Footer />
		</div>
	{/if}
{:else}
	<div in:fade={{ duration: 500 }} class="opacity-0">
		<slot />
		<Footer />
	</div>
{/if}
<!-- <AudioPlayer class="sticky bottom-0"/> -->
