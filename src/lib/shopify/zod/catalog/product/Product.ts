import { z } from 'zod';
import { License, Testimonial } from '../../custom/catalog';
import BaseMetafield from '../../custom/metafield/BaseMetafield';
import { Image, RefEdgesNodeArray, RefNodesArray, SEO } from '../../simple-types';
import AProduct from './AProduct';

const Product = AProduct.extend({
	samples: BaseMetafield.extend(RefEdgesNodeArray(z.union([Image, SEO])))
		.optional()
		.nullable(),

	testimonials: BaseMetafield.extend(RefEdgesNodeArray(Testimonial)).optional().nullable(),

	licenses: BaseMetafield.extend(RefNodesArray(License)).optional().nullable()
});

export default Product;
