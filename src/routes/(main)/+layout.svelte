<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { cubicIn as easeIn, cubicOut as easeOut } from 'svelte/easing';

	const transitionDuration = 250;

	export let data;

	import Header from '../../lib/components/layout/Header.svelte';
</script>

<Header />
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
