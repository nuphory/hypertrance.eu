<script lang="ts">
	export let product_id: string = '';

	export let quantity = 1;

	let addToCart = () => {
		console.log('add to cart');
	};
</script>

<div class="flex items-end gap-4 ${$$restProps.class}">
	<div class="flex-1">
		<label for="quantity-input" class="text-2xl">QTY</label>

		<div>
			<button
				class="button-neutral aspect-square disabled:opacity-50 disabled:pointer-events-none"
				on:click={() => quantity--}
				disabled={quantity <= 1}>-</button
			>
			<input class="bg-neutral aspect-square w-8" type="number" bind:value={quantity} min="1" />
			<button class="button-neutral aspect-square" on:click={() => quantity++}> + </button>
		</div>
	</div>
	<button class="button-primary flex-1">add to cart</button>
</div>
