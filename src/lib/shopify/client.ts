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

export default client;
export { config, client };
