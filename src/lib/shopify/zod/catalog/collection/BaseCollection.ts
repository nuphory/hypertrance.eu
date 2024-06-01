import { z } from 'zod';
import BaseMetafield from '../../custom/metafield/BaseMetafield';
import { Image, MediaImage, SEO, Video } from '../../simple-types';

const BaseCollection = z.object({
	description: z.string().nullish(),
	handle: z.string(),
	id: z.string(),
	image: Image.optional().nullable(),

	banner: BaseMetafield.extend({
		reference: z.union([MediaImage, Video])
	})
		.optional()
		.nullable(),

	type: BaseMetafield.optional().nullable(),

	seo: SEO,

	title: z.string(),

	trackingParameters: z.string().optional().nullable(),

	updatedAt: z.string(),

	vendor: BaseMetafield.optional().nullable()
});

export default BaseCollection;
