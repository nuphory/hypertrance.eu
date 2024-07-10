import { z } from 'zod';
import BaseMetafield from '../../custom/metafield/BaseMetafield';
import BaseProduct from '../product/BaseProduct';
import BaseCollection from './BaseCollection';
import { RefEdgesNodeArray } from '../../simple-types';

const ACollection = BaseCollection.extend({
	descriptionHtml: z.string().optional().nullable(),

	collections: BaseMetafield.extend(RefEdgesNodeArray(BaseCollection))
		.optional()
		.nullable(),

	products: z
		.object({
			edges: z.array(BaseProduct)
		})
		.optional()
		.nullable()
});

export default ACollection;
