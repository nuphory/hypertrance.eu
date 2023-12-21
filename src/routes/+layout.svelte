<script lang="ts">
	import Announcement from '$lib/components/layout/Announcement.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { announcements } = data;

	// Components
	import Footer from '../lib/components/layout/Footer.svelte';
	// Styles
	import { browser } from '$app/environment';
	import '$lib/styles/app.scss';
	import Header from '$src/lib/components/layout/Header.svelte';

	let ready = false;
	onMount(() => {
		ready = true;

		announcements.forEach((announcement) => {
			const fields = announcement.fields;
			const color = fields.find((field) => field.key === 'color').value;

			document.body.style.setProperty(
				`--announcement-${announcement.id.split('/').pop()}-color`,
				color
			);
		});
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
		<Header />
		<!-- content here -->
		<div in:fade={{ duration: 500 }}>
			<div class="flex flex-col w-full sticky top-0 z-20">
				{#each announcements as announcement, i}
					<!-- bg-[hsl(355_80%_55%)] -->
					<div
						style="background-color: var(--announcement-{announcement.id.split('/').pop()}-color)"
						class="block text-center p-3"
					>
						{announcement.fields.find((field) => field.key === 'label').value}
					</div>
				{/each}
			</div>
			<slot />
			<Footer />
		</div>
	{/if}
{:else}
	<div in:fade={{ duration: 500 }} class="opacity-0 relative">
		<div class="flex flex-col w-full sticky top-0 z-20">
			{#each announcements as announcement, i}
				<!-- bg-[hsl(355_80%_55%)] -->
				<div
					style="background-color: var(--announcement-{announcement.id.split('/').pop()}-color)"
					class="block text-center p-3"
				>
					{announcement.fields.find((field) => field.key === 'label').value}
				</div>
			{/each}
		</div>
		<slot />
		<Footer />
	</div>
{/if}
<!-- <AudioPlayer class="sticky bottom-0"/> -->
