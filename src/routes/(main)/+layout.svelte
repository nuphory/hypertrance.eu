<script lang="ts">
	import { cubicIn as easeIn, cubicOut as easeOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const transitionDuration = 250;

	export let data;

	import { browser } from '$app/environment';
</script>

{#if browser}
	<!-- content here -->
	{#key data.url}
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
	{/key}
{:else}
	<!-- else content here -->
	<div
		class="flex-1 opacity-0"
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
{/if}
