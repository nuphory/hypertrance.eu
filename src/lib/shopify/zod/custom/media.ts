import { z } from 'zod';
import { MediaImage } from '../simple-types';
import { Author, Link } from './metadata';
import BaseMetaobject from './metafield/BaseMetaobject';
import BaseMetaobjectField from './metafield/BaseMetaobjectField';

const Artwork = BaseMetaobject.extend({
	authors: BaseMetaobjectField.extend({
		references: z.object({
			nodes: z.array(Author)
		})
	})
		.optional()
		.nullable(),
	image: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	index: BaseMetaobjectField.optional().nullable(),
	links: BaseMetaobjectField.extend({
		references: z.object({
			nodes: z.array(Link)
		})
	})
		.optional()
		.nullable(),
	media: BaseMetaobjectField.extend({
		references: z.object({
			nodes: z.array(MediaImage)
		})
	})
		.optional()
		.nullable(),
	title: BaseMetaobjectField.optional().nullable()
});

const DemoTrack = BaseMetaobject.extend({
	audio: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	authors: BaseMetaobjectField.extend({
		references: z.object({
			nodes: z.array(Author)
		})
	})
		.optional()
		.nullable(),
	image: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	index: BaseMetaobjectField.optional().nullable(),
	title: BaseMetaobjectField.optional().nullable()
});

const Song = BaseMetaobject.extend({
	audio: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	authors: BaseMetaobjectField.extend({
		references: z.object({
			nodes: z.array(Author)
		})
	})
		.optional()
		.nullable(),
	image: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	index: BaseMetaobjectField.optional().nullable(),
	links: BaseMetaobjectField.extend({
		references: z.object({
			nodes: z.array(Link)
		})
	})
		.optional()
		.nullable(),
	title: BaseMetaobjectField.optional().nullable()
});

const Album = BaseMetaobject.extend({
	authors: BaseMetaobjectField.extend({
		references: z.object({
			nodes: z.array(Author)
		})
	})
		.optional()
		.nullable(),

	description: BaseMetaobjectField.optional().nullable(),

	image: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	index: BaseMetaobjectField.optional().nullable(),
	links: BaseMetaobjectField.extend({
		references: z.object({
			nodes: z.array(Link)
		})
	})
		.optional()
		.nullable(),
	media: BaseMetaobjectField.extend({
		references: z.object({
			edges: z.array(
				z.object({
					node: MediaImage
				})
			)
		})
	})
		.optional()
		.nullable(),
	title: BaseMetaobjectField.optional().nullable()
});

export { Album, Artwork, DemoTrack, Song };
