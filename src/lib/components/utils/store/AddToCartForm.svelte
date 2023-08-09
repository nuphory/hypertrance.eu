<script lang="ts">
	import { goto } from '$app/navigation';
	import { addCartItem, isCartUpdating } from '$lib/stores/cart';
	import { createCart } from '$src/lib/utils/shopify';

	import CartIcon from '$src/lib/components/icons/CartIcon.svelte';

	export let variantId: string;
	export let trackQuantity: boolean = true;

	let quantity = 1;

	async function addToCart(e: Event) {
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		console.log(formData);
		const { id, quantity } = Object.fromEntries(formData);
		const item = {
			id: id as string,
			quantity: parseInt(quantity as string)
		};
		addCartItem(item);
	}

	async function direct_buy(e) {
                e.preventDefault();
		const cart = await createCart(variantId, quantity);
		if (!cart) throw Error('Cart creation failed');
		goto(cart.checkoutUrl);
	}
</script>

<form on:submit|preventDefault={(e) => addToCart(e)} class={$$restProps.class}>
	<input type="hidden" name="id" value={variantId} />

	<div class:hidden={!trackQuantity} class="w-full max-lg:w-full">
		<label class="inline-block mb-2" for="quantity">QTY</label>
		<div class="flex w-full">
			<button
				class="hyper-button button-primary-inverse aspect-square w-14 p-3 overflow-clip"
				on:click={(e) => {
					e.preventDefault();
					quantity--;
				}}>-</button
			>
			<input
				id="quantity"
				name="quantity"
				class="flex-1 bg-primary text-primary w-14 px-6 text-right hyper-button button-primary-inverse"
				type="number"
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
			on:click={direct_buy}
			disabled={$isCartUpdating}
		>
			<CartIcon
				class="inline-block transition-[fill,margin] duration-[var(--duration)] ease-out aspect-square h-[1.25em] mr-2 opacity-100"
			/> <span>buy now</span>
		</button>
	</div>
</form>

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
