<script lang="ts">
	import { goto } from '$app/navigation';
	import { addCartItem, isCartUpdating } from '$lib/stores/cart';
	import CartIcon from '$src/lib/components/icons/CartIcon.svelte';
	import { createCart } from '$src/lib/utils/shopify/cart';
	import { getProductByHandle } from '$src/lib/utils/shopify/product';
	import type { ProductResult, SelectedOptionResult } from '$src/lib/utils/shopify/schemas/product';
	import type { z } from 'zod';
	import Money from './Money.svelte';
	import { fly } from 'svelte/transition';

	export let product: z.infer<typeof ProductResult>;
	export let trackQuantity: boolean = true;

	const descSplit = product.descriptionHtml.split('\n');

	const tagline = descSplit[0];
	const description = descSplit.slice(1).join('\n');

	let quantity = 1;

	let selectedVariant = product.variants.nodes[0];

	$: {
		if (product.variantBySelectedOptions) {
			selectedVariant = product.variantBySelectedOptions;
		}
	}

	const { options } = product;

	const selectedOptions: Map<string, string> = new Map(
		options.map((option) => [option!.name, option!.values[0]])
	);

	function selectOption(e: Event) {
		const { name, value } = e.target as HTMLSelectElement;

		selectedOptions.set(name, value);

		updateProduct([...selectedOptions.entries()].map(([key, value]) => ({ name: key, value })));
	}

	async function updateProduct(selectedOptions: z.infer<typeof SelectedOptionResult>[]) {
		product = await getProductByHandle({ handle: product.handle, selectedOptions });
		console.log(product);
	}

	async function addToCart(e: Event) {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		console.log(formData);
		const { merchandiseId, quantity } = Object.fromEntries(formData);
		const item = {
			merchandiseId: merchandiseId as string,
			quantity: parseInt(quantity as string)
		};
		addCartItem(item);
	}

	async function buyNow() {
		const cart = await createCart(selectedVariant.id, quantity);

		if (!cart) throw Error('Failed to create cart');
		goto(cart.checkoutUrl);
	}
</script>

<div class="static {$$restProps.class}">
	<div class="flex flex-col gap-8 container py-8 bg-text-primary text-bg-primary">
		<!-- Product Information -->
		<div>
			<h1 class="mb-3 before:content-['']">{product.title}</h1>
			{#key selectedVariant.price}
				<div
					in:fly={{ x: -5, duration: 150, delay: 150 }}
					out:fly={{ x: 5, duration: 150}}
					class="flex gap-2 mb-8 transition-none [&:nth-child(3)]:mb-0 [&:nth-child(3)]:h-0"
				>
					<Money
						price={selectedVariant.price}
						showCurrency={true}
						class="font-michroma before:content-[''] bg-primary text-primary p-2 w-fit"
					/>
					{#if selectedVariant.compareAtPrice && selectedVariant.compareAtPrice !== selectedVariant.price}
						<Money
							price={selectedVariant.compareAtPrice}
							compareAtPrice={true}
							showCurrency={true}
							class="font-michroma p-2 w-fit"
						/>
					{/if}
				</div>
			{/key}
			<i class="[&_p]:mb-0">
				<slot name="tagline">An amazing product</slot>
			</i>
		</div>

		<!-- Product Options -->
		<form on:submit|preventDefault={updateProduct} class="flex flex-col gap-4">
			{#if product.options}
				{#each product.options as option}
					{#if option}
						<div>
							<label class="inline-block mb-2" for={option.name}>{option.name}</label>
							<select
								on:change={selectOption}
								class="
                                                                hyper-button button-primary-inverse
                                                                px-6 w-full
                                                                cursor-pointer
                                                                bg-primary text-primary
                                                        "
								id={option.name}
								name={option.name}
							>
								{#each option.values as value}
									<option
										class="
                                                                                font-sans
                                                                                bg-primary text-primary
                                                                        "
										{value}
									>
										{value}
									</option>
								{/each}
							</select>
						</div>
					{/if}
				{/each}
			{/if}
		</form>

		<!-- Add To Cart -->
		<form on:submit|preventDefault={addToCart} class="flex flex-col gap-4">
			<input type="hidden" name="merchandiseId" bind:value={selectedVariant.id} />
			<div class:hidden={!trackQuantity} class="w-full">
				<label class="inline-block mb-2" for="quantity">QTY</label>
				<div class="flex w-full">
					<button
						class="hyper-button button-primary-inverse aspect-square w-14 p-3 overflow-clip"
						on:click={(e) => {
							e.preventDefault();
							if (quantity > 1) quantity--;
						}}>-</button
					>
					<input
						id="quantity"
						name="quantity"
						class="flex-1 bg-primary text-primary w-14 px-6 text-right hyper-button button-primary-inverse"
						type="number"
						min="1"
						bind:value={quantity}
					/>
					<button
						class="hyper-button button-primary-inverse aspect-square w-14 p-4 overflow-clip"
						on:click={(e) => {
							e.preventDefault();
							quantity++;
						}}>+</button
					>
				</div>
			</div>

			<div class="w-full flex max-lg:flex-col justify-start gap-4 lg:gap-8">
				<button
					class="hyper-button button-primary-inverse w-full"
					type="submit"
					disabled={$isCartUpdating}
				>
					<CartIcon
						class="inline-block transition-[fill,margin] duration-[var(--duration)] ease-out aspect-square h-[1.25em] mr-2 opacity-100"
					/> <span>add to cart</span>
				</button>
				<button
					class="hyper-button button-tertiary-inverse w-full"
					on:click|preventDefault={buyNow}
					disabled={$isCartUpdating}
				>
					<CartIcon
						class="inline-block transition-[fill,margin] duration-[var(--duration)] ease-out aspect-square h-[1.25em] mr-2 opacity-100"
					/> <span>buy now</span>
				</button>
			</div>
		</form>
	</div>
	<slot name="description">An amazing product</slot>
</div>
