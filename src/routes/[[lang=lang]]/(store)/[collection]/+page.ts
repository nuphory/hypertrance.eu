import CollectionQuery from '$lib/shopify/graphql/requests/collection';
import client from '$lib/shopify/client';
import Collection from '$lib/shopify/zod/catalog/collection/Collection';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { z } from 'zod';

export const load: PageLoad = async ({ params }) => {
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
		error(500, 'Error fetching collection data from Shopify');
	}

	const { collection } = data;

	if (!collection || collection === null || collection.vendor?.value !== 'hypertrance') {
		console.error(404, `Collection not found: ${handle}`);
		error(404, { message: `Collection not found: ${handle}` });
	}

	data.collection = Collection.parse(collection);

	const result: {
		[key: string]: unknown;
		collection: z.infer<typeof Collection>;
	} = {
		...data
	};

	console.info(200, 'OK', `Collection found: ${handle}`, result);

	return result;
};
