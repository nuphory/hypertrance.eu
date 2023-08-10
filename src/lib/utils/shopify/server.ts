import { z } from 'zod';

import config from './config';
import { PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN as privateShopifyAccessToken } from '$env/static/private';

export async function makeShopifyRequest(
	query: string,
	variables: Record<string, unknown> = {},
	buyerIP: string
) {
	const apiUrl = `https://${config.shopifyShop}/api/${config.apiVersion}/graphql.json`;

	function getOptions() {
		if (!buyerIP) {
			console.error(
				`🔴 No buyer IP provided => make sure to pass the buyer IP when making a server side Shopify request.`
			);
		}

		const options = {
			method: 'POST',
			headers: {},
			body: JSON.stringify({ query, variables })
		};

		options.headers = {
			'Content-Type': 'application/json',
			'Shopify-Storefront-Private-Token': privateShopifyAccessToken,
			'Shopify-Storefront-Buyer-IP': buyerIP
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

	console.log(data);

	return data;
}
