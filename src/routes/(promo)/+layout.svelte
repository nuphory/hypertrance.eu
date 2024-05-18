<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	// Components
	import Footer from '$lib/components/layout/Footer.svelte';
	// Styles
	import { browser } from '$app/environment';
	import '$lib/styles/app.scss';
	import Header from '$src/lib/components/layout/Header.svelte';

	export let data;
	const { announcements } = data;

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

<ul class="flex flex-col w-full sticky top-0 z-20">
	{#each announcements as announcement, i}
		<!-- bg-[hsl(355_80%_55%)] -->
		<li
			style="background-color: var(--announcement-{announcement.id.split('/').pop()}-color)"
			class="block text-center p-3"
		>
			{announcement.fields.find((field) => field.key === 'label').value}
		</li>
	{/each}
</ul>

<div class="relative">
	{#if ready}
		<Header class="top-16 -mb-12" />
		<!-- content here -->
		<div in:fade={{ duration: 500 }}>
			<slot />
			<Footer />
		</div>
	{/if}
</div>
<!-- <AudioPlayer class="sticky bottom-0"/> -->
