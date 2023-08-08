<script lang="ts">
	import Money from '$src/lib/components/Money.svelte';
	import { goto } from '$app/navigation';
	import { createCart } from '$src/lib/utils/shopify';
	export let data;
	const { product } = data;
	const selected_variant = product.variants.nodes[0];
	async function direct_buy() {
		if (!product) throw Error('Product not found');
		const cart = await createCart(selected_variant.id, 1);
		if (!cart) throw Error('Cart creation failed');
		goto(cart.checkoutUrl);
	}
</script>

<div
	class="z-10 absolute w-full md:w-auto right-0 bottom-[15svh] md:right-[15vw] md:bottom-[23svh] md:skew-x-[25deg] bg-primary-side md:pl-4"
>
	<div
		class="flex flex-col bg-text-primary text-black md:[&>*]:-skew-x-[25deg] px-20 py-4 pb-8 gap-8"
	>
		<h1 class="before:content-[''] mx-auto md:-mb-3">
			<span class="block text-4xl w-full -mb-2">HyPERTRANCE</span>
			<span class="pl-24 block text-4xl">SAMPLEPACK</span>
		</h1>
		<div class="flex gap-3 justify-center items-end -mt-1">
			<Money
				price={selected_variant.price}
				showCurrency={true}
				class="p-2 ml-1 px-[2.4rem] w-fit skew-x-[25deg] [&>*]:-skew-x-[25deg] font-michroma before:content-[''] bg-primary-side ring-1 ring-primary text-primary"
			>
				<span class="text-xs whitespace-nowrap overflow-visible -ml-2 mb-1 w-0"
					>introductory price</span
				>
			</Money>
			{#if selected_variant.compareAtPrice !== null && selected_variant.compareAtPrice !== selected_variant.price}
				<Money
					price={selected_variant.compareAtPrice}
					compareAtPrice={true}
					showCurrency={true}
					class=" -ml-3 p-2 px-4 w-fit  skew-x-[25deg] [&>*]:-skew-x-[25deg] ring-1 ring-primary font-michroma  decoration-black"
				/>
			{/if}
		</div>
		<div class="text-2xl flex justify-between">
			<button
				class="hyper-button button-primary-inverse "
				on:click={direct_buy}
			>
				<span class="inline-block">buy now</span>
			</button>
			<!-- <div class="bg-primary skew-x-[25deg] py-1 px-8 m-2">
						<a
                                                        data-sveltekit-reload
							class="-skew-x-[25deg] before:content-['>_']"
							href="/app/store/product/hypertrance-samplepack">buy now</a
						>
					</div> -->
			<a
				href="#about"
				data-sveltekit-reload
				class="block text-bg-primary hover:text-black active:text-black py-1 px-2 m-2">learn more</a
			>
		</div>
	</div>
	<!-- <a href="#about" class="block text-4xl -mb-7 py-4 text-center font-suissnord"
		><span class="inline-block -skew-x-[25deg]">🢗</span></a
	> -->
</div>
