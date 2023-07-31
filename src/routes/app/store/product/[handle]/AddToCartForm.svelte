<script lang="ts">
	import { addCartItem, isCartUpdating, cart } from '$lib/stores/cart';

	import CartIcon from '$src/lib/components/icons/CartIcon.svelte';

	export let variantId: string;

	let quantity = "1";

	function addToCart(e: Event) {
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
</script>

<form on:submit|preventDefault={(e) => addToCart(e)} class={$$restProps.class}>
	<input type="hidden" name="id" value={variantId} />

	<div class="max-lg:w-full pointer-events-none opacity-50">
		<label for="quantity">QTY</label>
		<div class="flex w-full">
			<button class="pointer-events-none button-neutral aspect-square w-14 p-3" on:click={() => quantity--}>-</button>
			<input
				id="quantity"
				name="quantity"
                                class="pointer-events-none max-lg:flex-1 bg-black lg:aspect-square w-14 px-6 text-right"
				type="number"
				bind:value={quantity}
			/>
			<button class="pointer-events-none button-neutral aspect-square w-14 p-4" on:click={() => quantity++}>+</button>
		</div>
	</div>
	<button class="button-secondary w-full lg:w-max" type="submit" disabled={$isCartUpdating}>
		<CartIcon
			class="inline-block transition-[fill,margin] duration-[var(--duration)] ease-out aspect-square h-[1.25em] mr-2 fill-text-neutral opacity-100"
		/> purchase
	</button>
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
