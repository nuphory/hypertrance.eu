import { configSchema } from './schemas';

// env
import { env as publicEnv } from '$env/dynamic/public';

const defineConfig = {
	shopifyShop: publicEnv.PUBLIC_SHOPIFY_SHOP,
	publicShopifyAccessToken: publicEnv.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
	privateShopifyAccessToken: "",
	apiVersion: '2023-01'
};

export const config = configSchema.parse(defineConfig);
