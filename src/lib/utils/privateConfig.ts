import { configSchema } from './schemas';

import { config as publicConfig } from '$lib/utils/publicConfig';

// env
import { env as privateEnv } from '$env/dynamic/private';

const defineConfig = {
        ...publicConfig,
        privateShopifyAccessToken: privateEnv.PRIVATE_SHOPIFY_STOREFRONT_ACCESS_TOKEN
}


export const config = configSchema.parse(defineConfig);
