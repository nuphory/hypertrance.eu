import { z } from 'zod';

export const FilterValueResult = z.object({
	id: z.string(),
	count: z.number().int(),
	input: z.string(),
	label: z.string()
});

export const FilterResult = z.object({
	id: z.string(),
	label: z.string(),
	type: z.string(),
	values: z.array(FilterValueResult)
});

export const ImageResult = z
	.object({
		id: z.string().nullable().optional(),
		altText: z.string().nullable().optional(),
		url: z.string(),
		width: z.number().positive().int().optional(),
		height: z.number().positive().int().optional()
	})
	.nullable();

export const MoneyV2Result = z.object({
	amount: z.string(),
	currencyCode: z.string()
});

export const MetafieldResult = z.object({
	id: z.string(),
	description: z.string(),
	value: z.string()
});

export const HasMetafieldsIdentifier = z.object({
	key: z.string(),
	value: z.string()
});