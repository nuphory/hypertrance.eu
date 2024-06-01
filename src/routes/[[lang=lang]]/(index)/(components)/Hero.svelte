<script lang="ts">
	import Money from '$lib/components/(v2)/shopify/Money.svelte';
	import { goto } from '$app/navigation';
	import { createCart } from '$lib/shopify/(v2)/cart';
	export let data;
	const { product } = data;
	const selectedVariant = product.variants.nodes[0];
	async function buyNow() {
		if (!product) throw Error('Product not found');
		const cart = await createCart(selectedVariant.id, 1);
		if (!cart) throw Error('Cart creation failed');
		goto(cart.checkoutUrl);
	}
</script>

<div
	class="z-10 absolute w-full md:w-auto right-0 bottom-0 md:right-[10vw] 3xl:right-[20vw] md:bottom-[10vh] md:skew-x-[25deg] bg-primary-side md:pl-4"
>
	<div
		class="flex flex-col bg-text-primary text-black md:[&>*]:-skew-x-[25deg] px-20 py-4 pb-8 gap-8"
	>
		<h1 class="before:content-[''] mx-auto md:-mb-3 mt-3">
			<span class="block text-4xl w-full -mb-2">HyPERTRANCE</span>
			<span class="pl-24 block text-4xl">SAMPLEPACK</span>
		</h1>

		{#if selectedVariant.compareAtPrice !== null && selectedVariant.compareAtPrice?.amount !== selectedVariant.price?.amount}
			<div class="flex justify-center mt-4 text-sm font-michroma -ml-3">
				<div
					class="flex items-center px-12 py-4 skew-x-[25deg] [&>*]:-skew-x-[25deg] bg-primary-side ring-1 ring-primary"
				>
					<div class="absolute inset-0 -top-6 -left-3">discounted price</div>
					<Money price={selectedVariant.price} showCurrency={true} class="text-primary" />
				</div>

				<Money
					price={selectedVariant.compareAtPrice}
					compareAtPrice={true}
					showCurrency={true}
					class="flex items-center px-12 py-4 skew-x-[25deg] [&>*]:-skew-x-[25deg] ring-1 ring-primary"
				/>
			</div>

			<div class="flex justify-center text-xl w-full">
				<button
					class="hyper-button border border-hypertrance-900 flex-1 button-primary-inverse skew-x-[25deg] [&>*]:-skew-x-[25deg]"
					on:click={buyNow}
				>
					<span class="inline-block">buy now</span>
				</button>
				<a
					href="/store/products/hypertrance-samplepack"
					data-sveltekit-reload
					class="inline-block text-bg-primary hover:text-black active:text-black py-1 px-8 m-2"
					>learn more</a
				>
			</div>
		{:else}
			<div class="flex justify-center mt-4 text-2xl font-michroma -ml-3">
				<button
					class="hyper-button px-8 button-primary-inverse skew-x-[25deg] [&>*]:-skew-x-[25deg]"
					on:click={buyNow}
				>
					<span class="inline-block">buy now</span>
				</button>

				<Money
					price={selectedVariant.price}
					showCurrency={true}
					class="flex items-center h-full px-12 py-4 skew-x-[25deg] [&>*]:-skew-x-[25deg] text-base  bg-primary-side text-primary ring-1 ring-primary"
				/>
			</div>
			<div class="-mb-4 -mt-10 text-end text-lg">
				<a
					href="/store/products/hypertrance-samplepack"
					data-sveltekit-reload
					class="inline-block text-bg-primary hover:text-black active:text-black py-1 px-8 m-2"
					>learn more</a
				>
			</div>
		{/if}
	</div>
</div>
