<script lang="ts">
	// imports
	import { onMount, type Snippet } from 'svelte';
	import { browser } from '$app/environment';
	// types
	import type { LayoutData } from './$types.js';
	// transitions
	import { scale } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';

	// stores / state
	import { apply_settings, settings_store } from '$lib/stores/settings';

	// components
	import PageTransition from './PageTransition.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	// styles
	import '$lib/styles/app.scss';
	import { apply_cookie_consent, cookie_consent_store } from '$lib/stores/cookie-consent.js';

	let {
		data,
		children
	}: {
		data: LayoutData;
		children: Snippet;
	} = $props();

	let ready = $state(false);

	onMount(() => {

		// apply cookie consent
		const cookie_consent = cookie_consent_store.get();
		if (cookie_consent) apply_cookie_consent(cookie_consent);

		// apply settings
		const settings = settings_store.get();
		if (settings) apply_settings(settings);

		ready = true; // fadeIn transition
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

{#snippet layout()}
	<Header />
	<PageTransition url={data.url.pathname} {children} />
	<Footer />
{/snippet}

{#if browser}
	{#if ready}
		<div
			class="max-h-screen overflow-y-scroll"
			in:scale={{
				duration: 1500,
				easing: expoOut,
				start: 1.01,
				opacity: 0
			}}
		>
			{@render layout()}
		</div>
	{/if}
{:else}
	<div class="max-h-screen overflow-y-scroll">
		{@render layout()}
	</div>
{/if}
