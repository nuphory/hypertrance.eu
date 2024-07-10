import { z } from 'zod';
import BaseCollection from '../../catalog/collection/BaseCollection';
import BaseProduct from '../../catalog/product/BaseProduct';
import BaseProductVariant from '../../catalog/product/BaseProductVariant';
import { GenericFile, MediaImage, Model3d, RefEdgesNodeArray, Video } from '../../simple-types';
import BaseMetafield from './BaseMetafield';
import BaseMetaobject from './BaseMetaobject';

const AMetafield = BaseMetafield.extend(
	RefEdgesNodeArray(
		z.union([
			BaseCollection,
			GenericFile,
			MediaImage,
			BaseMetaobject,
			Model3d,
			// BasePage,
			BaseProduct,
			BaseProductVariant,
			Video
		])
	)
);

export default AMetafield;
