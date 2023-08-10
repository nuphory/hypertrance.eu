import {
	addCartLines,
	createCart,
	getCart,
	removeCartLines,
	updateCartLines
} from '$lib/utils/shopify/cart';
import type { CartResult } from '$lib/utils/shopify/schemas/cart';
import { persistentAtom } from '@nanostores/persistent';
import { atom } from 'nanostores';
import type { z } from 'zod';

const emptyCart = {
	id: '',
	checkoutUrl: '',
	totalQuantity: 0,
	lines: { nodes: [] },
	cost: { totalAmount: { amount: '', currencyCode: '' } }
};

// Cart drawer state (open or closed) with initial value (false) and no persistent state (local storage)
export const isCartDrawerOpen = atom(false);

// Cart is updating state (true or false) with initial value (false) and no persistent state (local storage)
export const isCartUpdating = atom(false);

export const cart = persistentAtom<z.infer<typeof CartResult>>('cart', emptyCart, {
	encode: JSON.stringify,
	decode: JSON.parse
});

/**
 * Fetch cart data if a cart exists in local storage, this is called during session start only
 */
export async function initCart() {
	const sessionStarted = sessionStorage.getItem('sessionStarted');
	if (!sessionStarted) {
		sessionStorage.setItem('sessionStarted', 'true');
		const localCart = cart.get();
		const cartId = localCart?.id;
		if (cartId) {
			const data = await getCart(cartId);

			if (data) {
				cart.set({
					id: data.id,
					cost: data.cost,
					checkoutUrl: data.checkoutUrl,
					totalQuantity: data.totalQuantity,
					lines: data.lines
				});
			} else {
				// If the cart doesn't exist in Shopify, reset the cart store
				cart.set(emptyCart);
			}
		}
	}
}

/**
 * Add item to cart or create a new cart if it doesn't exist yet
 * @param merchandise item to add to the cart
 */
export async function addCartItem(merchandise: { merchandiseId: string; quantity?: number }) {
	console.debug(merchandise);
	const { merchandiseId, quantity } = merchandise;

	const localCart = cart.get();
	const cartId = localCart?.id;

	isCartUpdating.set(true);

	if (!cartId) {
		const cartData = await createCart(merchandiseId, quantity ?? 1);

		if (cartData) {
			cart.set({
				...cart.get(),
				id: cartData.id,
				cost: cartData.cost,
				checkoutUrl: cartData.checkoutUrl,
				totalQuantity: cartData.totalQuantity,
				lines: cartData.lines
			});
			isCartUpdating.set(false);
			isCartDrawerOpen.set(true);
		}
	} else {
		const cartData = await addCartLines(cartId, [{ merchandiseId, quantity: quantity ?? 1 }]);

		if (cartData) {
			cart.set({
				...cart.get(),
				id: cartData.id,
				cost: cartData.cost,
				checkoutUrl: cartData.checkoutUrl,
				totalQuantity: cartData.totalQuantity,
				lines: cartData.lines
			});
			isCartUpdating.set(false);
			isCartDrawerOpen.set(true);
		}
	}
}

/**
 * Remove items from cart
 * @param lineIds array of ids for the lines to remove from the cart
 */
export async function removeCartItems(lineIds: string[]) {
	const localCart = cart.get();
	const cartId = localCart?.id;

	isCartUpdating.set(true);

	if (cartId) {
		const cartData = await removeCartLines(cartId, lineIds);

		if (cartData) {
			cart.set({
				...cart.get(),
				id: cartData.id,
				cost: cartData.cost,
				checkoutUrl: cartData.checkoutUrl,
				totalQuantity: cartData.totalQuantity,
				lines: cartData.lines
			});
			isCartUpdating.set(false);
		}
	}
}

export async function updateCartItem(line: { lineId: string; quantity: number }) {
	const { lineId, quantity } = line;

	if (quantity === 0) {
		removeCartItems([lineId]);
		return;
	}

	const localCart = cart.get();
	const cartId = localCart?.id;

	isCartUpdating.set(true);

	if (cartId) {
		const cartData = await updateCartLines(cartId, [line]);

		if (cartData) {
			cart.set({
				...cart.get(),
				id: cartData.id,
				cost: cartData.cost,
				checkoutUrl: cartData.checkoutUrl,
				totalQuantity: cartData.totalQuantity,
				lines: cartData.lines
			});
			isCartUpdating.set(false);
		}
	}
}
