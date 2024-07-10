import { z } from 'zod';
import { MediaImage, RefNodesArray } from '../simple-types';
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

const LinkArray = RefNodesArray(Link);

const Author = z.object({
	description: BaseMetaobjectField.optional().nullish().nullable(),
	image: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	links: BaseMetaobjectField.extend(LinkArray).optional().nullable(),
	title: BaseMetaobjectField,
	url: BaseMetaobjectField.optional().nullish().nullable()
});

const AuthorArray = RefNodesArray(Author);

export { Author, AuthorArray, Link, LinkArray };
