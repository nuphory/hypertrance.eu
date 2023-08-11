import { z } from 'zod';
import { makeShopifyRequest } from './client';
import {
	CreateCartMutation,
	CartLinesAddMutation,
	CartLinesRemoveMutation,
	CartLinesUpdateMutation,
	GetCartQuery,
	CartDiscountCodesUpdateMutation
} from './graphql/cart';
import { CartResult } from './schemas/cart';

export async function createCart(id: string, quantity: number) {
	console.debug('Creating cart', { id, quantity });

	console.debug(CreateCartMutation);

	const data = await makeShopifyRequest(CreateCartMutation, { id, quantity });

	const { cartCreate } = data;
	console.debug('Cart created', { cartCreate });

	const { cart } = cartCreate;
	const parsedCart = CartResult.parse(cart);

	return parsedCart;
}

export async function addCartLines(
	id: string,
	lines: [{ merchandiseId: string; quantity: number }]
) {
	const data = await makeShopifyRequest(CartLinesAddMutation, {
		cartId: id,
		lines
	});
	const { cartLinesAdd } = data;
	const { cart } = cartLinesAdd;

	const parsedCart = CartResult.parse(cart);

	return parsedCart;
}

export async function removeCartLines(id: string, lineIds: string[]) {
	const data = await makeShopifyRequest(CartLinesRemoveMutation, {
		cartId: id,
		lineIds
	});
	const { cartLinesRemove } = data;
	const { cart } = cartLinesRemove;
	const parsedCart = CartResult.parse(cart);

	return parsedCart;
}

export async function updateCartLines(id: string, lines: [{ lineId: string; quantity: number }]) {
	const data = await makeShopifyRequest(CartLinesUpdateMutation, {
		cartId: id,
		lines
	});
	const { cartLinesUpdate } = data;
	const { cart } = cartLinesUpdate;
	const parsedCart = CartResult.parse(cart);

	return parsedCart;
}

export async function getCart(id: string) {
	const data = await makeShopifyRequest(GetCartQuery, { id });

	const { cart } = data;
	const parsedCart = CartResult.parse(cart);

	return parsedCart;
}

export async function updateDiscountCodes(id: string, discountCodes: string[]) {
	const data = await makeShopifyRequest(CartDiscountCodesUpdateMutation, {
		cartId: id,
		discountCodes
	});

	const { cartDiscountCodesUpdate } = data;
	const { cart } = cartDiscountCodesUpdate;
	const parsedCart = CartResult.parse(cart);

	return parsedCart;
}
