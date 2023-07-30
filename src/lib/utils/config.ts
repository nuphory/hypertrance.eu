import { configSchema } from './schemas';

// env
import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';

const defineConfig = {
	shopifyShop: publicEnv.PUBLIC_SHOPIFY_SHOP,
	publicShopifyAccessToken: publicEnv.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
	privateShopifyAccessToken: privateEnv.PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
	apiVersion: '2023-01'
};

export const config = configSchema.parse(defineConfig);
