<script>
	// imports
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';

	// components
	import AddToCart from '$lib/components/AddToCart.svelte';

	// stores
	import { onMount } from 'svelte';
	import ShopifyImage from '$src/lib/components/ShopifyImage.svelte';
	import Carousel from '$src/lib/components/Carousel.svelte';
	import CartIcon from '$src/lib/components/icons/CartIcon.svelte';
	import { addCartItem } from '$src/lib/stores/cart';

	/** @type {import('./$types').PageData} */
	export let data;

	let { product } = data;
	console.log(product);

	let selectedVariant = product.variants.nodes[0];

	let descSplit = product.descriptionHtml.split('\n');

	let tagline = descSplit[0];
	let description = descSplit.slice(1).join('\n');
</script>

<main class="py-8">
	<div class="relative sm:container flex flex-col sm:flex-row justify-start gap-8">
		<div class="aspect-square flex-1 flex flex-col gap-3">
			{#if product.images.nodes.length > 0 && product.images.nodes[0] !== null}
				{#each product.images.nodes as image}
					{#if image !== null}
						<ShopifyImage
							class="w-full"
							{image}
							sizes="(min-width: 1000px) 1000px"
							loading="lazy"
						/>
					{/if}
				{/each}
			{/if}
		</div>

		<div class="@container max-md:container flex-1 font-comsat-navy">
			<h1 class="mb-1">{product.title}</h1>
			<h2 class="font-comsat-navy before:content-[''] bg-text-neutral text-bg-neutral p-2 w-fit">
				{parseFloat(selectedVariant.price.amount || '').toFixed(2)}
				{selectedVariant.price.currencyCode}
			</h2>
			<span class="[&>p]:my-4">{@html tagline}</span>
			<!-- <AddToCart /> -->
			<div class="flex items-end justify-between">
				<div>
					<label for="quantity-input">QTY</label>
					<div class="flex">
						<button class="button-neutral aspect-square w-14 p-3">-</button>
						<input
							id="quantity-input"
							class="bg-black aspect-square w-14 px-6 bg-"
							type="number"
							value="1"
						/>
						<button class="button-neutral aspect-square w-14 p-4">+</button>
					</div>
				</div>
				<button class="button-secondary">
					<CartIcon
						class="inline-block
					transition-[fill,margin] duration-[var(--duration)] ease-out
					aspect-square h-[1.25em] 
					mr-2
					fill-text-neutral
					opacity-100 "
                                        on:click={() => {addCartItem(product.)}}
					/> Add to Cart
				</button>
			</div>

			<div class="my-8 border-t border-neutral" />

			<div class="flex flex-col gap-4">
				<h2>Description</h2>
				<div class="prose">
					{#if description}
						{@html description}
					{/if}
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
