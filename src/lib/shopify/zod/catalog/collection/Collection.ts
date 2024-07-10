import { z } from 'zod';
import { Album } from '../../custom/media';
import BaseMetafield from '../../custom/metafield/BaseMetafield';
import { MediaImage, RefEdgesNodeArray, Video } from '../../simple-types';
import AProduct from '../product/AProduct';
import ACollection from './ACollection';

export const Collection = ACollection.extend({
	album: BaseMetafield.extend({
		reference: Album
	})
		.optional()
		.nullable(),

	collections: BaseMetafield.extend(RefEdgesNodeArray(ACollection))
		.optional()
		.nullable(),

	feature: BaseMetafield
		.optional()
		.nullable(),

	products: z.object({
		edges: z.array(AProduct)
	})
});

export default Collection;
