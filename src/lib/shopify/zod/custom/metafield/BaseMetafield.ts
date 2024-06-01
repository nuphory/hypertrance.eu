import { z } from "zod";

const BaseMetafield = z.object({
	createdAt: z.string().optional(),
	description: z.string().optional(),
	id: z.string().optional(),
	key: z.string(),
	namespace: z.string().optional(),
	type: z.string(),
	updatedAt: z.string().optional(),
	value: z.string()
});

export default BaseMetafield;
