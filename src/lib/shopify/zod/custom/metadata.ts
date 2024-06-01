import { z } from 'zod';
import { MediaImage } from '../simple-types';
import BaseMetaobjectField from './metafield/BaseMetaobjectField';

const Link = z.object({
	description: BaseMetaobjectField.optional().nullish().nullable(),
	external: BaseMetaobjectField,
	icon: BaseMetaobjectField,
	icon_svg: BaseMetaobjectField.extend({
		reference: MediaImage
	}),
	title: BaseMetaobjectField,
	url: BaseMetaobjectField
});

const Author = z.object({
	description: BaseMetaobjectField.optional().nullish().nullable(),
	image: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	links: BaseMetaobjectField.extend({
		references: z.object({
			nodes: z.array(Link)
		})
	})
		.optional()
		.nullable(),
	title: BaseMetaobjectField,
	url: BaseMetaobjectField.optional().nullish().nullable()
});

export { Author, Link };
