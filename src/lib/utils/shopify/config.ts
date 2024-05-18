import configSchema from './schemas/config';

// env
import * as env from '$env/static/public';

const defineConfig = {
	shopifyShop: env.PUBLIC_SHOPIFY_SHOP_URL,
	publicShopifyAccessToken: env.PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
	apiVersion: env.PUBLIC_SHOPIFY_API_VERSION
};

export const config = configSchema.parse(defineConfig);

export default config;
