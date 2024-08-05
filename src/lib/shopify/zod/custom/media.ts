import { z } from 'zod';
import { GenericFile, MediaImage, RefEdgesNodeArray, RefNodesArray } from '../simple-types';
import { AuthorArray, LinkArray } from './metadata';
import BaseMetaobject from './metafield/BaseMetaobject';
import BaseMetaobjectField from './metafield/BaseMetaobjectField';

const Artwork = BaseMetaobject.extend({
	authors: BaseMetaobjectField.extend(AuthorArray).optional().nullable(),
	image: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	index: BaseMetaobjectField.optional().nullable(),
	links: BaseMetaobjectField.extend(LinkArray).optional().nullable(),
	media: BaseMetaobjectField.extend(RefNodesArray(MediaImage)).optional().nullable(),
	title: BaseMetaobjectField.optional().nullable()
});

const DemoTrack = BaseMetaobject.extend({
	audio: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	authors: BaseMetaobjectField.extend(AuthorArray).optional().nullable(),
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
		reference: GenericFile
	})
		.optional()
		.nullable(),
	authors: BaseMetaobjectField.extend(AuthorArray).optional().nullable(),
	image: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	index: BaseMetaobjectField.optional().nullable(),
	links: BaseMetaobjectField.extend(LinkArray).optional().nullable(),
	title: BaseMetaobjectField.optional().nullable()
});

const Album = BaseMetaobject.extend({
	authors: BaseMetaobjectField.extend(AuthorArray).optional().nullable(),

	description: BaseMetaobjectField.optional().nullable(),

	image: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	index: BaseMetaobjectField.optional().nullable(),
	links: BaseMetaobjectField.extend(LinkArray).optional().nullable(),

	media: BaseMetaobjectField.extend(RefEdgesNodeArray(z.union([Artwork, Song])))
		.optional()
		.nullable(),
	title: BaseMetaobjectField.optional().nullable()
});

export { Album, Artwork, DemoTrack, Song };
