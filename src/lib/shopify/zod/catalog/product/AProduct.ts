import { z } from 'zod';
import BaseProduct from './BaseProduct';
import BaseCollection from '../collection/BaseCollection';
import AProductVariant from './AProductVariant';

const AProduct = BaseProduct.extend({
	descriptionHtml: z.string().optional(),

	collections: z.object({
		edges: z.array(
			z.object({
				node: BaseCollection
			})
		)
	}),

	variantBySelectedOptions: AProductVariant.optional().nullable()
});

export default AProduct;
