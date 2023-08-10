import { z } from 'zod';
import { ImageResult, MoneyV2Result } from './common';
import { ProductVariantResult } from './product';

export const MerchandiseResult = ProductVariantResult;

export const CartDiscountCodeResult = z.object({
	applicable: z.boolean(),
	code: z.string()
});

export const CartLineResult = z.object({
	id: z.string(),
	cost: z.object({
		amountPerQuantity: MoneyV2Result,
		subtotalAmount: MoneyV2Result,
		totalAmount: MoneyV2Result
	}),
	merchandise: MerchandiseResult,
	quantity: z.number().positive().int()
});

export const CartResult = z.object({
	id: z.string(),
	checkoutUrl: z.string(),
	totalQuantity: z.number().int(),
	cost: z.object({
		totalAmount: MoneyV2Result
	}),
	discountCodes: z.array(CartDiscountCodeResult.optional()).optional(),
	discountAllocations: z
		.array(
			z.object({
				discountedAmount: MoneyV2Result,
				title: z.string().nullable().optional(),
				code: z.string().nullable().optional()
			}).optional()
		).optional(),
	lines: z.object({
		nodes: z.array(CartLineResult)
	})
});

export const CartUserErrorResult = z.object({
	code: z.string(),
	field: z.string().nullable().optional(),
	message: z.string()
});