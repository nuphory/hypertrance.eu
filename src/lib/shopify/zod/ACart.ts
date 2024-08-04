import { z } from 'zod';
import BaseCart, { BaseCartLine } from './BaseCart';

const ACart = BaseCart.extend({
	attributes: z
		.array(
			z.object({
				key: z.string(),
				value: z.string()
			})
		)
		.optional()
		.nullable(),

	discountCodes: z
		.array(
			z.object({
				applicable: z.boolean(),
				code: z.string()
			})
		)
		.optional()
		.nullable()
		.default([]),

	lines: z.object({
		nodes: z.array(
			z.union([
				BaseCartLine,
				z.object({
					lineComponents: z.array(BaseCartLine)
				})
			])
		)
	}),

	note: z.string().optional().nullable()
});

export default ACart;
