import BaseProduct from '../catalog/product/BaseProduct';
import { GenericFile, MediaImage, RefNodesArray } from '../simple-types';
import { Author } from './metadata';
import BaseMetaobject from './metafield/BaseMetaobject';
import BaseMetaobjectField from './metafield/BaseMetaobjectField';

const Testimonial = BaseMetaobject.extend({
	author: BaseMetaobjectField.extend({
		reference: Author
	})
		.optional()
		.nullable(),
	description: BaseMetaobjectField.optional().nullable(),
	product: BaseMetaobjectField.extend({
		reference: BaseProduct
	})
		.optional()
		.nullable(),
	purchase_date: BaseMetaobjectField.optional().nullable(),
	rating: BaseMetaobjectField.optional().nullable(),
	snippet: BaseMetaobjectField.optional().nullable()
});

const License = BaseMetaobject.extend({
	description: BaseMetaobjectField.optional().nullable(),
	icon: BaseMetaobjectField.optional().nullable(),
	icon_svg: BaseMetaobjectField.extend({
		reference: MediaImage
	})
		.optional()
		.nullable(),
	files: BaseMetaobjectField.extend(RefNodesArray(GenericFile)).optional().nullable(),
	title: BaseMetaobjectField.optional().nullable()
});

export { License, Testimonial };
