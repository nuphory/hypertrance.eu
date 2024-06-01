import { z } from 'zod';
import { Image, MoneyV2 } from '../../simple-types';

const BaseProductVariant = z.object({
	availableForSale: z.boolean(),

	barcode: z.string().optional().nullable(),

	compareAtPrice: MoneyV2,

	currentlyNotInStock: z.boolean(),

	id: z.string(),

	image: Image.optional().nullable(),

	price: MoneyV2,

	quantityAvailable: z.number().optional().nullable(),

	quantityRule: z.object({
		increment: z.number(),
		maximum: z.number().optional().nullable(),
		minimum: z.number()
	}),

	selectedOptions: z.array(
		z.object({
			name: z.string(),
			value: z.string()
		})
	),

	sku: z.string().optional().nullable(),

	taxable: z.boolean(),

	title: z.string(),

	weight: z.number().optional().nullable(),
	weightUnit: z.string()
});

export default BaseProductVariant;
