<script lang="ts">
	// imports
	import { browser } from '$app/environment';
	import { onDestroy, onMount, type Snippet } from 'svelte';
	// types
	import type { LayoutData } from './$types';
	// transitions
	import { expoOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	// stores / state
	import { apply_settings, settings_store } from '$lib/stores/settings';

	// components
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import PageTransition from './PageTransition.svelte';
	// styles
	import { beforeNavigate } from '$app/navigation';
	import { apply_cookie_consent, cookie_consent_store } from '$lib/stores/cookie-consent';
	import '$lib/styles/app.scss';

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
	onDestroy(() => {
		ready = false;
	});

	beforeNavigate(({ to, from, type, willUnload, cancel }) => {
		if (willUnload) ready = false;
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

<!-- {#if browser} -->
{#if ready}
	<div
		class="max-h-screen overflow-y-scroll"
		in:scale={{
			duration: 1500,
			easing: expoOut,
			start: 1.01,
			opacity: 0
		}}
		out:scale={{
			duration: 1500,
			easing: expoOut,
			start: 1.01,
			opacity: 0
		}}
	>
		{@render layout()}
		<a href="/hypertrance-1">hypertrance-1</a>
		<a href="/hypertrance-2">hypertrance-2</a>
	</div>
{/if}
<!-- {:else}
	<div class="max-h-screen overflow-y-scroll">
		{@render layout()}
		<a href="/hypertrance-1">hypertrance-1</a>
		<a href="/hypertrance-2">hypertrance-2</a>
	</div>
{/if} -->
