import { z } from "zod";
import BaseMetaobjectField from "./BaseMetaobjectField";

const MetaobjectSEO = z.object({
	description: BaseMetaobjectField.optional().nullable(),
	title: BaseMetaobjectField.optional().nullable()
});

export default MetaobjectSEO;
