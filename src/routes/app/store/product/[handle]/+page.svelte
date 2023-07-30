<script>
	// imports
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';

	// components
	import AddToCart from '$lib/components/AddToCart.svelte';

	// stores
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let { product } = data;
	console.log(product);

	let selectedVariant = product.variants.nodes[0];

	/**
	 * @type {HTMLParagraphElement}
	 */
	let taglineElement;

	onMount(() => {
		taglineElement.innerHTML = product.descriptionHtml.split('\n')[0];
	});
</script>

<main>
	<div class="relative sm:container flex flex-col sm:flex-row justify-start gap-8">
		<Splide
			options={{ rewind: true, drag: 'free', snap: true, type: 'slide' }}
			class="aspect-square flex-1"
			aria-label="My Favorite Images"
		>
			{#if product.images.nodes.length > 0 && product.images.nodes[0] !== null}
				{#each product.images.nodes as image}
					{#if image !== null}
						<!-- content here -->
						<SplideSlide>
							<img src={image.url} class="object-contain aspect-square w-full bg-slate-500/10" />
						</SplideSlide>
					{/if}
				{/each}
			{:else}
				<!-- else content here -->
			{/if}
		</Splide>

		<div class="@container max-md:container flex-1 font-comsat-navy">
			<h1 class="mb-1 before:content-['']">{product.title}</h1>
			<h2 class="font-comsat-navy before:content-['']">
				{parseFloat(selectedVariant.price.amount || '').toFixed(2)}
				{selectedVariant.price.currencyCode}
			</h2>
			<p bind:this={taglineElement} class="whitespace-nowrap overflow-hidden inline-block" />
			<!-- <AddToCart /> -->
		</div>
	</div>
</main>
