import { z } from 'zod';
import { MoneyV2 } from './simple-types';
import BaseProductVariant from './catalog/product/BaseProductVariant';

const CartAutomaticDiscountAllocation = z.object({
	discountedAmount: MoneyV2,
	title: z.string()
});

const CartCodeDiscountAllocation = z.object({
	code: z.string(),
	discountedAmount: MoneyV2
});

const CartCustomDiscountAllocation = z.object({
	discountedAmount: MoneyV2,
	title: z.string()
});

const BaseCartLine = z.object({
	attributes: z
		.array(
			z.object({
				key: z.string(),
				value: z.string()
			})
		)
		.optional()
		.nullable(),
	cost: z.object({
		amountPerQuantity: MoneyV2,
		compareAtAmountPerQuantity: MoneyV2,
		subtotalAmount: MoneyV2,
		totalAmount: MoneyV2
	}),
	discountAllocations: z
		.array(
			z.union([
				CartAutomaticDiscountAllocation,
				CartCodeDiscountAllocation,
				CartCustomDiscountAllocation
			])
		)
		.optional()
		.nullable(),
	id: z.string(),
	merchandise: BaseProductVariant,
	quantity: z.number()
});

const BaseCart = z.object({
	checkoutUrl: z.string(),
	cost: z.object({
		checkoutChargeAmount: MoneyV2.optional().nullable(),
		subtotalAmount: MoneyV2.optional().nullable(),
		subtotalAmountEstimated: MoneyV2.optional().nullable(),
		totalAmount: MoneyV2,
		totalAmountEstimated: MoneyV2.optional().nullable(),
		totalDutyAmount: MoneyV2.optional().nullable(),
		totalDutyAmountEstimated: MoneyV2.optional().nullable(),
		totalTaxAmount: MoneyV2.optional().nullable(),
		totalTaxAmountEstimated: MoneyV2.optional().nullable()
	}),
	createdAt: z.string(),

	discountAllocations: z
		.array(
			z.union([
				CartAutomaticDiscountAllocation,
				CartCodeDiscountAllocation,
				CartCustomDiscountAllocation
			])
		)
		.optional()
		.nullable()
		.default([]),

	id: z.string(),

	totalQuantity: z.number().int(),

	updatedAt: z.string().optional().nullable()
});

export default BaseCart;

export { BaseCartLine };
