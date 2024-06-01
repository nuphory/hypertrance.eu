import configSchema from './zod/config';

import { env as priv } from '$env/dynamic/private';
import { env as pub } from '$env/dynamic/public';
import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const defineConfig = {
	storeDomain: pub.PUBLIC_SHOPIFY_SHOP_URL,
	apiVersion: pub.PUBLIC_SHOPIFY_API_VERSION,
	privateAccessToken: priv.PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
	customFetchApi: fetch,
	// customLogger: console.log
};

const config = configSchema.parse(defineConfig);

const client = createStorefrontApiClient(config);

export default client;
export { config, client };
