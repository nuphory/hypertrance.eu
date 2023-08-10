<script lang="ts">
	import ProductForm from '$src/lib/components/utils/store/ProductForm.svelte';
	import ShopifyImage from '$src/lib/components/utils/store/ShopifyImage.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let { product } = data;

	const descSplit = product.descriptionHtml.split('\n');

	const tagline = descSplit[0];
	const description = descSplit.slice(1).join('\n');
</script>

<main class="py-2">
	<div class="relative sm:container">
		<div class="block md:hidden container sm:px-0 my-4">
			<button
				data-sveltekit-reload
				on:click={() => (window.location.href = '/')}
				class="hyper-button button-neutral w-full"
				><span class="inline-block before:content-['<_']"> &nbsp; back to front page</span></button
			>
		</div>
		<div class="relative flex flex-col md:flex-row justify-start gap-8">
			<div
				class="mx-3 md:mx-0 md:aspect-square flex-1 flex md:flex-col gap-3 overflow-scroll md:overflow-visible"
			>
				<div class="hidden md:block container sm:px-0">
					<button
						data-sveltekit-reload
						on:click={() => (window.location.href = '/')}
						class="hyper-button button-neutral w-full"
						><span class="inline-block before:content-['<_']">
							&nbsp; back to front page</span
						></button
					>
				</div>
				{#if product.images.nodes.length >= 2}
					{#each product.images.nodes as image}
						{#if image !== null}
							<ShopifyImage
								class="w-auto max-h-96 sm:max-h-[32rem] aspect-square object-cover object-center"
								{image}
								sizes="(min-width: 1000px) 1000px"
								loading="lazy"
							/>
						{/if}
					{/each}
				{:else if product.images.nodes.length === 1}
					<ShopifyImage
						class="w-full aspect-square object-cover object-center"
						image={product.images.nodes[0]}
						sizes="(min-width: 1000px) 1000px"
						loading="lazy"
					/>
				{:else}
					<div
						class="flex items-center justify-center p-4 w-full aspect-square font-michroma bg-text-primary text-bg-primary"
					>
						No preview available.
					</div>
				{/if}
			</div>

			<ProductForm {product} class="flex flex-col gap-8 flex-1 h-min sticky top-[5.5rem] ">
				<span slot="tagline" style="display:contents">{@html tagline}</span>
				<div slot="description" class="container flex flex-col gap-4">
					<h2>Description</h2>
					<div class="prose">
						{#if description}
							{@html description}
						{/if}
					</div>
				</div>
			</ProductForm>
		</div>
	</div>
</main>

<style lang="scss">
</style>
