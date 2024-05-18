export const ssr = true;

// sveltekit load
import type { PageServerLoad } from '../$types';
import { getProductByHandle } from '$lib/utils/shopify/product.server';
import { error } from '@sveltejs/kit';

/**
 * Load product data from shopify by handle
 * @returns product data
 */
export const load: PageServerLoad = async ({ params, url, getClientAddress }) => {
	const { handle } = params;
	const { pathname } = url;

	const product = await getProductByHandle({ handle }, getClientAddress());

	if (!product) {
		throw error(404, { message: 'Product not found' });
	}

	return {
		pathname,
		product
	};
}
