import { z } from "zod";
import BaseProduct from "./BaseProduct";
import BaseProductVariant from "./BaseProductVariant";
import { MoneyV2 } from "../../simple-types";

const AProductVariant = BaseProductVariant.extend({
	product: BaseProduct,
	quantityPriceBreaks: z.object({
		edges: z.array(
			z.object({
				node: z.object({
					minimumQuantity: z.number(),
					price: MoneyV2
				})
			})
		)
	})
});

export default AProductVariant;
