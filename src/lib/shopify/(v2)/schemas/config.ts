import { z } from 'zod';

export const configSchema = z.object({
	shopifyShop: z.string(),
	publicShopifyAccessToken: z.string(),
	privateShopifyAccessToken: z.string().nullable().optional(),
	apiVersion: z.string()
});

export default configSchema;
