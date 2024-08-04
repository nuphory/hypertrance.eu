import client from '$lib/shopify/client';
import CartQuery, { CartCreateMutation } from '$lib/shopify/graphql/requests/cart';
import ACart from '$lib/shopify/zod/ACart';
import { persistentAtom } from '@nanostores/persistent';
import type { z } from 'zod';

const default_cart: Partial<z.infer<typeof ACart>> = {
	cost: {
		totalAmount: {
			amount: '0.00',
			currencyCode: 'EUR'
		}
	},

	id: '',

	lines: { nodes: [] },

	totalQuantity: 0
};

const cart_store = persistentAtom<z.infer<typeof ACart>>('cart', ACart.parse(default_cart), {
	encode: JSON.stringify,
	decode: JSON.parse
});

const get_cart = async (id: string) => {
	const response = await client.request(CartQuery, {
		variables: {
			cartId: id
		}
	});

	const { errors } = response;

	if (errors) {
		console.error(500, errors);
	}

	response.data.cart = ACart.parse(response.data.cart);

	return response.data.cart;
};

const create_cart = async (cart: z.infer<typeof ACart>) => {
	const response = await client.request(CartCreateMutation, {
		variables: {
			input: cart
		}
	});

	const { errors } = response;

	if (errors) {
		console.error(500, errors);
	}

	response.data.cart = ACart.parse(response.data.cart);

	return response.data.cart;
};

const init_cart = async () => {
	const session_started = sessionStorage.getIten('session_started');
	if (!session_started) {
		sessionStorage.setItem('session_started', 'true');

		const local_cart = cart_store.get();

		if (local_cart.id) {
			let cart = await get_cart(local_cart.id);

			if (cart) {
				cart_store.set(cart);
			} else {
				cart = await create_cart(local_cart);
				cart_store.set(cart);
			}
		}
	}
};

export default cart_store;

export { init_cart };
