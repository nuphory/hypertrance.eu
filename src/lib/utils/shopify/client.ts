import { z } from 'zod';

import config from './config';

export async function makeShopifyRequest(query: string, variables: Record<string, unknown> = {}) {
	const apiUrl = `https://${config.shopifyShop}/api/${config.apiVersion}/graphql.json`;

	function getOptions() {
		const { publicShopifyAccessToken } = config;
		const options = {
			method: 'POST',
			headers: {},
			body: JSON.stringify({ query, variables })
		};

		options.headers = {
			'Content-Type': 'application/json',
			'X-Shopify-Storefront-Access-Token': publicShopifyAccessToken
		};

		return options;
	}

	const response = await fetch(apiUrl, getOptions());

	if (!response.ok) {
		const body = await response.text();
		throw Error(`${response.status} ${body}`);
	}

	const { data, errors } = await response.json();
	if (errors) {
		throw Error(errors.map((e: Error) => e.message).join('\n'));
	}

	console.debug(data);

	return data;
}
