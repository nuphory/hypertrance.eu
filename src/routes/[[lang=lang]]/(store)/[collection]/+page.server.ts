// sveltekit load

import { CollectionQuery } from '$lib/shopify/graphql/requests/collection';
import client from '$lib/shopify/server';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import Collection from '$lib/shopify/zod/catalog/collection/Collection';

export const load: PageServerLoad = async ({ params }) => {
	const { collection: handle } = params;

	const response = await client.request(CollectionQuery, {
		variables: {
			handle,
			expansive: true
		}
	});

	const { data, errors, extensions } = response;

	if (errors) {
		console.error(500, errors);
		throw error(500, 'Error fetching product data from Shopify');
	}

	const { collection } = data;

	// TODO vendor check
	if (!collection || collection === null /*|| collection.vendor !== 'hypertrance'*/) {
		console.error(404, `Product not found: ${handle}`);
		throw error(404, { message: `Product not found: ${handle}` });
	}

	data.collection = Collection.parse(collection);

	return {
		...data,
		errors,
		extensions
	};
};
