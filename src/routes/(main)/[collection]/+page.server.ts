import type { PageServerLoad } from './$types';

import client from '$src/lib/utils/v3/shopify/server';
import { error } from '@sveltejs/kit';
import CollectionQuery from '$src/lib/utils/v3/shopify/graphql/requests/collection';

/**
 * Load collection data from shopify by handle
 * @returns
 */
export const load: PageServerLoad = async ({ params }) => {

	console.error(404, "test");
	error(404, "test");

	// const { collection: handle } = params;

	// const response = await client.request(CollectionQuery, {
	// 	variables: {
	// 		handle
	// 	}
	// });

	// const { data, errors, extensions } = response;

	// if (errors) {
	// 	console.error(500, errors);
	// 	error(500, 'Error fetching collection data from Shopify');
	// 	return;
	// }

	// const { collection } = data;
	// if (!collection || collection === null) {
	// 	error(404, { message: `Collection not found: ${handle}` });
	// 	console.error(404, `Collection not found: ${handle}`);
	// 	return;
	// }

	// console.info(200, 'OK', `Collection found: ${handle}`, data);
	// return {
	// 	...data,
	// 	extensions
	// };
};
