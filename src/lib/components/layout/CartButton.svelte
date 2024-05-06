<script lang="ts">
	import CartIcon from '$lib/components/icons/CartIcon.svelte';
	import { cart, initCart, isCartDrawerOpen } from '$lib/stores/cart';
	import { onMount } from 'svelte';

	onMount(() => {
		initCart();
	});

	function openCart() {
		isCartDrawerOpen.set(true);
	}
</script>

<button
	class="hyper-button p-3 px-6 whitespace-nowrap overflow-clip askew border-l border-b h-full w-full"
	on:click={openCart}
>
	<CartIcon
		class="
			inline-block
			transition-[fill,margin] duration-[var(--duration)] ease-out
			aspect-square h-[1.25em]
			mr-2
			fill-text-neutral
			opacity-100
		"
	/>
	<span>{String($cart?.totalQuantity).padStart(3, '0')}</span>
</button>
