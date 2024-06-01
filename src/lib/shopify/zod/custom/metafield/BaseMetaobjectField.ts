import { z } from "zod";

const BaseMetaobjectField = z.object({
	key: z.string(),
	type: z.string().optional(),
	value: z.string().optional().nullable()
});

export default BaseMetaobjectField;
