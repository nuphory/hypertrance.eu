import { z } from "zod";
import MetaobjectSEO from "./MetaobjectSEO";

const BaseMetaobject = z.object({
	handle: z.string(),
	id: z.string(),
	seo: MetaobjectSEO.optional().nullable(),
	type: z.string().optional(),
	updatedAt: z.string().optional()
});

export default BaseMetaobject;
