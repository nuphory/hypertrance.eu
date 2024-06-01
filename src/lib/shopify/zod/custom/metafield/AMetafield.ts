import { z } from "zod";
import BaseCollection from "../../catalog/collection/BaseCollection";
import BaseProduct from "../../catalog/product/BaseProduct";
import BaseProductVariant from "../../catalog/product/BaseProductVariant";
import { GenericFile, MediaImage, Model3d, Video } from "../../simple-types";
import BaseMetafield from "./BaseMetafield";
import BaseMetaobject from "./BaseMetaobject";

const AMetafield = BaseMetafield.extend({
	references: z.object({
		edges: z.array(
			z.object({
				node: z.union([
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
			})
		)
	})
});

export default AMetafield;
