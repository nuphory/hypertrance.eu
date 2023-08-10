export const prerender = true;
export const ssr = true;

// sveltekit load
import { getProductByHandle } from '$lib/utils/shopify/product';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const handle = 'hypertrance-samplepack';

	const { href } = url;

	const product = await getProductByHandle({ handle, selectedOptions: [] });

	if (!product) {
		throw error(404, { message: 'Product not found' });
	}

	return {
		href,
		product
	};
}
