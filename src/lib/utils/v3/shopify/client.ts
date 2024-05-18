import configSchema from './zod/config';
import { env } from '$env/dynamic/public';

import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const defineConfig = {
	storeDomain: env.PUBLIC_SHOPIFY_SHOP_URL,
	apiVersion: env.PUBLIC_SHOPIFY_API_VERSION,
	publicAccessToken: env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
	customLogger: console.log
};

const config = configSchema.parse(defineConfig);

const client = createStorefrontApiClient(config);

// /**
//  * custom (client-side) shopify storefront api fetch helper function
//  * @param operation - The GraphQL operation to perform
//  * @param variables - The variables to pass to the operation
//  * @returns The response from the operation
//  */
// async function storefront(
// 	operation: string,
// 	variables: Record<string, unknown> = {
// 		expansive: false,
// 		verbose: false,
// 		resultsPerPage: 25
// 	}
// ): Promise<Response> {
// 	const apiUrl = `https://${config.storeDomain}/api/${config.apiVersion}/graphql.json`;

// 	function getInit() {
// 		const init = {
// 			method: 'POST',
// 			headers: {},
// 			body: JSON.stringify({ query: operation, variables })
// 		};

// 		init.headers = {
// 			'Content-Type': 'application/json',
// 			'X-Shopify-Storefront-Access-Token': config.publicAccessToken
// 		};

// 		return init;
// 	}

// 	const response = await fetch(apiUrl, getInit());

// 	return new Response();
// }

export default client;
export { config, client };
