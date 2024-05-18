<script lang="ts">
	import { cubicIn as easeIn, cubicOut as easeOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';

	const transitionDuration = 250;

	let ready = false;
	export let data;

	import { browser } from '$app/environment';
	import Header from '$lib/components/layout/Header.svelte';
	import { onMount } from 'svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	onMount(() => {
		ready = true;
	});
</script>

<!-- {#if ready} -->
	<Header class="top-4" />
	<!-- content here -->
	<div in:fade={{ duration: 500 }}>
		<!-- {#key data.url} -->
			<div
				class="flex-1"
				in:fly={{
					x: -50,
					y: 0,
					opacity: 0,
					duration: transitionDuration,
					delay: transitionDuration,
					easing: easeOut
				}}
				out:fly={{
					x: 50,
					y: 0,
					opacity: 0,
					duration: transitionDuration,
					delay: 0,
					easing: easeIn
				}}
			>
				<slot />
			</div>
		<!-- {/key} -->
		<Footer />
	</div>
<!-- {/if} -->
