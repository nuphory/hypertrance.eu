<script lang="ts">
	import { goto } from '$app/navigation';
	import { cart, isCartDrawerOpen, isCartUpdating, removeCartItems } from '$lib/stores/cart';
	import Money from '$src/lib/components/utils/store/Money.svelte';
	import ShopifyImage from '$src/lib/components/utils/store/ShopifyImage.svelte';
	import { fade, slide } from 'svelte/transition';

	let cartDrawerEl: HTMLDivElement;

	// Add classes to cart line items if cart is updating
	$: cartIsUpdatingClass = $isCartUpdating ? 'opacity-50 pointer-events-none' : '';

	// Add focus to cart drawer when it opens
	$: {
		if ($isCartDrawerOpen) {
			cartDrawerEl?.focus();
		}
	}

	function removeItem(id: string) {
		removeCartItems([id]);
	}

	function closeCartDrawer() {
		isCartDrawerOpen.set(false);
	}

	function onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeCartDrawer();
		}
	}
</script>

{#if $isCartDrawerOpen}
	<div class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
		<!-- Darken bg -->
		<div
			in:fade={{ duration: 500 }}
			out:fade={{ duration: 500 }}
			class="fixed inset-0 bg-black/50 transition-opacity"
			on:click={closeCartDrawer}
		/>
		<div
			in:slide={{ duration: 500 }}
			out:slide={{ duration: 500 }}
			class="absolute container flex flex-col justify-between py-8 max-w-lg bottom-100 right-0 w-full h-screen-small max-h-[min(calc(100dvh-6rem),48rem)] backdrop-blur backdrop-blur-lg bg-black/50 ring-1 ring-white"
		>
			<!-- Cart -->
			<div class="flex justify-between items-center">
				<h2 class="before:content-['']">Cart</h2>
				<button
					on:click={closeCartDrawer}
					class="hyper-button button-neutral flex items-center justify-center h-12 aspect-square font-suissnord"
					><span>X</span></button
				>
			</div>
			<div class="border-t my-2" />

			<!-- Cart Contents -->
			<div class="flex-1 overflow-scroll">
				{#if $cart && $cart.lines?.nodes.length > 0}
					<ul role="list" class="{cartIsUpdatingClass} gap-3">
						{#each $cart.lines?.nodes as item, i}
							{#if i > 0}
								<div class="border-t my-2" />
							{/if}
							<li class="grid grid-cols-12 gap-3">
								<a class="w-fit col-span-3" href={`/products/${item.merchandise.product.handle}`}>
									<ShopifyImage
										image={item.merchandise.image}
										class="rounded-lg flex-0 object-cover object-center aspect-square"
										sizes="(min-width: 100px) 300px"
										loading="lazy"
									/>
								</a>
								<span class="col-span-6 flex flex-col justify-between gap-2">
									<a class="w-fit" href={`/products/${item.merchandise.product.handle}`}>
										{item.merchandise.product.title}
									</a>
									<span
										>{item.quantity} x <Money
											price={item.cost.amountPerQuantity}
											showCurrency={true}
										/></span
									>
									<!-- <div class="flex">
                                                                                <button
                                                                                        class="hyper-button button-neutral flex items-center justify-center h-12 aspect-square font-suissnord"
                                                                                        on:click={() => setQuantity(item.id, item.quantity--)}>-</button
                                                                                >
                                                                                <input
                                                                                        id="quantity"
                                                                                        name="quantity"
                                                                                        class="pointer-events-none max-lg:flex-1 bg-black lg:aspect-square w-14 px-6 text-right"
                                                                                        type="number"
                                                                                        value={item.quantity}
                                                                                />
                                                                                <button
                                                                                        class="hyper-button button-neutral flex items-center justify-center h-12 aspect-square font-suissnord"
                                                                                        on:click={() => setQuantity(item.id, item.quantity++)}>+</button
                                                                                >
                                                                        </div> -->
								</span>
								<div class="col-span-3 flex flex-col justify-between items-end">
									<button
										on:click={() => {
											if ($isCartUpdating) return;
											removeItem(item.id);
										}}
										class="hyper-button button-neutral flex w-full items-center justify-center font-suissnord"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-5 h-5"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
									<Money price={item.cost.totalAmount} showCurrency={true} />
								</div>
							</li>

							<!-- <li class="grid py-8 grid-cols-12 gap-3">
								<div class="overflow-clip rounded-lg col-span-3 lg:col-span-2">
									<ShopifyImage
										image={item.merchandise.image}
										classList="object-cover h-full object-center aspect-1"
										sizes="(min-width: 100px) 100px"
										loading="lazy"
									/>
								</div>
								<div class="col-span-7 lg:col-span-8 flex flex-col gap-2">
									<a
										class="hover:underline w-fit"
										href={`/products/${item.merchandise.product.handle}`}
									>
										{item.merchandise.product.title}
									</a>
									<p class="text-xs">
										<Money price={item.cost.amountPerQuantity} />
									</p>
								</div>
								<div class="col-span-2 items-end flex justify-between flex-col">
									<button
										on:click={() => {
											if ($isCartUpdating) return;
											removeItem(item.id);
										}}
										class="hyper-button button-neutral flex items-center justify-center h-12 aspect-square font-suissnord"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-5 h-5"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
									<div>
										<p class="font-medium">
											<Money price={item.cost.totalAmount} />
										</p>
									</div>
								</div>
							</li> -->
						{/each}
					</ul>
				{:else}
					<div class="text-center mt-20">
						<p class="text-neutral">Your cart is empty</p>
						<a href="#" class="text-primary" on:click={closeCartDrawer}>
							Continue Shopping
							<span aria-hidden="true"> &rarr;</span>
						</a>
					</div>
				{/if}
			</div>
			<!-- Cart Summary -->
			<div class="border-t my-2" />
			<div class="flex justify-between">
				<p class="m-0">Subtotal</p>
				<p class="m-0">
					<Money price={$cart.cost.totalAmount} showCurrency={true} />
				</p>
			</div>

			<p class="my-2 text-white/50">Shipping and taxes calculated at checkout.</p>

			<!-- Checkout -->
			<button
				on:click={() => goto($cart.checkoutUrl)}
				type="button"
				class="hyper-button transition-quick button-primary overflow-clip"
			>
				<!-- Heroicon name: outline/x-mark -->
				Checkout
			</button>
		</div>
	</div>
{/if}
