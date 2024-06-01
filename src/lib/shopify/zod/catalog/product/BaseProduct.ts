import { z } from 'zod';
import BaseProductVariant from './BaseProductVariant';
import { Image, MoneyV2, SEO } from '../../simple-types';
import ProductOption from './ProductOption';
import BaseMetafield from '../../custom/metafield/BaseMetafield';

const BaseProduct = z.object({
	availableForSale: z.boolean(),

	createdAt: z.string().optional().nullable(),

	compareAtPriceRange: z.object({
		maxVariantPrice: MoneyV2.optional().nullable(),
		minVariantPrice: MoneyV2
	}),

	description: z.string(),

	featuredImage: Image.optional().nullable(),

	handle: z.string(),
	id: z.string(),

	images: z.object({
		nodes: z.array(Image)
	}),

	isGiftCard: z.boolean(),

	tagline: BaseMetafield.optional().nullable(),

	options: z.array(ProductOption),

	priceRange: z.object({
		maxVariantPrice: MoneyV2.optional().nullable(),
		minVariantPrice: MoneyV2
	}),

	productType: z.string(),
	publishedAt: z.string().optional().nullable(),

	seo: SEO,

	tags: z.array(z.string()),
	title: z.string(),

	totalInventory: z.number().optional().nullable(),
	trackingParameters: z.string().optional().nullable(),

	updatedAt: z.string(),

	variantBySelectedOptions: BaseProductVariant.optional().nullable(),

	variants: z.object({
		nodes: z.array(BaseProductVariant)
	}),

	vendor: z.string()
});

export default BaseProduct;
