import { z } from 'zod';
import BaseMetafield from '../../custom/metafield/BaseMetafield';
import BaseProduct from '../product/BaseProduct';
import BaseCollection from './BaseCollection';

const ACollection = BaseCollection.extend({
	descriptionHtml: z.string().optional().nullable(),

	collections: BaseMetafield.extend({
		references: z.object({
			edges: z.array(BaseCollection)
		})
	})
		.optional()
		.nullable(),

	products: z.object({
		edges: z.array(BaseProduct)
	})
});

export default ACollection;
