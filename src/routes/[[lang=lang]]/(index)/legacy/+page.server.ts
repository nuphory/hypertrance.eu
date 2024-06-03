import type { PageServerLoad } from './$types';

import ProductQuery from '$lib/shopify/graphql/requests/product';
import client from '$lib/shopify/server';
import { error } from '@sveltejs/kit';
import Product from '$lib/shopify/zod/catalog/product/Product';

/**
 * Load collection data from shopify by handle
 * @returns {Promise<import('./$types').PageData>} Product data + extensions
 */
export const load: PageServerLoad = async () => {
	const handle = 'hypertrance-samplepack';

	const response = await client.request(ProductQuery, {
		variables: {
			handle,
			expansive: true
		}
	});

	const { data, errors, extensions } = response;

	if (errors) {
		console.error(500, errors);
		error(500, 'Error fetching product data from Shopify');
	}

	const { product } = data;

	if (!product || product === null || product.vendor !== 'hypertrance') {
		console.error(404, `Product not found: ${handle}`);
		error(404, { message: `Product not found: ${handle}` });
	}

	data.product = Product.parse(product);

	// console.info(200, 'OK', `Product found: ${handle}`, data);
	return {
		...data,
		extensions
	};
};
