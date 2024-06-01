import { z } from 'zod';
import { License, Testimonial } from '../../custom/catalog';
import BaseMetafield from '../../custom/metafield/BaseMetafield';
import { Image, SEO } from '../../simple-types';
import AProduct from './AProduct';

const Product = AProduct.extend({
	samples: BaseMetafield.extend({
		references: z.object({
			edges: z.array(
				z.object({
					node: z.union([Image, SEO])
				})
			)
		})
	})
		.optional()
		.nullable(),

	testimonials: BaseMetafield.extend({
		references: z.object({
			edges: z.array(
				z.object({
					node: Testimonial
				})
			)
		})
	})
		.optional()
		.nullable(),

	licenses: BaseMetafield.extend({
		references: z.object({
			nodes: z.array(License)
		})
	})
		.optional()
		.nullable()
});

export default Product;
