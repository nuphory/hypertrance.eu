// sveltekit load

import { getProductByHandle, getProducts } from '$lib/utils/shopify';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { handle } = params || '';

	const product = await getProductByHandle({ handle, buyerIP: "" });

	if (!product) {
		throw error(404, { message: 'Product not found' });
	}

	return {
		product
	};
}
