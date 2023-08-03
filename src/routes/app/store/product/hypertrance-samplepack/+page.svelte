<script lang="ts">
	import Money from '$src/lib/components/Money.svelte';
	import ShopifyImage from '$src/lib/components/ShopifyImage.svelte';
	import AddToCartForm from '../AddToCartForm.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let { product } = data;
	console.log(product);

	let selectedVariant = product.variants.nodes[0];

	let descSplit = product.descriptionHtml.split('\n');

	let tagline = descSplit[0];
	let description = descSplit.slice(1).join('\n');
</script>

<main class="">
	<div class="relative sm:container">
		<div class="container sm:px-0 my-4">
			<button
				data-sveltekit-reload
				on:click={() => (window.location.href = '/')}
				class="hyper-button button-neutral hover:skew-x-[25deg] [&>*]:hover:-skew-x-[25deg] active:skew-x-[25deg] [&>*]:active:-skew-x-[25deg]"
				><span class="inline-block before:content-['<_']"> &nbsp; back to front page</span></button
			>
		</div>
		<div class="flex flex-col md:flex-row justify-start gap-8">
			<div
				class="mx-3 md:m-0 md:aspect-square flex-1 flex flex-row md:flex-col gap-3 overflow-scroll md:overflow-visible"
			>
				{#if product.images.nodes.length > 0 && product.images.nodes[0] !== null}
					{#each product.images.nodes as image}
						{#if image !== null}
							<ShopifyImage
								class="w-auto h-[75vw] max-h-80 aspect-square object-cover object-center"
								{image}
								sizes="(min-width: 1000px) 1000px"
								loading="lazy"
							/>
						{/if}
					{/each}
				{/if}
			</div>

			<div class="@container max-md:container flex-1">
				<h1 class="mb-3 before:content-['']">{product.title}</h1>
				<Money
					price={selectedVariant.price}
					showCurrency={true}
					class="font-michroma before:content-[''] bg-text-primary text-bg-primary p-2 w-fit"
				/>
				{#if selectedVariant.compareAtPrice !== null && selectedVariant.compareAtPrice !== selectedVariant.price}
					<Money
						price={selectedVariant.compareAtPrice}
						showCurrency={true}
						class="font-michroma text-primary p-2 w-fit line-through"
					/>
				{/if}
				<!-- <p class="font-michroma before:content-[''] bg-text-primary text-bg-primary p-2 w-fit">
					{parseFloat(selectedVariant.price.amount || '').toFixed(2)}
					{selectedVariant.price.currencyCode}
				</p> -->
				<i class="[&>p]:my-4">{@html tagline}</i>
				<!-- <AddToCart /> -->

				<AddToCartForm
					variantAvailableForSale={true}
					variantId={selectedVariant.id}
					class="w-full flex flex-col lg:flex-row items-end justify-between gap-8"
				/>

				<div class="my-8 max-w-sm border-t border-neutral" />

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
	</div>
</main>

<style lang="scss">
</style>
