<script lang="ts">
	import Money from '$src/lib/components/utils/store/Money.svelte';
	import { goto } from '$app/navigation';
	import { createCart } from '$src/lib/utils/shopify/cart';
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
		<!-- <div class="flex gap-3 justify-start items-end -mt-1">
			{#if selectedVariant.compareAtPrice !== null && selectedVariant.compareAtPrice?.amount !== selectedVariant.price?.amount}
				<Money
					price={selectedVariant.compareAtPrice}
					compareAtPrice={true}
					showCurrency={true}
					class="
						-ml-3 p-2 px-4 w-fit  skew-x-[25deg] [&>*]:-skew-x-[25deg] ring-1 ring-primary font-michroma  decoration-black
						"
				/>
			{/if} 
		</div>-->
		<div class="mt-4 text-2xl flex justify-center">
			<button
				class="hyper-button !px-8 button-primary-inverse skew-x-[25deg] [&>*]:-skew-x-[25deg]"
				on:click={buyNow}
			>
				<span class="inline-block">buy now</span>
			</button>
			<!-- <div class="bg-primary skew-x-[25deg] py-1 px-8 m-2">
						<a
                                                        data-sveltekit-reload
							class="-skew-x-[25deg] before:content-['>_']"
							href="/app/store/products/hypertrance-samplepack">buy now</a
						>
					</div> -->
			<Money
				price={selectedVariant.price}
				showCurrency={true}
				class="
					flex items-center ml-px px-12 h-full w-fit skew-x-[25deg] [&>*]:-skew-x-[25deg] font-michroma before:content-[''] bg-primary-side ring-1 ring-primary text-primary text-base
				"
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
	</div>
	<!-- <a href="#about" class="block text-4xl -mb-7 py-4 text-center font-suissnord"
		><span class="inline-block -skew-x-[25deg]">🢗</span></a
	> -->
</div>
