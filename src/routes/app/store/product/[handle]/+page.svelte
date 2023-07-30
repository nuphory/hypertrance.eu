<script>
	import ShopifyImage from '$src/lib/components/ShopifyImage.svelte';
	import AddToCartForm from './AddToCartForm.svelte';

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
	<div class="relative sm:container">
		<a
			href="/"
			class="m-4 px-4 py-2 bg-text-neutral hover:bg-text-primary text-bg-neutral hover:text-bg-neutral"
			>&lt; back to front page</a
		>
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

			<div class="@container max-md:container flex-1 font-comsat-navy">
				<h1 class="mb-1">{product.title}</h1>
				<h2 class="font-comsat-navy before:content-[''] bg-text-neutral text-bg-neutral p-2 w-fit">
					{parseFloat(selectedVariant.price.amount || '').toFixed(2)}
					{selectedVariant.price.currencyCode}
				</h2>
				<span class="[&>p]:my-4">{@html tagline}</span>
				<!-- <AddToCart /> -->

				<AddToCartForm
					variantAvailableForSale={true}
					variantId={selectedVariant.id}
					class="w-full flex flex-col lg:flex-row items-end justify-between gap-8"
				/>

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
	</div>
</main>
