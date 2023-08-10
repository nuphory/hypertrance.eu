import { z } from 'zod';
import { ImageResult, MoneyV2Result } from './common';

export const SelectedOptionResult = z.object({
	name: z.string(),
	value: z.string()
});

export const ProductOptionResult = z.object({
	id: z.string(),
	name: z.string(),
	values: z.array(z.string())
});

export const ProductVariantResult = z.object({
	id: z.string(),
	title: z.string(),
	barcode: z.string().nullable().optional(),
	availableForSale: z.boolean(),
	price: MoneyV2Result,
	compareAtPrice: MoneyV2Result.nullable().optional(),
	image: ImageResult.optional(),
	selectedOptions: z.array(SelectedOptionResult),
	product: z.object({
		handle: z.string(),
		title: z.string()
	})
});

export const ProductResult = z.object({
	id: z.string(),
	title: z.string(),
	handle: z.string(),
	tags: z.array(z.string().optional()),
	productType: z.string().optional(),
	vendor: z.string().optional(),
	description: z.string(),
	descriptionHtml: z.string(),
	options: z.array(ProductOptionResult.optional()),
	featuredImage: ImageResult.optional(),
	collections: z.object({
		nodes: z.array(
			z.object({
				id: z.string(),
				handle: z.string(),
				title: z.string(),
				description: z.string(),
				descriptionHtml: z.string(),
				image: ImageResult.optional()
			}).optional()
		)
	}),
	images: z.object({
		nodes: z.array(ImageResult)
	}),
	variants: z.object({
		nodes: z.array(ProductVariantResult)
	}),

	variantBySelectedOptions: ProductVariantResult.nullable().optional()
});

export const CollectionResult = z.object({
	id: z.string(),
	handle: z.string(),
	title: z.string(),
	description: z.string(),
	descriptionHtml: z.string(),
	image: ImageResult.optional(),
	products: z.object({
		nodes: z.array(ProductResult)
	})
});
