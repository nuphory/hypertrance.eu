// sveltekit load

import { getProductByHandle } from '$lib/utils/shopify';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const handle = "hypertrance-samplepack";

	const product = await getProductByHandle({ handle, buyerIP: "" });

	if (!product) {
		throw error(404, { message: 'Product not found' });
	}

	return {
		product
	};
}
