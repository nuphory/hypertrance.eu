<script lang="ts">
	import { siteName, siteDescription, tagLine } from './+layout';

	import { browser } from '$app/environment';

	if (browser) {
		// TODO load background video after background image
	}
</script>

<svelte:head>
	<title>{siteName}</title>
	<meta name="title" content="{siteName} — {tagLine}" />
	<meta
		name="keywords"
		content="{siteName}, {siteName}music, {siteName} music, volant, volantmusic, music, house, trance, hypertrance, neoy2k, progressive house"
	/>
	<meta name="description" content={siteDescription} />

	<link rel="canonical" href="https://nuphory.com" />

	<meta name="robots" content="index, follow" />

	<meta property="og:title" content="{siteName} — {tagLine}" />
	<meta property="og:description" content={siteDescription} />
	<meta property="og:image" content="https://{siteName}.com/assets/logo/png/summary.png" />
	<meta property="og:url" content="https://{siteName}.com" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@{siteName}" />
	<meta name="twitter:creator" content="@{siteName}" />
	<meta name="twitter:title" content={siteName} />
	<meta name="twitter:description" content={siteDescription} />
	<meta name="twitter:image" content="https://{siteName}.com/assets/logo/png/summary.png" />
</svelte:head>

<section>
	<!-- TODO title -->
	<!-- TODO video -->
	<!-- TODO buttons -->
	<!-- TODO description -->
	<!-- TODO artists -->
	<!-- TODO credit -->
</section>

<style>
</style>
