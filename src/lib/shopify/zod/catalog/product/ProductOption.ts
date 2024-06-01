import { z } from "zod";

const ProductOption = z.object({
	id: z.string(),
	name: z.string(),
	values: z.array(z.string())
});

export default ProductOption;
