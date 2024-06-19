<!-- A carousel component for Svelte -->

<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { CarouselOptions } from './types/carousel.js';

	let {
		children,
		arrows,
		dots,
		options
	}: {
		children: Snippet;
		arrows?: Snippet;
		dots?: Snippet;
		options: CarouselOptions;
	} = $props();
</script>

{#snippet default_arrows()}

{/snippet}

{#snippet default_dots()}

{/snippet}

<div class="carousel">

</div>
