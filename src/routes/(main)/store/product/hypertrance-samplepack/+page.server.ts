// sveltekit load
import { getProductByHandle } from '$lib/utils/shopify/product.server';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ url, getClientAddress }) {
	const handle = 'hypertrance-samplepack';

	const product = await getProductByHandle({ handle }, getClientAddress());

	if (!product) {
		throw error(404, { message: 'Product not found' });
	}

	return {
		url,
		product
	};
}
